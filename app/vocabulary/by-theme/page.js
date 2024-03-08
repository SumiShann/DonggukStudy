import Header from "@/app/components/Header/Header";
import Links from "@/app/components/Links/Links";
import data from "@/app/data/data";

function ByTheme(){
  const voc = data
  return(
    <>
    <Header heading="THEMES" />
    <main>
      <Links>
        {voc.map(() => (
          
        ))}
      </Links>
    </main>
    </>
  )
}

export default ByTheme;