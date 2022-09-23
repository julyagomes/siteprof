import React from "react";
import { FcReuse } from "react-icons/fc";
import * as S from "./styles";
import { Link } from "react-router-dom";
import titulo from "assets/img/titulo.svg"

const Menu = () => {
  return (
    <S.Cabecalho>
      <picture>
        <Link to="/">
          <img src={titulo} alt="Imagens principais" />
        </Link>
      </picture>
      <nav>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/cadastrar">Cadastrar</Link>
          </li>
        </ul>
      </nav>
    </S.Cabecalho>
  );
};

export default Menu;
