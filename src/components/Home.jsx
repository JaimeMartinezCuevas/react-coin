import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  const [cryptoData, setCryptoData] = useState([])

  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        const response = await fetch('https://api.coincap.io/v2/assets')
        const data = await response.json()
        setCryptoData(data.data)
      } catch (error) {
        console.error('No se han podido obtener los datos de las cryptos: ', error)
      }
    };

    fetchCryptoData()
  }, [])

  return (
    <div>
      <h1>Lista de cryptomonedas</h1>
      <ul>
        {cryptoData.map(crypto => (
          <li key={crypto.id}>
            <Link to={`/coin/${crypto.id}`}>{crypto.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Home
