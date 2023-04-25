import styled from 'styled-components'

export const CheckoutContainer = styled.form`
  display: grid;
  grid-template-columns: 40rem 1fr;
  gap: 2rem;
  margin: 2.5rem auto;

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
    max-height: 36.9375rem;
  }
`

export const SelectedCoffeesBox = styled.div`
  & > div:nth-child(2) {
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

  text-transform: uppercase;
  color: ${(props) => props.theme.white};
  font-weight: 700;
  font-size: 0.875rem;

  &:hover {
    transition: 0.2s;
    background: ${(props) => props.theme['yellow-dark']};
  }

  &:disabled {
    cursor: not-allowed;
    background: ${(props) => props.theme['yellow-dark']};
  }
`
