import styled from 'styled-components'

//Container
export const TableDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding-top: 2rem;
`
//Header
export const HeaderDiv = styled.div`
width: 95%;
padding: 0.5rem;
position: relative;
display: inline-block;
margin: 0 auto;
  input{
    //margin-right: 0.5rem;
    padding: 0.625rem 0.65rem 0.625rem 1.75rem; /* Ajuste o padding para dar espaço ao ícone */
    margin-bottom: 1.25rem;
    font-size: 1rem;
  }
  label{
    margin-right: 0.5rem;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    width: 90%;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    width: 95%;
    padding: 0.25rem;

    label {
      display: block;
      margin-right: 0;
      margin-bottom: 0.5rem;
    }
  }
`

// Lista feita com Table
export const TableContainer = styled.table`
  width: 95%;
  text-align: center;
  padding: 0.5rem;
  border-collapse: collapse;

  tr:nth-child(even) {background-color: #d1f5ff;}

  @media (min-width: 320px) and (max-width: 480px) {
    width: 90%;
    font-size: 0.875rem;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    width: 100%;
    font-size: 0.875rem;
  }
`

// Input do searchFilter
export const InputFilter = styled.input`
  width: 95%;
  height: 1rem;
  
  border-radius: 0.75rem;
  text-align: center;
  border: 2px solid;
  border-color: #1985A1;
  outline: none;
  &:focus{
      border-color: #1985A1;
      color: #808080;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    width: 90%;
    height: 1rem;
    font-size: 0.875rem;
    border-right: none;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    width: 95%;
    height: 1rem;
    font-size: 0.875rem;
    border-right: none;
  }
`

export const ButtonCategory = styled.button`
  background-color: transparent;
  border: none;
  color: #1985A1;
  cursor: pointer;

  @media (min-width: 481px) and (max-width: 768px) {
    font-size: 0.875rem;
  }
`

export const IconOrderButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  color: #007BFF;

  &:focus {
    outline: none;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    font-size: 14px;
  }
`

export const ButtonReset = styled.button`
  width: 6.5rem;
  height: 2.5rem;
  border: none;
  border-radius: 0.75rem;
  background-color: #1985A1;
  
  position: absolute;
  top: 36.5%;
  right: 0%;
  transform: translateY(-50%);
  cursor: pointer;
  svg {
    color: white;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    width: 5rem;
    height: 2.375rem;
    font-size: 0.875rem;
    top: 36.5%;
    right: -6px;
  }

  @media (min-width: 481px) and (max-width: 725px) {
    width: 5rem;
    height: 2.375rem;
    font-size: 0.875rem;
    top: 35%;
    right: -3.5%;
  }

  @media (min-width: 726px) and (max-width: 768px) {
    width: 5rem;
    height: 2.375rem;
    font-size: 0.875rem;
    top: 35%;
    right: -0.5%;
  }
`
