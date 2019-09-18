// Your web app's Firebase configuration
var firebaseConfig = {
apiKey: "AIzaSyB_F77NAI45OFk_xh2elGJUyTkSHBqK4nM",
authDomain: "project-1-252820.firebaseapp.com",
databaseURL: "https://project-1-252820.firebaseio.com",
projectId: "project-1-252820",
storageBucket: "",
messagingSenderId: "535943779292",
appId: "1:535943779292:web:933e2cf01277000d18f519"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//// FirebaseUI Template
// remove what we don't need, adjust what we need.

// FirebaseUI config.
var uiConfig = {
    callbacks: {
    signInSuccessWithAuthResult: function(authResult, redirectUrl) {
        var user = authResult.user;
        var credential = authResult.credential;
        var isNewUser = authResult.additionalUserInfo.isNewUser;
        var providerId = authResult.additionalUserInfo.providerId;
        var operationType = authResult.operationType;
        // Do something with the returned AuthResult.
        // Return type determines whether we continue the redirect automatically
        // or whether we leave that to developer to handle.
        return true;
    },
    signInFailure: function(error) {
        // Some unrecoverable error occurred during sign-in.
        // Return a promise when error handling is completed and FirebaseUI
        // will reset, clearing any UI. This commonly occurs for error code
        // 'firebaseui/anonymous-upgrade-merge-conflict' when merge conflict
        // occurs. Check below for more details on this.
        return handleUIError(error);
    },
    uiShown: function() {
        // The widget is rendered.
        // maybe do something here?
    }
    },
    // turn credentialHelper off to remove the annoying accountchooser popup after sign in
    credentialHelper: firebaseui.auth.CredentialHelper.NONE,
    // Query parameter name for mode.
    queryParameterForWidgetMode: 'mode',
    // Query parameter name for sign in success url.
    queryParameterForSignInSuccessUrl: 'signInSuccessUrl',
    // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
    signInFlow: 'redirect',
    // if we have a sign in success url, it goes here
    signInSuccessUrl: './',
    signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    {
        provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
        // Whether the display name should be displayed in the Sign Up page.
        requireDisplayName: true
    }
    ],
    // Set to true if you only have a single federated provider like
    // firebase.auth.GoogleAuthProvider.PROVIDER_ID and you would like to
    // immediately redirect to the provider's site instead of showing a
    // 'Sign in with Provider' button first. In order for this to take
    // effect, the signInFlow option must also be set to 'redirect'.
    // immediateFederatedRedirect: false,
    // tosUrl and privacyPolicyUrl accept either url string or a callback
    // function.
    // Terms of service url/callback.
    tosUrl: './',
    // Privacy policy url/callback.
    privacyPolicyUrl: function() {
        // if we have a privacy policy, the link goes here
    window.location.assign('./');
    }
};

var ui = new firebaseui.auth.AuthUI(firebase.auth());
// The start method will wait until the DOM is loaded.
ui.start('#loginui', uiConfig);