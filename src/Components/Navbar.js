import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <Link to='/'>Home</Link>
            
            <Link to='/new'>New</Link>
        </>
    )
}

export default Navbar