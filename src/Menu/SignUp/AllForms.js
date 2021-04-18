import React from "react";

import { AccountBox } from "../SignUp/accountBox";
import LogInContainer from "../SignUp/Form";

function AllForms() {
  return (
    <div>
      <LogInContainer>
        <AccountBox />
      </LogInContainer>
    </div>
  );
}

export default AllForms;
