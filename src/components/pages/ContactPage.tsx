import React from "react";
import styled from "styled-components";
import Display from "../texts/Display";
import Text from "../texts/Text";

const Root = styled.div`
  background-color: ${({ theme }) => theme.colors.accent.dark};
  height: 500px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  text-align: center;
`;

const ContactPage = () => {
  return (
    <Root>
      <Display variant="small" style={{ marginBottom: 20 }}>
        Contact Info
      </Display>
      <Text variant="medium">Pastor Alex Kalinyuk Sr.</Text>
      <Text variant="medium">916.218.2671</Text>
      <br />
      <Text variant="large" weight="bold">
        Or email us at
      </Text>

      <Text variant="medium">gracetrinityag@yahoo.com</Text>
    </Root>
  );
};

export default ContactPage;
