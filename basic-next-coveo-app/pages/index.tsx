import { useState, useEffect } from 'react'
import { SearchBox, buildSearchBox } from '@coveo/headless';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { engine } from '../Engine'
import ResultList  from '../components/ResultList'
import SearchForm  from '../components/SearchForm'

const mySearchBox: SearchBox = buildSearchBox(engine);

export default function Home() {
  let [suggestions, setSuggestions] = useState(['one','two','three']);
  //let [results, setResults] = useState('');
  let results = [];

  useEffect(() => {

    const unsubscribe = mySearchBox.subscribe(() => setSuggestions(mySearchBox.state.suggestions.map(sug => sug.rawValue)));

    return () => (unsubscribe())

  }, []);



  const handleSubmit = (word) => {
    mySearchBox.updateText( word );
  }

  

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <SearchForm onSubmit={handleSubmit} />
        <ResultList results={suggestions} />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
