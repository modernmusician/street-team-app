import React from 'react';
import styled from 'styled-components';

import { ActionButton } from '../../../../Components/UI/Base/ActionButton';

const ActionPageContainer = styled.div({
  //   color: 'white',
});

export const ActionPage = () => {
  return (
    <ActionPageContainer>
      <ActionButton>Test</ActionButton>
    </ActionPageContainer>
  );
};
