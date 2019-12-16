
const destinationURL = 'http://localhost:3000/users'

function submitData(name, email) {
    return fetch(destinationURL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
         "Accept": "application/json"
        },
        body: JSON.stringify({name, email})
    })
    .then(resp => resp.json())
    .then(user => document.body.innerHTML = user["id"])
    .catch(error => document.body.innerHTML = error.message)
}