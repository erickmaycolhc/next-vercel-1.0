import Link from 'next/link';
import { MainLayout } from '../../components/layout/MainLayout';
import { DarkLayout } from '../../components/layout/DarkLayout';
import styles from './../../components/layout/MainLayout.module.css';




export default function PricingPage() {
    return (
     <>
          <h1>Pricing Page</h1>
  
          <h1 className={styles.title}>
              Ir a <Link href='/'>Home</Link>
          </h1>
  
          <div className={styles.description}>
              <p>
                  Get Started by editing&nbsp;
                  <code className={styles.code}>pages/Pricing.tsx</code>
              </p>
          </div>
      </>
    )
  }
  
  PricingPage.getLayout = function getLayout(page : JSX.Element){
    return (
        <MainLayout>
            <DarkLayout>
                {page}
            </DarkLayout>
        </MainLayout>
    )
  }
  