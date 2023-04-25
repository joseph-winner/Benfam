// FIRE BASE CONFIG
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-app.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-firestore.js";
const firebaseConfig = {
  apiKey: "AIzaSyA60Ez2EecS9gCb7AcNe4YGveLMzAT18NY",
  authDomain: "kaasafam.firebaseapp.com",
  projectId: "kaasafam",
  storageBucket: "kaasafam.appspot.com",
  messagingSenderId: "486425916392",
  appId: "1:486425916392:web:2433800fa16437fa35ea5d"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

var openBtn = document.querySelector(".humberger");
var closeBtn = document.querySelector(".closeBtn");

openBtn.addEventListener("click", ()=>{
    document.querySelector(".side-bar").style.width = "200px";
})

closeBtn.addEventListener("click", ()=>{
    document.querySelector(".side-bar").style.width = "0px";
})

// TAKING POST INPUTS
var postImg = document.getElementById("fileInput");
var postSrc = [];
postImg.addEventListener("change", (e) =>{
    var imageChanges = e.target.files[0];
    var reader = new FileReader();
    reader.onload = function (e) {
        imageArr1(reader.result);
        document.querySelector(".post-display-img").src = (reader.result);
        document.querySelector(".post-display-img").style.display = "block";
        document.querySelector("#post-img-input").style.display = "none";
        
    }
    reader.readAsDataURL(imageChanges);
})


    // HERE IS THE IMAGE LINK TO SAVE TO DATABASE
function imageArr1(file){
    postSrc.push(file);
}


var postBtn = document.querySelector(".postBtn");
postBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    var postTitle = document.querySelector("#post-heading").value;
    var postBody = document.querySelector("#post-content").value;
    var postedby = document.querySelector("#post-username").value
    var postedAt = document.querySelector("#post-time").value
    var postedOn = document.querySelector("#post-date").value
    var imgUrl = postSrc;
    // console.log(postTitle,postBody,imgUrl);
    setDoc(doc(db, "posts", postTitle), {
        postTitle: postTitle,
        postBody: postBody,
        postImg: imgUrl,
        createdAt: postedAt,
        postedOn: postedOn,
        postBy: postedby
      });
})
