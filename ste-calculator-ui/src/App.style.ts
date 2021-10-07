import { css } from "@emotion/react";
import { colors } from "./theme.style";

export const headerStyle = css`
  display: flex;
  justify-content: flex-end;
  padding-bottom: 40px;
`;

export const container = css`
  padding: 24px;
  max-width: 540px;
  margin: 0 auto;
`;

export const wrapper = css`
  justify-content: flex-start;
  flex-direction: column;
  display: flex;
  flex: 0 1 auto;
  width: 100%;
  box-shadow: 0 0 6px hsl(0deg 0% 100% / 16%);
  border-radius: 27px;
  background-color: #19202b;
  border: 6px solid ${colors.yellow};
  padding: 24px;
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

  .MuiButton-containedPrimary:hover {
    box-shadow: 0px 0px 10px ${colors.yellow}!important
    background-color: ${colors.yellow}!important
  }
`;

export const inputContainer = css`
  border-radius: 21px;
  background-color: #10161e;
  border: 2px solid #fff;
  input {
    font: inherit;
    color: #ffffff;
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

export const detailsContainer = css`
  display: flex;
  flex: 0 1 auto;
  flex-direction: column;
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
