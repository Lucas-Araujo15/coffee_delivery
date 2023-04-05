import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  display: grid;
  grid-template-columns: 40rem 1fr;
  gap: 2rem;
  margin-top: 2.5rem;

  h2 {
    font-family: 'Baloo 2';
    font-weight: 700;
    font-size: 1.125rem;
    color: ${(props) => props.theme['base-subtitle']};
    margin-bottom: 0.9375rem;
  }
`

export const OrderInformationBox = styled.div`
  min-height: 39.3125rem;

  & > div {
    display: grid;
    height: 100%;
    grid-template-rows: 23.25rem 1fr;
    gap: 0.9375rem;
  }
`

export const AddressForm = styled.div`
  border-radius: 6px;
  padding: 2.5rem;
  background: ${(props) => props.theme['base-card']};
  display: flex;
  flex-direction: column;
  gap: 2rem;

  form {
    display: grid;
    grid-gap: 1rem 0.75rem;
    grid-template-columns: 12.5rem 17.25rem 1fr;
  }
`

const ICONS_COLORS = {
  'yellow-dark': 'yellow-dark',
  purple: 'purple',
} as const

interface IconsProps {
  iconColor: keyof typeof ICONS_COLORS
}

export const CardTitle = styled.header<IconsProps>`
  min-height: 2.75rem;
  display: flex;
  gap: 0.5rem;

  svg {
    color: ${(props) => props.theme[ICONS_COLORS[props.iconColor]]};
  }

  h3 {
    font-weight: 400;
    font-size: 1rem;
    color: ${(props) => props.theme['base-subtitle']};
  }

  p {
    font-weight: 400;
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-text']};
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`

export const FormInput = styled.input`
  background: ${(props) => props.theme['base-input']};
  width: 100%;
  height: 2.625rem;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme['base-button']};
  outline: none;
  padding: 0px 0.75rem;

  &:nth-child(2) {
    grid-column: 1 / 4;
  }

  &:nth-child(4) {
    grid-column: 2 / 4;
  }
`

export const PaymentMethod = styled.div`
  background: ${(props) => props.theme['base-card']};
  padding: 2.5rem;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  input {
    display: none;
  }

  #credit:checked ~ label {
    #check-credit {
      transition: 0.1s;
      border: 1px solid ${(props) => props.theme.purple};
      background: ${(props) => props.theme['purple-light']};
    }
  }

  #debit:checked ~ label {
    #check-debit {
      transition: 0.1s;
      border: 1px solid ${(props) => props.theme.purple};
      background: ${(props) => props.theme['purple-light']};
    }
  }

  #cash:checked ~ label {
    #check-cash {
      transition: 0.1s;
      border: 1px solid ${(props) => props.theme.purple};
      background: ${(props) => props.theme['purple-light']};
    }
  }

  > div {
    display: flex;
    justify-content: space-between;
  }
`

export const Checkbox = styled.div`
  width: 11.166875rem;
  height: 3.1875rem;
  background: ${(props) => props.theme['base-button']};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  gap: 0.75rem;
  cursor: pointer;
  transition: 0.1s;

  &:hover {
    background: ${(props) => props.theme['base-hover']};
  }

  p {
    text-transform: uppercase;
    font-weight: 400;
    font-size: 0.75rem;
    color: ${(props) => props.theme['base-text']};
  }

  svg {
    color: ${(props) => props.theme.purple};
  }
`

export const SelectedCoffeesBox = styled.div`
  & > div {
    background: ${(props) => props.theme['base-card']};
    padding: 2.5rem;
    border-radius: 6px 44px;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
`

export const PriceInformation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  div {
    display: flex;
    justify-content: space-between;
  }

  & div:nth-child(1),
  & div:nth-child(2) {
    p {
      color: ${(props) => props.theme['base-text']};
      font-weight: 400;
    }

    p:nth-child(1) {
      font-size: 0.875rem;
    }
    p:nth-child(2) {
      font-size: 1rem;
    }
  }

  & div:nth-child(3) {
    p {
      font-weight: 700;
      font-size: 1.25rem;
      color: ${(props) => props.theme['base-subtitle']};
    }
  }
`

export const ConfirmButton = styled.button`
  height: 2.875rem;
  background: ${(props) => props.theme.yellow};
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 6px;
  transition: 0.2s;
  cursor: pointer;

  &:hover {
    transition: 0.2s;
    background: ${(props) => props.theme['yellow-dark']};
  }

  p {
    text-transform: uppercase;
    color: ${(props) => props.theme.white};
    font-weight: 700;
    font-size: 0.875rem;
  }
`
