import {
  BannerContainer,
  BannerIntro,
  BannerItems,
  BannerTitle,
  Item,
} from './styles'

import imgBanner from '../../../../assets/banner-img.png'
import { ShoppingCart, Package, Timer, Coffee } from '@phosphor-icons/react'

export function Banner() {
  return (
    <BannerContainer>
      <BannerIntro>
        <BannerTitle>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </BannerTitle>
        <BannerItems>
          <Item itemColor="yellow-dark">
            <span>
              <ShoppingCart weight="fill" size={17} />
            </span>
            <p>Compra simples e segura</p>
          </Item>
          <Item itemColor="base-text">
            <span>
              <Package weight="fill" size={17} />
            </span>
            <p>Embalagem mantém o café intacto</p>
          </Item>
          <Item itemColor="yellow">
            <span>
              <Timer weight="fill" size={17} />
            </span>
            <p>Entrega rápida e rastreada</p>
          </Item>
          <Item itemColor="purple">
            <span>
              <Coffee weight="fill" size={17} />
            </span>
            <p>O café chega fresquinho até você</p>
          </Item>
        </BannerItems>
      </BannerIntro>

      <img
        src={imgBanner}
        alt="Imagem de um copo de café envolto de um fundo na cor amarela"
      />
    </BannerContainer>
  )
}
