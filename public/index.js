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
      postData(posts)
    })
  }

readData();

async function postData(posts){
    var postsholder = document.querySelector(".user-posts");
    var singlePost = document.createElement("div");
    var postedBy = posts.postBy;
    var postTime = posts.createdAt;
    var postTitle = posts.postTitle;
    var postBody = posts.postBody;
    var postImage = posts.postImg;
    var postDate = posts.postedOn;
    // console.log(postedBy,postTime,postTitle,postBody,postImage) 
    var singlePostContent = `
                            <div class="user-post">
                            <div class="img-section">
                            <img src="${postImage}" class="post-img" alt="">
                            <span class="post-header">
                            ${postTitle}
                            </span> 
                        </div>
                        <div class="post-desc">
                        <span class="time"> <i class="fa fa-calendar"></i></span>
                            <span class="post-date">
                                ${postDate}
                           </span>
                            <span class="time">
                                <i class="fa fa-clock-o"></i>
                            </span>
                            <span class="post-time">
                            ${postTime}
                            </span>
                            <span class="user">
                                <i class="fa fa-user"></i>
                            </span>
                            <span class="post-owner">
                            ${postedBy}
                            </span> <br> <br>


                            <div class="post-interactions">
                            <span class="like-btn">
                                <i class="fa fa-heart"></i> 
                            </span>
                            <span class="heart-counter">3</span>
                            <span class="comments">
                                <i class="fa fa-comments-o"></i>
                            </span>
                            <span class="comments-counter">
                                6
                            </span>
                            <span class="share-btn" style='margin-left: 20px; font-size:10px;'>
                                <i class="fa fa-share"></i>
                            </span>
                        </div>
                        </div>
                        
                        
                    </div>
    `
    singlePost.innerHTML = singlePostContent;
    postsholder.append(singlePost)

}