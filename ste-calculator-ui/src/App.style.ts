import { css } from "@emotion/react";
import { colors, transition } from "./theme.style";

export const layout = ({ background }: { background: string }) => css`
  height: 100vh;
  &:before {
    content: "";
    z-index: -1;
    background-image: url(${background});
    background-size: cover;
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    transition: all ${transition};
    opacity: 0;
    ${background ? `opacity: 1` : ""}
  }
`;

export const headerStyle = css`
  display: flex;
  justify-content: flex-end;
  height: 83px;
`;

export const container = css`
  padding: 24px;
  display: flex;
  justify-content: center;
`;

export const wrapper = ({ color }: { color: string }) => css`
  justify-content: flex-start;
  max-width: 540px;
  flex-direction: column;
  display: flex;
  flex: 0 1 auto;
  width: 100%;
  box-shadow: 0 0 6px hsl(0deg 0% 100% / 16%);
  border-radius: 27px;
  background-color: #19202b;
  border: 6px solid ${color ? colors[color] : colors.yellow};
  padding: 24px;
  transition: border-color ${transition};
`;

export const buttonStyle = css`
  color: ${colors.black};
  border: 10px solid ${colors.yellow}!important;
  height: 42px;
  padding: 8px 8px !important;
  font-size: 13px;
  min-width: 175px;
  box-shadow: none;
  font-weight: bold;
  border-radius: 27px;
  text-transform: initial;
  background-color: ${colors.yellow}!important;

  :hover {
    box-shadow: 0px 0px 10px ${colors.yellow}!important;
    background-color: ${colors.yellow}!important;
  }
`;

export const inputContainer = css`
  border-radius: 21px;
  background-color: #10161e;
  border: 2px solid #fff;
  input {
    font: inherit;
    color: ${colors.white};
    width: 100%;
    border: none;
    height: 32px;
    margin: 0;
    display: block;
    padding: 6px 20px 4px;
    min-width: 0;
    background: none;
    box-sizing: content-box;
    font-family: "Raleway", sans-serif;
    border-color: inherit;
    border-radius: 21px;
    animation-name: mui-auto-fill-cancel;
    letter-spacing: inherit;
    background-color: #10161e;
    animation-duration: 10ms;
    -webkit-tap-highlight-color: transparent;
  }
`;

export const formControl = css`
  padding-bottom: 24px;
`;

export const detailsContainer = ({ color }: { color: string }) => css`
  display: flex;
  flex: 0 1 auto;
  flex-direction: column;
  color: ${colors.hasOwnProperty(color) ? colors[color] : "inherit"};
}
`;
export const detailsRow = css`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
}
`;

export const divider = css`
  background-color: ${colors.gray};
`;

export const paddingTop = css`
  padding-top: 24px;
`;
export const paddingBottom = css`
  padding-bottom: 24px;
`;

export const rowMarginBottom = css`
  margin-bottom: 5px;
`;

export const buttonSpinner = css`
  color: ${colors.black};
`;

export const spinner = css`
  color: ${colors.yellow};
`;

export const center = css`
  display: flex;
  justify-content: center;
`;

export const bold = css`
  font-weight: 700;
`;

export const messageWrapper = css`
  display: flex;
  align-items: center;
  padding: 8px 8px 8px 18px;
  border: 2px solid ${colors.red};
  font-weight: 700;
  border-radius: 14px;
  font-size: 12px;
  margin-top: 24px;
`;

export const errorIcon = css`
  color: ${colors.red};
  padding-right: 16px;
`;

export const factionWrapper = css`
  ${center}
  flex-direction: column;
  text-align: center;
`;
