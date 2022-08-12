import React from "react";
import capa from "assets/img/ft capa.png";
import * as S from "./styles";
import { CardComponent } from "components";
import dados from "services/dados";

const Home = () => {
  return (
    <S.Home>
      <picture>
        <img src={capa} alt="Imagens principais" />
      </picture>
      <aside>
        {dados && dados.map((item) => <CardComponent dados={item} />)}
      </aside>
    </S.Home>
  );
};

export default Home;
