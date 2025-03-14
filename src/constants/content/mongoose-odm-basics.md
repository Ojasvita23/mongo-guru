## Mongoose ODM Basics
Mongoose is an Object Data Modeling (ODM) library that simplifies MongoDB interactions.

&nbsp;
### Installation
&nbsp;

```sh
npm install mongoose
```

&nbsp;
### Connecting to MongoDB with Mongoose
&nbsp;

```javascript
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/testDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("Mongoose connected"))
.catch((err) => console.error("Connection error:", err));
```