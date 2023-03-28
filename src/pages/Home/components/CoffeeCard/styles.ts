import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  width: 16rem;
  height: 19.375rem;
  padding: 1.25rem;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px 6px 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  img {
    width: 7.5rem;
    margin-top: -2.5rem;
  }
`

export const CoffeeTags = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
`

export const Tag = styled.span`
  height: 1.3125rem;
  background: ${(props) => props.theme['yellow-light']};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  padding: 0.25rem 0.5rem;

  p {
    text-transform: uppercase;
    font-family: 'Roboto';
    font-weight: 700;
    font-size: 0.625rem;
    color: ${(props) => props.theme['yellow-dark']};
  }
`

export const CardDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  p {
    text-align: center;
    max-width: 13.5rem;
  }

  & p:nth-child(1) {
    font-family: 'Baloo 2';
    font-weight: 700;
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-subtitle']};
  }

  & p:nth-child(2) {
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.3;
    color: ${(props) => props.theme['base-label']};
  }
`

export const Buy = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  height: 2.375rem;

  p {
    color: ${(props) => props.theme['base-text']};
    font-size: 1.5rem;
    font-weight: 800;
    font-family: 'Baloo 2';
  }

  small {
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 0.875rem;
    text-transform: uppercase;
  }
`

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  height: 100%;

  span {
    background: ${(props) => props.theme['purple-dark']};
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 2.375rem;
    border-radius: 6px;

    svg {
      color: ${(props) => props.theme['base-card']};
    }
  }
`

export const Counter = styled.div`
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
