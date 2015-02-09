'use strict';

//declaro el modulo

var bicontrollers = angular.module('bicontrollers', []);
 //DECLARO EL SERVICIO
bicontrollers.service('BiciServices', function () {
    //Inicializo los contadores
    var uid = 0;
    var cont = 0;
    var conter = 0;
    var Bid=0;
     
    //Inicializo los Json
    var manubs = [];
    var llans = [];
     var pins = [];
     var bicis =[];
     
  //MODULOS DE GUARDAR//
    this.savemanubrio = function (manub) {
        if (manub.id == null) {       
            manub.id = uid++;
            manubs.push(manub);
        } else {                  
                    manubs[manub.id] = manub;                      
        }
    }

    // guardar de las llantas

    this.savellantas = function (llan) {
        if (llan.id == null) {    
            llan.id = cont++;
            llans.push(llan);
        } else {          
                    llans[llan.id] = llan;    
        }
    }
    //Guardar los piñones...

     this.savepinon = function (pin) {
        if (pin.id == null) {   
            pin.id = conter++;
            pins.push(pin);
        } else {   
                    pins[pin.id] = pin;  
        }
    }

    //Guardar las Bicicletas...

    this.savebici = function (bici) {
        var precmanu = 0;
        var precllan = 0;
        var precpin = 0;

                for(var i=0; i<=bici.manu; i++){
                if(manubs[i].id==bici.manu){
                   bici.manuname = manubs[i].name;
                    precmanu = manubs[i].price;
                  
                }
             }
             for(var i=0; i<=bici.llant; i++){
                if(llans[i].id==bici.llant){
                   bici.llantname = llans[i].name;
                     precllan = llans[i].price;
                   
                }
             }
             for(var i=0; i<=bici.pinon; i++){
                if(pins[i].id==bici.pinon){
                   bici.pinonname = pins[i].name;
                  precpin = pins[i].price;
                }
             }

                bici.price=precmanu + precllan + precpin+0;
       
        if (bici.id == null) {   
            bici.id = Bid++;

            bicis.push(bici);
        } else {  

            for(var l=0; l<=bici.id; l++){
                
                if(bicis[l].id==bici.id){
                    bicis[l] = bici; 
                }
             }
                     
        }
    }
    //MODULOS DE OBTENER REGISTROS
    //Obtengo Manubrios
    this.getmanubrio = function (identidad) {  

        for(var i=0; i<=identidad; i++){
            if(manubs[i].id==identidad){
                return manubs[i];
            }
        }
                        
    }
    //obtengo llantas
    this.getllanta = function (ide) { 
        for(var u=0; u<=ide; u++){
            if(llans[u].id==ide){
                return llans[u];
            }
        }
                           
    }
    //obtengo pinones
    this.getpinon = function (soy) {
         for(var z=0; z<=soy; z++){
            if(pins[z].id==soy){
                return pins[z];
            }
        }
                
    }
    //obtengo bicis
    this.getbici = function(bi){
        for(var a=0; a<=bi; a++){
            if(bicis[a].id==bi){
                return bicis[a];
            }
        }
    }
     //MODULOS DE BORRADO
     //Borrar Manubrio
    this.borrarmanubrio = function (id) {

        for(var i=0; i<=id; i++){
            if(manubs[i].id==id){
                manubs.splice(i,1)
            }
        }

      
           
    }
    //Borrar llanta
    this.borrarllanta = function (identis) {


         for(var u=0; u<=identis; u++){
            if(llans[u].id==identis){
                llans.splice(u,1)
            }
        }
        
              
         
    }
    //Borrar pinon
    this.borrarpinon = function (era) {
         for(var z=0; z<=era; z++){
            if(pins[z].id==era){
                pins.splice(z,1)
            }
        }
        
        
    }
    //Borrar bicis
    this.borrarbicis = function(bi1){
        for(var f=0; f<=bi1; f++){
            if(bicis[f].id==bi1){
                bicis.splice(f,1)
            }
        }
    }
 
    //Modulo de retorno de Listado
    //Retorna Manubrios
    this.listmanubrio = function () {
        return manubs;
    }
    //Retorna Llantas
    this.listllanta = function () {
        return llans;
    }
    //Retorna pinon
    this.listpinon = function () {
        return pins;
    }
    //Retorna Bici
    this.listbici = function(){
        return bicis;
    }
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////7

//CONTROLADORES

//controlador de Manubrios
 
bicontrollers.controller('manubrioctrl',[ '$scope','BiciServices',function ($scope, BiciServices) {
    $scope.newManub=[];
 
    $scope.manubrios = BiciServices.listmanubrio();
 
    $scope.saveManub = function () {
        BiciServices.savemanubrio($scope.newManub);
        $scope.newManub = {};
    };
 
 
    $scope.delete = function (ido) {
 
        BiciServices.borrarmanubrio(ido);
        if ($scope.newManub.id == ido) $scope.newManub = {};
    };
 
 
    $scope.edit = function (ide) {
        $scope.newManub = BiciServices.getmanubrio(ide);
    };
}]);

//Controlador de llantas
 
bicontrollers.controller('llantactrl',[ '$scope','BiciServices',function ($scope, BiciServices) {
    $scope.newLlan=[];
 
    $scope.llantas = BiciServices.listllanta();
 
    $scope.saveLlan = function () {
        BiciServices.savellantas($scope.newLlan);
        $scope.newLlan = {};
    };
 
 
    $scope.delete = function (id) {
 
       BiciServices.borrarllanta(id);
        if ($scope.newLlan.id == id) $scope.newLlan = {};
    };
 
 
    $scope.edit = function (id) {
        $scope.newLlan = BiciServices.getllanta(id);
    };
}]);
//Controlador de pinones

 
bicontrollers.controller('pinonctrl',[ '$scope','BiciServices',function ($scope, BiciServices) {
    $scope.newPin=[];
 
    $scope.pinones = BiciServices.listpinon();
 
    $scope.savePin = function () {
       BiciServices.savepinon($scope.newPin);
        $scope.newPin = {};
    };
 
 
    $scope.delete = function (bla) {
 
       BiciServices.borrarpinon(bla);
        if ($scope.newPin.id == bla) $scope.newPin = {};
    };
 
 
    $scope.edit = function (ble) {
        $scope.newPin = BiciServices.getpinon(ble);
    };

    

}]);
//Controlador de bicis
bicontrollers.controller('bicictrl',[ '$scope','BiciServices',function ($scope, BiciServices) {
    $scope.newbi=[];
 
    $scope.bicis = BiciServices.listbici();
    $scope.manu = BiciServices.listmanubrio();
    $scope.llanti = BiciServices.listllanta();
    $scope.pinin = BiciServices.listpinon();
 
    $scope.savebici = function () {
       BiciServices.savebici($scope.newbi);
        $scope.newbi = {};
    };
 
 
    $scope.deletebici = function (lol) {
 
       BiciServices.borrarbicis(lol);
        if ($scope.newbi.id == lol) $scope.newbi = {};
    };
 
 
    $scope.editbici = function (lmao) {
        $scope.newbi = BiciServices.getbici(lmao);
    };
}]);