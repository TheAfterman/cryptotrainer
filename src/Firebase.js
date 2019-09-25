import firebase from 'firebase';

// Configure Firebase.
export const config = {
    apiKey: 'AIzaSyAppHeTC46WotgsvTcmsSW5d9qPt1137ws',
    authDomain: "trade-trainer-7f402.firebaseapp.com",
    databaseURL: "https://trade-trainer-7f402.firebaseio.com",
    projectId: "trade-trainer-7f402",
    storageBucket: "",
    messagingSenderId: "918274481273",
    appId: "1:918274481273:web:17e4b4f2a5c5350ca6c8a8"
};

// Configure FirebaseUI.
export const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    signInSuccessUrl: '/main',
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ]
};

export function verifyAuth(history) {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user && history.location.pathname !== '/main') {
            history.push('/main');
            // ...
        } else if (!user && history.location.pathname !== '/') {
            history.push('/');
        }
    });
}

export function signOut(history) {
    firebase.auth().signOut().then(() => {
        window.location.pathname = '/';
    });
}