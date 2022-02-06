// Your web app's Firebase configuration
const config = {
      apiKey: "AIzaSyAApr8qE7IUrsX30eAQj1BImskXJsb-Wsk",
      authDomain: "capstone-project-8ff1c.firebaseapp.com",
      projectId: "capstone-project-8ff1c",
      storageBucket: "capstone-project-8ff1c.appspot.com",
      messagingSenderId: "606305451847",
      appId: "1:606305451847:web:45f2834d129a3ba0f39662"
    };
    // Initialize Firebase
    firebase.initializeApp(config);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");
function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name : user_name, 
            message : msg,
            like : 0
      });
      document.getElementById("msg").value="";
      }
      
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;

      } });  }); }
getData();

function updateLike(message_id){
      console.log("clicked on like button-"+message_id);
      button_id=message_id;
      likes=document.getElementById(button_id).value;
      updated_likes=Number(likes)+1;
      console.log(updated_likes);
      firebase.database().ref(room_name).child(message_id).update({
            like:updated_likes
      });
      }
      function logout(){
            localStorage.removeItem("user_name")
            localStorage.removeItem("room_name")
            window.location="index.html"
      }