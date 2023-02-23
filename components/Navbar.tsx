import { ActiveLink } from './ActiveLinxs';
import styles from '@/styles/Home.module.css'

const menuItems = [
    {
        text: 'Home',
        href: '/'
    },
    {
        text: 'About',
        href: '/about'
    },
    {
        text: 'Contact',
        href: '/contact'
    },
    {
        text: 'Princing',
        href: '/pricing'
    }

];

export const Navbar =() =>{
return ( 
    
    <nav className={styles['menu-container']}>
        {
             menuItems.map(({href, text}) => (
            <ActiveLink key={href} text={text} href={href}/>
             ))
        }

        {/* <ActiveLink text='Home' href='/'/>
        <ActiveLink text='About' href='/about'/>
        <ActiveLink text='Contact' href='/contact'/>
        <ActiveLink text='Pricing' href='/pricing'/> */}

    </nav>
    
)
}