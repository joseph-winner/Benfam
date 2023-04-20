import { initializeApp } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-app.js";
import { getFirestore, collection, doc, getDocs  } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-firestore.js";
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


async function readData() {
    var posts = [];
    const querySnapshot = await getDocs(collection(db, "posts"));
    querySnapshot.forEach((doc) => {
      posts = doc.data();
      console.log(posts)
    })
  }

readData()