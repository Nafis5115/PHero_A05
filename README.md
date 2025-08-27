1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
   With getElementById, we can call an element by it's id and we can get only one element by this.
   With getElementsByClassName, we can call mutltiple elements with it's given class name. And it comes with array form.
   With querySelector, we can call the first element matching by it's id or css class name or attributes etc.
   With querySelectorAll, we call call mutliple elements matching by its's id or css class name or attributes etc.

2. How do you create and insert a new element into the DOM?
   (create the element)
     const textarea = document.createElement("textarea");
   (Use it in the body tag)
     document.body.appendChild(textarea);

3.What is Event Bubbling and how does it work?
   When we make an event like click,  at first handler run on that element then it moves upward to its parent then parent's parent untill reach the root.

4.What is Event Delegation in JavaScript? Why is it useful?
   Event Delegation means we put an event listener on a parent element to handle events for all the child elements
   For that we do not need to add event listener to every child element.

5.What is the difference between preventDefault() and stopPropagation() methods?
   Using preventDefault() we can stop the default action of an element.
   Using stopPropagation() we stop bubbling to parent element.
