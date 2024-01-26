console.log("Script attached");
/*----------- Exercise #1: SELECTING/MANIPULATING ELEMENTS -----------*/

// Select Node #1 and change the text to: "I used the getElementById("node1") method to access this"
const myNode1 = document.getElementById("node1");
//const myNode1 = document.querySelector("#node1");  ---- querySelector uses CSS reference notation
myNode1.textContent = "I used the getElementById(\"node1\") method to access this";

// Select Node #2 and change the text to: "I used the getElementsByClassName("node2") method to access this" */
const myNodes2 = document.getElementsByClassName("node2");
myNodes2[0].textContent = "I used the getElementByClassName(\"node2\") method to access this";

// Select ALL the h3 tags and change the text to: "I used the getElementByTagName("h3") method to access all of these" */
const myHeaders = document.getElementsByTagName("h3");
console.log(myHeaders);
for (vint = 0; vint < myHeaders.length; vint++)
    {myHeaders[vint].textContent = "I used the getElementByTagName('h3') method to access all of these"};

    //forof - iterable objects for (const element of array) - do once for each

/*----------- Exercise #2: CREATING/APPENDING/INSERTING ELEMENTS/OBJECTS -----------*/

// TODO: Create a paragraph element using this document.createElement() and put this text inside "This node was created using the createElement() method"
const myNewTxt = document.createElement("p");
myNewTxt.textContent = "This node was created using the createElement() method";

// TODO: Append the created node to the parent node using the element.appendChild() method
//this works
//const myClass = document.getElementsByClassName("exercise-container exercise2");
//myClass[0].appendChild(myNewTxt);
const myParent = document.getElementById("parent");
myParent.appendChild(myNewTxt);

// TODO: Create a <a> element using this document.createElement() and put this text inside "I am a <a> tag"
const myNewA = document.createElement("a");
myNewA.textContent = "I am an <a> tag";

// BONUS: Add a link href to the <a>
//myNewA.link = "http://mudsox.com";
myNewA.href = "http://mudsox.com";

// TODO: Insert the created <a> in the parent but before the <p> you just created using the element.insertBefore() method
myParent.insertBefore(myNewA, myNewTxt);

/*----------- Exercise #3: REMOVING/REPLACING ELEMENTS/OBJECTS -----------*/

// TODO: Replace the "Child Node" with a new <p> element that reads "New Child Node"
const myNode3Parent = document.getElementById("exercise-container3");
const myNode3 = document.getElementById("N1");
const myNewPara = document.createElement("p");
myNewPara.textContent = "New Child Node!";
myNode3Parent.replaceChild(myNewPara, myNode3);
// TODO: Remove the "New Child Node"
//pause before removing
setTimeout(() => {myNode3Parent.removeChild(myNewPara)},2000);

/*----------- Exercise #4: LIST ITEMS ----------- */
// Use the following array of values to generate a list on the DOM

let list = [ "apples", "bananas", "carrots", "dragon fruit", "eggplant", "fish", "grapes", "honey", "ice bag", "juice (any kind)" ];

// TODO: Create an unordered list element
const myUnLi = document.createElement("ul");

// TODO: Iterate over the array values, and create a list item element for each
// TODO: Append the new list items to the unordered list element
var myLi = undefined;
list.forEach(element => {myLi = document.createElement("li");
                         myLi.textContent = element;
                         myUnLi.appendChild(myLi);
                         });

// TODO: Append the unordered list to the `div#container` under exercise 4 
const myCont = document.getElementById("container");
myCont.appendChild(myUnLi);

/*----------- Exercise #5: DOM EVENTS --------------*/

//NOTES - show is the function we create - not a reserved word
//LOOK in the style sheet for the modal and modal card in the CSS!

// TODO: write a function called "show" which creates a new div with an alerting message to the user with this message
// -> "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user"
// This div should be a 'modal' that covers the main content on the screen
// BONUS: The modal popup should be able to be closed. Refactor for this functionality

const myButton = document.getElementById("btn");
myButton.addEventListener("click", show);
//place scope out of functions
var myRoot = undefined;
var newDialog5 = undefined; 
var newDiv5 = undefined;

function show() {
  myRoot = document.getElementsByClassName("root")[0];
  newDialog5 = document.createElement("dialog");
  newDialog5.textContent = 
      "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user";
  newDialog5.className = "modal-card";

  const newButton5 = document.createElement("button");
  newButton5.id = "btn2";
  newButton5.textContent = "CLOSE";
  newButton5.addEventListener("click", closeIt);
  newDialog5.appendChild(newButton5);

  newDiv5 = document.createElement("div");
  newDiv5.id = "modal";
  newDiv5.append(newDialog5);
  myRoot.append(newDiv5);

  newDialog5.showModal();
  //setTimeout(() => {newDialog5.close();
  //                  myRoot.removeChild(newDiv5)},3000)}
}

function closeIt() {
    newDialog5.close();
    myRoot.removeChild(newDiv5)}
