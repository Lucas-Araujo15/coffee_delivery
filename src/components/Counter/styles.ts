import styled from 'styled-components'

export const CounterContainer = styled.div`
  width: 4.5rem;
  height: 100%;
  background: ${(props) => props.theme['base-button']};
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  svg {
    color: ${(props) => props.theme.purple};
    cursor: pointer;
    transition: all 0.2s;
  }

  svg:hover {
    color: ${(props) => props.theme['purple-dark']};
    transition: all 0.2s;
  }

  button {
    border: none;
    display: flex;
    align-items: center;
    background: transparent;
  }

  input {
    width: 1.25rem;
    outline: none;
    border: none;
    background: transparent;
    text-align: center;

    font-family: 'Roboto';
    font-weight: 400;
    font-size: 1rem;
    color: ${(props) => props.theme['base-title']};
  }

  & input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`
