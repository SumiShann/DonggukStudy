import Button from "../components/Button/Button";
import Header from "../components/Header/Header";
import Links from "../components/Links/Links";

export default function Vocabulary(){
  return (
    <>
    <Header heading="Vocabulary" />
    <main>
      <Links>
        <Button path="" link="BY SEMESTER" />
        <Button path="" link="BY THEME" />
        <Button path="" link="VERBS ONLY" />
        <Button path="" link="NOUNS ONLY" />
      </Links>
    </main>
    </>
  )
}