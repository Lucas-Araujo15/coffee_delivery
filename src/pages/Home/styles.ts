import styled from 'styled-components'

export const CardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin-bottom: 9.8125rem;
`

export const HomeContainer = styled.div`
  h2 {
    font-family: 'Baloo 2';
    font-size: 2rem;
    font-weight: 800;
    color: ${(props) => props.theme['base-subtitle']};
    margin-bottom: 3.375rem;
  }
`
