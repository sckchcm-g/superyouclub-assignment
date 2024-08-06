# React Affiliate Marketing Application (Assignment)

This is a React-based affiliate marketing application as per the provided specifications. It includes basic user authentication, a dashboard to view sales and rewards, and an item description page. The application uses Context API for global state management and Axios for API interactions.

## Features

1. **Home Page**: 
    - Introduction to the application.
    - Dummy login form for authentication based on credentials stored in a JSON file.
    
2. **Landing Dashboard** (post-login):
    - User info card showing the user’s name and profile picture.
    - Displays total sales and rewards earned.
    - Lists all sales with details such as brand, sales value, purchase date, and reward points.
    - Search functionality for items.
    - Sort functionality by reward value and date.
    - Each item card redirects to the description page.

3. **Item Description Page**:
    - Displays a description card for the selected item.
    - Includes a back button to return to the dashboard.

## Tech Stack

- **Frontend**: React+Vite, Axios
- **Styling**: Tailwind CSS (with DaisyUI)
- **API Mocking**: Mock API from [mocki.io](https://mocki.io/v1/ec011261-631e-46e3-95d9-ad5e0802c28d)

## Installation and Setup

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/sckchcm-g/superyourclub-task
    ```

2. **Install Dependencies**:
    ```bash
    npm install
    ```

3. **Run the Application**:
    ```bash
    npm run dev
    ```

    This will start the development server. Open `http://localhost:5173` in your browser to view the application.

## Usage

- **Login**: Use the dummy credentials to log in:
    - Email: `johndoe@gmail.com`
    - Password: `password`

- **Dashboard**: After logging in, view the dashboard which displays user information, sales data, and provides options to search and sort the sales list.

- **Item Description**: Click on any item card to view its detailed description and use the back button to return to the dashboard.

## Contact

For any questions or issues, please contact [saksham.gupta@kalvium.community](mailto:saksham.gupta@kalvium.community).
