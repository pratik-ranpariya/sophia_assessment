# React Project with Webpack

This is a React 18+ project configured with Webpack for bundling and development.

## Prerequisites

Ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (v18.x or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## Installation

1. **Clone the repository:**

    ⁠bash
   git clone https://github.com/pratik-ranpariya/sophia_assessment.git
   cd sophia_assessment
   

⁠ 2. **Install dependencies:**

   Using npm:

    ⁠bash
   npm install
   

⁠    Or using yarn:

    ⁠bash
   yarn install
   

⁠ ## Running the Development Server

To start the development server, use:

Using npm:

 ⁠bash
npm start


⁠ Or using yarn:

 ⁠bash
yarn start


⁠ The application will be available at `http://localhost:3000/`.

## Building for Production

To create a production build, run:

Using npm:

 ⁠bash
npm run build


⁠ Or using yarn:

 ⁠bash
yarn build


⁠ The optimized build will be output to the `dist/` directory.

## Running the Production Build Locally

To serve the production build locally, you can use a simple server:

Using npm:

 ⁠bash
npm install -g serve
serve -s dist


The application will be available at `http://localhost:5000/`.

## Custom Scripts

- `npm start` / `yarn start`: Starts the development server.
- `npm run build` / `yarn build`: Builds the project for production.
- `npm run lint` / `yarn lint`: Runs the linter (if configured).

## License

This file includes all the necessary details for installing, running, and building your React project, while clearly indicating the requirement for Node.js 18+.