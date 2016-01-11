app.service('gearService', function($firebaseArray) {
  var firebaseUrl = 'https://gearbuddy.firebaseio.com/'
var ref = new Firebase(firebaseUrl);
var gearRef = ref.child('posts');

  this.postGear = function(post) {
    var newPost = gearRef.push({
      name: post.userName,
      gear: post.gear,
      gearDescription: post.gearDescription,
      location: post.gearLocation,
      email: post.email,
      image: post.image
    })
    var postID = newPost.key()
  }

  this.borrowGear = function() {
    var searchRef = new Firebase(firebaseUrl + '/posts');
    return $firebaseArray(searchRef);
  }

})
