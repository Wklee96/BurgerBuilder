import React, { Component } from "react";
import { connect } from "react-redux";

import Button from "../../../components/UI/Button/Button";
import Spinner from "../../../components/UI/Spinner/Spinner";
import classes from "./ContactData.module.css";
import axios from "../../../axios-orders";
import Input from "../../../components/UI/Input/Input";
import withErrorHandler from "../../../hoc/withErrorHandler/withErrorHandler";
import * as actions from "../../../store/actions/actions";
import { updateObject } from "../../../shared/utility";

class ContactData extends Component {
  state = {
    orderForm: {
      name: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Your Name"
        },
        value: "",
        validation: {
          required: true,
          minLength: 3,
          errorMessage: "Name must have more than 3 characters"
        },
        valid: false,
        touched: false
      },
      street: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Your Street"
        },
        value: "",
        validation: {
          required: true,
          errorMessage: "Fill in the required fields"
        },
        valid: false,
        touched: false
      },
      zip: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Zip"
        },
        value: "",
        validation: {
          required: true,
          minLength: 4,
          maxLength: 6,
          errorMessage: "Zip code must be 4-6 digits"
        },
        valid: false,
        touched: false
      },
      country: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Country"
        },
        value: "",
        validation: {
          required: true,
          errorMessage: "Fill in the required fields"
        },
        valid: false,
        touched: false
      },
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "Your Email"
        },
        value: "",
        validation: {
          required: true,
          errorMessage: "Fill in the required fields"
        },
        valid: false,
        touched: false
      },
      deliveryMethod: {
        elementType: "select",
        elementConfig: {
          options: [
            {
              value: "fastest",
              displayValue: "fastest"
            },
            {
              value: "cheapest",
              displayValue: "cheapest"
            }
          ]
        },
        validation: {
          required: false,
          errorMessage: null
        },
        valid: true,
        value: "fastest",
        touched: false
      }
    },
    formIsValid: false
  };

  orderHandler = event => {
    event.preventDefault()
    const formData = {};
    Object.keys(this.state.orderForm).map(
      keys => (formData[keys] = this.state.orderForm[keys].value)
    );
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.totalPrice,
      orderData: formData,
      userId: this.props.userId
    };

    this.props.onOrderBurger(order, this.props.token);
  };

  checkValidity = (value, rules) => {
    let isValid = true;
    
    if (rules.required) {
      isValid = value.trim() !== "" && isValid;
    }

    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    } 

    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
    }

    return isValid;
  }

  inputChangedHandler = (event, inputIdentifier) => {
    const updatedFormElement = updateObject(this.state.orderForm[inputIdentifier], 
      {value: event.target.value,
      valid: this.checkValidity(event.target.value, this.state.orderForm[inputIdentifier].validation),
      touched: true
      });
      const updatedOrderForm = updateObject(this.state.orderForm, {
        [inputIdentifier]: updatedFormElement
      })
    updatedOrderForm[inputIdentifier] = updatedFormElement;
    
    let formIsValid = true;
    for (let inputIdentifiers in updatedOrderForm) {
      formIsValid = updatedOrderForm[inputIdentifiers].valid && formIsValid;
    }
    
    this.setState({ orderForm: updatedOrderForm, formIsValid: formIsValid});
  };

  render() {
    const formElementsArray = [];
    for (let key in this.state.orderForm) {
      formElementsArray.push({
        id: key,
        config: this.state.orderForm[key]
      });
    }

    let form = (
      <form onSubmit={this.orderHandler}>
        {formElementsArray.map(formElement => (
          <Input
            key={formElement.id}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            invalid={!formElement.config.valid}
            touched={formElement.config.touched}
            shouldValidate={formElement.config.validation}
            errorMessage={formElement.config.validation ? formElement.config.validation.errorMessage : null}
            changed={event => this.inputChangedHandler(event, formElement.id)}
          />
        ))}
        <Button btnType="Success" disabled={!this.state.formIsValid}>Order</Button>
      </form>
    );
    if (this.props.loading) {
      form = <Spinner />;
    }
    return (
      <div className={classes.ContactData}>
        <h4>Enter your Contact Data</h4>
        {form}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ingredients: state.burgerBuilder.ingredients,
    totalPrice: state.burgerBuilder.totalPrice,
    loading: state.order.loading,
    token: state.auth.token,
    userId: state.auth.userId
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onOrderBurger: (orderData, token) => dispatch(actions.purchaseBurger(orderData, token))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(ContactData, axios));
 