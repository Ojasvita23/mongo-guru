## MongoDB Node.js Driver
The MongoDB Node.js driver allows applications to interact with MongoDB databases.

&nbsp;

### Installation
To install the official MongoDB driver, run:

&nbsp;

```sh
npm install mongodb
```

&nbsp;
### Connecting to MongoDB
&nbsp;

```javascript
const { MongoClient } = require('mongodb');

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

async function connectDB() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Connection failed", error);
  }
}

connectDB();
```