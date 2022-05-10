import styled from 'styled-components';

interface TextContainerProps {
  self?: boolean;
}

const TextContainer = styled.div<TextContainerProps>`
  ${(props) =>
    !props.self
      ? `margin-left: 40px;
          @media (max-width: ${({ theme }) => theme.breakPoints.desktop}) {
            margin-left: 0;
          }  
    `
      : ``}
  max-width: 579px;
  min-width: 200px;
  text-align: center;
`;

export default TextContainer;
