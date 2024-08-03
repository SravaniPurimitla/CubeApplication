# Customer Details Portal

## Description
This is a single-page application built with React that shows a customer details portal. The portal has a list of customers on the left side and upon clicking a card, the details of the customer are shown on the right side. The customer details include name, title, address, and a 3x3 grid of photos that update every 10 seconds. The customer data is served using `json-server`.

## Features
- Display a list of up to 1000 customers.
- Show customer details when a customer card is clicked.
- Highlight the selected customer card.
- Fetch and display a 3x3 grid of photos that updates every 10 seconds.

## Technologies Used
- React
- JavaScript
- HTML
- CSS
- json-server

## Getting Started

### Prerequisites
- Node.js and npm installed on your machine.
- `json-server` installed globally or locally in your project.

### Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/customer-portal.git
    cd customer-portal
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Start `json-server`:
    ```bash
    npx json-server --watch db.json --port 5000
    ```

4. Start the React application:
    ```bash
    npm start
    ```

The application will run at `http://localhost:3000` and `json-server` will serve the customer data at `http://localhost:5000`.

### Database Setup
Create a `db.json` file in the root directory with the following structure to simulate the customer data:

```json
{
  "customers": [
    {
      "id": 1,
      "name": "Customer 1",
      "title": "Title 1",
      "address": "Address 1"
    },
    {
      "id": 2,
      "name": "Customer 2",
      "title": "Title 2",
      "address": "Address 2"
    },
    ...
  ]
}
