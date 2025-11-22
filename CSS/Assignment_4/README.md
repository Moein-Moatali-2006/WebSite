# HTML Styled Headings Demo

This project is a simple HTML page showcasing various heading tags (`h1`–`h6`) with custom CSS styling. It demonstrates how different border styles, background colors, paddings, margins, and directional text properties can be applied to create visually distinct components.

## Overview

The page contains:

- A centered container (`div`) with a bordered layout.
- Six heading elements (`h1` to `h6`), each styled differently.
- Examples of border radius, dashed borders, RTL direction, paddings, margins, and color combinations.
- Unicode symbols (flowers, hearts) used within text elements.

This project is intended for beginners who want to practice HTML and CSS styling.

## Features

- Custom border styles (solid, double, dotted, dashed, ridge).
- Individual border-side styling (left, right, bottom, top).
- Border radius on selected corners.
- RTL text direction support.
- Use of Unicode icons (e.g., hearts, flowers).
- Clean container layout using centered alignment.

## Project Structure

```
project-folder/
├── index.html
└── README.md
```

## Code Explanation

### 1. `<div>` Container
The container has a solid black border and fixed width:
```
div {
    border: solid;
    border-color: black;
    width: 670px;
}
```

### 2. Example Heading Styling
Each heading has its own unique visual design. For example:

```
h1 {
    color: white;
    background-color: rgb(146, 27, 146);
    border-style: dashed;
    border-radius: 100px;
    width: 50px;
    height: 50px;
    text-align: center;
    border-width: 5px;
    border-color: rgb(178, 118, 234);
}
```

### 3. RTL Support
Some text uses Persian language, so `direction: rtl;` is added for proper alignment.

```
h2, h3 {
    direction: rtl;
}
```

## How to Run

1. Save the HTML code as `index.html`.
2. Open the file with any web browser (Chrome, Firefox, Edge).
3. No additional setup is required.

## Customization

You can modify:

- Colors
- Border types
- Unicode icons
- Padding and margins
- RTL or LTR direction

This makes the project suitable for practice or classroom demonstrations.

## License

This project is free to use for learning and educational purposes.

## Author
- **Moein Moatali**

