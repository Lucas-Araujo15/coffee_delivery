import { Banner } from './components/Banner'
import { CoffeeCard } from './components/CoffeeCard'
import { CardList, HomeContainer } from './styles'

import expresso from '../../assets/expresso.png'
import americano from '../../assets/americano.png'
import cremoso from '../../assets/cremoso.png'
import gelado from '../../assets/gelado.png'
import leite from '../../assets/leite.png'
import latte from '../../assets/latte.png'
import capuccino from '../../assets/cappucino.png'
import macchiato from '../../assets/macchiato.png'
import mocaccino from '../../assets/mocaccino.png'
import chocoQuente from '../../assets/choco-quente.png'
import cubano from '../../assets/cubano.png'
import havaiano from '../../assets/havaiano.png'
import arabe from '../../assets/arabe.png'
import irlandes from '../../assets/irlandes.png'
import { Coffee } from '../../reducers/reducer'

const AvailableCoffees: Coffee[] = [
  {
    id: 1,
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
    tags: ['Tradicional'],
    image: expresso,
  },
  {
    id: 2,
    title: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
    tags: ['Tradicional'],
    image: americano,
  },
  {
    id: 3,
    title: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.9,
    tags: ['Tradicional'],
    image: cremoso,
  },
  {
    id: 4,
    title: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.9,
    tags: ['Tradicional', 'Gelado'],
    image: gelado,
  },
  {
    id: 5,
    title: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.9,
    tags: ['Tradicional', 'Com leite'],
    image: leite,
  },
  {
    id: 6,
    title: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.9,
    tags: ['Tradicional', 'Com leite'],
    image: latte,
  },
  {
    id: 7,
    title: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.9,
    tags: ['Tradicional', 'Com leite'],
    image: capuccino,
  },
  {
    id: 8,
    title: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.9,
    tags: ['Tradicional', 'Com leite'],
    image: macchiato,
  },
  {
    id: 9,
    title: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.9,
    tags: ['Tradicional', 'Com leite'],
    image: mocaccino,
  },
  {
    id: 10,
    title: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.9,
    tags: ['Especial', 'Com leite'],
    image: chocoQuente,
  },
  {
    id: 11,
    title: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.9,
    tags: ['Especial', 'Alcoólico', 'Gelado'],
    image: cubano,
  },
  {
    id: 12,
    title: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.9,
    tags: ['Especial'],
    image: havaiano,
  },
  {
    id: 13,
    title: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.9,
    tags: ['Especial'],
    image: arabe,
  },
  {
    id: 14,
    title: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.9,
    tags: ['Especial', 'Alcoólico'],
    image: irlandes,
  },
]

export function Home() {
  return (
    <HomeContainer>
      <Banner />
      <h2>Nossos cafés</h2>
      <CardList>
        {AvailableCoffees.map((coffee) => {
          return <CoffeeCard key={coffee.id} coffee={coffee} />
        })}
      </CardList>
    </HomeContainer>
  )
}
