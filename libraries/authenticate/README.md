# emauth-authenticate

A tiny function to authenticate through an IMAP server
with no dependencies.

```ts
import authenticate from "emauth-authenticate"

const success = await authenticate(host, port, email, password)
```
