# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview
The challenge is to build out an interactive rating component and get it looking as close to the design as possible.

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![](./active-state.png)
![](./desktop-thankyou.png)
![](./desktop-view.png)

PS: I was unable to get a screenshot through Mozilla Firefox, so I used Canva app to do the design

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Mobile-first workflow
- Javascript
### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```html
<div class="rating-click" id="rating-click">
  <div class="click" id="click">
    <p>1</p>
  </div>
  <div class="click" id="click">
    <p>2</p>
  </div>
  <div class="click" id="click">
    <p>3</p>
  </div>
  <div class="click" id="click">
    <p>4</p>
  </div>
  <div class="click" id="click">
    <p>5</p>
  </div>

```
```css
.btn {
  display: block;
  width: 100%;
  background: #FB7413;
  outline: 0;
  border: 0;
  padding: 10px;
  border-radius: 50px;
  color: #fff;
  font-weight: 400;
  letter-spacing: 2px;
  text-align: center;
}

.btn:hover {
  color: #FB7413;
  background: #fff;
}
```
```js
const proudOfThisFunc = () => {
  console.log('🎉')
}
```

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

### Useful resources

- [Example resource 1](https://convertingcolors.com) - This helped me convert the colors to hexadecimal. I wanted to do something different for a change. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.



## Author

- Website - [Oluwatosin Abigail Ogundeji](https://medium.com/@oluwatosinhephzibah)
- Frontend Mentor - [@Heph-zibah](https://www.frontendmentor.io/profile/Heph-zibah)
- Twitter - [@undaunted_pen](https://www.twitter.com/undaunted_pen)

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**
