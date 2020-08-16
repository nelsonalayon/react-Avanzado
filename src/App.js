import React from 'react'
import {ListOfCategories} from './components/listOfCategories/'
import { GlobalStyle } from './components/syles/GlobalStyles'
import {ListOfPhotoCards} from './components/listOfPhotoCards'
import { Logo } from './components/Logo'

export const App = () => {
    return(
        <div>
            <Logo/> 
            <GlobalStyle/>
            <ListOfCategories/>
            <ListOfPhotoCards/>
        </div>
        
    )
    
}