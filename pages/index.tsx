import Link from 'next/link'
import styles from './../components/layout/MainLayout.module.css';
import { DarkLayout } from '../components/layout/DarkLayout';
import { MainLayout } from '../components/layout/MainLayout';

export default function HomePage() {
  return (
   <>
        <h1>Home Page</h1>

        <h1 className={styles.title}>
            Ir a <Link href='/'>Home</Link>
        </h1>

        <div className={styles.description}>
            <p>
                Get Started by editing&nbsp;
                <code className={styles.code}>pages/Home.tsx</code>
            </p>
        </div>
    </>
  )
}

HomePage.getLayout = function getLayout(page : JSX.Element){
  return (
      <MainLayout>
          <DarkLayout>
              {page}
          </DarkLayout>
      </MainLayout>
  )
}
