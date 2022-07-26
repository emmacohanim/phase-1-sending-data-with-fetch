
function submitData(name, email) {
    const formData = {
        name: name,
        email: email,
    }
    const configurationObject = {
        method: "POST",
        headers: {
            "Content-Type": 
        "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(formData),
    }
return fetch("http://localhost:3000/users", configurationObject)
.then(function (response) {
    return response.json()
})
.then(

    
    (object)=> {//curly brackets denote code block
// test wants id attribute to show up in DOM
    console.log(object.id)
    // confirms that the thing we are adding to dom is id
    document.body.innerText = object.id
    //document.body.innerHTML=object.id
    // adds id as text node and puts id straight into body
    document.body.innerHTML = `<p>${object.id}</p>`
    const p = document.createElement("p")
    p.innerText = object.id
    document.body.append(p)
}
    )



    // adds post data to DOM
.catch (function (error) {
// handles unsuccessful requests
    alert("error!")
    console.log(error.message)
    document.body.innerHTML = error.message
})
}