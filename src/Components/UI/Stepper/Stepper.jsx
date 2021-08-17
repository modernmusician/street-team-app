import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { StepperItem } from './StepperItem';

const StepperContainer = styled.div({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const StepperRule = styled.div({
  height: '3px',
  width: '100%',
  background: ({ theme }) => theme.colors.gray1,
});

export const Stepper = ({ currentStep, steps }) => {
  const totalSteps = steps.length;
  return (
    <StepperContainer>
      {steps.map((step, index) => {
        if (totalSteps !== index + 1) {
          return (
            <React.Fragment key={step}>
              <StepperItem
                step={step}
                isActive={index + 1 <= currentStep}
              />
              <StepperRule />
            </React.Fragment>
          );
        }
        return (
          <StepperItem
            key={step}
            step={step}
            isActive={index + 1 <= currentStep}
          />
        );
      })}
    </StepperContainer>
  );
};

Stepper.propTypes = {
  currentStep: PropTypes.number,
  steps: PropTypes.arrayOf(PropTypes.string).isRequired,
};

Stepper.defaultProps = {
  totalSteps: null,
  currentStep: 0,
};
