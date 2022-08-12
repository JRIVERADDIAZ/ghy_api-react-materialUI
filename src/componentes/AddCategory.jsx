import React from 'react'
import PropTypes from 'prop-types'



const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = React.useState('')
    
    const handleInputChange = (e) => {
        setInputValue( e.target.value)
    }  
    const handleSubmit = (e) => {
        e.preventDefault()

      
       setCategories( (categories) => [
           ...categories,
           inputValue,
       ]
       )
       setInputValue('')
    
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
            <input 
            type="text"
            value={inputValue}
            placeholder="introdusca texto"
            onChange={handleInputChange}
            /> 
            </form>
            
        </div>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}


export default AddCategory