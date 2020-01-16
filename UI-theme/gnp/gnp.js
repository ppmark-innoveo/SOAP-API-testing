$(function () {
    var firebaseConfig;
    LAB.script("https://www.gstatic.com/firebasejs/6.2.4/firebase-app.js")
        .script("https://www.gstatic.com/firebasejs/6.2.4/firebase-auth.js")
        .script("https://www.gstatic.com/firebasejs/6.2.4/firebase-firestore.js")
        .wait(function(){
            firebaseConfig = {

                apiKey: "AIzaSyASRJCTgR-SSxKZ22_mSd0JFxyUxuuKUxM",
                authDomain: "middleware-firebase.firebaseapp.com",
                databaseURL: "https://middleware-firebase.firebaseio.com",
                projectId: "middleware-firebase",
                storageBucket: "middleware-firebase.appspot.com",
                messagingSenderId: "946617796219",
                appId: "1:946617796219:web:ab42d1690b3e1d0a"
            };

            firebase.initializeApp(firebaseConfig);
        });
});