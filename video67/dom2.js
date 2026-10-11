console.log("hello..")

document.body
{/* <body>​<div class=​"container">​<div class=​"box">​Box1​</div>​<div class=​"box">​Box2​</div>​<div class=​"box">​Box3​</div>​<div class=​"box">​Box4​</div>​<div class=​"box">​Box5​</div>​<link rel=​"stylesheet" href=​"dom2.js">​</div>​</body>​ */}

document.body.TEXT_NODE;
3

document.body.childNodes;
// NodeList(3) [text, div.container, text]

document.body.childNodes;
// NodeList(3) [text, div.container, text]

document.body.childNodes[1].childNodes;
// NodeList(13) [text, div.box, text, div.box, text, div.box, text, div.box, text, div.box, text, link, text]

document.body;
// <body>​…​</body>​

let cont = document.body.childNodes[1];
// undefined

document.body.childNodes;
// NodeList(3) [text, div.container, text]

let conts = document.body.childNodes[1];
// undefined

conts
{/* <div class=​"container">​…​</div>​ */}

cont.firstChild;
// #text

cont.firstElementChild;
// <div class=​"box">​Box1​</div>​

cont.lastElementChild;
// <div class=​"box">​Box1​</div>​
 

/* ADDING STYLE TO THE ELEMENT OR CHILD NODES USING DOM */

par.lastElementChild.style.backgroundColor="red";


document.body.firstElementChild.children[1];
{/* <div class=​"box">​Box2​</div>​ */}