import React, { useState } from 'react';
import styled from 'styled-components';

export default function RevealButton() {
  const [isClicked, setIsClick] = useState(false);
  const [randomPic, setRandomPic] = useState('');
  const colors = [
    'https://www.pngall.com/wp-content/uploads/5/Red-Ball-PNG-Images.png',
    'https://b.kisscc0.com/20180705/akw/kisscc0-six-red-snooker-tennis-balls-blue-snooker-ball-5b3d9d59c89718.7352428015307646338216.png'
  ];

  const randomIntFromInterval = (min, max) => (
    Math.floor(Math.random() * (max - min + 1) + min)
  );

  const showPicture = () => {
    setIsClick(true);
    const randomNum = randomIntFromInterval(0, 1);
    setRandomPic(colors[randomNum]);
  };

  return (
    <Wrapper>
      {!isClicked && (
        <Button type="button" onClick={showPicture}>Click Me For A Ball!</Button>
      )}
      {isClicked && (
        <img src={randomPic} alt="A Colored Ball" hieght={200} width={200} />
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  background: #EAE8E4;
  color: #2D2D2D;
  font-size: 1.5em;
  margin: 1em;
  padding: 1.25em 1em;
  border: 2px solid #2D2D2D;
  border-radius: 15px;
  &:hover {
    box-shadow: 0 0 6px gray}
  };
`;
