module = angular.module("Disciplina", []);

module.controller("DisciplinaController",["$scope","$http",DisciplinaController]);

function DisciplinaController($scope,$http){
    
    $scope.iniciar = funcaoIniciar;
    $scope.salvar = funcaoSalvar;
    $scope.exluir = funcaoExcluir;
    $scope.editar = funcaoEditar;
    
    $scope.disciplina = {};
    $scope.disciplinas = [];
    $scope.isNovo = true;
    
    function funcaoEditar(disc) {
        $scope.disciplina = angular.copy(disc);
        $scope.isNovo = false;
    }
    
    function funcaoExcluir(disc) {
        $http.delete("/disciplinas/" + disciplina.id).success(onSuccess).error(onError);
        
        function onSuccess(data, status) {
            $scope.disciplinas = data;       
            console.log(data);
        }
        function onError(data, status) {
            alert("Deu erro: " + data);
        }
    }
    
    function funcaoSalvar(){
        if($scope.isNovo){
            $http.post("/disciplinas", $scope.disciplina).success(onSuccess).error(onError);
        }else{
            $http.put("disciplinas", $socpe.disciplina).success(onSuccess).error(onError);
        }
        
        function onSuccess(data, status) {
            $scope.disciplinas = data;       
            console.log(data);
        }
        function onError(data, status) {
            alert("Deu erro: " + data);
        }
    }
    
    function funcaoCarregar() {
        $http.get("/disciplinas").success(onSuccess).error(onError);
        
        function onSuccess(data, status) {
            $scope.disciplinas = data;       
            console.log(data);
        }
        function onError(data, status) {
            alert("Deu erro: " + data);
        }
    }
    
    function funcaoIniciar() {
        funcaoCarregar();
        console.log(">>> disciplinas carregados....");
    }
     
}