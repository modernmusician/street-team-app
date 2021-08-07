import React from 'react';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import styled from 'styled-components';

const TotalPointsContainer = styled.div({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  background: ({ theme }) => theme.colors.gray1,
});

const PointsContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  color: ({ theme }) => theme.colors.white,
  background: ({ theme }) => theme.colors.primary,
  height: '90px',
  width: '78px',
  fontSize: ({ theme }) => theme.fontSizes.sm,
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

export const ActionTotalPoints = ({ totalPoints }) => {
  return (
    <TotalPointsContainer>
      <PointsContainer>
        <Points>{totalPoints}</Points>
        points
      </PointsContainer>
    </TotalPointsContainer>
  );
};

ActionTotalPoints.propTypes = {
  totalPoints: PropTypes.number,
};

ActionTotalPoints.defaultProps = {
  totalPoints: 0,
};
