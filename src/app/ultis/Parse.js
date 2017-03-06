import {Parse} from 'parse';

// Initialize Parse
export function initParse(){
  Parse.initialize(process.env.REACT_APP_PARSE_APPLICATION_ID, process.env.REACT_APP_PARSE_JAVASCRIPT_KEY);
  Parse.serverURL = process.env.REACT_APP_PARSE_SERVER_URL;
}

export function initFB(){
  window.fbAsyncInit = function() {
    Parse.FacebookUtils.init({ // this line replaces FB.init({
      appId      : process.env.REACT_APP_FB_APP_ID, // Facebook App ID
      status     : true,  // check Facebook Login status
      cookie     : true,  // enable cookies to allow Parse to access the session
      xfbml      : true,  // initialize Facebook social plugins on the page
      version    : 'v2.8' // use version 2.8
    });

    Parse.FacebookUtils.logIn('public_profile,user_friends', {
      success: function(user) {
        console.log(user);
        if (!user.existed()) {
          alert("User signed up and logged in through Facebook!");
        } else {
          alert("User logged in through Facebook!");
        }
      },
      error: function(user, error) {
        alert("User cancelled the Facebook login or did not fully authorize.");
      }
    });
  }.bind(this);

// Load the SDK asynchronously
  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
}