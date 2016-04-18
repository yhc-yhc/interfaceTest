var app  = angular.module('app', [])
  .constant('productServer', 'youServerUrl')
  .constant('testServer', 'youTestServerUrl')
  .value('user',
    {
      name: 'username',
      type: 1,
      method: 'POST',
      prex: 'http://user',
      url: '/nosession/user',
      data: {
        "account": null,
        "accountType": 1,
        "deviceId": "fsfsfsfefew",
        "smsCode": 3215,
        "phoneType": 1,
        "os": "ios9.1",
        "model": "iphone6",
        "loc": [43,110],
        "jpushToken": "wnogyefs"
      }
    })
  .value('admin',
    {
      type: 10,
      method: 'GET',
      prex: 'http://im',
      url: '/nosession/csr/login',
      data: {
        account: 'admin1',
        password: '11'
      }

    })
  .directive('jsonText', function() {
     return {
       restrict: 'A',
       require: 'ngModel',
       link: function(scope, element, attr, ngModel) {
         function into(input) {
           return JSON.parse(input);
          }
          function out(data) {
           return JSON.stringify(data);
         }
         ngModel.$parsers.push(into);
          ngModel.$formatters.push(out);
        }
      };
  })
  .directive('fileModel', ['$parse', function ($parse) {
    return {
      restrict: 'A',
      link: function(scope, element, attrs, ngModel) {
        var model = $parse(attrs.fileModel);
        var modelSetter = model.assign;
        element.bind('change', function(event){
          scope.$apply(function(){
            modelSetter(scope, element[0].files[0]);
          });
          scope.file = (event.srcElement || event.target).files[0];
          scope.getFile();
        });
      }
    };
  }])
  .factory('fileReader', ["$q", "$log", function($q, $log){
    var onLoad = function(reader, deferred, scope) {
      return function () {
        scope.$apply(function () {
          deferred.resolve(reader.result);
        });
      };
    };

    var onError = function (reader, deferred, scope) {
      return function () {
        scope.$apply(function () {
          deferred.reject(reader.result);
        });
      };
    };

    var getReader = function(deferred, scope) {
      var reader = new FileReader();
      reader.onload = onLoad(reader, deferred, scope);
      reader.onerror = onError(reader, deferred, scope);
      return reader;
    };

    var readAsDataURL = function (file, scope) {
      var deferred = $q.defer();
      var reader = getReader(deferred, scope);
      reader.readAsDataURL(file);
      return deferred.promise;
    };

    return {
      readAsDataUrl: readAsDataURL
    };
  }])
.run(function($rootScope, DATA){
  $rootScope.DATA = DATA;
  $rootScope.$watch('DATA', function(){
    if(window.localStorage){
      localStorage.clear();
      var data = JSON.stringify(DATA);
      localStorage.data = data;
    }
  }, true);
});
