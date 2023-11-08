# Frontend Mentor - Dine Website Challenge solution

This is a solution to the [Dine Website Challenge challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/dine-restaurant-website-yAt7Vvxt7). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

-   [Overview](#overview)
    -   [The challenge](#the-challenge)
    -   [Screenshot](#screenshot)
    -   [Links](#links)
-   [My process](#my-process)
    -   [Built with](#built-with)
    -   [What I learned](#what-i-learned)
    -   [Continued development](#continued-development)
    -   [Useful resources](#useful-resources)
-   [Author](#author)

## Overview

### The challenge

Users should be able to:

-   View the optimal layout for each page depending on their device's screen size
-   See hover states for all interactive elements throughout the site
-   See the correct content for the Family Gatherings, Special Events, and Social Events section when the user clicks each tab
-   Receive an error message when the booking form is submitted if:
    -   The `Name` or `Email Address` fields are empty should show "This field is required"
    -   The `Email Address` is not formatted correctly should show "Please use a valid email address"
    -   Any of the `Pick a date` or `Pick a time` fields are empty should show "This field is incomplete"

### Screenshot

![Full page](./src/assets/images/Screenshot.png)

### Links

-   Solution URL: [Github](https://github.com/Szidelo/dine-restaurant-vercel)
-   Live Site URL: [Demo](https://dine-restaurant-vercel.vercel.app/)

## My process

### Built with

-   Semantic HTML5 markup
-   CSS custom properties
-   Flexbox
-   Bootstrap
-   [React](https://reactjs.org/) - JS library
-   [React-router](https://nextjs.org/) - React library

### What I learned

In this project I used regex for the first time and I could see why is usefull when you want to make a validation.

```js
const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

const validateEmail = () => {
	if (email === "" || !emailRegex.test(email)) {
		return setEmailError(true);
	}
	return setEmailError(false);
};
```

### Continued development

For the future I want to improve my form validation logic. 

### Useful resources

-   [Regexr](https://regexr.com/3e48o) - This helped me for regex code. 

## Author

-   Linkedin - [Claudiu Szidelo](https://www.linkedin.com/in/claudiu-szidelo-671b1324a/)
-   Frontend Mentor - [@Szidelo](https://www.frontendmentor.io/profile/Szidelo)
-   Github - [Szidelo](https://github.com/Szidelo)