import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Coin = () => {
  const { id } = useParams()
  const [coinData, setCoinData] = useState(null)

  useEffect(() => {
    const fetchCoinData = async () => {
      try {
        const response = await fetch(`https://api.coincap.io/v2/assets/${id}`)
        const data = await response.json()
        setCoinData(data.data)
      } catch (error) {
        console.error('No se han podido obtener las cryptos: ', error)
      }
    }

    fetchCoinData()
  }, [id])

  return (
    <div>
      {coinData ? (
        <div>
          <h2>{coinData.name}</h2>
          <p>Símbolo: {coinData.symbol}</p>
          <p>Rango: {coinData.rank}</p>
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  )
}

export default Coin
