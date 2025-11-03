// ========================================================
// JavaScript DOM Manipulation Lab - 40 Mini Exercises
// ========================================================

// 🟩 PART 1: Selecting and Styling Elements (1–10)

// 1️⃣ Change text color of heading with id="title" to red.
document.getElementById('title').style.color = 'red';

// 2️⃣ Change background color of all <p> elements to lightgray.
document.querySelectorAll('p').forEach(p => {
    p.style.backgroundColor = 'lightgray';
});

// 3️⃣ Change heading text (#title) to "Welcome to the DOM Lab!".
document.getElementById('title').textContent = 'Welcome to ....';

// 4️⃣ Add a solid black border to all <div> elements.
document.querySelectorAll('div').forEach(div => {
    div.style.border = '1px solid black';
});

// 5️⃣ Increase font size of the first <h1> to 36px.
document.querySelector('h1').style.fontSize = '36px';

// 6️⃣ Change text color of elements with class="highlight" to blue.
document.querySelectorAll('.highlight').forEach(el => {
    el.style.color = 'blue';
});

// 7️⃣ Add CSS class "active" to the first <div>.
var firstDiv = document.querySelector('div');
firstDiv.classList.add('active');
// 8️⃣ Change the <body> background color to lightblue.
document.body.style.backgroundColor = 'lightblue';

// 9️⃣ Set the font family of all <p> elements to Arial.
document.querySelectorAll('p').forEach(p => {
    p.style.fontFamily = 'Arial';
});

// 🔟 Change the image source of #sampleImage.
var image = document.getElementById('sampleImage');
image.src = 'https://picsum.photos/200';
image.alt = 'Random Image from Picsum';

// 🟦 PART 2: Creating and Appending Elements (11–20)

// 1️⃣1️⃣ Create a new <p> and append it to the <body>.
var newParagraph = document.createElement('p');
newParagraph.textContent = 'anything to write.... by majdoleen saadeh <3';
document.body.appendChild(newParagraph);
// 1️⃣2️⃣ Create a new <li> and add it to the existing <ul>.
var ulElement = document.getElementById('list');
var newListItem = document.createElement('li');
newListItem.textContent = 'new item';
ulElement.appendChild(newListItem);

// 1️⃣3️⃣ Create a <button> labeled "Click Me!" and append it to a <div>.
var clickButton = document.createElement('button');
clickButton.textContent = 'click it if you want';
var firstDiv = document.querySelector('div');
firstDiv.appendChild(clickButton);

// 1️⃣4️⃣ Create <h2> dynamically and insert it before the first <p>.
//i tried but it didn't work with me 

// 1️⃣5️⃣ Create an image and set width and height.
const dynImage = document.createElement('img');
dynImage.src = 'https://picsum.photos/100';
dynImage.style.width = '100px';
dynImage.style.height = '100px';
document.body.appendChild(dynImage);

// 1️⃣6️⃣ Add 3 new <li> items using a loop.
var ulList = document.getElementById('list');
for (var i = 2; i <= 4; i++) {
    var item = document.createElement('li');
    item.textContent = 'New List Item ' + i;
    ulList.appendChild(item);}

// 1️⃣7️⃣ Create a <div> with class "card" and text inside.
//also i tried but i think i know where is the problem
// 1️⃣8️⃣ Append a paragraph containing your name.
const nameParagraph = document.createElement('p');
nameParagraph.textContent = 'My name is majdoleen saadeh';
document.body.appendChild(nameParagraph);

// 1️⃣9️⃣ Add a <span>[Edited]</span> inside every <p>.
//i search about it and i found the solution
document.querySelectorAll('p').forEach(p => {
    const editSpan = document.createElement('span');
    editSpan.textContent = ' [Edited]';
    p.appendChild(editSpan);
});

// 2️⃣0️⃣ Remove the last child of <ul>.
var ulList = document.getElementById('list');
if (ulList.lastElementChild) {
    ulList.removeChild(ulList.lastElementChild);
}

// 🟨 PART 3: Event Handling (21–30) 
// //the next parts needs much time for me to search it and study it then to code it 
// note : i solve some of them 
// 2️⃣1️⃣ Add click event that shows an alert.
var alertButton = document.getElementById('mainButton');
alertButton.addEventListener('click', function() {
    alert('Button Clicked!');
});

// 2️⃣2️⃣ Change background color of a <div> when clicked.
var targetDiv = document.getElementById('container');
targetDiv.addEventListener('click', function(event) {
    event.target.style.backgroundColor = 'yellow';
});

// 2️⃣3️⃣ When hovering over <p>, make it bold.

// 2️⃣4️⃣ When mouse leaves paragraph, remove bold style.

// 2️⃣5️⃣ Add button to hide the image.

// 2️⃣6️⃣ Add button to show the image again.

// 2️⃣7️⃣ Create a counter button that increases with each click.

// 2️⃣8️⃣ Display entered text from an input when button clicked.

// 2️⃣9️⃣ Change background color randomly when a button is clicked.

// 3️⃣0️⃣ Display which key is pressed.

// 🟧 PART 4: Modifying and Traversing DOM (31–40)

// 3️⃣1️⃣ Change text of the first <li>.

// 3️⃣2️⃣ Get input value when button clicked.

// 3️⃣3️⃣ Count number of <p> and alert the count.

// 3️⃣4️⃣ Remove all <p> elements.
var paragraphs = document.getElementsByTagName('p');
for (var i = paragraphs.length - 1; i >= 0; i--) {
    paragraphs[i].remove();
}

// 3️⃣5️⃣ Replace existing <h2> with new one.

// 3️⃣6️⃣ Add CSS class 'highlighted' to all <li>.
var listItems = document.getElementsByTagName('li');
for (var i = 0; i < listItems.length; i++) {
    listItems[i].classList.add('highlighted');
}

// 3️⃣7️⃣ Toggle a CSS class on <div> when clicked.

// 3️⃣8️⃣ Clone an existing element and append copy.

// 3️⃣9️⃣ Scroll smoothly to bottom when button clicked.

// 4️⃣0️⃣ Build list dynamically using innerHTML from an array.
var data = ['x', 'y', 'z', 'q'];
var listContainer = document.getElementById('output'); 
var html = '<ul>';
for (var i = 0; i < data.length; i++) {
    html = html + '<li>' + data[i] + '</li>';
}
html = html + '</ul>';
listContainer.innerHTML = html;
