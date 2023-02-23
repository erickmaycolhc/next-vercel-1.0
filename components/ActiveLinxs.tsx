import { useRouter } from 'next/router';
import Link from 'next/link';
import { CSSProperties } from 'react';
type props= {
text: string,
href: string

}

const style: CSSProperties ={
    color: '#0070f3',
    textDecoration: 'underline'
}
export const ActiveLink = ({text, href}:props) => {
    const {asPath} = useRouter();
   console.log(asPath)
    return (
        <Link style={ asPath === href ? style : undefined} href={href}>
         {text}
        </Link>

    );
}