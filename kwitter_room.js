const config = {
      apiKey: "AIzaSyDkMKD1Ft-zZ9-gHlsinpJCpLD5MtQlV0w",
      authDomain: "project---kwitter.firebaseapp.com",
      databaseURL: "https://project---kwitter-default-rtdb.firebaseio.com",
      projectId: "project---kwitter",
      storageBucket: "project---kwitter.appspot.com",
      messagingSenderId: "158709753753",
      appId: "1:158709753753:web:eaa592bef65d9ce117d508"
    };
    
    // Initialize Firebase
    firebase.initializeApp(config);

  user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome " + user_name + " !";

    
    function addRoom(){
          room_name=document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose: "adding roomname"
          });
          localStorage=setItem("room_name" , room_name);
          window.location="kwitter_page.html";
    }
    

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      
       console.log("Room Name -"+ Room_names);
       row="<div class='room_name' id="+ Room_names +" onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div> <hr>";
       document.getElementById("output").innerHTML += row;
      
      });
});
}