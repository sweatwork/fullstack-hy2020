import React, {useState} from 'react'


const App = (props) => {
    const [country, setCountry] = useState("") 
    
    const handleCountry = (event) => {
        setCountry(event.target.value)
    }
    
    return (
        <div>
            find countries<input value={country} onChange={handleCountry}/>
        </div>    
    )
}

export default App