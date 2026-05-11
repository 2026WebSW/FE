import { useEffect, useRef } from 'react'

declare global {
  interface Window {
    kakao: any
  }
}

function MapMain() {
  const mapContainer = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const apiKey = import.meta.env.VITE_KAKAO_MAP_KEY

    const script = document.createElement('script')
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${apiKey}&autoload=false`
    script.async = true

    script.onload = () => { // 지도 생성
      window.kakao.maps.load(() => {
        const options = {
          center: new window.kakao.maps.LatLng(36.5, 127.5),
          level: 7,
        }
        new window.kakao.maps.Map(mapContainer.current, options)
      })
    }

    document.head.appendChild(script)
  }, [])

  return (
    <div style={{ width: '100%', height: '100vh', background: '#0a0a0f' }}>
      <div ref={mapContainer} style={{ width: '100%', height: '100%' }} />
    </div>
  )
}

export default MapMain