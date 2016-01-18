angular.module('gearApp').service('gearService', function($firebaseArray, $firebaseAuth, fb) {
      var ref = new Firebase(fb.url); //Firebase database object
      var authObj = $firebaseAuth(ref); //Firebase Authentication object
      var userInfo = authObj.$getAuth() //grabs user authentication info
      if (userInfo) {                       //if userInfo gets authentication info it will push info into user object
      user.name = userInfo.facebook.displayName;
      user.image = userInfo.facebook.profileImageURL;
      }
      var gearRef = ref.child('posts'); //creates 'posts' object in Firebase database

      this.postGear = function(post) {  //function to add new gear to database
        var newPost = gearRef.push({
          name: post.userName,
          gear: post.gear,
          gearDescription: post.gearDescription,
          location: post.gearLocation,
          email: post.email,
          image: post.image
        })
        var postID = newPost.key();  //gives each new post an id to retrieve info from
      }

      this.borrowGear = function() {  //function to access Firebase database and retrieve info from 'posts' object
        var searchRef = new Firebase(fb.url + '/posts');
        return $firebaseArray(searchRef);
      }
      this.getLoggedInUser = function(){ //function to return logged in user info
          return user;
      }

      this.loginWithFacebook = function() {  //lets users login using facebook credentials.
      authObj.$authWithOAuthPopup("facebook").then(function(authData) {
        globalAuthData = authData;
        refreshUserData();
        console.log("Logged in as:", authData.uid);
      }).catch(function(error) {
        console.error("Authentication failed:", error);
      });
    }
      this.logout = function() {  //function to log users out
          authObj.$unauth()
          refreshUserDataLogout();
    }


  });
