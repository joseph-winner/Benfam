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
    var imgUrl = postSrc;
    console.log(postTitle,postBody,imgUrl);
})
