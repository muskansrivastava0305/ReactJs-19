# Components in React.Js
- In React, a components is assentialy a JavaScript Function or Class that return JSX, a syntax extension that allows you to write HTML - Like code inside Javascript.
- Components are the building blocks of any React application allowing for the creation of complex and intreactive user interfaces through the assembly of isolated , reusable pieces.

-- --
- You can also use `.js` extension with React.Js components but its recommended to use `.jsx` to differentiate between regular JavaScript files and React.js components.

### There are two ways to create components in React.js
- `Class Based Components`
this is how components wre create befor functional components.
```JavaScript
import React, {Components} from 'react';

export class Welcome extends Components {
    render () {
        retuen <h1>Hello, {this.props.name}!</h1>;
    }
}
```
- `Functional Components `This is modern and recommendend way of written React.js components.
- We will follow through functional components in tghis as thats what is use.
```Javascript
export function Welcome ({name}) {
    return <h1>Hello, {name}!</h1>;
}
```