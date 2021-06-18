import React from "react";
import * as S from "./styled";
import RepositoryItem from "../repository-item";

const Repositories = () => {
  return <S.WrapperTabs
          selectedTabClassName="is-selected"
          selectedTabPanelClassName="is-selected"
          >
            <S.WrapperTabList>
              <S.WrapperTab>Repositories</S.WrapperTab>
              <S.WrapperTab>Starred</S.WrapperTab>
            </S.WrapperTabList>
            <S.WrapperTabPanel>
              <RepositoryItem name="Acelera-o-Global-Dev-8-Avanade" 
                linkToRepo="https://github.com/Lazaro84-alv/Acelera-o-Global-Dev-8-Avanade"
                fullName="Lazaro84-alv/Acelera-o-Global-Dev-8-Avanade"
              />
            </S.WrapperTabPanel>
            <S.WrapperTabPanel>
              <RepositoryItem name="API-NodeJs-gerenciando-contatinhos"
                linkToRepo="https://github.com/Lazaro84-alv/API-NodeJs-gerenciando-contatinhos"
                fullName="Lazaro84-alv/API-NodeJs-gerenciando-contatinhos"
              />
            </S.WrapperTabPanel>

        </S.WrapperTabs>;
};

export default Repositories;