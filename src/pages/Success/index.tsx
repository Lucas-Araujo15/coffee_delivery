import { BoxOrderInfo, SuccessContainer, Title } from './styles'
import illustration from '../../assets/Illustration.svg'
import { OrderInfo } from './components/OrderInfo'
import { MapPin } from '@phosphor-icons/react'

export function Success() {
  return (
    <SuccessContainer>
      <Title>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </Title>
      <BoxOrderInfo>
        <div>
          <OrderInfo color="purple" icon={<MapPin size={16} weight="fill" />}>
            <p>
              Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
            </p>
            <p>Farrapos - Porto Alegre, RS</p>
          </OrderInfo>
        </div>
        <img src={illustration} alt="" />
      </BoxOrderInfo>
    </SuccessContainer>
  )
}
