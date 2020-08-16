import React from 'react'

import { ImgWrapper, Img, Button } from './styles'

const DEFAULT_IMAGE = 'https://static.hsbnoticias.com/sites/default/files/styles/original/public/gallery/2018/04/gato-33.jpg'

export const PhotoCard = ({id, likes = 0, src = DEFAULT_IMAGE}) => {
    return (
        <article>
            <a href = {`/detail/${id}`}>
                <ImgWrapper>
                    <Img src={src}/>
                </ImgWrapper>
            </a>
            <Button>
                {likes} likes!
            </Button>
        </article>
    )
}