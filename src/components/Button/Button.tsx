import { ButtonContainer, ButtonVariant } from './Button.styles'
import { TfiLoop } from "react-icons/tfi";
interface ButtonProps {
  variant? : ButtonVariant;
  colorVariant? : ButtonVariant;
}

export default function Button({variant = 'primary', colorVariant = 'light'}: ButtonProps){
  return <ButtonContainer variant={variant} colorVariant={colorVariant}><TfiLoop /></ButtonContainer>
}