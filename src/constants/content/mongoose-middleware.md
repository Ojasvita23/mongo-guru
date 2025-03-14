## Mongoose Middleware

Mongoose provides middleware (pre/post hooks) to execute logic before or after operations.

&nbsp;
### Example: Pre-save Middleware
&nbsp;

```js
userSchema.pre("save", function (next) {
    console.log(`User ${this.name} is being saved`);
  next();
});
```

&nbsp;
### Example: Post-save Middleware
&nbsp;

```js
userSchema.post("save", function (doc) {
  console.log(`User ${doc.name} was saved`);
});
```