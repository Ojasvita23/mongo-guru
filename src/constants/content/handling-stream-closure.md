## Handling Stream Closure

If a stream is closed or interrupted, handle reconnection properly.

## Example: Auto-reconnect on Stream Close
&nbsp;
```javascript
async function watchWithReconnection() {
  while (true) {
    try {
      const changeStream = collection.watch();
      changeStream.on("change", (change) => console.log(change));

      await new Promise((resolve, reject) => {
        changeStream.on("close", resolve);
        changeStream.on("error", reject);
      });
    } catch (error) {
      console.error("Stream closed. Reconnecting...");
    }
  }
}

watchWithReconnection();
```