import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Section = styled.div`
  position: absolute;
  top: 40%;
`;
const WidgetWrapper = styled.div`
  height: 80px;
  width: 350px;
  background-color: black;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 15px;
  align-items: center;
`;
const NoResponseWrapper = styled.div`
  height: 80px;
  width: 350px;
  background-color: black;
  display: flex;
  flex-direction: row;
  padding: 15px;
  align-items: center;
  justify-content: center;
`;
const FirstSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const SecondSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
const FirstSectionBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const BtcImageWrapper = styled.div`
  padding-right: 10px;
`;
const BtcImage = styled.img`
  height: 50px;
  width: 50px;
  object-fit: cover;
  border-radius: 100px;
`;
const UpArrowImage = styled.img`
  height: 10px;
  width: 10px;
  object-fit: cover;
  margin-left: 5px;
  margin-right: 5px;
`;
const WhiteText = styled.text`
  color: white;
`;
const GreyText = styled.text`
  color: #c8c8c8;
`;
const GreenText = styled.text`
  color: #32cd32;
`;
const RedText = styled.text`
  color: red;
`;
const ConnectButton = styled.button`
  background-color: #32cd32;
  border: none;
  color: white;
  padding: 0.7% 7%;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1.5vw;
  margin-top: 1.7%;
  margin-right: 1%;
`;
const DisconnectButton = styled.button`
  background-color: #ff0d00;
  border: none;
  color: white;
  padding: 0.7% 7%;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1.5vw;
  margin-top: 1.7%;
  margin-right: 1%;
`;

export {
  Container,
  Section,
  WidgetWrapper,
  NoResponseWrapper,
  FirstSection,
  BtcImageWrapper,
  BtcImage,
  WhiteText,
  GreyText,
  GreenText,
  FirstSectionBoxWrapper,
  SecondSection,
  UpArrowImage,
  RedText,
  ConnectButton,
  DisconnectButton
};
