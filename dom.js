//Traversing the DOM
var itemList = document.querySelector('#items');
//parentNode
//console.log(itemList.parentNode);
//itemList.parentNode.style.backgroundColor ='#f4f4f4';
//console.log(itemList.parentNode.parentNode.parentNode);

//parentElement
//console.log(itemList.parentElement);
//itemList.parentElement.style.backgroundColor ='#f4f4f4';
//console.log(itemList.parentElement.parentElement.parentElement);

//Child Nodes
//console.log(itemList.childNodes);
//console.log(itemList.children);
//console.log(itemList.children[1]);
//itemList.children[1].style.backgroundColor = 'yellow';

//firstr child
//console.log(itemList.lastChild);
//first element child

//console.log(itemList.lastElementChild);
//itemList.lastElementChild.textContent='hello 4';


//nextsibling 

//console.log(itemList.nextSibling);

//next element sibling 
//console.log(itemList.nextElementSibling);

//previous sibling 
console.log(itemList.previousSibling);

//previous element sibling

console.log(itemList.previousElementSibling);
itemList.previousElementSibling.getElementsByClassName.color='green';


//create element 
var newDiv = document.createElement('div');

newDiv.className='hello';
newDiv.id ='hello1';
newDiv.setAttribute('title','hello div');
//create text node 
var newDivText = document.createTextNode('heello world');
newDiv.appendChild(newDivText);
var container = document.querySelector('header .container');
var h1= document.querySelector('header h1');

console.log(newDiv);
newDiv.style.fontSize='30px';
container.insertBefore(newDiv,h1);
var itemList = document.querySelector('#items');
var newDiv = document.createElement('div');
newDiv.className = 'hello';
newDiv.id = 'hello1';
newDiv.setAttribute('title', 'hello div');
var newDivText = document.createTextNode('Hello World');
newDiv.appendChild(newDivText);

var firstItem = itemList.firstElementChild;
itemList.insertBefore(newDiv, firstItem);
