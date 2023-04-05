import styled from 'styled-components'

export const PaymentMethodContainer = styled.div`
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
