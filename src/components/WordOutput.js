/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const WordOutput = ({ letterState, word, disabled }) => (
  <div css={styles} className="word">
    <p>
      {word.split("").map((letter, index) => {
        let color = "#bbadd9";
        if (letter === letterState[index] && letterState[index]) {
          color = "#37fd37";
        } else if (letter !== letterState[index] && letterState[index]) {
          color = "red";
        }
        return (
          <span key={index} style={{ color: color }}>
            {disabled && letter}
          </span>
        );
      })}
    </p>
  </div>
);

const styles = css`
  background: #463973;
  color: #bbadd9;
  padding: 0 20px;
  height: 50px;
  border-radius: 4px;
  margin: 0 0 30px 0;
  display: flex;
  align-items: center;
  p {
    color: #9380d6;
    font-weight: 600;
    span {
      font-weight: 500;
    }
  }
`;

export default WordOutput;
