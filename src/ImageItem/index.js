import './index.css'

const ImageItem = props => {
  const {image, changeImage} = props
  const {thumbnailUrl, id} = image

  function clickOnImage() {
    changeImage(id)
  }

  return (
    <li className="image-list">
      <button className="image-button" type="button" onClick={clickOnImage}>
        <img src={thumbnailUrl} alt="thumbnail" className="image" />
      </button>
    </li>
  )
}

export default ImageItem
