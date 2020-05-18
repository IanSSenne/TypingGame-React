/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const Result = ({ time, cpmResult }) => (
  <div css={styles} className="result">
    <p>
      Time: <span>{time}</span>
    </p>
    <p>
      CPM: <span>{cpmResult === null ? 0 : cpmResult}</span>
    </p>
  </div>
);

const styles = css`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 14px 0;
  p {
    font-size: 22px;
    color: #bbadd9;
    font-weight: 500;
    span {
      color: #37fd37;
    }
  }
`;

export default Result;
