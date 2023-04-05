import styled from 'styled-components'

export const HeaderContainer = styled.header`
  height: 6.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    height: 2.5rem;
  }

  > div {
    display: flex;
    gap: 0.75rem;
  }
`

export const Location = styled.div`
  width: 8.9375rem;
  height: 2.375rem;
  background: ${(props) => props.theme['purple-light']};
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  p {
    font-size: 14px;
    color: ${(props) => props.theme['purple-dark']};
  }

  svg {
    color: ${(props) => props.theme.purple};
  }
`

export const CartButton = styled.button`
  width: 2.375rem;
  height: 2.375rem;
  background: ${(props) => props.theme['yellow-light']};
  border: none;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  svg {
    color: ${(props) => props.theme['yellow-dark']};
  }

  span {
    background: ${(props) => props.theme['yellow-dark']};
    min-width: 1.25rem;
    min-height: 1.25rem;
    border-radius: 50%;
    color: ${(props) => props.theme.white};
    font-size: 0.75rem;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    margin-top: -2.25rem;
    margin-right: -2.25rem;
  }
`
