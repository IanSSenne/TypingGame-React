/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const StartBtn = ({ disabled, setDisabled }) => (
  <a href="#/" css={styles} onClick={() => setDisabled(!disabled)}>
    {disabled ? "Restart" : "Start"}
  </a>
);

const styles = css`
  margin: 30px 0 0 0;
  text-decoration: none;
  display: inline-block;
  text-align: center;
  align-self: flex-end;
  color: #bbadd9;
  background: #463973;
  width: 120px;
  padding: 14px 0;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  transition: background 600ms ease-in-out;
  &:hover {
    background: #362b5a;
  }
`;

export default StartBtn;
