import React, { useState } from 'react'
import { Form, Input, Button, FormGroup } from 'reactstrap'

export default function SearchBar({ handleSubmit }) {
    const [term, setTerm] = useState('')
    const handleChange = e => {
        setTerm(e.target.value)
    }
    const handleFormSubmit = e => {
        e.preventDefault()
        handleSubmit(term)
    }
    return (

        <Form onSubmit={handleFormSubmit} className="search-form">
            <FormGroup>
                <Input type="text" id="SearchBar" name="SearchBar"
                    placeholder="Search your favorite exercises"
                    onChange={handleChange}
                    value={term} />
            </FormGroup>
            <FormGroup>
                <Button type="submit" value="submit" color="primary" className="search-btn">Search</Button>
            </FormGroup>
        </Form>

    )
}
