import { useState } from "react"
import { useNavigate } from "react-router-dom"

function NewPersonForm() {
    const INIT_STATE = {
        name: '',
        age: '',
        location: '',
        favoriteColor: ''
    }

    const navigate = useNavigate()

    const [data, setData] = useState(INIT_STATE)
    const [errorMessage, setErrorMessage] = useState('')

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        data.age = Number(data.age)
        const url = `${process.env.REACT_APP_BACKEND_URL}/person`
        
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        if (response.status !== 201) {
            setErrorMessage('Error creating user')
        } else {
            if (errorMessage) setErrorMessage('')
            navigate('/', { replace: true })
        }
    }

    return (
        <div>
            {errorMessage && <h3>{errorMessage}</h3>}
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} required name='name' placeholder='name' value={data.name}/>
                <input onChange={handleChange} required name='age' placeholder='age' value={data.age}/>
                <input onChange={handleChange} required name='location' placeholder='location' value={data.location}/>
                <input onChange={handleChange} name='favoriteColor' placeholder='Favorite Color' value={data.favoriteColor}/>
                <input type='submit' />
            </form>
        </div>
    )
}

export default NewPersonForm