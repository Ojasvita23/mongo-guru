## Resume Tokens

A resume token allows restarting the stream from the last processed event if the connection drops.

## Example: Storing and Resuming with Resume Token
&nbsp;
```javascript
let resumeToken = null;

const changeStream = collection.watch();

changeStream.on("change", (change) => {
  console.log("Change detected:", change);
  resumeToken = change._id; // Store the resume token
});

// Resume from the last known point
const resumedStream = collection.watch([], { resumeAfter: resumeToken });
```