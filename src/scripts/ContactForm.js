import {saveContacts} from "./ContactDataProvider.js"
import {ContactList} from "./ContactList.js"


//select the container in the HTML where the contacts will print
const formContainer = document.querySelector(".contact-form-container")

//create a form where the contacts can be entered, this form will be printed as the page loads so i want to call it in main.js 
export const ContactForm = () => {
    formContainer.innerHTML = `
    <h1>Please Enter Your Contact Information Below<h1>
    <input type="text" placeholder="Name" id="contact-name" />
    <input type="email" placeholder="Email" id="contact-email" />
    <input type="tel" placeholder="Phone Number" id="contact-number" />
    <button id="saveContact">Save</button>
    `
}

//the eventListener is on the contact-form-container,but the click is listenting for when the saveContact button is being clicked
//when it is clicked it will save the new contact that is filled out in the form and it will print all the previous contacts also
formContainer.addEventListener("click", clickEvent => {
    if(clickEvent.target.id === "saveContact") {
        //console.log("i clicked save")

    //create the object of the new contact that i want to be saved to the local json server; these ids must match the ones from the form
    const newContact = {
        name: document.querySelector("#contact-name").value,
        email: document.querySelector("#contact-email").value,
        number: document.querySelector("#contact-number").value
    }
    console.log("this is a newContact", newContact)
    
    //call the function that saves the contact 
    saveContacts(newContact)
    //use a .then so it will print the entire list of contacts after the new one is saved
    .then(ContactList)
    .then(formContainer = "")

    }
    

})

