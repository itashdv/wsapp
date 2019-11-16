import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';

// import { AppContext } from '../../contexts/AppContext';

import Loading from '../Loading';
import CompanyMenu from './CompanyMenu';

const StyledCompany = styled.div`
  padding: 10px;
`;

const CompanyProfileImage = styled.img`
  width: 100%;
  height: auto;
`;

const CompanyTitle = styled.h3`
  text-align: center;
`;

const Company = ({ history, match }) => {
  const [company, setCompany] = useState(null);
  const fetchCompanyById = async (id) => {
    const response = await fetch(`https://mighty-brook-28904.herokuapp.com/api/companies/${ id }`);
    const result = await response.json();
    setCompany(result);
  }
  useEffect(() => {
    fetchCompanyById(match.params.id);
  }, [match.params.id]);
  return (
    <StyledCompany>
      <button onClick = { () => { history.goBack(); } } >Back</button>
      {
        !company && (
          <Loading />
        )
      }
      { company && (
        <>
            <CompanyTitle>{ company.name }</CompanyTitle>
            <CompanyProfileImage src={ company.image.url } />
            <p>{ company.description }</p>
            <h5>Address:</h5>
            <p>{ company.address }</p>
            <h5>Website:</h5>
            <a target='_blank' rel="noopener noreferrer" href={ company.website }>{ company.website }</a>
            <CompanyMenu companyId={ company._id } />
        </>
      ) }
    </StyledCompany>
  )
}

export default Company;