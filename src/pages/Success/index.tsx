import { BoxOrderInfo, SuccessContainer, Title } from './styles'
import illustration from '../../assets/Illustration.svg'
import { OrderInfo } from './components/OrderInfo'
import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

export function Success() {
  const { order } = useContext(CartContext)

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
              Entrega em{' '}
              <strong>
                {order?.address.logradouro}, {order?.address.numero}
              </strong>
            </p>
            <p>
              {order?.address.bairro} - {order?.address.cidade},{' '}
              {order?.address.uf}
            </p>
          </OrderInfo>
          <OrderInfo color="yellow" icon={<Timer size={16} weight="fill" />}>
            <p>Previsão de entrega</p>
            <p>
              <strong>20 min - 30 min</strong>
            </p>
          </OrderInfo>
          <OrderInfo color="yellow-dark" icon={<CurrencyDollar size={16} />}>
            <p>Pagamento na entrega</p>
            <p>
              <strong>{order?.paymentMethod}</strong>
            </p>
          </OrderInfo>
        </div>
        <img src={illustration} alt="" />
      </BoxOrderInfo>
    </SuccessContainer>
  )
}
