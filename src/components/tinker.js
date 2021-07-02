import React, { useEffect, useState } from "react";
import btc from "../images/btc.png";
import arrow from "../images/arrowUp.png";
import {
  Container,
  Section,
  WidgetWrapper,
  NoResponseWrapper,
  FirstSection,
  BtcImageWrapper,
  BtcImage,
  FirstSectionBoxWrapper,
  WhiteText,
  GreyText,
  GreenText,
  SecondSection,
  UpArrowImage,
  RedText,
  ConnectButton,
  DisconnectButton,
} from "../styles/tinker.styles";
import { socket } from "../socketHandler";

export default function Tinker() {
  const [response, setResponse] = useState("");

  useEffect(() => {
    socket.on("FromAPI", (data) => {
      console.log(data);
      setResponse(data);
    });
  }, []);

  const disconnect = () => {
    console.log("disconnect");
    socket.disconnect();
    setResponse(null);
  };
  const connect = () => {
    console.log("connect");
    socket.connect();
  };

  return (
    <Container>
      <Section>
        {response ? (
          <WidgetWrapper>
            <FirstSection>
              <BtcImageWrapper>
                <BtcImage src={btc} />
              </BtcImageWrapper>
              <FirstSectionBoxWrapper>
                <WhiteText>BTC/USD</WhiteText>
                <GreyText>
                  VOL {<WhiteText>{parseInt(response.volume)}</WhiteText>} BTC
                </GreyText>
                <GreyText>
                  LOW: {<WhiteText>{parseInt(response.low)}</WhiteText>}
                </GreyText>
              </FirstSectionBoxWrapper>
            </FirstSection>
            <SecondSection>
              <WhiteText>{parseInt(response.last_price)}</WhiteText>
              <div>
                <GreenText>
                  {parseInt(
                    ((response.low / response.high) * response.last_price) / 100
                  )}
                </GreenText>
                <UpArrowImage src={arrow} />
                <GreenText>
                  ({(response.low / response.high).toFixed(2)}%)
                </GreenText>
              </div>
              <GreyText>
                HIGH: {<WhiteText>{parseInt(response.high)}</WhiteText>}
              </GreyText>
            </SecondSection>
          </WidgetWrapper>
        ) : (
          <NoResponseWrapper>
            <RedText>No response found</RedText>
          </NoResponseWrapper>
        )}
        <ConnectButton onClick={connect}>connect</ConnectButton>
        <DisconnectButton onClick={disconnect}>disconnect</DisconnectButton>
      </Section>
    </Container>
  );
}
