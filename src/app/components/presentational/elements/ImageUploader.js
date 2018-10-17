import React, { Fragment } from 'react'
import { S3Image } from 'aws-amplify-react'
import { Format, Labels } from 'Helpers/index'
import { Button } from 'Presentational/elements'
import 'Style/imagePicker.scss'

export class ImageUploader extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            previewSrc: props.values[props.label],
        }
        this.fileToKey = this.fileToKey.bind(this)
        this.onImageLoad = this.onImageLoad.bind(this)
    }

    componentDidMount() {
        if (this.state.previewSrc != this.props.values[this.props.label]) {
            this.setState({
                previewSrc: this.props.values[props.label],
            })
        }
    }

    fileToKey(data) {
        const { name, size, type } = data;
        let date = new Date()
        date = date.getTime()
        let key = (date / 1000).toFixed()
        return `${key}-${name}`
    }

    onImageLoad(event) {
        this.props.setFieldValue(this.props.label, event.target.value)
        this.props.setTouched({ ...this.props.touched, [this.props.label]: true })
        this.setState({previewSrc: event.target.value})
    }

    render() {
        return (
            <div className='photo-editor'>
                <label>
                    {Format.capitalize(Labels[this.props.label])}
                </label>
                <div className='btn-img-picker'>
                    <input type="text" onChange={this.onImageLoad}></input>
                </div>
                <div className='show-image'>
                    <img src={this.state.previewSrc} />
                </div>
            </div>
        )
    }
}