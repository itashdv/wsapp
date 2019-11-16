import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import MenuCategory from './MenuCategory';
import Loading from '../Loading';

const StyledCompanyMenu = styled.div`
  & > h4 {
    text-align: center;
  }
`;

const MenuImage = styled.img`
  width: 100%;
  height: auto;
`;

const CompanyMenu = (props) => {
  const [menu, setMenu] = useState(null);
  const fetchMenu = async (id) => {
    const response = await fetch(`https://mighty-brook-28904.herokuapp.com/api/menus/${ id }`);
    const result = await response.json();
    console.log(result);
    setMenu(result);
  }
  useEffect(() => {
    fetchMenu(props.companyId);
  }, [props.companyId]);
  return (
    <StyledCompanyMenu>
      {
        !menu && (
          <Loading />
        )
      }
      {
        menu && (
          <>
            <h4>{ menu.menu.name }</h4>
            <p>{ menu.menu.description }</p>
            <MenuImage src={ menu.menu.image.url } />
            {
              menu.categories.map((category, index) => {
                return (
                  <MenuCategory key={ index } category={ category } />
                )
              })
            }
          </>
        )
      }
    </StyledCompanyMenu>
  );
}

export default CompanyMenu;