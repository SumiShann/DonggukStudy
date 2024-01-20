import Link from "next/link";
import './Button.scss';

export default function Button({path, link}){
  return(
    <Link href={path} className="link">{link}</Link>
  )
}