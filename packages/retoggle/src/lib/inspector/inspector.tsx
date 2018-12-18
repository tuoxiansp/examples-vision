import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { ChevronUp, ChevronDown } from "react-feather";
import Knobs from "./knobs";
import Logs from "./logs";
import ThemeContext from "./theme";

const Container = styled.div<{ usePortal: boolean; background: string }>`
  display: flex;
  background-color: ${props => props.background};
  flex-direction: column;
  position: ${props => (props.usePortal ? "absolute" : "relative")};
  top: 0;
  right: 0;
  font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
  box-shadow: -3px 3px 23px -5px rgba(199, 199, 199, 0.87);
  overflow: auto;
  z-index: 10000;
`;

const CollapseHandle = styled.div<{ backgroundColor: string; color: string }>`
  display: flex;
  justify-content: center;
  background-color: ${props => props.backgroundColor};
  color: ${props => props.color};
  cursor: pointer;

  svg {
    color: ${props => props.color};
  }
`;

const Content = styled.div`
  padding: 15px;
`;

interface Props {
  width?: string;
  height?: string;
  usePortal?: boolean;
}

const LocalStorageCollapseHandlerKey = "RetoggleIsCollapsed";

export default function Inspector({
  width = "300px",
  height,
  usePortal = true
}: Props) {
  const [isCollapsed, setCollapsed] = useState(false);
  const themeContext = useContext(ThemeContext);

  const handleExpandToggle = () => {
    localStorage.setItem(
      LocalStorageCollapseHandlerKey,
      (!isCollapsed).toString()
    );
    setCollapsed(!isCollapsed);
  };

  useEffect(() => {
    const isCollapsedLocalStorage =
      localStorage.getItem(LocalStorageCollapseHandlerKey) === "true";
    setCollapsed(isCollapsedLocalStorage);
  }, []);

  return (
    <Container
      background={themeContext.backgroundColor}
      usePortal={usePortal}
      style={{ width, height }}
    >
      {!isCollapsed && (
        <Content>
          <Logs />
          <Knobs />
        </Content>
      )}
      <CollapseHandle
        title="Collapse"
        onClick={handleExpandToggle}
        color={themeContext.collapseHandle.color}
        backgroundColor={themeContext.collapseHandle.backgroundColor}
      >
        {isCollapsed ? <ChevronDown size={12} /> : <ChevronUp size={12} />}
      </CollapseHandle>
    </Container>
  );
}
