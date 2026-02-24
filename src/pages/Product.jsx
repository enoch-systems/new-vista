import React, { useEffect, useRef, useState } from 'react'

const ProductSection = () => {
  const sectionRef = useRef(null)
  const playerRef = useRef(null)
  const [isVideoOpen, setIsVideoOpen] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.classList.contains('opacity-0')) {
            entry.target.classList.remove('opacity-0')
            entry.target.classList.add('animate-slide-in-bottom')
          }
        })
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  useEffect(() => {
    // Load YouTube IFrame Player API
    if (!window.YT) {
      const tag = document.createElement('script')
      tag.src = 'https://www.youtube.com/iframe_api'
      const firstScriptTag = document.getElementsByTagName('script')[0]
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)
    }

    // Initialize player when API is ready
    window.onYouTubeIframeAPIReady = () => {
      if (isVideoOpen) {
        createPlayer()
      }
    }

    // If API is already loaded, create player immediately
    if (window.YT && window.YT.Player && isVideoOpen) {
      createPlayer()
    }

    function createPlayer() {
      if (playerRef.current) {
        playerRef.current.destroy()
      }
      
      playerRef.current = new window.YT.Player('youtube-player', {
        videoId: 'D8rrtoH188A',
        width: '100%',
        height: '100%',
        playerVars: {
          autoplay: 1,
          controls: 1,
          showinfo: 0,
          modestbranding: 1,
          rel: 0,
          iv_load_policy: 3,
          cc_load_policy: 0,
          disablekb: 1,
          fs: 0,
          playsinline: 1
        },
        events: {
          onReady: (event) => {
            event.target.playVideo()
            event.target.unMute()
          }
        }
      })
    }

    return () => {
      if (playerRef.current) {
        playerRef.current.destroy()
        playerRef.current = null
      }
    }
  }, [isVideoOpen])

  return (
    <>
      <section className="bg-gray-100 py-12 md:py-16 lg:py-20 px-4">
        <div className="px-4 md:px-6 lg:px-8">
          <div className="block mt-1 text-xs md:text-2xl lg:text-3xl leading-tight font-extrabold text-amber-600 uppercase mb-6 text-center">PRODUCT UNBOXING</div>
          
          <p className="mt-2 text-gray-500 text-center text-sm md:text-base lg:text-lg leading-relaxed max-w-3xl mx-auto">
            Watch our students unbox their imported products and see the quality firsthand. 
            These videos showcase real results from our mini-importation course graduates.
          </p>
          
          <div 
            ref={sectionRef}
            className="mt-8 opacity-0 flex justify-center"
          >
            <div className="w-full relative">
              <div className="w-full aspect-video rounded-lg bg-gray-900 flex items-center justify-center cursor-pointer group" onClick={() => setIsVideoOpen(true)}>
                <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg group-hover:bg-opacity-50 transition-all"></div>
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-white bg-opacity-90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <div className="w-0 h-0 border-l-[20px] border-l-amber-600 border-y-[12px] border-y-transparent ml-1"></div>
                  </div>
                </div>
                <iframe
                  src="https://www.youtube.com/embed/D8rrtoH188A?mute=1&controls=0&showinfo=0&modestbranding=1&rel=0"
                  className="absolute inset-0 w-full h-full object-cover rounded-lg pointer-events-none"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Product Unboxing"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Popup Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4">
          <div className="relative w-full h-full max-w-7xl max-h-[90vh]">
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-4 z-50000 right-2 text-white hover:text-gray-300 transition-colors text-4xl font-light z-10"
            >
              ×
            </button>
            <div className="relative w-full h-full aspect-video">
              <div id="youtube-player" className="w-full h-full rounded-lg"></div>
              <div className="absolute top-0 left-0 right-0 h-24 bg-black z-20"></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductSection;

