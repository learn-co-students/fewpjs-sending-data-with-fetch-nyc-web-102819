function submitData(name, email) {

  let formData = {
    name: `${name}`,
    email: `${email}`
  };

  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  };

  return fetch('http://localhost:3000/users', configObj)
    .then(function(response) {
      return response.json()      
    })
    .then(function(json) {
      console.log(json)
      const ul = document.createElement('ul')
      document.body.appendChild(ul)
      ul.innerHTML = (
        `<li>id: ${json.id}</li>
        <li>name: ${json.name}</li>
        <li>email: ${json.email}</li>`
      )
    })
    .catch(function(error) {
      alert("Something went wrong!");
      console.log(error.message);
      const p = document.createElement('p')
      document.body.appendChild(p);
      p.innerHTML = (`${error.message}`);      
    });
}


