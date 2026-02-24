import React, { useState, useEffect } from 'react'

const VistaImage = () => {
  const images = ['/assets/r1.jpg', '/assets/r2.jpg', '/assets/r3.jpg', '/assets/r4.jpg', '/assets/r5.jpg', '/assets/r6.jpg']
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000) // Auto-play every 4 seconds
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="px-4 py-4 relative">
      <div>
        <div className="relative overflow-hidden rounded-lg shadow-lg">
          <img
          src={images[currentIndex]}
          alt={`Vista Express Logistics - Image ${currentIndex + 1}`}
          className="w-full h-auto zoom-effect"
        />
          
          {/* Navigation buttons hidden */}
        </div>
        
        <div className="flex justify-center mt-4 space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`rounded-full ${
                index === currentIndex ? 'w-4 h-4 bg-amber-600' : 'w-2 h-2 bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default VistaImage;
