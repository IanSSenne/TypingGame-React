/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useState, useEffect } from "react";
import { useEvent } from "./components/useEvent";
import Container from "./components/Container";
import Result from "./components/Result";
import StartBtn from "./components/StartBtn";
import WordOutput from "./components/WordOutput";
import Keyboard from "./components/Keyboard";
import Keys from "./components/Keys";
import Words from "./components/Words";
import "./App.css";

const App = () => {
  const [letterState, setLetterState] = useState([]);
  const [allWords, setAllWords] = useState(Words);
  const [word, setWord] = useState(allWords[0]);
  const [keys, setKeys] = useState(Keys);
  const [currentKey, setCurrentKey] = useState("");
  const [time, setTime] = useState(15);
  const [charCount, setCharCount] = useState(1);
  const [cpmResult, setCpmResult] = useState(null);
  const [disabled, setDisabled] = useState(false);

  const next = () => {
    setWord(allWords[Math.floor(Math.random() * allWords.length)]);
  };

  useEffect(() => {
    if (time !== 0 && disabled === true) {
      setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (time === 0 || disabled === false) {
      setTime(15);
      setDisabled(false);
      setCpmResult(null);
      setLetterState([]);
    }
  }, [time, disabled]);

  useEvent(
    window,
    "keydown",
    (evt) => {
      const { key } = evt;
      if (disabled === true) {
        setCurrentKey(key);
        setCharCount(charCount + 1);
        setCpmResult(Math.round((charCount / time) * time));
      } else {
        setLetterState([]);
      }

      if (key === "") {
        setCurrentKey("Space");
      }
      if (key === "Shift") {
        setCurrentKey("↑");
      }
      if (key === "Enter") {
        setCurrentKey("↚ ");
      }
      if (key === "Tab") {
        setCurrentKey("⇆");
      }
      if (key === "CapsLock") {
        setCurrentKey("caps lock");
      }
      if (key === "\\") {
        setCurrentKey("\\");
      }
      if (key === "'") {
        setCurrentKey("''");
      }
      if (key === "Control") {
        setCurrentKey("ctrl");
      }
      if (key === "Meta") {
        setCurrentKey("♚");
      }
      if (key === "Alt") {
        setCurrentKey("Alt");
      }
      if (key === "ContextMenu") {
        setCurrentKey("fn");
      }
      if (key === "Backspace") {
        setCurrentKey("←");
        setLetterState(letterState.slice(0, letterState.length - 1));
      } else if (key.length === 1 && disabled === true) {
        setLetterState([...letterState, key]);
      }
    },
    undefined,
    [letterState, disabled]
  );

  useEvent(window, "keyup", () => {
    setCurrentKey("");
  });

  useEffect(() => {
    for (let i = 0; i < word.length; i++) {
      if (word[i] != letterState[i]) {
        return;
      }
    }
    setLetterState([]);
    next();
  }, [letterState]);

  return (
    <section css={styles} className="hero">
      <Container>
        <Result time={time} cpmResult={cpmResult} />
        <WordOutput word={word} letterState={letterState} disabled={disabled} />
        <Keyboard keys={keys} currentKey={currentKey} />
        <StartBtn disabled={disabled} setDisabled={setDisabled} />
      </Container>
    </section>
  );
};

const styles = css`
  width: 100%;
  min-height: 100vh;
  background: #625499;
  display: flex;
  .container {
    padding: 30px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 660px;
  }
`;

export default App;
