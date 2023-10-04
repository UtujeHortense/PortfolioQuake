## ABOUT

XKCD is a webcomic of romance,sarcasm, math, and language as self explained on their [website](https://xkcd.com/ ).
I thought it would be fun to plug their daily comics onto this site.

[View project on GitHub](https://github.com/UtujeHortense/backXKCD/tree/main)
## IMPLEMENTATION
### Server 

In order to call the xkcd api automatically once the the client loads the page i had to set up a server that pings the api on each load. In retrospect this method can be optimised as long as the day hasn't changed.

The server i use is powered by [cyclic](https://www.cyclic.sh/) and implemeneted in node js to create a simple back end server.
### Client
On the client side , a javascript calls the server to fetch the comic. The second layer was added to avoid SOP and CORS errors.



									

