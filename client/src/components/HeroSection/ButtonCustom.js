import * as React from "react";
import PropTypes from "prop-types";
import ButtonUnstyled, {
  buttonUnstyledClasses,
} from "@mui/base/ButtonUnstyled";
import { styled } from "@mui/system";

const ButtonRoot = React.forwardRef(function ButtonRoot(props, ref) {
  const { children, ...other } = props;

  return (
    <svg width="200" height="50" {...other} ref={ref}>
      <polygon points="0,50 0,0 200,0 200,50" className="bg" />
      <polygon points="0,50 0,0 200,0 200,50" className="borderEffect" />
      <foreignObject x="0" y="0" width="200" height="50">
        <div className="content">{children}</div>
      </foreignObject>
    </svg>
  );
});

ButtonRoot.propTypes = {
  children: PropTypes.node,
};

const white = {
  50: "#FFF",
  100: "#FFF",
  200: "#FFF",
  400: "#FFF",
  500: "#FFF",
  600: "#FFF",
  800: "#FFF",
  900: "#FFF",
};

const CustomButtonRoot = styled(ButtonRoot)(
  ({ theme }) => `
  overflow: visible;
  cursor: pointer;
  --main-color: ${theme.palette.mode === "light" ? white[600] : white[100]};
  --hover-color: ${theme.palette.mode === "light" ? white[50] : white[900]};
  --active-color: ${theme.palette.mode === "light" ? white[100] : white[800]};

  & polygon {
    fill: transparent;
    transition: all 800ms ease;
    pointer-events: none;
  }
  
  & .bg {
    stroke: var(--main-color);
    stroke-width: 1;
    filter: drop-shadow(0 4px 20px rgba(0, 0, 0, 0.1));
    fill: transparent;
  }

  & .borderEffect {
    stroke: var(--main-color);
    stroke-width: 2;
    stroke-dasharray: 150 600;
    stroke-dashoffset: 150;
    fill: transparent;
  }

  &:hover,
  &.${buttonUnstyledClasses.focusVisible} {
    .borderEffect {
      stroke-dashoffset: -600;
    }
    
    .bg {
      fill: #f3faff78;
    }
  }

  &:focus,
  &.${buttonUnstyledClasses.focusVisible} {
    outline: 2px solid ${
      theme.palette.mode === "dark" ? white[400] : white[200]
    };
    outline-offset: 2px;
  }

  &.${buttonUnstyledClasses.active} { 
    & .bg {
      fill: transparent;
      transition: fill 300ms ease-out;
    }
  }

  & foreignObject {
    pointer-events: none;
    
    
    & .content {
      font-size: 1.5rem;
      text-transform: none;
      font-family: IBM Plex Sans, sans-serif;
      font-weight: 500;
      line-height: 1.5;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--main-color);
    }
    
    & svg {
      margin: 0 5px;
    }
  }`
);

const SvgButton = React.forwardRef(function SvgButton(props, ref) {
  return <ButtonUnstyled {...props} component={CustomButtonRoot} ref={ref} />;
});

export default function UnstyledButtonCustom() {
  return <SvgButton>Listen Now</SvgButton>;
}
