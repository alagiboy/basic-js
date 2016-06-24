/*
Created by: Steve Chipman | http://slayeroffice.com/ */

// constants to define the title of the alert and button text.
var ALERT_TITLE = "Grade Checker";
var ALERT_BUTTON_TEXT = "Exit";

// over-ride the alert method only if this a newer browser.
// Older browser will see standard alerts
if(document.getElementById) {
  window.alert = function(txt) {
    createCustomAlert(txt);
  }
}

function createCustomAlert(txt) {
  // shortcut reference to the document object
  d = document;

  // if the modalContainer object already exists in the DOM, bail out.
  if(d.getElementById("modalContainer")) return;

  // create the modalContainer div as a child of the BODY element
  mObj = d.getElementsByTagName("body")[0].appendChild(d.createElement("div"));
  mObj.id = "modalContainer";
   // make sure its as tall as it needs to be to overlay all the content on the page
  mObj.style.height = document.documentElement.scrollHeight + "px";

  // create the DIV that will be the alert
  alertObj = mObj.appendChild(d.createElement("div"));
  alertObj.id = "alertBox";
  // MSIE doesnt treat position:fixed correctly, so this compensates for positioning the alert
  if(d.all && !window.opera) alertObj.style.top = document.documentElement.scrollTop + "px";
  // center the alert box
  alertObj.style.left = (d.documentElement.scrollWidth - alertObj.offsetWidth)/2 + "px";

  // create an H1 element as the title bar
  h1 = alertObj.appendChild(d.createElement("h1"));
  h1.appendChild(d.createTextNode(ALERT_TITLE));

  // create a paragraph element to contain the txt argument
  msg = alertObj.appendChild(d.createElement("p"));
  msg.innerHTML = txt;

  // create an anchor element to use as the confirmation button.
  btn = alertObj.appendChild(d.createElement("a"));
  btn.id = "closeBtn";
  btn.appendChild(d.createTextNode(ALERT_BUTTON_TEXT));
  btn.href = "#";
  // set up the onclick event to remove the alert when the anchor is clicked
  btn.onclick = function() { removeCustomAlert();return false; }
}

// removes the custom alert from the DOM
function removeCustomAlert() {
  document.getElementsByTagName("body")[0].removeChild(document.getElementById("modalContainer"));
}

//function that takes numeric grade and displays the letter grade value
function gradeCheck(){

  if (document.gradeForm.grade.value >=90)  {
    alert('Congratulations you received an A: ' + grade.value);
  }
  else if (document.gradeForm.grade.value >=80 && document.gradeForm.grade.value <90){
    alert('Nice job B: ' + grade.value);
    }
  else if (document.gradeForm.grade.value >=70 && document.gradeForm.grade.value <80){
    alert('You got a C: ' + grade.value);
    }
  else if (document.gradeForm.grade.value >=60 && document.gradeForm.grade.value <70){
    alert('Grade D: ' + grade.value);
  }
  else if (document.gradeForm.grade.value <60){
    alert('F, you failed: ' + grade.value);
  }
}
