import Button from "@/app/components/Button/Button";
import Header from "@/app/components/Header/Header";
import Links from "@/app/components/Links/Links";
import data from "@/app/data/data";

function BySemester(){
  const voc = data
  return(
    <>
    <Header heading="TRIMESTERS" />
    <main>
      <Links>
        {voc.map((trim, i) => (
          <Button key={i} path={`/vocabulary/by-semester/trimester`+ ++i} link={`TRIMESTER`+ " " + i} />  
        ))}
      </Links>
    </main>
    </>
  )
}

export default BySemester;