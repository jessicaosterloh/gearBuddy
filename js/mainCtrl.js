angular.module('gearApp').controller('mainCtrl', function($scope, gearService, $firebaseAuth, fb) {
  var defaultPost = {       //defines keys for post
    name: "",
    gear: "",
    gearDescription: "",
    location: "",
    email: "",
    image: ""
  }
  $scope.borrowGear = function() {          //connects borrowGear function to the view
    $scope.fireData = gearService.borrowGear();
  }
  $scope.postGear = function(post) {       //connects postGear function to the view and adds message when successfully submitted
    gearService.postGear(post);
    $scope.post = defaultPost;
    $scope.submitted = 'Your gear has been submitted.';
    $scope.thanks = 'Thanks for sharing!';
  }
  $scope.sendMail = function(userObject) {     //grabs info from userObject and links to new email

    var link = "mailto:" + userObject.email
             + "?subject=" + escape("Can I borrow your gear?")
             + "&body=" + escape('Hey ') + userObject.name + ("! I saw your ") + userObject.gear + (" gear on Gear Buddy and I would love to borrow it!")
    ;
      console.log(userObject);
    window.location.href = link;
  }
  $scope.user = gearService.getLoggedInUser();    //brings user information into the view

  $scope.loginWithFacebook = function(){   //connects login function to the view
  gearService.loginWithFacebook();
}

  $scope.logout = function(){  //connects logout function to the view
    gearService.logout();
  }

})
