import React from 'react'
import Modal from '../../../components/Modal'
import PhotoCard from '../../../components/PhotoCard'
import photos from'../../../lib/photos'

function PhotoPage({params}) {

    const photo = photos?.find(photo => photo.id === params.id)
  return (
    <Modal>
      <PhotoCard photo={photo} />
    </Modal>
  )
}

export default PhotoPage