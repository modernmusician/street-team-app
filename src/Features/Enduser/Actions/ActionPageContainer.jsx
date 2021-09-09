import styled from 'styled-components';
import Container from 'react-bootstrap/Container';

export const ActionPageContainer = styled(Container)({
  maxWidth: '450px',
  margin: '15px auto',
});

export const StyledContainer = styled(Container)({
  margin: 0,
  backgroundColor: ({ theme }) => theme.colors.gray3,
});

export const BodyContainer = styled(Container)({
  padding: ({ theme }) => theme.spacing.md,
});
