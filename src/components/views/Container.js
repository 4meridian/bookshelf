import styled from 'styled-components';

const Container = styled.div`
  background-color: ${props => props.theme.color.containerBg};
  border-radius: ${props => props.theme.radius.lg};
`;

export default Container;