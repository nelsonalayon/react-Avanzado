import React from 'react'
import {ListOfCategories} from './components/listOfCategories/'
import { GlobalStyle } from './GlobalStyles'
import {PhotoCard} from './components/photocard'

export const App = () => {
    return(
        <div>
            <GlobalStyle/>
            <ListOfCategories/>
            <PhotoCard/>
        </div>
        
    )
    
}