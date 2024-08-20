var newbookpen=document.getElementById("newbookopen")
var booknew=document.querySelector(".new-book")
var overlay=document.querySelector(".border-overlay")
var deletion=document.getElementById("deletion")
var adding=document.getElementById("adding")
var input1=document.getElementById("input1")
var input2=document.getElementById("input2")
var demobook=document.querySelector(".demo-book")
var text=document.getElementById("text")
var container=document.querySelector(".container")

newbookpen.addEventListener("click", function(){
    overlay.style.display="block"
    booknew.style.display="block"
})

deletion.addEventListener("click", function(event){
    event.preventDefault()
    overlay.style.display="none"
    booknew.style.display="none"
})

adding.addEventListener("click", function(event){
        event.preventDefault()
        var div=document.createElement("div")
        div.setAttribute("class", "demo-book")
        div.innerHTML=`<h2>${input1.value}<h2>
             <h5>${input2.value}</h5>
             <p>${text.value}</p> <button onclick="dele(event)">Delete</button>`
        container.append(div) 
        overlay.style.display="none"
        booknew.style.display="none"   
})

function dele(event){
    var selectparent=adding.parentElement
    event.target.parentElement.remove(selectparent.closest(".container"))
}


