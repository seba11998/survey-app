angular.module('myApp', [])
  .controller('EncuestaCtrl', function ($scope, $http) {

    // Cargar los géneros musicales desde el archivo JSON
    $http.get('estilos.json')
      .then(function (response) {
        console.log("Géneros cargados:", response.data); // Depuración
        $scope.estilos = response.data;
      })
      .catch(function (error) {
        console.error("Error al cargar los géneros:", error);
      });

    $scope.encuesta = {
      email: "",
      estiloMusical: ""
    };

    $scope.enviarEncuesta = function () {
      $http.post('http://localhost:3000/api/encuestas', $scope.encuesta)
        .then(function (response) {
          console.log("Encuesta enviada con éxito", response);
        })
        .catch(function (error) {
          console.error("Error al enviar encuesta:", error);
        });
    };

  });
