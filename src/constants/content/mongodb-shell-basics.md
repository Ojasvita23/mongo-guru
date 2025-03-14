# **MongoDB Shell Basics**
The MongoDB Shell (`mongo` or `mongosh` for the newer version) provides a command-line interface to interact with MongoDB.  

&nbsp;  

### Starting the shell:  

&nbsp;  

```bash
mongo                   # Connect to localhost:27017  
mongo --host <hostname>  # Connect to a specific host  
mongosh                 # For the newer MongoDB Shell  
```

### Basic commands:

```bash
// Database operations
show dbs                        // List all databases
use myDatabase                  // Switch to a database (creates it if does not exist)
db                              // Show current database
db.dropDatabase()               // Delete current database

// Collection operations
show collections                // List all collections in current database
db.createCollection("users")    // Create a new collection
db.users.drop()                 // Delete a collection

// Document operations
db.users.insertOne({name: "John", age: 30})       // Insert a document
db.users.insertMany([{name: "Alice"}, {name: "Bob"}])  // Insert multiple documents

// Query operations
db.users.find()                               // Find all documents
db.users.find({name: "John"})                 // Find documents with name="John"
db.users.find({age: {$gt: 25}})               // Find documents with age > 25
db.users.findOne({name: "John"})              // Find first matching document
db.users.find().sort({age: 1})                // Sort by age (ascending)
db.users.find().limit(5)                      // Limit results to 5 documents
db.users.find({}, {name: 1, _id: 0})          // Project only name field

// Update operations
db.users.updateOne({name: "John"}, {$set: {age: 31}})    // Update one document
db.users.updateMany({}, {$inc: {age: 1}})                // Update many documents

// Delete operations
db.users.deleteOne({name: "John"})            // Delete one document
db.users.deleteMany({age: {$lt: 18}})         // Delete many documents

// Aggregation example
db.users.aggregate([
  {$match: {age: {$gt: 25}}},
  {$group: {_id: null, avgAge: {$avg: "$age"}}}
])
```
&nbsp;  

These basic commands will help you get started with MongoDB. The MongoDB shell is actually a JavaScript interpreter, so you can use JavaScript syntax for more complex operations.