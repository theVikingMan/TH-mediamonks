import React, { useState } from 'react';
import styled from 'styled-components';

export default function RevealButton({
  name,
  setName,
  inputName,
  setInputName,
  setBallNum,
  ballNum
}) {
  const [isClicked, setIsClick] = useState(false);
  const [randomPic, setRandomPic] = useState('');
  const colors = [
    'https://www.pngall.com/wp-content/uploads/5/Red-Ball-PNG-Images.png',
    'https://b.kisscc0.com/20180705/akw/kisscc0-six-red-snooker-tennis-balls-blue-snooker-ball-5b3d9d59c89718.7352428015307646338216.png',
  ];

  const randomIntFromInterval = (min, max) => (
    Math.floor(Math.random() * (max - min + 1) + min)
  );

  const showPicture = () => {
    setIsClick(true);
    const randomNum = randomIntFromInterval(0, 1);
    setRandomPic(colors[randomNum]);
    const userName = inputName || 'Monker';
    document.cookie = `${userName}=${randomNum}`;
  };

  return (
    <Wrapper>
      <div>
        {(!isClicked && ballNum === undefined) && (
          <NameForm>
            <label htmlFor="name">
              Name:
              <input
                id="name"
                type="text"
                value={inputName}
                placeholder="Enter your name..."
                onChange={(e) => {
                  setInputName(e.target.value);
                }}
              />
            </label>
            <br />
            <Button
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                setName(inputName);
                showPicture(inputName);
              }}
            >
              Click Me For A Ball!
            </Button>
          </NameForm>
        )}
        {(isClicked || ballNum !== undefined) && (
          <img src={colors[ballNum % 2]} alt="A Colored Ball" padding={100} hieght={200} width={200} />
        )}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const NameForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  display: flex;
  flex-direction: column;
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
