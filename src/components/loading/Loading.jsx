import styled, {keyframes} from "styled-components";
import FullScreen from "../styles/FullScreen";

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
    <FullScreen>
      <Spin></Spin>
    </FullScreen>
  );
}
  
export default Loading;
  