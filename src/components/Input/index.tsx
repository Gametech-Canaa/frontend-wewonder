import React, { InputHTMLAttributes } from "react";

import * as Styled from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

const Input: React.FC<InputProps> = ({ label, name, ...rest }) => {
  return (
    <Styled.InputComponent className="input-block">
      <label htmlFor={name}> {label} </label>
      <input type="text" id={name} {...rest} />
    </Styled.InputComponent>
  );
};

export default Input;
