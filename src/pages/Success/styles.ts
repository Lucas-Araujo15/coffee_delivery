import styled from 'styled-components'

export const SuccessContainer = styled.div`
  margin: 5rem auto 2.5rem auto;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  h1 {
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 2rem;
    color: ${(props) => props.theme['yellow-dark']};
    line-height: 130%;
  }

  p {
    font-weight: 400;
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const BoxOrderInfo = styled.div`
  display: grid;
  grid-template-columns: 32.875rem 1fr;
  gap: 6.375rem;
  align-items: flex-end;

  img {
    width: 100%;
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 2.5rem;
    background-color: aqua;
    border: 1px solid transparent;
    border-radius: 6px 36px;
    background: linear-gradient(to right, white, white),
      linear-gradient(
        to right,
        ${(props) => props.theme.yellow},
        ${(props) => props.theme.purple}
      );

    background-clip: padding-box, border-box;
    background-origin: padding-box, border-box;
  }
`
