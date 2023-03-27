import styled from 'styled-components'

export const BannerContainer = styled.div`
  width: 100%;
  height: 22.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 5.75rem auto;

  h1 {
    color: ${(props) => props.theme['base-title']};
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 3rem;
    max-width: 36.75rem;
  }
`

export const BannerIntro = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const BannerTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h1 {
    color: ${(props) => props.theme['base-title']};
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 3rem;
    max-width: 36.75rem;
  }

  p {
    color: ${(props) => props.theme['base-subtitle']};
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 1.25rem;
    max-width: 36.75rem;
    line-height: 1.625;
  }
`

export const BannerItems = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 1.25rem 2.5rem;
`

const ITEMS_COLORS = {
  'yellow-dark': 'yellow-dark',
  yellow: 'yellow',
  'base-text': 'base-text',
  purple: 'purple',
} as const

interface ItemsProps {
  itemColor: keyof typeof ITEMS_COLORS
}

export const Item = styled.div<ItemsProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  p {
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 1rem;
    color: ${(props) => props.theme['base-text']};
  }

  svg {
    color: ${(props) => props.theme.background};
  }

  span {
    background: ${(props) => props.theme[ITEMS_COLORS[props.itemColor]]};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
  }
`
