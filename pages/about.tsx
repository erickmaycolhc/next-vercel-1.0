import styles from '@/styles/Home.module.css'
import Link from 'next/link';
import { MainLayout } from '../components/layout/MainLayout';
import { DarkLayout } from '@/components/layout/DarkLayout';

export default function AboutPage() {
  return (
   <>
        <h1>Home About</h1>

        <h1 className={styles.title}>
            Ir a <Link href='/'>Home</Link>
        </h1>

        <div className={styles.description}>
            <p>
                Get Started by editing&nbsp;
                <code className={styles.code}>pages/About.tsx</code>
            </p>
        </div>
    </>

  )
}

AboutPage.getLayout = function getLayout(page : JSX.Element){
    return (
        <MainLayout>
            <DarkLayout>
                {page}
            </DarkLayout>
        </MainLayout>
    )
}