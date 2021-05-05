import styled from "styled-components";
import { CheckboxProps, scales } from "./types";

const getScale = ({ scale }: CheckboxProps) => {
  switch (scale) {
    case scales.SM:
      return "24px";
    case scales.MD:
    default:
      return "32px";
  }
};

const Checkbox = styled.input.attrs({ type: "checkbox" })<CheckboxProps>`
  appearance: none;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  display: inline-block;
  height: ${getScale};
  width: ${getScale};
  vertical-align: middle;
  transition: background-color 0.2s ease-in-out;
  border: 0;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.input};

  &:after {
    content: "";
    position: absolute;
    border-bottom: 2px solid;
    border-left: 2px solid;
    border-color: transparent;
    top: 22%;
    left: 5%;
    right: 10%;
    width: 75%;
    height: 75%;
    margin: auto;
    transform: rotate(-5deg);
    transition: border-color 0.2s ease-in-out;
    background-repeat: no-repeat, no-repeat;
  }

  &:hover:not(:disabled):not(:checked) {
    box-shadow: ${({ theme }) => theme.shadows.yellow};
  }

  &:focus {
    outline: none;
    box-shadow: ${({ theme }) => theme.shadows.yellow};
  }

  &:checked {
    background-color: ${({ theme }) => theme.colors.yellow};
    &:after {
  
      background-image: url('data:image/svg+xml, <svg viewBox="0 0 14 12" fill="white" xmlns="http://www.w3.org/2000/svg">
<path d="M13.7415 0.205895C13.4024 -0.0740428 12.8839 -0.0553803 12.5648 0.261883L4.9466 8.1188L1.35686 5.35675C1.07766 5.1328 0.658854 5.11414 0.359709 5.31943C-0.0192087 5.56204 -0.0989808 6.04726 0.160278 6.40185L3.88962 11.3847C3.98934 11.5154 4.12894 11.646 4.26854 11.7393C4.96655 12.1872 5.92381 12.0193 6.40244 11.3661L6.46227 11.2914L13.8611 1.21367C14.1004 0.896408 14.0406 0.46717 13.7415 0.205895Z" fill="white"/>
</svg>
')};
      background-repeat: no-repeat, no-repeat;


    }
  }

  &:disabled {
    cursor: default;
    opacity: 0.6;
  }
`;

Checkbox.defaultProps = {
  scale: scales.MD,
};

export default Checkbox;
