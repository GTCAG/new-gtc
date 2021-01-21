import React, { useEffect, useState } from "react";
import styled from "styled-components";

interface SlideUpProps {
  width?: string;
  delay?: string;
  visible?: boolean;
  style?: React.CSSProperties;
  ref?: any;
}

const Root = styled.div<SlideUpProps>`
  display: block;
  width: ${(props) => props.width};
  overflow: hidden;
`;

const SlideUp: React.FC<SlideUpProps> = (props) => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (props.delay) {
      const stringDelay = props.delay.replace("s", "");
      const msDelay = parseFloat(stringDelay) * 1000;
      setTimeout(() => setVisible(true), msDelay);
    } else {
      setVisible(true);
    }
  }, [props.delay]);

  return (
    <Root {...props}>
      <div className={`slide ${visible ? "activated" : ""}`}>
        {props.children}
      </div>
    </Root>
  );
};

export default SlideUp;
