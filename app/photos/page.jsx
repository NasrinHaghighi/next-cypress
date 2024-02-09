import React from 'react'
import photos from'../lib/photos'
import Link from 'next/link'
import Image from 'next/image'



function PhotosPage() {
  return (
    <section className='m-12'>
    <div className='container'>
      <h1 className='font-serif text-3xl font-bold text-gray-700'>Photos</h1>

      <ul className='mt-10 grid auto-rows-max grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {photos?.map(({ id, imageSrc }) => (
          <li key={id}>
            <Link href={`/photos/${id}`}>
              <Image
                alt=''
                src={imageSrc}
                height={300}
                width={300}
                className='aspect-square w-full rounded-xl object-cover'
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </section>
)
  
}

export default PhotosPage