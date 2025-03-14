## Bitwise Operators
&nbsp;

These perform bitwise operations on integer values:

- `$bitsAllSet` : Matches numeric or binary values where all bit positions match
- `$bitsAnySet` : Matches where any bit position matches
- `$bitsAllClear` : Matches where all specified bit positions are clear (0)
- `$bitsAnyClear` : Matches where any bit position is clear (0)

&nbsp;
### Example:
&nbsp;
```javascript
// Find documents where bits 1 and 5 are both set (1) in the permissions field
db.users.find({ permissions: { $bitsAllSet: [1, 5] } })
```