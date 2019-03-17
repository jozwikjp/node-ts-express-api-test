h1. {toc:outline=true|style=none}
{info}{color:#0077CC}NS8 {color}[https://github.com/ns8inc/ns8-tech-assessment|https://github.com/ns8inc/ns8-tech-assessment]{info}
\\

\\

\\



h1. Create user

h1. Post {color:#505050}[http://localhost:8091/users|http://localhost:8091/users]{color}

!image2019-3-17_17-15-43.png!

\\

{code}{
    "status": "Success",
    "message": "Created new userid: 756c8349-081c-4d4e-8e70-221783013104"
}
{code}


h2. Create User Validation

h3. Invalid number

h1. {code:title=Response}{
   "firstName" : "Marcos",
   "lastName" : "Silssdva",
   "email" : "joes@test.test",
   "password" : "s3cr3tp4sswo4rd",
   "phone": "248-555-12212"
}



{code}

\\
\\

{code:title=Response}{
    "errors": [
        {
            "location": "body",
            "param": "phone",
            "value": "248-555-12212",
            "msg": "Invalid value"
        }
    ]
}
{code}


h3. Invalid Email and phone

h1. {code:title=Response}{
    "errors": [
        {
            "location": "body",
            "param": "email",
            "value": "joestest.test",
            "msg": "Invalid value"
        },
        {
            "location": "body",
            "param": "phone",
            "value": "248-555-12s12",
            "msg": "Invalid value"
        }
    ]
}
{code}

\\



h3. Duplicate Email Validation

h1. {code:title=Response}{
    "status": "fail",
    "message": "email address already exists"
}
{code}

\\



h1. List all users summary

h1. GET /users/
{code}[
    {
        "id": "1",
        "email": "joes@email.com",
        "phone": "248-555-1212"
    },
    {
        "id": "2",
        "email": "joes@othermail.com",
        "phone": "248-555-1212"
    },
    {
        "id": "3e6dbe9e-2d02-4b9e-9eb2-1e9126a655c7",
        "email": "joest@est.test",
        "phone": "248-555-1212"
    },
    {
        "id": "a38971cc-d28f-4e12-b8e3-a25ea29b6ef0",
        "email": "joes2t@est.test",
        "phone": "248-555-1212"
    }
]
{code}

\\



h1. \\
Get User Details with all events

h1. {color:#505050}GET [http://localhost:8091/users/|http://localhost:8091/users/0b46c732-5592-4f64-8d9f-59b35203cd80]:id{color}

!image2019-3-17_17-33-57.png!
{code:title=Response}{
    "id": "2",
    "email": "joes@othermail.com",
    "phone": "248-555-1212",
    "firstName": "Bill",
    "lastName": "Test",
    "events": [
        {
            "id": "1",
            "userid": "2",
            "type": "LOGIN",
            "created": 1552881599997
        },
        {
            "id": "3",
            "userid": "2",
            "type": "LOGOUT",
            "created": 1552881599999
        }
    ]
}






{code}

\\


\\



h1. Returning Events

h2.  return all events for all users: {color:#505050}[http://localhost:8091/events/user/|http://localhost:8091/events/user/2]all{color}

h1. {code:title=Response}[
    {
        "id": "1",
        "userid": "2",
        "type": "LOGIN",
        "created": 1552881599997
    },
    {
        "id": "2",
        "userid": "1",
        "type": "LOGIN",
        "created": 1552880599999
    },
    {
        "id": "3",
        "userid": "2",
        "type": "LOGOUT",
        "created": 1552881599999
    }
]
{code}


h2. *return all events for a single user : {color:#505050}[http://localhost:8091/events/user/|http://localhost:8091/events/user/1]:userid {color}*

h1. {code:title=Response}[
    {
        "id": "1",
        "userid": "2",
        "type": "LOGIN",
        "created": 1552881599997
    },
    {
        "id": "3",
        "userid": "2",
        "type": "LOGOUT",
        "created": 1552881599999
    }
]
{code}

\\



h3. {color:#505050}return all events for last day [http://localhost:8091/events/user/day|http://localhost:8091/events/all]{color}

h1. {code:title=Response}[
    {
        "id": "1",
        "userid": "2",
        "type": "LOGIN",
        "created": 1552881599997
    },
    {
        "id": "2",
        "userid": "1",
        "type": "LOGIN",
        "created": 1552880599999
    },
    {
        "id": "3",
        "userid": "2",
        "type": "LOGOUT",
        "created": 1552881599999
    }
]
{code}

{color:#505050}\\
{color}


h3. return all events for all time /events/user/all

h1. {code:title=Response}{
    "id": "2",
    "email": "joes@othermail.com",
    "phone": "248-555-1212",
    "firstName": "Bill",
    "lastName": "Test",
    "events": [
        {
            "id": "1",
            "userid": "2",
            "type": "LOGIN",
            "created": 1552881599997
        },
        {
            "id": "3",
            "userid": "2",
            "type": "LOGOUT",
            "created": 1552881599999
        }
    ]
}



{code}

\\

