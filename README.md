# Happyusers site with 3D-object

## Technologies used
- **React:** Used to build the user interface and manage component states.
- **Tailwind CSS:** Provides utility CSS for quick styling and responsiveness.
- **Three.js:** A library for rendering 3D graphics, used to create interactive 3D cubes and other objects.
- **React Router:** Controls routing in an application, allowing users to navigate between different pages and interfaces.
  
## Frontend
### Project Desription
Home Page:
- Contains various navigation buttons such as “Textures”, “Lighting”, “Furniture”, “Construction”. Clicking on any of them opens the corresponding menu.
- The logo and basic project information is displayed at the top of the page.

Textures:
- Allows the user to select different textures, such as tiles and paint, for different surfaces. When a texture is selected, it is displayed on a 3D cube so the user can see the result.

3D Cube:
- Presents an interactive cube that can be rotated and customized. 
- Users can select different textures and colors for each face of the cube.

Filter Menu:
- When opened, this part of the menu demonstrates different filtering methods (e.g., sizes, styles) as well as a way to change the color.
- The user can use the enter bar to refine the search.

Navigation:
- The site supports the use of React Router to control routing. When navigating to a non-existent page, users are redirected to a Not Found Page.

**Link to backend part** - https://github.com/DenNice-cloud/Happyusers_back

## Setup Instructions
To run this project locally, follow these steps:

Node.js Version
- v18.20.2

Clone the repository:
```sh
git clone https://github.com/DenNice-cloud/Happyusers.git
cd Happyusers
```

Install dependencies:
```sh
npm install
```

Start the frontend development server:
```sh
npm start
```

Open your browser and navigate to http://localhost:3000 to view the application
