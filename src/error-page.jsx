import gif from "./../public/img/pensando.gif";
import styled from "styled-components";
import { Btn } from "./components/UI";
import { useNavigate } from "react-router-dom";
import { colorGrayDark, colorGrayLigther } from "./components/UI/variables";

const CajaError = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90vh;
  background-color: ${colorGrayLigther};
`;
const TituloError = styled.h1`
  font-size: 10rem;
  padding: 3rem;
  color: ${colorGrayDark};
`;
const ParrafoError = styled.p`
  font-size: 2rem;
`;

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <CajaError id="error-page">
      <TituloError>OH!</TituloError>
      <ParrafoError>Parece que la ruta no es correcta.</ParrafoError>
      <img src={gif} alt="imagen pensando" />
      <Btn onClick={() => navigate("/")}>Regresar</Btn>
    </CajaError>
  );
};
export default ErrorPage;
