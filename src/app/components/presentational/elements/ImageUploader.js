import React from 'react'
import { Storage } from 'aws-amplify'
import { Format, Labels } from 'Helpers/index'
import '../../../style/common/imagebutton.css'

export class ImageUploader extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            previewSrc: props.values[props.label],
            loadingImage: false,
        }
        this.fileToKey = this.fileToKey.bind(this)
        this.uploadImage = this.uploadImage.bind(this)
    }

    componentDidMount() {
        if (this.state.previewSrc != this.props.values[this.props.label]) {
            this.setState({
                previewSrc: this.props.values[props.label],
            })
        }
    }

    fileToKey(data) {
        const { name, size, type } = data
        let date = new Date()
        date = date.getTime()
        let key = (date / 1000).toFixed()
        return `${key}-${name}`
    }

    uploadImage(e) {
        this.setState({
            loadingImage: true,
        })

        const imageFile = e.target.files[0]
        const imageKey = this.fileToKey(imageFile)

        Storage.put(imageKey, imageFile, {
            contentType: 'image/jpg'
        })
            .then((result) => {
                let imageURL = 'https://s3.amazonaws.com/carteleraeventsimages/public/'
                imageURL += result.key

                this.props.setFieldValue(this.props.label, imageURL)
                this.setState({
                    previewSrc: imageURL, 
                    loadingImage: false
                })
            })
            .catch(err => console.log(err))

    }

    render() {
        return (
            <div className='photo-editor'>
                <label>
                    {Format.capitalize(Labels[this.props.label])}
                </label>
                <div className="upload-btn-wrapper">
                    <button className="btn-image">Selecciona una imagen</button>
                    <input type="file" onChange={this.uploadImage} />
                </div>
                <div className='show-image'>
                    <ImageSection loadingImage={this.state.loadingImage} imageURL={this.state.previewSrc} />
                </div>
            </div>
        )
    }
}

const ImageSection = ({ loadingImage, imageURL }) => {
    if (loadingImage) {
        return (
            <div className="loader">
                <p>Cargando imagen</p>
            </div>
        )
    } else {
        return <img src={imageURL} />
    }
}