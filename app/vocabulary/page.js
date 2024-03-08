import Button from "../components/Button/Button";
import Header from "../components/Header/Header";
import Links from "../components/Links/Links";

export default function Vocabulary(){
  return (
    <>
    <Header heading="Vocabulary" />
    <main>
      <Links>
        <Button path="/vocabulary/by-semester" link="BY SEMESTER" />
        <Button path="/vocabulary/by-theme" link="BY THEME" />
        <Button path="/vocabulary/verbs-only" link="VERBS ONLY" />
        <Button path="/vocabulary/nouns-only" link="NOUNS ONLY" />
      </Links>
    </main>
    </>
  )
}