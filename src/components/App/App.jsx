import React from "react";
import Header from "./../Header/Header";
import Admin from "./../Admin/Admin";
import Customer from "./../Customers/Customer";
import Customers from "./../Customers/Customers";
import Locution from "./../Locations/Location";
import Locations from "./../Locations/Locations";
import Order from "./../Orders/Order";
import Orders from "./../Orders/Orders";
import Product from "./../Products/Product";
import Products from "./../Products/Products";
import { Route, Switch } from "react-router-dom";
import { masterCustomerList } from "./masterCustomerList";
import { masterLocationList } from "./masterLocationList";
import { masterOrderList } from "./masterOrderList";
import { masterProductList } from "./masterProductList";
import "./../../assets/css/globalStyles.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      customerList: masterCustomerList,
      locationList: masterLocationList,
      orderList: masterOrderList,
      productList: masterProductList
    }

    this.handleAddingNewCustomer = this.handleAddingNewCustomer.bind(this);
    this.handleDeletingCustomer = this.handleDeletingCustomer.bind(this);
    this.handleEditingCustomer = this.handleEditingCustomer.bind(this);

    this.handleAddingNewProduct = this.handleAddingNewProduct.bind(this);
    this.handleDeletingProduct = this.handleDeletingProduct.bind(this);
    this.handleEditingProduct = this.handleEditingProduct.bind(this);

    this.handleAddingNewLocation = this.handleAddingNewLocation.bind(this);
    this.handleDeletingLocation = this.handleDeletingLocation.bind(this);
    this.handleEditingLocation = this.handleEditingLocation.bind(this);

    this.handleAddingNewOrder = this.handleAddingNewOrder.bind(this);
    this.handleDeletingOrder = this.handleDeletingOrder.bind(this);
    this.handleEditingOrder = this.handleEditingOrder.bind(this);
  }

  componentDidMount() {
    fetch('http://localhost:3000/customers')
      .then(response => response.json())
      .then(customerList => this.setState({ customerList }));
  }

  render() {
    console.log("App state: ", this.state);
    return (
      <div>
        <Header />
        <Switch>
          <Route
            exact path="/admin"
            render={(props) => <Admin {...props}
              customers={this.state.customerList}
              onAddingNewCustomer={this.handleAddingNewCustomer}
              locations={this.state.locationList}
              onAddingNewLocation={this.handleAddingNewLocation}
              orders={this.state.orderList}
              onAddingNewOrder={this.handleAddingNewOrder}
              products={this.state.productList}
              onAddingNewProduct={this.handleAddingNewProduct} />}
          />

          <Route
            exact path="/admin/customers"
            render={(props) => <Customers {...props}
              customers={this.state.customerList}
              onAddingNewCustomer={this.handleAddingNewCustomer}
              onDeletingCustomer={this.handleDeletingCustomer} />}
          />

          <Route
            exact path={"/admin/customers/:id"}
            render={(props) => <Customer {...props}
              customers={this.state.customerList}
              onDeletingCustomer={this.handleDeletingCustomer}
              onEditCustomer={this.handleEditingCustomer} />}
          />

          <Route
            exact path="/admin/locations"
            render={(props) => <Locations {...props}
              locations={this.state.locationList}
              onAddingNewLocation={this.handleAddingNewLocation}
              onDeletingLocation={this.handleDeletingLocation} />}
          />

          <Route
            path={"/admin/locations/:locationId"}
            render={(props) => <Locution {...props}
              locations={this.state.locationList}
              onDeletingLocation={this.handleDeletingLocation}
              onEditLocation={this.handleEditingLocation} />}
          />

          <Route
            exact path="/admin/products"
            render={(props) => <Products {...props}
              products={this.state.productList}
              onAddingNewProduct={this.handleAddingNewProduct}
              onDeletingProduct={this.handleDeletingProduct} />}
          />

          <Route
            exact path={"/admin/products/:productId"}
            render={(props) => <Product {...props}
              products={this.state.productList}
              onDeletingProduct={this.handleDeletingProduct}
              onEditProduct={this.handleEditingProduct} />}
          />

          <Route
            exact path="/admin/orders"
            render={(props) => <Orders {...props}
              orders={this.state.orderList}
              onAddingNewOrder={this.handleAddingNewOrder}
              onDeletingOrder={this.handleDeletingOrder} />}
          />

          <Route
            exact path={"/admin/orders/:orderId"}
            render={(props) => <Order {...props}
              orders={this.state.orderList}
              onDeletingOrder={this.handleDeletingOrder}
              onEditOrder={this.handleEditingOrder} />}
          />
        </Switch>
      </div>
    );
  }


  handleAddingNewCustomer(newCustomer) {
    fetch('/customers', {
      method: 'POST',
      data: newCustomer
    })
      .then(function (response) {
        return response.json()
      }).then(function (body) {
        console.log(body);
      });

    // let newCustomerList = Object.assign({}, this.state.customerList, {
    //   [newCustomer.id]: newCustomer
    // });
    // this.setState({ customerList: newCustomerList });
  }


  // handleAddingNewCustomer(newCustomer) {
  //   let newCustomerList = Object.assign({}, this.state.customerList, {
  //     [newCustomer.id]: newCustomer
  //   });
  //   this.setState({ customerList: newCustomerList });
  // }

  handleDeletingCustomer(deleteThisCustomer) {
    let newCustomerList = Object.assign({}, this.state.customerList);

    for (let key in newCustomerList) {
      if (key === deleteThisCustomer) {
        delete newCustomerList[deleteThisCustomer];
      }
    }
    this.setState({ customerList: newCustomerList });
  }

  handleEditingCustomer(editThisCustomer) {
    this.handleDeletingCustomer(editThisCustomer);
    this.handleAddingNewCustomer(editThisCustomer);
  }


  handleAddingNewLocation(newLocation) {
    let newLocationList = Object.assign({}, this.state.locationList, {
      [newLocation.id]: newLocation
    });
    this.setState({ locationList: newLocationList });
  }

  handleDeletingLocation(deleteThisLocation) {
    let newLocationList = Object.assign({}, this.state.locationList);

    for (let key in newLocationList) {
      if (key === deleteThisLocation) {
        delete newLocationList[deleteThisLocation];
      }
    }
    this.setState({ locationList: newLocationList });
  }

  handleEditingLocation(editThisLocation) {
    this.handleDeletingLocation(editThisLocation);
    this.handleAddingNewLocation(editThisLocation);
  }


  handleAddingNewProduct(newProduct) {
    let newProductList = Object.assign({}, this.state.productList, {
      [newProduct.id]: newProduct
    });
    this.setState({ productList: newProductList });
  }

  handleDeletingProduct(deleteThisProduct) {
    let newProductList = Object.assign({}, this.state.productList);

    for (let key in newProductList) {
      if (key === deleteThisProduct) {
        delete newProductList[deleteThisProduct];
      }
    }
    this.setState({ productList: newProductList });
  }

  handleEditingProduct(editThisProduct) {
    this.handleDeletingProduct(editThisProduct);
    this.handleAddingNewProduct(editThisProduct);
  }


  handleAddingNewOrder(newOrder) {
    let newOrderList = Object.assign({}, this.state.orderList, {
      [newOrder.id]: newOrder
    });
    this.setState({ orderList: newOrderList });
  }

  handleDeletingOrder(deleteThisOrder) {
    let newOrderList = Object.assign({}, this.state.orderList);

    for (let key in newOrderList) {
      if (key === deleteThisOrder) {
        delete newOrderList[deleteThisOrder];
      }
    }
    this.setState({ orderList: newOrderList });
  }

  handleEditingOrder(editThisOrder) {
    this.handleDeletingOrder(editThisOrder);
    this.handleAddingNewOrder(editThisOrder);
  }

}

export default App;
