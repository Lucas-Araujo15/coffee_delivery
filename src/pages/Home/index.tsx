import { Banner } from './components/Banner'
import { CoffeeCard } from './components/CoffeeCard'
import { CardList, HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Banner />
      <h2>Nossos cafés</h2>
      <CardList>
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
      </CardList>
    </HomeContainer>
  )
}
