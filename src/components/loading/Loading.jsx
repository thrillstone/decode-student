import styled, {keyframes} from "styled-components";

const Center = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const spin = keyframes`
    from {
        transform:rotate(0deg);
    }
    to {
        transform:rotate(360deg);
    }
`;

const Spin = styled.div`
	width: 100px;
	height: 100px;
	background-color: #0CB1C4;
	animation-name: ${spin};
	animation-duration: 5000ms;
	animation-iteration-count: infinite;
	animation-timing-function: linear; 
`

function Loading() {
  return (
    <Center>
      <Spin></Spin>
    </Center>
  );
}
  
export default Loading;
  