import styled from 'styled-components'

const ICONS_COLORS = {
  'yellow-dark': 'yellow-dark',
  purple: 'purple',
  yellow: 'yellow',
} as const

interface IconsProps {
  iconColor: keyof typeof ICONS_COLORS
}

export const OrderInfoContainer = styled.div<IconsProps>`
  display: flex;
  gap: 0.75rem;
  align-items: center;
  height: 2.625rem;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }

  span {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background-color: ${(props) => props.theme[ICONS_COLORS[props.iconColor]]};
    display: flex;
    justify-content: center;
    align-items: center;
  }

  p {
    font-weight: 400;
    font-size: 1rem;
    color: ${(props) => props.theme['base-text']};
  }

  svg {
    color: ${(props) => props.theme.background};
  }
`
