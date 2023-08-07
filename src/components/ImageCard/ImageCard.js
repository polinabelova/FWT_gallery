import React from 'react'
import './ImageCard.css'
import { useAuthorsLocations } from '../../hooks/getAuthorsLocations'

export default function ImageCard(image) {

    const data = image.image

    const { list: authors } = useAuthorsLocations("authors", data.authorId)
    const { list: locations } = useAuthorsLocations("locations", data.locationId)
    return (
        <figure className='img-container'>

            <img className='image'
                src={"https://test-front.framework.team/" + data.imageUrl}
            />
            <figcaption>
                <h4><b>{data.name}</b></h4>
                <p><b>Author: </b>{authors.name}
                    <br></br>
                    <b>Created: </b>{data.created}
                    <br></br>
                    <b>Location: </b>{locations.location}</p>
            </figcaption>
        </figure>
    )
}
