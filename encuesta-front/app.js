angular.module('myApp', [])
  .controller('EncuestaCtrl', function ($scope, $http, $timeout) {

    // Cargar los géneros musicales desde el archivo JSON
    $http.get('genres.json')
      .then(function (response) {
        console.log("Genres loaded:", response.data); // Depuración
        $scope.styles = response.data;
        $scope.selectedOption = null;
      })
      .catch(function (error) {
        console.error("Error loading genres:", error);
      });

    $scope.survey = {
      email: "",
      estiloMusical: ""
    };

    $scope.enviarEncuesta = function () {
      $http.post('http://localhost:3000/api/encuestas', $scope.encuesta)
        .then(function (response) {
          console.log("Survey sent successfully", response);
          $scope.survey = { email: "", estiloMusical: "" };
          $scope.successMessage = "Success";
          $timeout(function () {
            $scope.successMessage = "";
          }, 5000);
        })
        .catch(function (error) {
          console.error("Error sending survey:", error);
          if (error.data && error.data.message === "Email already exists") {
            $scope.errorMessage = "Email already exists";
            $timeout(function () {
              $scope.errorMessage = "";
            }, 5000);
            console.error("Email already exists");
          } else {
            $scope.errorMessage = "Error sending survey";
          }
        });
    };

  });
