import { Box, Typography, List, styled } from "@mui/material";

const Component = styled(Box)`
  display: flex;
  -webkit-justify-content: none;
`;

const Container = styled(Box)`
  padding: 56px 0px 56px 56px;
`;

// since img is not a material ui component we have to pass as a string and styles as a object
const QRCode = styled("img")({
  height: 264,
  width: 264,
  margin: "56px 50px 0px 50px",
});

// handling child class of List;
const StyledList = styled(List)`
  & > li {
    padding: 0;
    margin-top: 15px;
  }
`;

const Title = styled(Typography)`
  font-size: 28px;
  color: #525252;
  font-weight: 300;
  font-family: inherit;
  margin-bottom: 25px;
`;
const dialogStyle = {
  height: "85%",
  marginTop: "10%",
  width: "60%",
  maxWidth: "100%",
  // maxHeight: "100%",
  boxShadow: "none",
  overflow: "hidden",
};

export { Component, Container, Title, StyledList, QRCode, dialogStyle };
