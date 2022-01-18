import styled from "styled-components/macro";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #33404e;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const H1 = styled.h1`
  font-family: "Paytone One", serif;
  color: #fafaf9;
  font-size: 48px;
`;

function App() {
  return (
    <>
      <div>
        <Container>
          <div>
            <H1>
              Hi!
              <br /> My name is Shawnathan.
            </H1>
            <p
              style={{
                color: "#C6B8B2",
                fontWeight: "500",
                fontFamily: "Raleway",
                fontSize: "24px",
              }}
            >
              <span style={{ color: "#EFC269", alignSelf: "flex-end" }}>
                aspiring web developer
              </span>
            </p>
          </div>
        </Container>
        <Container
          style={{
            backgroundColor: "#FAFAF9",
            flexDirection: "column",
            justifyContent: "unset",
            gap: "24px",
            alignItems: "center",
            padding: "24px",
          }}
        >
          <div
            style={{
              width: "27px",
              height: "70px",
              backgroundColor: "#EFC269",
            }}
          >
            <h2
              style={{
                fontFamily: "Roboto Slab",
                marginTop: "36px",
                fontWeight: "700",
                fontSize: "36px",
              }}
            >
              About
            </h2>
          </div>
          <p
            style={{
              color: "#33404e",
              fontWeight: "500",
              fontFamily: "Raleway",
              fontSize: "24px",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
            blanditiis distinctio eligendi error excepturi fuga, illum iure
            magnam maxime optio possimus quibusdam recusandae, reprehenderit
            unde vero vitae voluptatum. Itaque, reiciendis.
          </p>
        </Container>
        <Container>
          <h2>Projects</h2>
        </Container>
      </div>
    </>
  );
}

export default App;
