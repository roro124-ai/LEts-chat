
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyCt0lM4rvYCcIW-zWHlMlurLQbrW-a_qmE",
      authDomain: "kwitter-c1ba4.firebaseapp.com",
      databaseURL: "https://kwitter-c1ba4-default-rtdb.firebaseio.com",
      projectId: "kwitter-c1ba4",
      storageBucket: "kwitter-c1ba4.appspot.com",
      messagingSenderId: "1033229262598",
      appId: "1:1033229262598:web:20d30fbdf1a68fb9e34887",
      measurementId: "G-TM695JFHW1"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
