import React from 'react';
import styled from 'styled-components';
import { Stepper } from '../../../Components/UI/Stepper';

const StepperContainer = styled.div({
  background: ({ theme }) => theme.colors.gray2,
  padding: ({ theme }) => `${theme.spacing.lg} ${theme.spacing.xl}`,
});

export const ActionStepper = ({ currentStep }) => {
  return (
    <StepperContainer>
      <Stepper steps={['1', '2', '3']} currentStep={currentStep} />
    </StepperContainer>
  );
};
