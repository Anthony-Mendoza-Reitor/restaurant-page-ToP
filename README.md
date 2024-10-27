# Restaurant Page

A restaurant-themed single-page application (SPA) that dynamically loads content for various sections (Home, Menu, About, and Location) using **JavaScript modules** and **Webpack** for bundling. This project is part of The Odin Project's curriculum, emphasizing modular code structure and the use of Webpack.

## Table of Contents

- [Overview](#overview)
- [Project Structure](#project-structure)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Acknowledgments](#acknowledgments)
- [Live Demo](#live-demo)

## Overview

The Restaurant Page project is a **JavaScript**-based SPA that utilizes **Webpack** for dependency management, module bundling, and asset optimization. The content for each page section is dynamically generated and rendered into a single HTML page without reloading. This project demonstrates how to use Webpack to streamline development with modular code and efficient asset handling.

## Project Structure

- **`/src`**: Contains all JavaScript files for each section of the site:
  - **`index.js`**: Entry point, sets up initial page load and event listeners.
  - **`home.js`**: Renders the Home section.
  - **`Menu.js`**: Renders the Menu section, including an image of "Mofongo" with styling.
  - **`About.js`**: Renders the About section with a description and image of the Puerto Rican flag.
  - **`Location.js`**: Renders the Location section with a map image.
- **`/dist`**: Webpack’s output directory containing bundled assets.
- **`webpack.config.js`**: Configures Webpack to use **HtmlWebpackPlugin** and **CSS loaders**.

## Features

- **Modular Code Structure**: Each page section is separated into its own JavaScript module for clean code organization.
- **Dynamic Content Loading**: Navigation is handled within the app, updating content without reloading the page.
- **Webpack Integration**: Webpack manages dependencies, compiles CSS, and optimizes images.
- **Custom Styling**: Custom CSS styles for each section, using `style-loader` and `css-loader` in Webpack.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/anthony-mendoza-reitor/restaurant-page-ToP.git
   ```
2. Navigate into the project directory:
   ```bash
   cd restaurant-page-ToP
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Build the project:
   ```bash
   npm run build
   ```
5. Start the development server:
   ```bash
   npm start
   ```

## Usage

After starting the development server, open your browser and go to `http://localhost:8080` to view the application. Navigate between sections (Home, Menu, About, Location) using the buttons at the top. Each section will dynamically load and display relevant content.

## Technologies Used

- **JavaScript**: For dynamically generating content.
- **Webpack**: Module bundling, asset management, and build optimization.
- **CSS**: Custom styles for each page section.
- **HTMLWebpackPlugin**: To generate the HTML file based on a template.

## Acknowledgments

This project is a part of [The Odin Project's](https://www.theodinproject.com/) curriculum. Thanks to the Odin Project team for creating such an in-depth and hands-on curriculum.

## Live Demo

View the live version of the project [here](https://anthony-mendoza-reitor.github.io/restaurant-page-ToP/).
```

This version includes the 'Live Demo' section at the end for easy access to the deployed project link. Let me know if there’s anything more specific you’d like added!
