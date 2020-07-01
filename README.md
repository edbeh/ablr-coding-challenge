# ablr-coding-challenge

App is published at https://edbeh.github.io/ablr-coding-challenge/

a. I have hosted the json provided on my AWS S3 to mimic public API. CORS configured to allow all origin.<br/>
E.g. https://aldr-endpoint.s3-ap-southeast-1.amazonaws.com/page_1.json

b. Added a scroll-up button for slightly enhanced UX.



## Evaluation Criteria
1. Simplicity - aim for the simplest solution that gets the job done whilst remaining readable, extensible and testable.<br/>
Note: The app is written with React hooks instead of classes to keep it less verbose. I used React.useState since the number of states are small, 
but I usually go for React.useReducer if state the is more complex to centralise business logics. This allows for easier expansion and maintenance.

2. Test Coverage - breaking changes should break your tests.<br/>
Note: I have not used jest or enzyme for test-driven development before, but I'll look into it if it's required for the real project.

3. Robustness - should handle and report errors.<br/>
Note: Error handled for fetch promise, added propTypes for checking props.

4. Mobile friendly - should look fine on mobile devices.<br/>
Note: Mobile-optimized.
