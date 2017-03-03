export const LOGIN = 'LOGIN';
export const USER_STATUS = {
  ANONYMOUS: 'ANONYMOUS',
  AUTHENTICATED: 'AUTHENTICATED'
};

export function loginAction(username, password){
  return {
    type: LOGIN,
    username,
    password
  }
}

export function initFB(){
  // facebook signin  button render
  window.fbAsyncInit = function() {
    window.FB.init({
      appId      : '159534731224745',
      cookie     : true,  // enable cookies to allow the server to access
      // the session
      xfbml      : true,  // parse social plugins on this page
      version    : 'v2.8' // use version 2.1
    });

    // login callback implementation goes inside the function() { ... } block
    window.FB.Event.subscribe('auth.statusChange', function(response) {
      // example implementation
      console.log(response);
      if (response.authResponse) {
        console.log('Welcome!  Fetching your information.... ');
        window.FB.api('/me', function(response) {
          console.log('Good to see you, ' + response.name + '.');
          console.log(response);
        });
      } else {
        console.log('User cancelled login or did not fully authorize.');
      }
    });
    window.FB.getLoginStatus(function(response) {
      console.log(response);
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