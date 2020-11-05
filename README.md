## Authors:

- Mariko Alvarado
- Simon Panek

## Contributors

- Thanks to TA's: Brai, Chance, & Skyler!

### Feature #1: Display images

#### Why are we implementing this feature?

- As a user, I want to view the images on the page so that I can browse the photo collection.

#### What are we going to implement?

Given that a user opens the application in the browser
When the user navigates to the home page
Then the photo gallery should display all of the images in the gallery

#### How are we implementing it?

- Use AJAX, specifically `$.ajax()`, to read the provided JSON file.
- Each object should become a new instance of a constructor function. Refer to the data to determine the necessary properties.
- Use jQuery to make a copy of the HTML template of the photo component. For each object, fill in the duplicated template with its properties, then append the copy to the DOM.

**TIME**

Number and name of feature: #1 Display Images

Estimate of time needed to complete: 2 Hours

Start time: 3:30PM

Finish time: 11:30PM

Actual time needed to complete: 8hrs

### Feature #2: Filter images

#### Why are we implementing this feature?

- As a user, I want to be able to filter the images so that I can view only images that match a keyword.

#### What are we going to implement?

Given that a user clicks on the dropdown menu
When the user selects one of the options
Then only the images whose keyword matches the option should be displayed

#### How are we implementing it?

- Create a `<select>` element which contains unique `<option>` elements extracted dynamically from the JSON file, one for each keyword.
- Use an event handler to respond when the user chooses an option from the select menu. Hide all of the images, then show those whose keyword matches the option chosen.

**TIME**

Number and name of feature: Feature #2 - Filter Images

Estimate of time needed to complete: 2 hours

Start time: 2:30pm

Finish time: 4:15pm

Actual time needed to complete: 1:45 hours

### Feature #3: Style the application

#### Why are we implementing this feature?

- As a user, I want a simple, clean looking UI so that my photo gallery clearly displays the images in a grid like pattern.

#### What are we going to implement?

Given that a user opens the application in the browser
When the user navigates to the home page
Then the images should be displayed in rows across the screen

#### How are we implementing it?

- Style your application using floats.
- Utilize at least one Google font.

**TIME**

Number and name of feature: Feature #3 - Style the Application

Estimate of time needed to complete: 1 hour

Start time: 4:15pm

Finish time: 4:30pm

Actual time needed to complete: 15 minutes

### Stretch Goal: Sort the images

#### Why are we implementing this feature?

- As a user, I want to be able to sort the images so there is an order to how they render.

#### What are we going to implement?

Given that a user is presented with sort options
When the user clicks on one option
Then the images should be sorted accordingly

#### How are we implementing it?

- Add the ability for the user to sort the images by either title or by number of horns.
- Sort the images by one of the properties on page load. This should also apply to the second page of images.

**TIME**

Number and name of feature: Feature #1 (Day2) - Pagination

Estimate of time needed to complete: 3 hour

Start time: 5:20pm

Finish time: 8:20pm

Actual time needed to complete: 3 hrs

### Feature 1: Pagination

#### Why are we implementing this feature?

- As a user, I want to have the ability to view additional images so that my view does not become cluttered.

#### What are we going to implement?

Given that a user opens the application in the browser
When the user clicks on a button or link to another page
Then the other set of images should be dynamically displayed

#### How are we implementing it?

- Add navigation for the user to switch between two pages. Each page should render a unique set of images from one of the two provided JSON files.
- Reset the filters, then repopulate them using only keywords from the images currently being displayed.


**TIME**

Number and name of feature: Feature #2(Day2) - Templating

Estimate of time needed to complete: 2

Start time: 8:50pm

Finish time: 11:00pm

Actual time needed to complete: 2 hrs

### Feature 2: Templating

#### Why are we implementing this feature?

- As a user, I want all of the images to be displayed in a consistent manner, so that it is easy to scan the collection of images.

#### What are we going to implement?

Given that a user opens the application in the browser
When the images are displayed on the screen
Then each image should be rendered according to a template

#### How are we implementing it?

- Create the appropriate Mustache template in your HTML with the same `<h2>, <img>, and <p>` elements as the jQuery template from the prior lab.
- Refactor the method that renders your images to use Mustache instead of making a copy with jQuery.


**TIME**

Number and name of feature: Feature #3 (Day2) - 

Estimate of time needed to complete: 

Start time: 

Finish time: 

Actual time needed to complete: 

### Feature 3: Styling with Flexbox

#### Why are we implementing this feature?

- As a user, I want a simple, clean looking UI so that my photo gallery clearly displays the images.

#### What are we going to implement?

Given that a user opens the application in the browser
When the user navigates to the home page
Then the images should be displayed in columns, as screen width allows

#### How are we implementing it?

- Refactor your CSS to use Flexbox instead of floats. You are welcome to use a combination of floats and Flexbox, as you see fit.


**TIME**

Number and name of feature: Feature #4 (Day2) - 

Estimate of time needed to complete: 

Start time: 

Finish time: 

Actual time needed to complete: 

### Feature 4: Sort the images

#### Why are we implementing this feature?

- As a user, I want to be able to sort the images so that there is an order to their rendering.

#### What are we going to implement?

Given that a user is presented with sort options
When the user clicks on one option
Then the images should be sorted accordingly

#### How are we implementing it?

- Add the ability for the user to sort the images by either title or by number of horns.
- Sort the images by one of the properties on page load. This should also apply to the second page of images.
