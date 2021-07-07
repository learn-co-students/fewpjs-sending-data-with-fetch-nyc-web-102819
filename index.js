import { createBrotliCompress } from "zlib";

// Add your code here

  // code-along for dogs
// fetch("http://localhost:3000/dogs", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "Accept": "application/json"
//     },
//     body: JSON.stringify({
//         dogName: "Byron",
//         dogBreed: "Poodle"
//       })
// })
// .then(response => response.json())
// .then(object => console.log(object))
// .catch(error => {
//     alert("Bad things! Ragnarők!")
//     console.log(error.message)
// })



function submitData(name,email) {
    fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
                name: name,
                email: email
            })
    })
    .then(response => response.json())
    .then(data => document.body.innerHTML = data[ "id" ])
    .catch(error => document.body.innerHTML = error.message)
   
}


// solution (idk why different... 😒)
// function submitData( name, email ) {
//     return fetch( 'http://localhost:3000/users', {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           "Accept": "application/json"
//         },
//         body: JSON.stringify( {
//           name,
//           email
//         } )
//       } )
//       .then( function ( response ) {
//         return response.json()
//       } )
//       .then( function ( object ) {
//         document.body.innerHTML = object[ "id" ]
//       } )
//       .catch( function ( error ) {
//         document.body.innerHTML = error.message
//       } )
//   }
