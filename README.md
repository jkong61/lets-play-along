# LetsPlayAlong

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Dependencies

This project only uses TailwindCSS as a styling dependency and Angular Core Libraries. Otherwise no other external libraries are used in this project.

## Thoughts About **LetsPlayAlong**

While project can use either React or Vue to bootstrap. I wanted to test and challenge my own knowledge and skills in using Angular which I have started to learn since mid-September 2021. There is so much more to learn in Angular and I think I have only barely scratched the surface. I believe that I throughly understood the core concepts and should be fairly comfortable in using it.

This project meets the minimum requirements set out by the coding challenge provided, however there are many places this could be improved or optimized for performance.

### Strategy

The application makes use of 3 global Angular Services that acts as state source repositories for the application.
  1. UserService (that stores the list of users).
  2. PostService (that stores the list of Posts of a particular User).
  3. PhotoService (that stores the list of Albums of a particular User). <sub><sup>Should have named it AlbumService.. oh well gotta commit to it now</sup></sub>

The various components makes use of Dependency Injection to obtain the 3 services to display data to the view. (similar to React Context.Provider)

### Challenges

 - UI/UX
    - The UI is a little uninspired and dull, I am willing to admit that my design skills are not the strongest point. However, if I had a design template I could follow the design to make it look a lot better.
    - As the app currently stands, it is not capable of displaying the full details of each ListItem (i.e. Post/Album Photos). It is however possible to implement a Modal component and pass data into the Modal component for a dynamic Modal without making API calls for data.
    - During AJAX calls, the app does not show a loading/progress bar to indicate a HTTP request is occuring behind the scenes. Technically, this could be done with a Loading component that is in the Root component that shows up during and dismisses after a AJAX request.
    - This UI is not optimized for mobile viewports and is best viewed on a desktop web browser. Responsive design could be implemented with the use of TailwindCSS utility classes.
  - API calls
    - The app makes too many API calls to the server just to retrieve data which makes the app "chatty". One example is onInit of the (Album - Photos/ Post - Comments), the endpoint doesn't exactly return the associated Comments for the given Posts which forces us to make an additional API request to obtain Comments associated with the Post. When 4 Posts per page is initialized, each of the 4 Post component needs to perform a API request to get the Comments for its own component resulting in 4 API calls. Likewise for the Albums which needs to make 6 API calls for each of the 6 Albums in the view. This could likely be alleviated if the API server returns the necessary data.
  - Search Function
      - The search function also makes API calls to the server to obtain the correct data based on the query string provided. In this instance, I made a design mistake that it is possible to locally filter the available global PostService/AlbumService and return the filtered ListItem to the view. Reducing or eliminating the need to make API calls to the server for string queries. This could be revisited in the future for refactoring and optimizations.
      - There is an unintended side effect that changes the global PostService/AlbumService list of content to only the searched query and does not reset. Can be solved by using a filter method solution stated above which does not cause side effects to the global services.
  - Pagination
      - The pagination requirement requires the app to carefully manage its own component state which could be a headache at times. Fortunately, Google provides the Angular DevTools to allow us to inspect the current state of the component. It is possible also to make use of API calls to paginate the content, however it would require us to hard code certain things and need to know how many pages of content are available on the server in advance. 
      - The API endpoint does not provide this information and thus would be better to retrieve all the posts in this instance. The current approach would not be suitable for large datasets *i.e. in the thousands (the API only has 10 content items)* to be stored in memory which could cause a performance hit. The solution is to design the API server to be able to return metadata if there are any pagination information.

