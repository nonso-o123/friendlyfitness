import React, { useState } from 'react'
import { Form, Input, Button, FormGroup } from 'reactstrap'

export default function SearchBar({ handleSubmit }) {

    const initialItems = [
        'Cardio Workout',
        'Abs Workout',
        'Strength workout ',
        'Muscles and Strength Workout',
        'Lose Fat Workout',
        'Workout For Beginner',
        'Advanced Workout Routine',
        'Body Building Workout',
        'Body Transformation Workout',
        'High Intensity Workout Beginner',
        'High Intensity Workout Advanced',
        'Full Body Stretch Workout',
        '20-minute workout'
    ]
    const [items, setItems] = useState(initialItems)
    const [suggestions, setSuggestions] = useState([])
    const [loading, setLoading] = useState(true)
    const [disabled, setDisabled] = useState(true)

    const [term, setTerm] = useState('')



    const onTextChange = (e) => {
        const value = e.target.value
        console.log(value)
        if (value.length > 0) {
            setLoading(false)
            const regex = new RegExp(`${value}`, 'gi')
            const result = items.sort().filter(r => regex.test(r))
            setSuggestions(result)
            handleChange(e)
            console.log("suggestions:" + suggestions)
        }
        else {
            setLoading(true)
            handleChange(e)
        }
    }

    const handleChange = e => {
        setTerm(e.target.value)
    }

    const suggestionOnSelect = item => {
        setTerm(item)
        setLoading(true)
        setDisabled(false)
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
                    onChange={onTextChange}
                    value={term}
                />
                {!loading && suggestions.length > 0 ?
                    <ul className="autoComplete list-group">
                        {suggestions.map((item, index) => <li key={index}
                            onClick={() => suggestionOnSelect(item)}
                            className="list-group-item search-list">{item}
                        </li>)}
                    </ul> : null
                }
            </FormGroup>
            <FormGroup>
                <Button type="submit" value="submit" color="primary"
                    disabled={disabled}
                    className="search-btn search">Search</Button>
            </FormGroup>
        </Form>

    )
}



