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
for(let i = 0; i < golobaChildren.length; i++){
    var golobaChild = golobaChildren[i];
    golobaChild.addEventListener("click", (e)=>{
        document.querySelector(".reg-member-form").style.display = "block";
        document.querySelector(".goloba-children").style.display = "none";
        document.querySelector(".selections-element").style.display = "block";
        inputHolder.append(e.target)
        console.log(e.target.innerHTML)
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
addInput.addEventListener("click", ()=>{
    var newField = document.createElement("input");
    newField.setAttribute("type", "text");
    newField.setAttribute("name", "childname");
    newField.setAttribute("id", "childname");
    newField.setAttribute("placeholder", "Child's Name");
    document.querySelector(".married").appendChild(newField);
})