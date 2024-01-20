import './Header.scss'
export default function Header({heading}){
  return (
    <header className="header">
      <h1>{heading}</h1>
    </header>
  )
}