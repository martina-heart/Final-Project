import React from "react";
import Context from "./Context";

const withContext = (WrappedComponent) => {
  const WithHOC = (props) => {
    return (
      <Context.Costumer>
        {(context) => <WrappedComponent {...props} context={context} />}
      </Context.Costumer>
    );
  };
  return WithHOC;
};

export default withContext;
