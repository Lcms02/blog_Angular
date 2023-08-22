angular.module('postagemSelecionada', []).controller('postagemController', function ($scope, $http) {
    let params = new URLSearchParams(window.location.search);
    let index = params.get('index');
    if (index !== undefined) {
        $http.get('https://api-rest-post-diegocandido.herokuapp.com/postagem/' + index)
            .success(function (data) {
                $scope.postSelecionado = data;
            })
            .error(function (error) {
                console.log(error);
            });
    }
});
