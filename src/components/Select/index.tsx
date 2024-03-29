import React, { SelectHTMLAttributes } from "react";

import * as Styled from "./styles";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  label: string;
  options: Array<{
    value: string;
    label: string;
  }>;
}

const Select: React.FC<SelectProps> = ({ label, name, options, ...rest }) => {
  return (
    <Styled.SelectComponent className="select-block">
      <label htmlFor={name}> {label} </label>
      <select id={name} {...rest} defaultValue="">
        <option value="" disabled hidden>
          Selecione uma opção
        </option>
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </select>
    </Styled.SelectComponent>
  );
};

export default Select;
