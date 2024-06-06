# JSX (JavaScript XML)
### React.JS Component
   JSX stands for JavaScript XML .It allows you to write HTML elements in JavaScript and Place .them in the Dom without any   `createElement()` and `appendChild()` methods.

   ```JavaScript
   const App = () => {
    return/*_Pure_*/ React.createElement("h1" , {
        name: "Vinod" 
    }, "Hello World");

   }
   ```
   - It is a syntactical sugar introduces bye facebook for written React.js component easily.

   ```JavaScript
   //JSX
   
   import {jsx as _jsx} from "react/jsx - runtime" ;
   /*_Pure_*/ _jsx ("h1", {
    children : Hello world
   });
   ```
- We will get an object (also known as rect.element) and this is what convert inti actual dom elemnt and render the data in UI.

- While a `React.element` is a building block and a part of the virtual DOM, it is not the `Virtual DOM` itself. Rather, it is an object within the `Virtual Dom `tree that describes what should be render on the screen.

```javascript
import React from "react";
export const App = () => {
    return <h1>Hello , ReactJs<h1>;
};

console.log(React.createElement("h1", null, "Hello, ReactJS."));
```