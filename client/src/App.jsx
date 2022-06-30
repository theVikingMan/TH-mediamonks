/* eslint-disable import/extensions */
import React from 'react';
import styled from 'styled-components';

import RevealButton from './components/RevealButton.jsx';

export default function App() {
  return (
    <div>
      <Wrapper>
        <Title>
          Hello Monkers!
        </Title>
      </Wrapper>
      <RevealButton />
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
  font-size: 2.5em;
`;

// .mandatory
// {
// background-image:url(/media/img/required.gif);
// background-position:top right;
// background-repeat:no-repeat;
// padding-right:10px;
// font-weight:bold;
// }