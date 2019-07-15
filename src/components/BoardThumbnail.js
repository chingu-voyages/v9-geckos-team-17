import React from 'react';
import styled from 'styled-components';

const Thumbnail = styled.div`
  
  padding: 10px;
  margin: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 3px;
  box-shadow: 0 2px 4px grey;
  width: 250px;
  height: 120px;
  font-weight: bold;
  padding: 5%;
  margin-right: 10px;
  background-color: #2283a0;
`;

const Title = styled.h5`
  color: #ffff;
  text-decoration: none;
  text-transform:capitalize;
`;

const BoardThumbnail = ({ title }) => {
  console.log(title);
  return (
    <Thumbnail>
      <Title>{title}</Title>
    </Thumbnail>
  );
};

export default BoardThumbnail;
