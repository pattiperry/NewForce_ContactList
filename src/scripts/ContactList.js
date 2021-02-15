import {getContacts, useContacts} from "./ContactDataProvider.js"
import {Contact} from "./Contact.js"

//function that will print all the contacts 
export const ContactList = () => {
    getContacts().then(() => {
        const allContacts = useContacts()
        const contactContainer = document.querySelector(".contact-list-container")
        
        contactContainer.innerHTML = allContacts.map(singleContact => Contact(singleContact)).join("")
    })
}