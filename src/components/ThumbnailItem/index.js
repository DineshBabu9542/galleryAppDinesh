// Write your code here.

import './index.css'

const ThumbnailItem = props => {
  const {eachItem, isActive, setThumblineId} = props
  const {id, thumbnailUrl, thumbnailAltText} = eachItem

  const thumblineClassName = isActive ? `thumbnail active` : `thumbnail`

  const onChangeClickImage = () => {
    setThumblineId(id)
  }

  return (
    <li className="list-items">
      <button type="button" className="btn-img" onClick={onChangeClickImage}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={thumblineClassName}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
