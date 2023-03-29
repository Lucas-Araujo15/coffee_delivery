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
`

export const SelectedCoffeesBox = styled.div`
  height: 70px;
`

export const AddressForm = styled.div`
  min-height: 23.25rem;
  border-radius: 6px;
  padding: 2.5rem;
  background: ${(props) => props.theme['base-card']};

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

  header {
    min-height: 2.75rem;
    display: flex;
    gap: 0.5rem;

    svg {
      color: ${(props) => props.theme['yellow-dark']};
    }

    div {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }
`
