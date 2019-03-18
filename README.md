
# Problem
Assume that NS8 has contracted you to build a small **RESTful API** to support their new user tracking software.  There are many node.js frameworks that could help you with this.  For example, express, restify etc.  

Data does not need to be persisted between server restarts. 

## Data definition

### User
- email
  - string
  - This field is required to create a new user
  - The system must only allow 1 user per unique email address
  
  ```json
  {    "status": "fail",    "message": "email address already exists"}


- password
  - string
  - This field is required to create a new user
- phone number 
  - string
  - This field is optional
  - When provided, the phone number must follow this pattern ###-###-####
  
  ```typescript app.post("/users", jsonParser,[
    // email must be an email
    check('email').isEmail(),
    check('password').not().isEmpty(),
    check('phone').isMobilePhone().optional() ], apiCreateUser); ```


### Event
- type
  - This field is required to create a new event
  - The value can be any non-empty string
  
 ```typescript
export class UserEvents {
    id: string
    userid: string
    type: string
    created: string

    constructor(data: any) {
        if (!data.type) {
            throw new Error("Type is required for event");
        }
        this.id = data.id;
        this.userid = data.userid;
        this.type = data.type;
        this.created = data.created;

    }
}

```
 
## Data examples

The following input json would create a user POST /users
```json
{
  "email": "test@ns8.com",
  "password": "passwordIsPizza",
  "phone": "333-222-1111"
}
```
Respone 
```json

{
    "status": "Success",
    "message": "Created new userid: ad8b51d0-d2fb-49bd-a748-546cf3dea8dc"
}

```
Also creates event

```json
    {
        "id": "46ae3ed7-824c-402b-bbf9-2973e7315c6a",
        "userid": "ad8b51d0-d2fb-49bd-a748-546cf3dea8dc",
        "type": "CREATED",
        "created": 1552866927637
    }

```

Get Users Summary List GET /users

```json
[
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
        "id": "ad8b51d0-d2fb-49bd-a748-546cf3dea8dc",
        "email": "joes2t@est.test",
        "phone": "248-555-1212"
    }
]

``` 

___
Not complete - The following input json would create an event with the type LOGIN 
```json
{
  "type": "LOGIN"
}
```
___

The following use cases should be satisfied to get user event data
- return all events for all users /events/user/all
```json
[
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

```

- return all events for a single user /events/user/:userid

```json
[
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
```

- return all events for the last day /events/user/day


```json [
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

```

The json data returned should at least have the following elements - Create Even

where `created` is the date the event was created.  Choose any date format. 
___

