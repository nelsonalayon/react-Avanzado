import React, { useState, useEffect } from 'react'


import {Category} from '../category/'
import { List, Item } from './styles'

import { categories as mockCategories } from '../../../api/db.json'



export const ListOfCategories = () => {

    useEffect(function() {
        fetch('')
        .then(res=> res.json())
        .then(response => {
            setCategories(response)
        })
    }, [])

    const [ categories, setCategories ] = useState(mockCategories)
    return <List>
        {
            categories.map(category => <Item key={category}>
                <Category {...category}/>
            </Item>)
        }
    </List>
}