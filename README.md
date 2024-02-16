# ContactNote

## Requirements:
 node => v18.18.0
 npm => 9.8.1
 npx => 9.8.1


## Steps:

### Clone the repo:
```
- git clone git@github.com:alexaslamgm/ContactNote.git
```

### Run the TypeScript compiler to compile the TypeScript code into JavaScript:
```
- npx tsc
```

### Run the server:
```
- node dist/app.js
```

## Application routes:

You will need Postman for api testing.

```
POST: localhost:3000/contact
BODY: {
    "name": "Michael Levit",
    "email": "michaellevit@gmail.com",
    "message": "hi there, how are you doing today?"
}

Response: {
    "name": "Michael Levit",
    "email": "michaellevit@gmail.com",
    "message": "hi there, how are you doing today?",
    "_id": "65cf62da5419e0f8b03bc969",
    "__v": 0
}
```

```
GET: localhost:3000/contacts
Reponse: [{"_id":"65cf488a4f2f5f023832c9f3","name":"Alex Aslam","email":"alexaslam02@gmail.com","message":"hi there, how are you doing today?","__v":0},{"_id":"65cf48a54f2f5f023832c9f6","name":"Michael Levit","email":"michaellevit@gmail.com","message":"hi there, how are you doing today?","__v":0}]
```