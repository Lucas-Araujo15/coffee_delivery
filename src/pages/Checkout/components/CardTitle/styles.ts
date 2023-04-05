import styled from 'styled-components'

const ICONS_COLORS = {
  'yellow-dark': 'yellow-dark',
  purple: 'purple',
} as const

interface IconsProps {
  iconColor: keyof typeof ICONS_COLORS
}

export const CardTitleContainer = styled.header<IconsProps>`
  min-height: 2.75rem;
  display: flex;
  gap: 0.5rem;

  svg {
    color: ${(props) => props.theme[ICONS_COLORS[props.iconColor]]};
  }

  h3 {
    font-weight: 400;
    font-size: 1rem;
    color: ${(props) => props.theme['base-subtitle']};
  }

  p {
    font-weight: 400;
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-text']};
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`
