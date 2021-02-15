//GET is used to request data from a specified resource.

//Some other notes on GET requests:
// GET requests can be cached
// GET requests remain in the browser history
// GET requests can be bookmarked
// GET requests should never be used when dealing with sensitive data
// GET requests have length restrictions
// GET requests are only used to request data (not modify)

//POST is used to send data to a server to create/update a resource.

// Some other notes on POST requests:
// POST requests are never cached
// POST requests do not remain in the browser history
// POST requests cannot be bookmarked
// POST requests have no restrictions on data length

// The PUT Method
// PUT is used to send data to a server to create/update a resource.

//The HEAD Method
//HEAD is almost identical to GET, but without the response body.

// The DELETE Method
// The DELETE method deletes the specified resource.

// The OPTIONS Method
// The OPTIONS method describes the communication options for the target resource.



/* 
Compare GET vs. POST

The following table compares the two HTTP methods: GET and POST.

	 *GET	           #POST
	 
1| BACK button/Reload
*Harmless	
#Data will be re-submitted (the browser should alert the user that the data are about to be re-submitted)

2| Bookmarked	
*Can be bookmarked	
#Cannot be bookmarked

3|Cached
*Can be cached	
#Not cached

4|Encoding type	
*application/x-www-form-urlencoded	
#application/x-www-form-urlencoded or multipart/form-data. Use multipart encoding for binary data

5|History	
*Parameters remain in browser history	
#Parameters are not saved in browser history

6|Restrictions on data length	
*Yes, when sending data, the GET method adds the data to the URL; and the length of a URL is limited (maximum URL length is 2048 characters)	
#No restrictions

7|Restrictions on data type	
*Only ASCII characters allowed	
#No restrictions. Binary data is also allowed

8|Security	
*GET is less secure compared to POST because data sent is part of the URL
Never use GET when sending passwords or other sensitive information!	
#POST is a little safer than GET because the parameters are not stored in browser history or in web server logs

9|Visibility	
*Data is visible to everyone in the URL	
#Data is not displayed in the URL
*/