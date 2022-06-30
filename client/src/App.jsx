/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import RevealButton from './components/RevealButton.jsx';

export default function App() {
  const [name, setName] = useState('');
  const [inputName, setInputName] = useState('');
  const [ballNum, setBallNum] = useState();
  const [seen, setSeen] = useState(0);

  useEffect(() => {
    const cookie = document.cookie.split('=');
    const cookieValue = cookie[1];
    setName(cookie[0] || 'Monker');
    if (cookieValue !== undefined) {
      const newValue = parseInt(cookieValue, 10) + 2;
      document.cookie = `${cookie[0]}=${newValue}`;
      setSeen(Math.ceil(parseInt(cookieValue, 10) / 4))
      if (parseInt(cookieValue, 10) === 0 || parseInt(cookieValue, 10) === 1) {
        setSeen(1);
      }
    }
    if (ballNum === undefined) {
      setBallNum(cookie[1]);
      // setSeen(parseInt(cookieValue, 10))
    }
  }, [name]);

  return (
    <div>
      <Wrapper>
        <Title>
          Hello {name}
        </Title>
      </Wrapper>
      <Wrapper>
        <Title>
          {name} has seen this color {seen} times
        </Title>
      </Wrapper>
      <RevealButton
        setName={setName}
        name={name}
        inputName={inputName}
        setInputName={setInputName}
        ballNum={ballNum}
        setBallNum={setBallNum}
      />
    </div>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  display: flex;
  flex-direction: row;
  font-size: 2.5em;
`;
