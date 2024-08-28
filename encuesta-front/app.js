angular
  .module('survey-front', [])
  .controller('EncuestaCtrl', EncuestaCtrl)
  .service('SurveyService', SurveyService)
  .factory('ChartFactory', ChartFactory);

function EncuestaCtrl($scope, SurveyService, ChartFactory, $timeout) {
  $scope.showForm = true;

  // Load genres on initialization
  SurveyService.getGenres()
    .then(function (styles) {
      $scope.styles = styles;
      $scope.selectedOption = null;
    })
    .catch(function (error) {
      console.error('Error loading genres:', error);
    });

  // Function to send survey
  $scope.enviarEncuesta = function () {
    SurveyService.sendSurvey($scope.survey)
      .then(function () {
        console.log('Survey sent successfully');
        $scope.survey = { email: '', estiloMusical: '' };
        $scope.successMessage = 'Success';
        $timeout(function () {
          $scope.successMessage = '';
        }, 5000);
        $timeout(function () {
          $scope.fetchResults();
        }, 2000);
      })
      .catch(function (error) {
        console.error('Error sending survey:', error);
        if (error.data && error.data.message === 'Email already exists') {
          $scope.errorMessage = 'Email already exists';
          $timeout(function () {
            $scope.errorMessage = '';
          }, 5000);
          console.error('Email already exists');
        } else {
          $scope.errorMessage = 'Error sending survey';
        }
      });
  };

  // Function to fetch results
  $scope.fetchResults = function () {
    SurveyService.getResults()
      .then(function (results) {
        console.log('Results fetched successfully', results);
        $scope.results = results;
        $scope.showForm = false;
        $scope.displayChart();
      })
      .catch(function (error) {
        console.error('Error fetching results:', error);
      });
  };

  // Function to close chart
  $scope.closeChart = function () {
    $scope.showForm = true;
  };

  // Function to display chart
  $scope.displayChart = function () {
    const ctx = document.getElementById('resultsChart').getContext('2d');
    const chartConfig = ChartFactory.createChartConfig($scope.results);
    new Chart(ctx, chartConfig);
  };
}

function SurveyService($http) {
  this.getGenres = function () {
    return $http.get('genres.json').then((response) => response.data);
  };

  this.sendSurvey = function (survey) {
    return $http.post('http://localhost:3000/api/survey', survey);
  };

  this.getResults = function () {
    return $http
      .get('http://localhost:3000/api/survey/results')
      .then((response) => response.data);
  };
}

function ChartFactory() {
  function generateColors(count) {
    const colors = [];
    const baseColors = [
      'rgba(255, 99, 132, 0.5)',
      'rgba(54, 162, 235, 0.5)',
      'rgba(255, 206, 86, 0.5)',
      'rgba(75, 192, 192, 0.5)',
      'rgba(153, 102, 255, 0.5)',
      'rgba(255, 159, 64, 0.5)',
      'rgba(199, 199, 199, 0.5)',
      'rgba(83, 102, 255, 0.5)',
      'rgba(255, 99, 71, 0.5)',
      'rgba(144, 238, 144, 0.5)',
    ];
    for (let i = 0; i < count; i++) {
      colors.push(baseColors[i % baseColors.length]);
    }
    return colors;
  }

  function createChartConfig(results) {
    const labels = results.map(
      (result) => result.encuesta_entity_estiloMusical,
    );
    const data = results.map((result) => result.count);
    const backgroundColors = generateColors(data.length);
    const borderColors = backgroundColors.map((color) =>
      color.replace('0.2', '1'),
    );

    return {
      type: 'pie',
      data: {
        labels: labels,
        datasets: [
          {
            data: data,
            backgroundColor: backgroundColors,
            borderColor: borderColors,
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              font: {
                size: 16,
                weight: 'bold',
              },
              padding: 20,
            },
          },
          title: {
            display: true,
            text: 'Resultados de la encuesta',
            font: {
              size: 20,
              weight: 'bold',
            },
            padding: 20,
          },
        },
      },
    };
  }

  return {
    createChartConfig: createChartConfig,
  };
}
