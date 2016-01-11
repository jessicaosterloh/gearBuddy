app.controller('mainCtrl', function($scope, gearService) {
  var defaultPost = {
    name: "",
    gear: "",
    gearDescription: "",
    location: "",
    email: "",
    image: ""
  }
  $scope.borrowGear = function() {
    $scope.fireData = gearService.borrowGear();
  }
  $scope.postGear = function(post) {
    gearService.postGear(post);
    $scope.post = defaultPost;
    $scope.submitted = 'Your gear has been submitted! Thanks for sharing the love!';
  }
  $scope.sendMail = function(userObject) {

    var link = "mailto:" + userObject.email
             + "?subject=" + escape("Can I borrow your gear?")
             + "&body=" + escape('Hey ') + userObject.name + ("! I saw your ") + userObject.gear + (" gear on Gear Buddy and I would love to borrow it!")
    ;
      console.log(userObject);
    window.location.href = link;
  }
})
