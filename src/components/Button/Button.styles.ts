import styled, {css} from 'styled-components'

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success' | 'neutral' | 'dark' | 'light';

interface ButtonContainerProps {
  variant : ButtonVariant;
  colorVariant : ButtonVariant;
}

const buttonVariants = {
  primary : '#1985A1',
  secondary : '#4C5C68',
  danger: '#EF6F6C',
  success: '#56E39F',
  neutral: '#4C5C68',
  light : 'white', //Font
  dark : 'black' //Font
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 6.5rem;
  height: 2.5rem;
  border: none;
  border-radius: 0.75rem;
  position: absolute;
  top: 36.5%;
  right: -4%;
  transform: translateY(-50%);
  cursor: pointer;

  //Apenas para criar variações de botões, pode ser melhorado para um default theme ou variações de temas
  ${props => {
    return css`
            background-color: ${buttonVariants[props.variant]};
            color: ${buttonVariants[props.colorVariant]};
          `
    }
  }
`