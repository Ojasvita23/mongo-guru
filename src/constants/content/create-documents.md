## Create Operations  

&nbsp;  

### **insertOne()** - Inserts a single document into a collection:  

&nbsp;  

```javascript
await db.collection('users').insertOne({
  name: "John Doe",
  email: "john@example.com",
  age: 30
});
```

&nbsp;  

### **insertMany()** - Inserts multiple documents in one operation:  

&nbsp;  

```javascript
await db.collection('users').insertMany([
  { name: "John", age: 30 },
  { name: "Jane", age: 25 },
  { name: "Bob", age: 35 }
]);
```