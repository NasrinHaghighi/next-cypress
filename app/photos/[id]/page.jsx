import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import photos from'../../lib/photos'
import PhotoCard from '../../components/PhotoCard'


function PhotoPage({params}) {
//    const {id} = params
//    console.log(params.id)
   const photo = photos.find(photo => photo.id === params.id)
   //console.log(photo)
  return (
    <section className='p-24'>
    <div className='container'>
      <div>
        <Link
          href='/photos'
          className='font-semibold italic text-sky-600 underline'
        >
          Back to photos
        </Link>
      </div>

      <div className='mt-10 w-1/3'>
         <PhotoCard photo={photo} /> 
      </div>
    </div>
  </section>
  )
}

export default PhotoPage