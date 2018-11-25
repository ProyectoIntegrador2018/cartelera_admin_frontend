import React, { Fragment } from 'react'
import { Formik, Form, Field } from 'formik';
import { TextField, TextFieldArea, Selector, FieldDate, SelectComponent, MoneyField } from 'Presentational/elements/Input';
import { Entity } from 'Helpers/index'
import { campusList } from 'Config/Test'
import { FormButtonSubmit } from 'Presentational/elements/Form'
import { CharactersLeft } from "Presentational/elements/CharactersLeft"
import CategoriesDropdown from 'Containers/categories/Dropdown'

export const EventsFormsIndex = (props) => {
    return (
        <React.Fragment>

            <div className="form-general-data">

                <h3>Notas:</h3>

                <ul>
                    <li>Utiliza un nombre actractivo para tu evento.</li>
                    <li>Incluye suficiente información de tu evento en la sección de descripción.</li>
                    <li>Si tu evento tiene costo especifica la forma de pago en la sección de descripción.</li>
                </ul>

                <TextField label='name' {...props} />

                <TextFieldArea label='description' {...props} />

                <MoneyField label='cost' inputSizeSmall {...props} />

                <TextField label='location' {...props} />

                <Selector label='campus' inputSizeSmall component={CampusDropdown} {...props} />

                <Selector label='categoryId' inputSizeSmall component={CategoriesDropdown} {...props} />

                <FieldDate label='rangeDatetime'{...props} />

            </div>

        </React.Fragment>
    )
}

const CampusDropdown = (props) => (
    <SelectComponent
        list={campusList}
        {...props} />
)