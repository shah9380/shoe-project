# Shoe-Card
# Created Using Tailwind Classes

##[Feel Free to Explore](https://shah9380.github.io/shoe-project/)

### UI Structure

![UI Structure](https://github.com/shah9380/shoe-project/assets/130676464/20443f5d-a548-4bfb-9003-d9a6f0718d70)

### Custom Tailwind plugins made to complete the project

    // No built in classes had such large height and width
    height: {
            card: '35.15625rem',
    },
    width: {
            card: '68.4375rem',
    },
    // Importing a google font family
    fontFamily: {
            IBMPlex: ['"IBM Plex Mono"', 'monospace'],
    },
    // Custom text color to match the card
    textColor: {
            'shoe-green': '#1bc8bb',
    },
    // Custom box shadows for where it was needed
    boxShadow: {
            green: '8px 8px 0px 0px rgb(45,212,191)',
            'green-small': '4px 4px 0px 0px rgba(45,212,191,1);',
    },
    // Custom color to match the color in the sample card
    colors: {
            'new-green': '#2dd4bf',
    },

### Explanation

#### body

| Element/Class                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| `<body class="grid w-screen h-screen place-content-center font-IBMPlex">` | Sets the body to be a grid container, occupying the entire screen and centering its content. Applies the "font-IBMPlex" font family. |

#### Inside the main content

| Element/Class                                                                                           | Description                                                                                                       |
| ------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `<div class="bg-gradient-to-t from-black to-black to-65% from-white from-65% h-card w-card shadow-xl">` | Creates a div with gradient background colors, a fixed height ("h-card"), a fixed width ("w-card"), and a shadow. |
!![Title](https://github.com/shah9380/shoe-project/assets/130676464/db9605ff-4854-46d6-b9df-460bc2c93559)

#### Inside the content div

| Element/Class                                                           | Description                                                                                                                             |
| ----------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `<img class="w-2/6 shadow-green" src="./assets/shoe.png" alt="shoe" />` | Sets the image width to 2/6 (1/3), adds a green shadow, and sets the alt text.                                                          |
| `<div class="flex flex-col justify-between ml-20 grow">`                | Creates a flex container with a column layout, justifies content between its items, adds left margin, and allows the container to grow. |

#### Inside the div with text content

| Element/Class                                                                                                               | Description                                                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `<h1 class="text-5xl font-medium text-white">Retro Shoe</h1>`                                                               | Sets the heading text size to 5xl, font weight to medium, and text color to white.                                                                        |
| `<h2 class="mt-4 text-3xl font-medium text-white">$89.00<span class="ml-2 font-light text-shoe-green">IN STOCK</span></h2>` | Sets the subheading text size to 3xl, font weight to medium, and text color to white. Adds top margin, and includes a light font with a green text color. |
![Shoe-Img](https://github.com/shah9380/shoe-project/assets/130676464/a148825a-5f12-45d8-8d77-bb6321c90873)

#### Inside the size options

| Element/Class                                                                                                                                                | Description                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------- |
| `<a class="grid p-2 text-3xl font-thin text-white bg-black shadow-green-small w-14 h-14 place-content-center" href="#">XS</a>`                               | Creates a link with grid layout, padding, text size 3xl, thin font, white text color, black background, and a small green shadow. |
| `<a class="grid p-2 text-3xl font-thin duration-300 w-14 h-14 place-content-center hover:text-white hover:bg-black hover:shadow-green-small" href="#">S</a>` | Creates another link with similar styles but adds hover effects to change text and background color, as well as the shadow.       |
| Similar classes are used for sizes M, L, and XL.                                                                                                             |

#### Inside the action buttons

| Element/Class                                                                                                                                   | Description                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `<button class="px-8 py-4 text-2xl font-bold duration-300 border-4 border-black bg-new-green hover:bg-black hover:text-white">BUY NOW</button>` | Creates a button with padding, text size 2xl, bold font, border, background color, and hover effects.             |
| `<button class="px-8 py-4 text-2xl font-bold duration-300 border-4 border-black hover:bg-slate-100">ADD TO BAG</button>`                        | Creates another button with padding, text size 2xl, bold font, border, and hover effects on the background color. |![Cart-Size-Section](https://github.com/shah9380/shoe-project/assets/130676464/27fd21b0-05b3-44cb-a7e5-f187e68e04a3)

#### Inside the heart icon

| Element/Class                                                                      | Description                                                                                                                |
| ---------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `<div class="flex items-center justify-center text-3xl grow">`                     | Creates a flex container that centers its content vertically and horizontally.                                             |
| `<i class="duration-300 cursor-pointer fa-solid fa-heart hover:text-red-600"></i>` | Adds duration to transitions and makes the heart icon a pointer on hover. Changes the text color to red when hovered over. |

#### At the bottom

| Element/Class                                                                                      | Description                                                                       |
| -------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `<p class="inline-block w-10/12 pr-10 text-right">Free Shipping on all continental US orders.</p>` | Sets the text width, adds padding on the right, and aligns the text to the right. |

These are the main Tailwind CSS classes used in the provided second HTML file to style various elements on the page.
