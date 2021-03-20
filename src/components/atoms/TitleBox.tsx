import styled from "styled-components";

interface TitleBoxProps {
  height?: number;
}

const TitleBox = styled.div<TitleBoxProps>`
  position: absolute;
  top: ${({ height }) => (height ? (height / 2) * -1 : -137)}px;
  left: 50%;
  transform: translate(-50%);
  width: 100%;
  height: ${({ height }) => height || 274}px;
  max-width: 587px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.cta.default};
`;

export default TitleBox;
