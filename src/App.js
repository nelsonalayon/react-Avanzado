import React from 'react'
import {ListOfCategories} from './components/listOfCategories/'
import { GlobalStyle } from './GlobalStyles'
import {ListOfPhotoCards} from './components/listOfPhotoCards'

export const App = () => {
    return(
        <div>
            <GlobalStyle/>
            <ListOfCategories/>
            <ListOfPhotoCards/>
        </div>
        
    )
    
}