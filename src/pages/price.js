import React, {useEffect, useState} from 'react'

const Price = (props) => {

    const apiKey = "D2EB4BA3-8B5C-4869-AD4C-6E0BFBD03432"
    // grabbing the currency symbol from the URL Param
    const symbol = props.match.params.symbol
    //using the the other two variable to create our URL 
    const url = `https://rest.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}`

    //state to hold coin data and trigger a rerender
    const [coin, setCoin] = useState(null)

    //function to fetch coin data
    const getCoin = async () => {
        const response = await fetch(url);
        const data = await response.json()
        setCoin(data)
    }
    //when do I want this function to run? 
    //we want the page to have the data right away. 
    // how do we trigger this to load? 
    // useEffect !!

    useEffect(() => {
        getCoin()
    }, []) 
    //best way to avoid an infinite loop

    const loaded = () => {
        return (
            <div>
                <h1>
                    {coin.asset_id_base}/{coin.asset_id_quote}
                </h1>
                <h2>{coin.rate}</h2>
            </div>
        )
    }

    const loading = () => {
        return <h1>Loading...</h1>
    }


    return coin ? loaded() : loading()
}

export default Price