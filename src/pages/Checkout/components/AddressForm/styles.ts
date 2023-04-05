import styled from 'styled-components'

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

export const AddressFormContainer = styled.div`
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
