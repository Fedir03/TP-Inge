import Image from "next/image";
import styles from "./page.module.css";
import ProductCard from '../components';


export default function Home() {

  const product = {
    name: 'Apple iPhone 15 Pro Max 256 GB',
    description: 'Telefono intelilgente iPhone 15 Pro Max, 256 GB de memoria.',
    price: 999.99,
    image: 'https://images.fravega.com/f300/19753f356a5efd19a44b967777ce8b1b.jpg.webp', // URL de la imagen del producto
  };

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div style={{ display: 'flex', justifyContent: 'center', padding: '2rem' }}>
          <ProductCard product={product} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', padding: '2rem' }}>
          <ProductCard product={product} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', padding: '2rem' }}>
          <ProductCard product={product} />
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>Explore starter templates for Next.js.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  );
}
