//building a html representaion of the contact that will print on the DOM, this will be exported to contact list

export const Contact = (contactObject) => {
    return `
    <div class="contact-card">
        <p>Name: ${contactObject.name}</p>
        <p>Email: ${contactObject.email}</p>
        <p>Number: ${contactObject.phonenumber}</p>
    </div>
        `
}