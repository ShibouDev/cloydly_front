import Container from "@/components/ordinary/container";
import Header from "@/containers/header";
import SideBar from "@/containers/sidebar";
import * as Styled from "../styles/styled";
export default function Home() {
  return (
    <Styled.Wrapper>
      <Header />
      <Styled.Content>
        <Container>
          <SideBar />
        </Container>
      </Styled.Content>
    </Styled.Wrapper >
  );
}
