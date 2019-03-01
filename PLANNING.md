# PLANNING
This project is intended to be a website where customers can place orders for pick up at markets where Tumbleweed Bakehouse has booths. As of this writing, the project will focus on the Admin side. It will allow admin users to view and manage customers, orders, and products.

## Specifications

### ADMIN USE CASES
#### Admin can manage Customers
  * View all Customers
  * Add a Customer
    * Enter Name
    * Enter Phone number
    * Enter Email address
    * Enter Postal code
  * Edit a Customer
    * Edit Name
    * Edit Phone number
    * Edit Email address
    * Edit Postal code
  * Delete a Customer


#### Admin can manage Products
  * View all Products
  * Add a Product
  * Edit a Product
  * Delete a Product


#### Admin can manage Orders
  * View all Orders
  * Add an Order
    * Enter Customer
    * Add Product
  * Edit an Order
    * Add Product
    * Remove Product
  * Delete an Order


### ORDERS:
- Order number
- Customer
- List of Products ordered
- Quantities for each Product ordered
- Subtotal for each Product ordered
- Order total
- Status: pending/complete


Orders will display the following . . .
- Customer
  * Name
  * Phone
  * Email


- Products
  * Name
  * Price
  * Quantity ordered
  * SubTotal


- Order
  * Order total
  * Pickup location
  * Pickup date & time
