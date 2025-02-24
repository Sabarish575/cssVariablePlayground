# CSS Variable Playground

## Description
CSS Variable Playground is a simple interactive project that allows users to dynamically adjust CSS variables using input controls. Users can modify spacing, blur effects, and colors in real time using sliders and a color picker.

## Features
- Adjust spacing (`padding/margin`) dynamically.
- Apply a blur effect to an image.
- Change colors using a color picker.
- Real-time updates using JavaScript.

## Technologies Used
- HTML
- CSS (Custom Properties/Variables)
- JavaScript (DOM Manipulation)

## How It Works
1. Move the **spacing slider** to increase/decrease the margin or padding.
2. Adjust the **blur slider** to increase/decrease the blur effect.
3. Select a **color** to change the applied color dynamically.

## Usage
1. Clone or download this repository.
2. Include `styles.css` and `index.js` in your project.
3. Open `index.html` in a browser.

## Example Code
```js
const inputs = document.querySelectorAll(".wrapper input");
const box = document.querySelector(".boxCont");

function change() {
    const suffix = this.dataset.sizings || ''; // Get the unit (px) if exists

    if (!suffix) {  // Apply box-shadow when color is changed
        box.style.boxShadow = `10px 20px 20px 15px ${this.value}`;
    }

    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach((input) => {
    input.addEventListener("input", change);
});
