import data from './data/data'
import Header from './components/Header/Header'
import Search from './components/Search/Search'
import Links from './components/Links/Links'
import Button from './components/Button/Button'

// async function getData(){
//   const res = "/data/vocab.json"
//   if (!res.ok){
//     throw new Error('Failed to fetch data')
//   }
//   return JSON.parse(res)
// }


export default function Home() {
  const words = data
  return (
    <>
      <Header heading="Dongguk Study" />
      <main >
        <Search />
        <Links>
          <Button path="/vocabulary" link="VOCABULARY"/>
          <Button path="" link="GRAMMAR" />
        </Links>
      </main>
    </>
  )
}
