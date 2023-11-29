var firebaseConfig = {
    apiKey: "AIzaSyCaATCwrkY_W-3AJiKSxsQ-eK4ddEQyvEI",
    authDomain: "copycat1234-e39ca.firebaseapp.com",
    databaseURL: "https://copycat1234-e39ca.firebaseio.com",
    projectId: "copycat1234-e39ca",
    storageBucket: "copycat1234-e39ca.appspot.com",
    messagingSenderId: "109410559985",
    appId: "1:109410559985:web:628d0381663c7cb6ff4650"
  }

firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
