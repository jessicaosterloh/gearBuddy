var globalAuthData; //declaring variable for facebook auth data
var user = {          //user object to hold facebook name and picture
    name: '',
    image: ''
};

var refreshUserData = function(){     //refresh user data with facebook and change view with jquery based on login status
  user.name = globalAuthData.facebook.displayName;
  user.image = globalAuthData.facebook.profileImageURL;
  $("#fbUserImg").attr("src",user.image);
  $("#fbUserName").text("Hi "+user.name+"!");
  $('.loggedIn').removeClass("loggedIn");
  $('.loggedInHide').hide();
  $("#fbUserImg").show();
  $("#fbUserName").show();
  $('.loggedOut').show();
}
var refreshUserDataLogout = function(){     //refresh user data with facebook and change view with jquery based on login status
  $("#fbUserImg").hide();
  $("#fbUserName").hide();
  $('.loggedOut').hide();
  $('.loggedInHide').show();
}
$(document).ready(function() {       //keeps view for users on refresh
  if(user.name){
    $("#fbUserImg").attr("src",user.image);
    $("#fbUserName").text("Hi "+user.name+"!");
    $('.loggedIn').removeClass("loggedIn");
    $('.loggedInHide').hide();
  }
});
