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
- [Author](#author)
- [Acknowledgments](#acknowledgments)

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

- Solution URL: [Solution URL](https://www.frontendmentor.io/solutions/interactive-rating-component-using-html-css-and-javascript-4U0nJP4kfU)
- Live Site URL: [Live Site URL](https://interactive-rating-frontendmentor.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Mobile-first workflow
- Javascript

### What I learned

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
</div>
```

```css
.btn {
	display: block;
	width: 100%;
	background: #fb7413;
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
	color: #fb7413;
	background: #fff;
}
```

### Continued development

- Javascript
- Custom style css

## Author

- Website - [Oluwatosin Abigail Ogundeji](https://medium.com/@oluwatosinhephzibah)
- Frontend Mentor - [@Heph-zibah](https://www.frontendmentor.io/profile/Heph-zibah)
- Twitter - [@undaunted_pen](https://www.twitter.com/undaunted_pen)

## Acknowledgments

I will love o thank Faleke Peace for taking out time to check through the code and helped with the Javascript.
