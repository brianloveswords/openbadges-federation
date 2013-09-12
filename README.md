# OpenBadges Federation

## Prototyping
For the prototype, I didn't try to prove federating the badge data so much about federating *any* data. We can layer in the badge stuff later.

I tried to prove it out as simply as possible for now. You'll have to start up four node servers: `backpack-one`, `backpack-two`, `issuer` and `shim`. The two backpacks are basically dummy servers for now; `issuer` and `shim` are doing the real work.

Hit the `issuer` server in your browser and you'll get a spartan site with a button to open up the issuing workflow at the `shim`. A reference to all of the data passed into `OpenBadges.issue` is kept in the query string encoded as base64.

At the `shim`, you can enter the full url of whichever backpack you want to connect to. In the next version of the prototype, the `shim` will also make sure it's as compatible backpack and provide error messaging if it's not.

Given a backpack location, the `shim` will redirect the browser to the authentication form provided by the backpack you chose. In our case right now, it's completely dummy – every route replies with the same message – but the point is that the parameters originally passed into `OpenBadges.issue` at the issuer site are preserved in the query string so the backpack can begin to handle the parameters however it likes.

Since all of the interaction is happening in the user agent and via query strings, as long as the user has access to the backpack, the issuer doesn't need to be able to directly connect.