import styled from 'styled-components';

interface DividerProps {
  color?: string;
}

const Divider = styled.div<DividerProps>`
  width: 100%;
  height: 1px;
  margin: 32px 0px;
  background-color: ${({ color }) => color || '#eee'};
`;

export default Divider;
