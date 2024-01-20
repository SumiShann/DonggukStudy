import './Links.scss'
import { Children } from 'react'

export default function Links({children}){
  return (
    <ul className='hero'>
      {Children.map(children, child => 
        <li>
          {child}
        </li>
        )}
    </ul>
  )
}