# BaeFit

## Summary
A site that combines exercising with other aspects to make it more enjoyable. The workouts are designed for everyone, from beginners to veterans. Trail API finds scenic jogging routes for runners!

### **Highlights:**
- Firebase Authentication
- Trail / Weather API
- Modals


## Technologies Used
- HTML
- Bootstrap/CSS
- Javascript/jQuery
- Firebase
- Weather API
- Trail API
- Git
- GitHub
- VSCode

## Goals
- Utilize Firebase Database more (initially we planned to store a lot of data in here, but time restraints prevented us from doing so)
- Fully Interface Spotify/Other Music Streaming

## Learning Experience
- Learned about Spotify SDK
- Learned about Firebase Authentication

## Site Picture


## Code Snippet
Something here

```
// do something when user auth state changes
firebase.auth().onAuthStateChanged(function(user) {
    // log user info
    if (user) {
        // User is signed in.
        user.getIdToken().then(function(accessToken) {
            // log accesstoken
        });
        // change div to let user know login was successful
        $("#loginui").html("<p>Login was successful!");
        setTimeout(function() {
            $("#exampleModal").modal("hide");
        }, 3000)
        // hide login button and show logout button
        $("#loginBtn").addClass("d-none");
        $("#logoutBtn").removeClass("d-none");
    }
}, function(error) {
    // do something when an error occurs
    console.log(error);
})

// logout button click listener
$("#logoutBtn").on("click", function() {
    // sign out!
    firebase.auth().signOut();
    // show modal
    $("#exampleModal").modal("show");
    $("#loginui").html("You have logged out!")
    // auto hide modal after 3 seconds
    setTimeout(function() {
        // hide modal
        $("#exampleModal").modal("hide");
        $("#logoutBtn").addClass("d-none");
        $("#loginBtn").removeClass("d-none");
        // set timer before changing login modal for fluid transition
        setTimeout(function() {
            // reset the login modal
            $("#loginui").html("");
            setTimeout(function() {
                ui.start('#loginui', uiConfig);
            }, 1000)
            
        }, 2000);
    }, 3000);
})
```

## Links
Live Page: https://bryanjacinto1994.github.io/Project-One<br>
Repo: https://github.com/bryanjacinto1994/Project-One<br>
GitHub:
- Bryan: https://github.com/bryanjacinto1994
- Mahisha: https://github.com/Mahi-Mani
- Kerwin: https://github.com/seiretsym
