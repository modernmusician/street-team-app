import Color from 'color';
import PropTypes from 'prop-types';
import React from 'react';
import { Button } from 'react-bootstrap';
import { MdLibraryMusic } from 'react-icons/md';
import { Icon } from '../Icon';
import styled from 'styled-components';
import { cleanUrl } from '../../../utils/sharedUtils';
import { useGradient } from '../../../Hooks/useGradient';

const PointsContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  background: ({ color }) => color,
  padding: '0px 25px 5px 25px',
  color: 'inherit',
  fontSize: ({ theme }) => theme.fontSizes.sm,
  minHeight: '100%',
});

// eslint-disable-next-line no-unused-vars
const ActionButtonContainer = styled(({ textColor, ...props }) => (
  <Button {...props} />
))(({ color, textColor, isDisabled }) => {
  const fontColor = Color(textColor);

  return {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    borderRadius: '0px',
    background: useGradient({ color, customLighten: 0.05, customDarken: 0.4 }),
    border: 'none',
    padding: 0,
    margin: 0,
    height: '71px',
    color: fontColor.hex(),
    '&:hover, &:focus, &:active': {
      color: fontColor,
      background: useGradient({ color, customLighten: 0.2, customDarken: 0.2 }),
      [PointsContainer]: {
        background: Color(color).darken(0.1),
      },
    },
    ...(isDisabled && {
      color: fontColor,
      opacity: 0.35,
      '&:hover': {
        color: fontColor,
      },
    }),
  };
});

const ContentContainer = styled.div({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  padding: '15px',
  minHeight: '100%',
});

const Points = styled.p(({ theme }) => {
  return {
    fontFamily: theme.fonts.primary,
    fontWeight: theme.fontWeights.bold,
    fontSize: theme.fontSizes.xxl,
    margin: 0,
    color: 'inherit',
  };
});

const Title = styled.p(({ theme }) => {
  return {
    textAlign: 'left',
    wordWrap: 'break-word',
    fontSize: theme.fontSizes.sm,
    fontWeight: theme.fontWeights.bold,
    margin: 0,
    marginLeft: '15px',
    color: 'inherit',
  };
});

const ButtonIcon = styled(Icon)(({ textColor }) => {
  const color = Color(textColor);
  return {
    color: color.hex(),
    '&:hover': {
      color: color.negate().hex(),
    },
  };
});

export const ActionButton = ({
  backgroundColor,
  preActionText,
  postActionText,
  targetURL,
  buttonIcon,
  pointValue,
  textColor,
  state,
  id,
  handleAction,
}) => {
  const complete = state?.find(item => item.id === id)?.complete;

  // All external links should be A tags
  const handleOnClick = () => {
    if (!complete) {
      handleAction(id);
    }
    if (targetURL) {
      const cleanUrlString = cleanUrl(targetURL);
      window.open(cleanUrlString, '_blank');
    }
  };

  return (
    <ActionButtonContainer
      color={backgroundColor}
      textColor={textColor}
      isDisabled={complete}
      onClick={handleOnClick}
    >
      <ContentContainer>
        {buttonIcon ? (
          <ButtonIcon size={35} name={buttonIcon} textColor={textColor} />
        ) : (
          <ButtonIcon as={MdLibraryMusic} />
        )}
        <Title>{complete ? postActionText : preActionText}</Title>
      </ContentContainer>
      <PointsContainer color={backgroundColor}>
        <Points>{pointValue}</Points>
        points
      </PointsContainer>
    </ActionButtonContainer>
  );
};

ActionButton.propTypes = {
  buttonIcon: PropTypes.string,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  targetURL: PropTypes.string,
  postActionText: PropTypes.string,
  preActionText: PropTypes.string,
  pointValue: PropTypes.number,
  state: PropTypes.arrayOf(PropTypes.shape({})),
  id: PropTypes.string,
  handleAction: PropTypes.func,
};

ActionButton.defaultProps = {
  buttonIcon: null,
  backgroundColor: 'rgb(151, 79, 248)',
  textColor: null,
  targetURL: null,
  postActionText: null,
  preActionText: null,
  state: null,
  id: null,
  pointValue: 0,
  handleAction: () => {},
};
