# Adjust Code Test
This application displays a button, upon clicking this button it will capture the seconds and makes an API call
to 'https://jsonplaceholder.typicode.com/posts', and once we have the response it will simply log to console.
If in case when you click and the captured seconds is already captured, then it will log warning to console saying it is already captured.
The function click handler is debounced to control continuous clicks on the button and avoiding the unnecessary execution of methods.
In case API fails for some reason, then the captured seconds will be treated as not captured and hence next time it gains a chance of capturing.
The API calls are made in synchronous since the click handler is debounced thinking that API call would resolve before the Debounced time.

## What can be improved here.
Since it has been asked to make API call in synchronous and in order or occurance, we need to implement Queue and click handler should be called on each value on Queue, which might take more time and analysis. Hence chose different approach just to satify the requirement. Would have been much time then we can implement this using Queues.

## Drawback of the implementation
It will ignore some of the seconds captured when we try to click the button continuously.

## npm start
This will start the application and can be accessed at http:localhost:9000

## npm run test
This will run the test cases.

## npm run build
This will run the Build and generate bundle files and injects in to html file.