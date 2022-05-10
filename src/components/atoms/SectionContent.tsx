import styled from 'styled-components';

interface SectionContentProps {
  flexDirection?: 'column' | 'row';
}

const SectionContent = styled.div<SectionContentProps>`
  margin-top: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${(props) => props.flexDirection || 'row'};
  @media (max-width: ${({ theme }) => theme.breakPoints.desktop}) {
    flex-direction: column;
  }
`;

export default SectionContent;
