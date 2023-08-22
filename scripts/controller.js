angular.module('dailyPlanet', [])

angular.module('dailyPlanet').controller('Rest', function ($scope, $http, $window) {
    $http.get('https://api-rest-post-diegocandido.herokuapp.com/postagens').success(function (data) {
        $scope.publicacoes = data;
    })

    $scope.ver_detalhes = function (index) {
        let getUrl = '/postagem.html?index=' + index;
        $window.location.href = getUrl;
    }
})