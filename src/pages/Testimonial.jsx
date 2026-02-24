import React, { useState } from 'react'

const TestimonialSection = () => {
  const images = ['/assets/t1.jpg', '/assets/t2.jpg', '/assets/t3.jpg', '/assets/t4.jpg', '/assets/t5.jpg', '/assets/t6.jpg', '/assets/t7.jpg']
  const [selectedImage, setSelectedImage] = useState(null)

  const openModal = (image) => {
    setSelectedImage(image)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  return (
    <section className="bg-gray-100 py-12 md:py-16 lg:py-20 px-4">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="block text-center mt-1 text-xs md:text-2xl lg:text-3xl leading-tight font-extrabold text-amber-600 uppercase mb-6">TESTIMONIALS</div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 gap-4">
            {images.map((image, index) => (
              <div key={index} className="relative overflow-hidden rounded-lg cursor-pointer" onClick={() => openModal(image)}>
                <img
                  src={image}
                  alt={`Testimonial - Image ${index + 1}`}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm bg-black/50"
          onClick={closeModal}
        >
          <div 
            className="relative max-w-4xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img
              src={selectedImage}
              alt="Testimonial Full Size"
              className="w-full h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  )
}

export default TestimonialSection;
