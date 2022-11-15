# Product-API 1.0.0

### Table of Contents
* [Technologies Used](#technologies-used)
* [Setup](#setup)
* [Endpoints](#endpoints)
  * [Swagger UI](#swagger-ui)  
  * [Create Product](#create-product) 
  * [List of Products](#list-of-products)
  * [One Product Details](#one-product-details)
  * [Update Product](#update-product)
  * [Remove Product](#remove-product)

### Technologies Used
- NestJS
- TypeScript
- MySQL 2
- TypeORM
- Swagger

### Setup
Rename the file `config/config.example.ts` to `config/config.ts` and enter the correct data to connect with your database.

To run this project, install it locally using yarn:

```
$ cd ../product-api
$ yarn add
$ yarn run
```

## Endpoints

----
> #### Swagger UI
SwaggerModule automatically reflects all endpoints.

* **URL**

  /api

----
> #### Create Product
Returns json data about created product.

* **URL**

  /api/products

* **Method:**

  `POST`

*  **Request Body**

   **Required:**

   `{
   "name": "string",
   "price": number
   }`

* **Success Response:**

    * **Code:** 201 <br />
      **Content:** `{
      "name": "produkt1",
      "price": 123.45,
      "id": "aa80b05a-5288-48c3-9373-86f02bce1bc1",
      "updateDate": "2022-11-15T20:53:46.000Z"
      }`

* **Error Response:**

    * **Code:** 400 BAD REQUEST <br/>

----
> #### List of Products
Returns json data about a list of products.

* **URL**

  /api/products

* **Method:**

  `GET`

* **Request body**

   **NONE**

* **Success Response:**

    * **Code:** 200 <br />
      **Content:** `[{
      "id": "aa80b05a-5288-48c3-9373-86f02bce1bc1",
      "name": "produkt1",
      "price": 123.45,
      "updateDate": "2022-11-15T20:53:46.000Z"
      },
  {
      "id": "a6f5b060-4c00-4b95-96a1-423e4471ea01",
      "name": "product2",
      "price": 123.45,
      "updateDate": "2022-11-15T20:55:36.000Z"
      }
  ]`

* **Error Response:**

    * **Code:** 400 BAD REQUEST <br/>

----
> #### One Product Details
Returns json data about one product.

* **URL**

  /api/products/:id

* **Method:**

  `GET`
*  **URL Params**

   **Required:**

   `id = string`

* **Success Response:**

    * **Code:** 200 <br />
      **Content:** `{
      "id": "aa80b05a-5288-48c3-9373-86f02bce1bc1",
      "name": "product1",
      "price": 123.45,
      "updateDate": "2022-11-15T20:53:46.000Z"
      }`

* **Error Response:**

    * **Code:** 400 BAD REQUEST <br/>
----
> #### Update Product
Returns json data about updated product.

* **URL**

  /api/products

* **Method:**

  `PUT`

* **Request Body**

   **Required:**

   `{
   "id": "string"
   "name": "string",
   "price": number
   }`

* **Success Response:**

    * **Code:** 201 <br />
      **Content:** `{
      "name": "product1 updated",
      "price": 12345.45,
      "id": "aa80b05a-5288-48c3-9373-86f02bce1bc1",
      "updateDate": "2022-11-15T21:12:36.000Z"
      }`

* **Error Response:**

    * **Code:** 400 BAD REQUEST <br/>

----
> #### Remove Product
Returns json data about removed product.

* **URL**

  /api/products/:id

* **Method:**

  `DELETE`
*  **URL Params**

   **Required:**

   `id = string`

* **Success Response:**

    * **Code:** 200 <br />
      **Content:** `{
      "id": "aa80b05a-5288-48c3-9373-86f02bce1bc1",
      "name": "product1 updated",
      "price": 12345.45,
      "updateDate": "2022-11-15T21:12:08.000Z"
      }`

* **Error Response:**

    * **Code:** 400 BAD REQUEST <br/>
  