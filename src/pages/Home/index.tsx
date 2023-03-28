import { Banner } from './components/Banner'
import { CoffeeCard } from './components/CoffeeCard'
import { CardListContainer } from './styles'

export function Home() {
  return (
    <div>
      <Banner />
      <CardListContainer>
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
      </CardListContainer>
    </div>
  )
}
