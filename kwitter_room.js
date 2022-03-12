var firebaseConfig = {
  apiKey: "AIzaSyDSU2iOH_Q0ki8bZWXfIkJR7YfF4Rj0voA",
  authDomain: "test1-ca383.firebaseapp.com",
  databaseURL: "https://test1-ca383-default-rtdb.firebaseio.com",
  projectId: "test1-ca383",
  storageBucket: "test1-ca383.appspot.com",
  messagingSenderId: "593712376937",
  appId: "1:593712376937:web:ced899e8bc5533f601c6f8",
  measurementId: "G-NMM7BZST0S"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS

  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() { 
   firebase.database().ref("/").on('value', function(snapshot) 
   { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}
