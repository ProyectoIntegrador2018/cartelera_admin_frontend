import React, { Fragment } from 'react'
import { ImageUploader } from 'Presentational/elements'

export const EventsFormsImages = (props) => (
    <div>
        <div className="form-general-data">
            <h3>Notas:</h3>

            <ul>
                <li>Utiliza imagenes en formato png, jpg, jpeg y gif.</li>
                <li>El tamaño de la imagen no debe exceder las dimensiones de 800 x 800 pixeles.</li>
            </ul>
        </div>
        
        <br></br>

        <div className="add-photos-container">
            <ImageUploader
                label='photo'
                {...props} />
            <ImageUploader
                label='schedule'
                {...props} />
        </div>
    </div>
)
