import React, { Component } from "react";
import Modal from "../../components/UI/Modal/Modal";
import Auxiliary from "./../Auxiliary/Auxiliary";

const withErrorHandler = (WrappedComponent, Axios) => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null
      };

      this.reqInterceptor = Axios.interceptors.request.use(req => {
        this.setState({ error: null });
        return req;
      });
      
      this.resInterceptor = Axios.interceptors.response.use(
        res => res,
        error => {
          this.setState({ error: error });
        }
      );
    }

    componentWillUnmount() {
        Axios.interceptors.request.eject(this.reqInterceptor);
        Axios.interceptors.request.eject(this.resInterceptor);
    }

    errorConfirmedHandler = () => {
      this.setState({ error: null });
    };

    render() {
      return (
        <Auxiliary>
          <Modal
            show={this.state.error}
            modalClosed={this.errorConfirmedHandler}
          >
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </Auxiliary>
      );
    }
  };
};

export default withErrorHandler;
