import styled from 'styled-components';

interface SectionImageProps {
  maxWidth?: string;
  maxHeight?: string;
}

const SectionImage = styled.img<SectionImageProps>`
  height: 100%;
  width: 100%;
  max-width: ${(props) => props.maxWidth || '470px'};
  max-height: ${(props) => props.maxHeight || '470px'};
  object-fit: contain;
`;

export default SectionImage;
