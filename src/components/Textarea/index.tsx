import React, { TextareaHTMLAttributes } from "react";

import * as Styled from "./styles";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label: string;
}

const Textarea: React.FC<TextareaProps> = ({ label, name, ...rest }) => {
  return (
    <Styled.TextAreaComponent className="textarea-block">
      <label htmlFor={name}> {label} </label>
      <textarea id={name} {...rest} />
    </Styled.TextAreaComponent>
  );
};

export default Textarea;
