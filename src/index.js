import'./index.scss'



// var mousePosition;
// var offset = [0,0];
// var div;
// var isDown = false;

// div = document.createElement("div");
// div.style.position = "absolute";
// div.style.left = "0px";
// div.style.top = "0px";
// div.style.width = "100px";
// div.style.height = "100px";
// div.style.background = "red";
// div.style.color = "blue";

// document.body.appendChild(div);

// div.addEventListener('mousedown', function(e) {
//     isDown = true;
//     offset = [
//         div.offsetLeft - e.clientX + "px",
//         div.offsetTop - e.clientY + "px",
       
//     ];
// }, true);

// document.addEventListener('mouseup', function() {
//     isDown = false;
// }, true);

// document.addEventListener('mousemove', function(event) {
//     event.preventDefault();
//     if (isDown) {
//         mousePosition = {

//             x : event.clientX,
//             y : event.clientY

//         };
//         div.style.left = (mousePosition.x + offset[0]) + 'px';
//         div.style.top  = (mousePosition.y + offset[1]) + 'px';
//     }
// }, true);

//TODO: Copy text program START

// let word = [];
// let index = 0;

 
// let buttonT = document.createElement("button")
// buttonT.classList.add("copyText")
// buttonT.id = "copy"
// buttonT.setAttribute("onclick", "getText();")
// buttonT.innerHTML = 'copyButton'
// buttonT.style.backgroundColor = 'red'
// buttonT.style.color = 'white'
// buttonT.style. position= "fixed";
// buttonT.style.top = "50px";
// buttonT.style.right = "50px"
// buttonT.style.width = "50px"
// buttonT.style.height = "50px"

// document.body.appendChild(buttonT)

// let func = document.getElementById("copy")

// func.onclick = function(){
//     if(document.getSelection){
//         let text = document.getSelection().toString()
//         storeText(text)
        
//         console.log(text);
//     }
// }

// function storeText(value){
//     word.push(value)
// }
// let store = document.createElement("button")
// store.classList.add("storeText")
// store.id = "store"
// store.setAttribute("onclick", "store();")
// store.innerHTML = 'Store'
// store.style.backgroundColor = 'red'
// store.style.color = 'white'
// store.style. position= "fixed";
// store.style.top = "50px";
// store.style.left = "50px"
// store.style.width = "50px"
// store.style.height = "50px"


// document.body.appendChild(store)

// let s = document.getElementById("store")


// s.onclick = function store(){
   
//     console.log(word);

//     window.localStorage.setItem('english_word', word)
// }
//TODO: Copy text program END





