importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');

firebase.initializeApp({
apiKey:"AIzaSyBHIZp9BwmQ8s4O1s7x1Iuesz4zpEyRJ2U",
authDomain:"my-profacto-messages-library.firebaseapp.com",
projectId:"my-profacto-messages-library",
messagingSenderId:"520812951520",
appId:"1:520812951520:web:4f3edc0996d32c3cda9d85"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload){

self.registration.showNotification(payload.notification.title,{
body: payload.notification.body
});

});