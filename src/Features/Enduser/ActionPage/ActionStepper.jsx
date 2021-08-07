import React from 'react';
import styled from 'styled-components';
import { Stepper } from '../../../Components/ui/Stepper';

const StepperContainer = styled.div({
  background: ({ theme }) => theme.colors.gray2,
  padding: ({ theme }) => `${theme.spacing.lg} ${theme.spacing.xl}`,
});

export const ActionStepper = () => {
  return (
    <StepperContainer>
      <Stepper steps={['1', '2', '3']} currentStep={2} />
    </StepperContainer>
  );
};
