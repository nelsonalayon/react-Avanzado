import React from 'react'
import { Anchor, Image } from './styles'

const DEFAULT_IMAGE= 'https://www.infobae.com/new-resizer/oWZXB8xLLNfiTgqgTJ49AfA5cFk=/420x236/filters:format(jpg):quality(85)//arc-anglerfish-arc2-prod-infobae.s3.amazonaws.com/public/3KJ4AFYLUZAG7DYO7IJULMZ3P4.jpg'

export const Category = ({cover = DEFAULT_IMAGE, path, emoji = '?'}) => (
    <Anchor href= {path}>
        <Image src = {cover}/>
        {emoji}
    </Anchor>
)