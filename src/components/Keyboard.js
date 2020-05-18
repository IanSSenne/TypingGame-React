/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const Keyboard = ({ keys, currentKey }) => {
  let num = 0;
  return (
    <div css={styles} className="keyboard">
      {keys.map((key, index) => (
        <div
          style={{
            borderColor: key === currentKey ? "#2e2640" : "",
            transform: key === currentKey ? "translateY(5px)" : "",
          }}
          className={"key key-" + ++num}
          key={index}
        >
          <p style={{ color: key === currentKey ? "#37fd37" : "" }}>{key}</p>
        </div>
      ))}
    </div>
  );
};

const styles = css`
  width: max-content;
  padding: 5px;
  display: grid;
  grid-gap: 4px;
  grid-template-columns: repeat(14, minmax(50px, auto));
  background: #463973;
  border-color: #2e2640;
  border-style: solid;
  border-width: 8px 10px 15px 10px;
  border-radius: 5px;
  .key {
    width: auto;
    height: 50px;
    padding: 3px;
    background: #463973;
    margin: 3px;
    border-color: #382e59 #2e2640;
    border-style: solid;
    border-radius: 2px;
    border-width: 3px 5px 8px 5px;
    text-align: center;
    cursor: pointer;
    transition: transform 300ms ease-in-out, border-color 300ms ease-in-out;
    &.key-14 {
      grid-column: 14 / span 2;
    }
    &.key-15 {
      grid-row: 2 / span 1;
      grid-column: 1 / span 2;
    }
    &.key-28 {
      grid-row: 2 / span 2;
      grid-column: -1 / span 1;
      width: 64px;
      height: 110px;
    }
    &.key-29 {
      grid-row: 3 / span 1;
      grid-column: 1 / span 2;
    }
    &.key-42 {
      grid-row: 4 / span 1;
    }
    &.key-54 {
      grid-column: -3 / end;
    }
    &.key-58 {
      grid-column: 4 / -3;
    }
    p {
      font-size: 11px;
      font-weight: 700;
      color: #bbadd9;
      user-select: none;
    }
  }
`;

export default Keyboard;
