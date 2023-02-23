import { MainLayout } from '../components/layout/MainLayout';
import Link from 'next/link';
import styles from './../components/layout/MainLayout.module.css';
import { DarkLayout } from '../components/layout/DarkLayout';

export default function ContactPage () {
return(
    <>
        <h1>Home Contact</h1>

        <h1 className={styles.title}>
            Ir a <Link href='/'>Home</Link>
        </h1>

        <div className={styles.description}>
            <p>
                Get Started by editing&nbsp;
                <code className={styles.code}>pages/Contact.tsx</code>
            </p>
        </div>

    </>
   
   
)

}
ContactPage.getLayout = function getLayout(page : JSX.Element){
    return (
        <MainLayout>
            <DarkLayout>
                {page}
            </DarkLayout>
        </MainLayout>
    )
}