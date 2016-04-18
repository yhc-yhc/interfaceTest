app.controller('bodyCtrl', function($scope, $http, DATAS){
  $scope.data = DATAS;

  var userInterface = DATAS.sectionParams.user.interface;
  userInterface.forEach(function(e, i, a){
    e.prex = DATAS.sectionParams.user.prex;
  })
  var materialInterface = DATAS.sectionParams.material.interface;
  materialInterface.forEach(function(e, i, a){
    e.prex = DATAS.sectionParams.material.prex;
  })
  var radioInterface = DATAS.sectionParams.radio.interface;
  radioInterface.forEach(function(e, i, a){
    e.prex = DATAS.sectionParams.radio.prex;
  })
  var chatInterface = DATAS.sectionParams.chat.interface;
  chatInterface.forEach(function(e, i, a){
    e.prex = DATAS.sectionParams.chat.prex;
  })
  var adminInterface = DATAS.sectionParams.admin.interface;
    adminInterface.forEach(function(e, i, a){
    e.prex = DATAS.sectionParams.admin.prex;
  })
  var interfaces = userInterface.concat(materialInterface, radioInterface, chatInterface, adminInterface);
  function bathReq (array) {
    array.forEach(function(e, i, a){
      var reqObj = e;
      var url = reqObj.prex + '.' + DATAS.autoServer + reqObj.url;
      var req = {};
      req.url = url;
      req.method = reqObj.method;
      reqObj.data = reqObj.data || {};
      reqObj.data.token = DATAS.token;
      if(req.method === 'GET' || req.method === 'DELETE')
        req.params = reqObj.data;
      else
        req.data = reqObj.data;
      $http(req).then(function (result) {
        reqObj.result = result.data;
        reqObj.error = false;
      }, function (result) {
        reqObj.result = result.data;
        reqObj.error = true;
      })
    })
  }


  $scope.sendReq = function (reqObj) {
    var url = reqObj.prex + '.' + DATAS.autoServer + reqObj.url;
    var req = {};
    req.url = url;
    req.method = reqObj.method;
    reqObj.data = reqObj.data || {};
    reqObj.data.token = DATAS.token;
    if(req.method === 'GET' || req.method === 'DELETE')
      req.params = reqObj.data;
    else
      req.data = reqObj.data;
    $http(req).then(function (result) {
      reqObj.result = result.data;
      reqObj.error = false;
    }, function (result) {
      reqObj.result = result.data;
      reqObj.error = true;
    })
  }
  $scope.sendBathReq = function (prex) {
    var array = DATAS.sectionParams[prex].interface;
    bathReq(array);
  }

  $scope.sendAllReq = function () {
    bathReq(interfaces)
  }

  $scope.togglePannel = function(prex) {
    DATAS.sectionParams[prex].hiddenPanel = !!! DATAS.sectionParams[prex].hiddenPanel;
  }
})

.controller('serverCtrl', function($scope, DATAS){
  $scope.data = DATAS;
  $scope.changeServer = function(url) {
    DATAS.changeAutoServer(url);
  }
})
.controller('checkUserCtrl', function($scope, $http, DATAS){
  $scope.data = DATAS;
  $scope.login = function (str) {
    var type = DATAS[str].type;
    DATAS.changeAutoUser(type)
    var url = DATAS.autoUser.prex + '.' + DATAS.autoServer + DATAS.autoUser.url;
    var req = {};
    req.url = url;
    req.method = DATAS.autoUser.method;
    if(req.method === 'GET')
      req.params = DATAS.autoUser.data;
    else
      req.data = DATAS.autoUser.data;
    $http(req).then(function (result) {
      DATAS.setToken(result.data.token)
      DATAS[str].result = result.data
    }, function (result) {
      DATAS[str].result = result.data
      DATAS.setToken(result.data)
    })
  }
})

.controller('tokenCtrl', function($scope, DATAS){
  $scope.data = DATAS;
})

.controller('userCtrl', function($scope, DATAS){
  $scope.data = DATAS;
})

.controller('materialCtrl', function($scope, DATAS){
  $scope.data = DATAS;
})

.controller('radioCtrl', function($scope, DATAS){
  $scope.data = DATAS;
})

.controller('chatCtrl', function($scope, DATAS){
  $scope.data = DATAS;
})
.controller('adminCtrl', function($scope, DATAS){
  $scope.data = DATAS;
})
.controller('UploaderImageController', function($scope, $http, fileReader, DATAS){
  $scope.getFile = function () {
    fileReader.readAsDataUrl($scope.file, $scope)
      .then(function(result) {
        $scope.imageSrc = result;
      });
  };

  $scope.prex = 'http://file.';
  $scope.data = DATAS;
  $scope.url ='/session/image/laohaowan';
  $scope.upload = function() {
    var postData = {
      //vacationType: $scope.leave.type,
      //reason: $scope.leave.reason,
      //familyRelation: $scope.leave.type == 7 ? $scope.leave.relation : "",
      //startTime: startTime,
      //endTime: endTime,
      fileName: $scope.myFile,
      //workDelivers: workDelivers,
      //ccmailNickNames: sendPersons,
      //realDays: +$scope.leave.type == 8 ? $scope.leave.timeLong : ""
    };

    var promise = postMultipart($scope.prex+DATAS.autoServer+$scope.url+'?token='+ DATAS.token, postData);

    promise.success(function(result){
      console.log(result)
      $scope.result = result;
    })
    promise.error(function(result){
      console.log(result)
      $scope.result = result;
    })
    function postMultipart(url, data) {
      var fd = new FormData();
      angular.forEach(data, function(val, key) {
        fd.append(key, val);
      });
      var args = {
        method: 'POST',
        url: url,
        data: fd,
        headers: {'Content-Type': undefined},
        transformRequest: angular.identity
      };
      return $http(args);
    }
  }
})
.controller('UploaderVoiceController', function($scope, $http, fileReader, DATAS){
  $scope.getFile = function () {
    fileReader.readAsDataUrl($scope.file, $scope)
      .then(function(result) {
        $scope.imageSrc = result;
      });
  };

  $scope.prex = 'http://file.';
  $scope.data = DATAS;
  $scope.url = '/session/voice/laohaowan';
  $scope.upload = function() {
    var postData = {

      fileName: $scope.myFile,

    };
    var promise = postMultipart($scope.prex+DATAS.autoServer+$scope.url+'?token='+ DATAS.token, postData);

    promise.success(function(result){
      console.log(result)
      $scope.result = result;
    })
    promise.error(function(result){
      console.log(result)
      $scope.result = result;
    })
    function postMultipart(url, data) {
      var fd = new FormData();
      angular.forEach(data, function(val, key) {
        fd.append(key, val);
      });
      var args = {
        method: 'POST',
        url: url,
        data: fd,
        headers: {'Content-Type': undefined},
        transformRequest: angular.identity
      };
      return $http(args);
    }
  }
})
.controller('UploaderImageControllerToChat', function($scope, $http, fileReader, DATAS){
  $scope.getFile = function () {
    fileReader.readAsDataUrl($scope.file, $scope)
      .then(function(result) {
        $scope.imageSrc = result;
      });
  };

  $scope.params = {
    pk: ""
  }
  $scope.prex = 'http://file.';
  $scope.data = DATAS;
  $scope.url = '/session/image/laohaowan/im';

  $scope.upload = function() {
    var postData = {

      fileName: $scope.myFile,

    };
    var promise = postMultipart($scope.prex+DATAS.autoServer+$scope.url+'?token='+ DATAS.token +'&pk='+$scope.pk, postData);

    promise.success(function(result){
      console.log(result)
      $scope.result = result;
    })
    promise.error(function(result){
      console.log(result)
      $scope.result = result;
    })
    function postMultipart(url, data) {
      var fd = new FormData();
      angular.forEach(data, function(val, key) {
        fd.append(key, val);
      });
      var args = {
        method: 'POST',
        url: url,
        data: fd,
        headers: {'Content-Type': undefined},
        transformRequest: angular.identity
      };
      return $http(args);
    }
  }
})
  .controller('UploaderVoiceControllerToChat', function($scope, $http, fileReader, DATAS){
    $scope.getFile = function () {
      fileReader.readAsDataUrl($scope.file, $scope)
        .then(function(result) {
          $scope.imageSrc = result;
        });
    };

    $scope.params = {
      pk: ""
    }
    $scope.prex = 'http://file.';
    $scope.data = DATAS;
    $scope.url = '/session/voice/laohaowan/im';

    $scope.upload = function() {
      var postData = {

        fileName: $scope.myFile,

      };
      var promise = postMultipart($scope.prex+DATAS.autoServer+$scope.url+'?token='+ DATAS.token +'&pk='+$scope.pk +'&duration='+$scope.duration, postData);

      promise.success(function(result){
        console.log(result)
        $scope.result = result;
      })
      promise.error(function(result){
        console.log(result)
        $scope.result = result;
      })
      function postMultipart(url, data) {
        var fd = new FormData();
        angular.forEach(data, function(val, key) {
          fd.append(key, val);
        });
        var args = {
          method: 'POST',
          url: url,
          data: fd,
          headers: {'Content-Type': undefined},
          transformRequest: angular.identity
        };
        return $http(args);
      }
    }
  })
