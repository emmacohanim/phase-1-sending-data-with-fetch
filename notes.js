// Add your code here
/*
Key components for sending submitted data to server using <form>'s default POST behavior

- destination url
--> from ACTION attribute of <form>
- HTTP verb (i.e. POST, PATCH, DELETE)
- key/value data obtained from inputs in file

POST v. GET
- still takes string with url as argument 1
- can take JS object as second argument
    -makes sense bc we are sending JS object and translating to something server can read */
    const formData = {
        key: "value",
        key2: "value2"
    }
    const configurationObject = {
        /*
configurationObject

-components needed for POST
--> HTTP verb
    - GET is fetch default
--> headers
--> body

arguments needed */
        method: "POST",
        // METHOD tells fetch() that this a POST request
        headers: {
        /* HEADERS are METADATA about data we want to send
            - sent right before actual data of POST
            - contain info about data being sent
            - each header in KEY/VALUE pair inside object */
            "Content-Type":
            // common header that indicates FORMAT data is SENT in
        "application/json",
            // FORMAT we will ACCEPT from server 
            "Accept": "application/json"
        },
        body: JSON.stringify(formData
            // converts objects to strings so data can be sent as STRING rather than TEXT
            // preserves key/value pairs
        )
    }

    fetch ('destinationURL', configurationObject)
    .then(function (response) {
        return response.json()
    }) 
    .then (function (object) {
        console.log(object)
    })
    /*
    .thens
    - handle responses to fetch
    - allow us to access information FROM server
    - RESPONSE represents what destination server sent back
        - DATA we sent and ID (given by server) */
    .catch(function (error) {
        alert("error!")
        console.log(error.message)
    // .catch will alert if there is an error
    // - can display error message to user in DOM
    })
/*
configurationObject

-components needed for POST
--> HTTP verb
    - GET is fetch default
--> headers
--> body

example */