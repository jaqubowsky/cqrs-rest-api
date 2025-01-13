# cqrs-rest-api

## Overview

This project is a REST API built using the CQRS (Command Query Responsibility Segregation) pattern. It is designed to handle product and order management, providing endpoints for creating, updating, and retrieving products and orders.

## Table of Contents

- [Getting Started](#getting-started)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)

## Getting Started

Follow these instructions to set up and run the project on your local machine.

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/jaqubowsky/cqrs-rest-api.git
   ```

2. **Navigate to the project directory**:
   ```bash
   cd cqrs-rest-api
   ```

3. **Install the dependencies**:
   ```bash
   npm install
   ```

### Running the Application

- **Development Mode**:
  ```bash
  npm run start:dev
  ```

### Environment Variables

Create a `.env` file in the root directory and add the following variables:

```bash
PORT=3000
DB_FILE_NAME="db.json"
```

### API Endpoints

- **Products**
  - `[GET] /api/v1/products`: Retrieve all products.
  - `[POST] /api/v1/products`: Create a new product.
  - `[PUT] /api/v1/products/:id/restock`: Restock a product.
  - `[PUT] /api/v1/products/:id/sell`: Sell a product.

- **Orders**
  - `[POST] /api/v1/orders`: Create a new order.
