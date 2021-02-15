let contacts = []

export const useContacts = () => contacts.slice()

//pulling data from the local server
export const getContacts = () => {
    return fetch(`http://localhost:8088/contacts`)
    .then(response => response.json())
    .then(parsedContacts => {
        contacts = parsedContacts
    })
}

//saving data to the local server with POST
export const saveContacts = contact => {
    return fetch(`http://localhost:8088/contacts`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(contact)
    })
    
}