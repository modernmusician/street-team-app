import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledArtistImage = styled.div`
  position: fixed;
  background-image: url(${props => props.imageSrc});
  background-attachment: scroll;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
  display: table-cell;
  -webkit-filter: blur(20px);
  -moz-filter: blur(20px);
  -ms-filter: blur(20px);
  -o-filter: blur(20px);
  filter: blur(20px);
  height: 100%;
  pointer-events: none;
  position: absolute;
  vertical-align: middle;
  width: 100%;
  -ms-transform: scale(1.1);
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
`;

export const ArtistImage = ({ imageUrl }) => {
  return <StyledArtistImage imageSrc={imageUrl} />;
};

ArtistImage.propTypes = {
  imageUrl: PropTypes.string.isRequired,
};
