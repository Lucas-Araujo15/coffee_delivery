import styled from 'styled-components'

export const CoffeeSelectedContainer = styled.div`
  height: 6.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 1.5rem;

  hr {
    border: 1px solid ${(props) => props.theme['base-button']};
  }

  & > div {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 0.25rem;
    height: 5rem;

    & > p {
      font-weight: 700;
      font-size: 1rem;
      color: ${(props) => props.theme['base-text']};
    }
  }

  & > div > div {
    display: flex;
    gap: 1.25rem;
  }

  & > div > div > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    & > p {
      font-weight: 400;
      font-size: 1rem;
      color: ${(props) => props.theme['base-subtitle']};
    }
  }

  & > div > div > div > div {
    display: flex;
    height: 2rem;
    gap: 0.5rem;
  }

  img {
    height: 100%;
  }
`

export const RemoveButton = styled.button`
  width: 5.6875rem;
  height: 100%;
  border: none;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  background: ${(props) => props.theme['base-button']};
  transition: all 0.2s;
  cursor: pointer;

  text-transform: uppercase;
  font-weight: 400;
  font-size: 0.75rem;
  color: ${(props) => props.theme['base-text']};

  svg {
    color: ${(props) => props.theme.purple};
  }

  &:hover {
    transition: all 0.2s;
    background: ${(props) => props.theme['base-hover']};
  }
`
