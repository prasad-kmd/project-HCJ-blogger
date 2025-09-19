
# Project HCJ Blogger

[![CodeQL](https://github.com/prasad-kmd/project-HCJ-blogger/actions/workflows/github-code-scanning/codeql/badge.svg)](https://github.com/prasad-kmd/project-HCJ-blogger/actions/workflows/github-code-scanning/codeql)
[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)

A repository of modern, responsive, and reusable web components and themes for blog sites, built with HTML, CSS, and JavaScript.

## Overview

This project provides a wide range of components and pre-built designs to help you create beautiful and functional blog websites with ease. The components are designed to be modular, customizable, and easy to integrate into any project.

## Repository Structure

The repository is organized into the following main directories:

-   `components/`: Contains individual, reusable UI components.
-   `designs/`: Contains complete website designs that are built by combining the components.
-   `extensions/`: Contains browser extensions related to the project.

### Components

The `components/` directory is the core of this project. It is structured by component type:

-   `bg/`: Animated and static background components.
-   `card/`: Various styles of content cards.
-   `floating_dock/`: Floating navigation docks.
-   `footer/`: Website footers.
-   `hero/`: Hero sections for landing pages.
-   `loading/`: Page loading animations.
-   `navbar/`: Navigation bars with different features.
-   `scrollProgress/`: Scroll-to-top and progress indicator buttons.
-   `text/`: Animated and static text components.

Each component is self-contained in its own directory, usually with separate HTML, CSS, and JavaScript files.

### Designs

The `designs/` directory contains complete webpage layouts that demonstrate how to combine the components into a full-fledged design.

-   **jls_design_02/**: A modern, responsive design featuring a sticky navbar, a hero section with an animated background, a grid of cards, a floating dock, and a custom footer. It also includes a dark/light mode theme switcher.

### Extensions

The `extensions/` directory contains browser extensions.

-   **ver1_dpsk/**: A Chrome extension.
-   **ver1_gmni/**: A Chrome extension with custom icons.

## How to Use

To use a component or a design, simply follow these steps:

1.  **Choose a component or design:** Browse the `components/` or `designs/` directory to find the element you want to use.
2.  **Copy the files:** Copy the relevant HTML, CSS, and JavaScript files to your project.
3.  **Integrate the HTML:** Copy the HTML structure from the component's `index.html` file and paste it into your own HTML file where you want the component to appear.
4.  **Link the CSS and JavaScript:** Link the component's CSS and JavaScript files in your main HTML file. Make sure to adjust the file paths as needed.

All components and designs are built with vanilla HTML, CSS, and JavaScript, so you don't need any special build tools or frameworks.

## Contributing

Contributions are welcome! If you have a new component or design that you would like to add, please follow these steps:

1.  Fork the repository.
2.  Create a new branch for your feature (`git checkout -b feat/new-component`).
3.  Add your new component to the `components/` directory, following the existing structure.
4.  Commit your changes (`git commit -m 'feat: Add new component'`).
5.  Push to the branch (`git push origin feat/new-component`).
6.  Open a pull request.

Please make sure your code is well-documented and follows the existing coding style.

## License

This project is licensed under the **GNU Affero General Public License v3**. See the [LICENSE](LICENSE) file for more details.

