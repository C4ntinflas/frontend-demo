import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

function Home() {
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const url = `${process.env.REACT_APP_BACKEND_URL}/person/all`
            const response = await fetch(url)
            const data = await response.json()

            if (data.length) {
                setData(data)
            }
        }

        fetchData()
    }, [])

    const display = data && data.map(person => {
        return (
            <li key={person._id}>
                <Link to={`/person/${person._id}`}>{person.name}</Link>
            </li>
        )
    })
    
    return (
        <div>
            {display}
        </div>
    )
}

export default Home