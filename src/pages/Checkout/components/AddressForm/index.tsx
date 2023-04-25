import { MapPinLine } from '@phosphor-icons/react'
import { AddressFormContainer, FormInput } from './styles'
import { CardTitle } from '../CardTitle'
import { useFormContext } from 'react-hook-form'
import axios from 'axios'
import { useEffect } from 'react'

export function AddressForm() {
  const { register, watch, setValue } = useFormContext()

  const cep = watch('cep')

  useEffect(() => {
    console.log(cep)
    if (cep.length === 9) {
      async function fetchData(): Promise<any> {
        const { data } = await axios(`https://viacep.com.br/ws/${cep}/json/`)
        console.log(data)

        setValue('logradouro', data.logradouro)
        setValue('bairro', data.bairro)
        setValue('cidade', data.localidade)
        setValue('uf', data.uf)
      }

      fetchData()
    }
  }, [cep, setValue])

  return (
    <AddressFormContainer>
      <CardTitle color="yellow-dark">
        <MapPinLine size={22} />
        <div>
          <h3>Endereço de Entrega</h3>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </div>
      </CardTitle>
      <div>
        <FormInput {...register('cep')} placeholder="CEP" />
        <FormInput {...register('logradouro')} placeholder="Rua" />
        <FormInput {...register('numero')} placeholder="Número" />
        <FormInput {...register('complemento')} placeholder="Complemento" />
        <FormInput {...register('bairro')} placeholder="Bairro" />
        <FormInput {...register('cidade')} placeholder="Cidade" />
        <FormInput {...register('uf')} placeholder="UF" />
      </div>
    </AddressFormContainer>
  )
}
