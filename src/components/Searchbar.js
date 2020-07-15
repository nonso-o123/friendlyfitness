import React, { useState } from 'react'
import { Form, Input, Button, FormGroup } from 'reactstrap'

export default function Searchbar() {
    const [term, setTerm] = useState('')
    const handleChange = e => {
        setTerm(e.target.value)
    }
    const handleSubmit = e => {
        e.preventDefault()
    }
    return (
        <div className="container">
            <div className="row">
                <Form onSubmit={handleSubmit} className="search-form">
                    <FormGroup>
                        <Input type="text" id="searchbar" name="searchbar"
                            placeholder="Search your favorite exercises"
                            onChange={handleChange}
                            value={term} />
                    </FormGroup>
                    <FormGroup>
                        <Button type="submit" value="submit" color="primary" className="search-btn">Search</Button>
                    </FormGroup>
                </Form>
            </div>

        </div>
    )
}
