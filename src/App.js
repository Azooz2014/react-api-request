import React from "react"

export default function App() {
    const [starWarsData, setStarWarsData] = React.useState({})
    const [page, setPage] = React.useState(1)
    
    React.useEffect(function() {
        console.log("Effect ran")
        fetch(`https://swapi.dev/api/people/${page}`)
            .then(res => res.json())
            .then(data => setStarWarsData(data))
    }, [page])
    
    return (
        <div>
            <h2>The page is {page}</h2>
            <button onClick={() => setPage(prevPage => prevPage + 1)}>Get Next Character</button>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
        </div>
    )
}