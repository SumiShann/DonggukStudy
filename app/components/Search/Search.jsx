import './Search.scss'

export default function Search(){
  return(
    <search className="search">
      <form>
        <input name='search' id='word' placeholder='Search word'/>
      </form>
    </search>
  )
}