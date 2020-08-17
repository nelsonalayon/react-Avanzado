import React, { useState, useEffect } from 'react'


import {Category} from '../category/'
import { List, Item } from './styles'

import { categories as mockCategories } from '../../../api/db.json'

import { FadeIn } from '../syles/animation.js'



export const ListOfCategories = () => {
     useEffect(function() {
        fetch('')
        .then(res=> res.json())
        .then(response => {
            setCategories(response)
        })
    }, [])

    useEffect(function() {
        const onScroll = e => {
            const newShowFixed = window.scrollY > 200
            showFixed !== newShowFixed && setShowFixed(newShowFixed)
            setShowFixed(newShowFixed)
        }
        document.addEventListener('scroll', onScroll)

        return () => document.removeEventListener('scroll', onScroll)
    }, [showFixed])

    const renderList = (fixed) => {
      return  <List className = {fixed ? 'fixed' : ''}>
        {
            categories.map(category => <Item key={category}>
                <Category {...category}/>
            </Item>)
        }
    </List>
    }

    const [showFixed, setShowFixed] = useState(false)

    const [ categories, setCategories ] = useState(mockCategories)

    
    return (
        <>
        {renderList()}
        {showFixed && renderList(true)}
        </>
        )

}