var firebaseConfig = {
    apiKey: "AIzaSyCaATCwrkY_W-3AJiKSxsQ-eK4ddEQyvEI",
    authDomain: "copycat1234-e39ca.firebaseapp.com",
    databaseURL: "https://copycat1234-e39ca-default-rtdb.firebaseio.com/",
    projectId: "copycat1234-e39ca",
    storageBucket: "copycat1234-e39ca.appspot.com",
    messagingSenderId: "109410559985",
    appId: "1:109410559985:web:628d0381663c7cb6ff4650"
  }

firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name")
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!"

function addRoom(){
  room_name = document.getElementById("room_name").value
  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });
  localStorage.setItem("room_name", room_name)
  window.location = "kwitter_page.html"
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room names -" + Room_names)
       row = "<div class='room_name' id="+ Room_names + " onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>"
       document.getElementById("output").innerHTML += row
      });});}
getData();

function redirectToRoomName(name){
  console.log(name)
  localStorage.setItem("room_name", name)
  window.location = "kwitter_page.html"
}




