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

var inputHolder = document.querySelector(".input-holders")

var prompt1 = document.querySelector(".selection-item-1");
prompt1.addEventListener("click", ()=>{
    document.querySelector(".goloba-children").style.display = "block";
    document.querySelector(".prompt-sect-1").style.display = "none";
    document.querySelector(".selections-element").style.display = "block";
    inputHolder.append(prompt1)
})

document.querySelector(".selection-item-2").addEventListener("click", ()=>{
    document.querySelector(".reg-member-form").style.display = "block";
    document.querySelector(".prompt-sect-1").style.display = "none";
    document.querySelector(".selections-element").style.display = "block";
    inputHolder.append(document.querySelector(".selection-item-2"))
})
document.querySelector(".selection-item-3").addEventListener("click", ()=>{
    document.querySelector(".reg-member-form").style.display = "block";
    document.querySelector(".prompt-sect-1").style.display = "none";
    document.querySelector(".selections-element").style.display = "block";
    inputHolder.append(document.querySelector(".selection-item-3"))
})
document.querySelector(".selection-item-4").addEventListener("click", ()=>{
    document.querySelector(".reg-member-form").style.display = "block";
    document.querySelector(".prompt-sect-1").style.display = "none";
    document.querySelector(".selections-element").style.display = "block";
    inputHolder.append(document.querySelector(".selection-item-4"))
})

var golobaChildren = document.querySelector(".chilren-list").children;
var goloba = []
for(let i = 0; i < golobaChildren.length; i++){
    var golobaChild = golobaChildren[i];
    golobaChild.addEventListener("click", (e)=>{
        document.querySelector(".reg-member-form").style.display = "block";
        document.querySelector(".goloba-children").style.display = "none";
        document.querySelector(".selections-element").style.display = "block";
        inputHolder.append(e.target)
        goloba.push(e.target.innerText)
    })
}

document.querySelector("#married").addEventListener("click", ()=>{
    document.querySelector(".married").style.display = "flex";
    document.querySelector(".not-married").style.display = "none";
})

document.querySelector("#notmarriage").addEventListener("click", ()=>{
    document.querySelector(".not-married").style.display = "flex";
    document.querySelector(".married").style.display = "none";
})

var addInput = document.querySelector(".add-child");
var newFieldOutput = [];
addInput.addEventListener("click", ()=>{
    var newField = document.createElement("input");
    newField.setAttribute("type", "text");
    newField.setAttribute("name", "childname");
    newField.setAttribute("id", "childname");
    newField.setAttribute("placeholder", "Your Child's Name");
    document.querySelector(".married").appendChild(newField);
    newField.addEventListener("change", ()=>{
        newFieldOutput.push(newField.value)
    })
})

var profileImg = document.getElementById("regProf");
var profileSrc = [];
profileImg.addEventListener("change", (e) =>{
    var imageChanges = e.target.files[0];
    var reader = new FileReader();
    reader.onload = function (e) {
        imageArr1(reader.result);
        var img = document.querySelector("#testpp");
        img.src = (reader.result);
        document.querySelector("#reg-profile").style.display = "none";        
    }
    reader.readAsDataURL(imageChanges);
})

function imageArr1(imglink){
    profileSrc.push(imglink)
}

// console.log(profileSrc[0])
var kaasaChild = [];
var kaasaChildren = document.querySelector(".selection-grands").children;
for(let i = 0; i < kaasaChildren.length; i++){
    var kaasaChildSelection = kaasaChildren[i];
    // console.log(kaasaChildSelection)
    kaasaChildSelection.addEventListener("click", (e)=>{
        var childName = e.target;
        kaasaChild.push(childName.innerText)
    })
}

var UserKids= []
var kidNam = document.querySelector("#childname");
kidNam.addEventListener("change", ()=>{
    UserKids.push(kidNam.value, newFieldOutput)
})


var regComplete = document.querySelector(".formSubmit");
regComplete.addEventListener("click", ()=>{
    var familyHead = "MUSA KAASA WEREMERA";
    var kaasaChildselect = kaasaChild;
    var golobaChildSelect = goloba;
    var grandFather = document.querySelector("#grandfather").value;
    var grandmonther = document.querySelector("#grandmother").value;
    var father = document.querySelector("#fathername").value;
    var mother = document.querySelector("#mothername").value;
    var userName = document.querySelector("#username").value;
    var userFullnames = document.querySelector("#fullname").value;
    var UserTel = document.querySelector("#userphone").value;
    var userEmail = document.querySelector("#useremail").value;
    var currentLocation = document.querySelector("#currentlocation").value;
    var prevLocation = document.querySelector("#previouslocation").value;
    var wifeName = document.querySelector("#wifename").value;
    var wifeTel = document.querySelector("#wifetel").value;
    var nextKin = document.querySelector("#nextkin").value;
    var nextKinMail = document.querySelector("#kinemail").value;
    var nextKinTel = document.querySelector("#kinnumber").value;
    var occupation = document.querySelector("#userEmployment").value;
    var occupationContact = document.querySelector("#employmentPhone").value;
    var userChildrens = UserKids;
    var profilePic = profileSrc;


    // save data to local storage
    localStorage.setItem('name', userName);
    localStorage.setItem('imageLink', profilePic);

    // save data to firebase
    setDoc(doc(db, "FamilyMembers", userName), {
        familyHead: familyHead,
        kaasaChildselect: kaasaChildselect,
        golobaChildSelect: golobaChildSelect,
        grandFather: grandFather,
        grandmonther: grandmonther,
        father: father,
        mother: mother,
        userName: userName,
        userFullnames: userFullnames,
        UserTel: UserTel,
        userEmail: userEmail,
        currentLocation: currentLocation,
        prevLocation: prevLocation,
        wifeName: wifeName,
        wifeTel: wifeTel,
        nextKin: nextKin,
        nextKinTel: nextKinTel,
        occupation: occupation,
        occupationContact: occupationContact,
        userChildrens: userChildrens,
        profilePic: profilePic
      });
      window.location.href = "../Alerts/success.html";
})