import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = '50sq - Professional Photo Management for Photographers'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        background: '#000',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
      }}
    >
      {/* SVG Background */}
      <img
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1950 1200'%3E%3Crect fill='%23000000' width='1950' height='1200'/%3E%3Cdefs%3E%3CradialGradient id='a' cx='0' cy='1200' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%237a5e00'/%3E%3Cstop offset='1' stop-color='%237a5e00' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='b' cx='1950' cy='1200' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23756e22'/%3E%3Cstop offset='1' stop-color='%23756e22' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='c' cx='975' cy='0' r='1200' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%2310100f'/%3E%3Cstop offset='1' stop-color='%2310100f' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='d' cx='975' cy='1200' r='1200' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23F5C900'/%3E%3Cstop offset='1' stop-color='%23F5C900' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='e' cx='0' cy='0' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23000000'/%3E%3Cstop offset='1' stop-color='%23000000' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='f' cx='1950' cy='0' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%231A1A19'/%3E%3Cstop offset='1' stop-color='%231A1A19' stop-opacity='0'/%3E%3C/radialGradient%3E%3C/defs%3E%3Crect fill='%23010100' x='149' y='-1' width='152' height='152'/%3E%3Crect fill='%23020200' x='299' y='149' width='152' height='152'/%3E%3Crect fill='%23030301' x='300' y='-1' width='151' height='151'/%3E%3Crect fill='%23040402' x='449' y='299' width='152' height='152'/%3E%3Crect fill='%23050504' x='450' y='149' width='151' height='151'/%3E%3Crect fill='%23060605' x='450' y='-1' width='151' height='151'/%3E%3Crect fill='%23080706' x='600' y='299' width='151' height='152'/%3E%3Crect fill='%23090907' x='600' y='149' width='151' height='151'/%3E%3Crect fill='%230a0a08' x='600' y='-1' width='151' height='151'/%3E%3Crect fill='%230b0b09' x='749' y='449' width='152' height='152'/%3E%3Crect fill='%230c0c0a' x='750' y='299' width='151' height='151'/%3E%3Crect fill='%230d0d0b' x='750' y='149' width='151' height='151'/%3E%3Crect fill='%230d0d0c' x='750' y='-1' width='151' height='151'/%3E%3Crect fill='%230e0e0d' x='899' y='599' width='152' height='152'/%3E%3Crect fill='%230f0f0e' x='900' y='449' width='151' height='151'/%3E%3Crect fill='%2310100f' x='900' y='299' width='151' height='151'/%3E%3Crect fill='%2311110f' x='900' y='149' width='151' height='151'/%3E%3Crect fill='%23111110' x='900' y='-1' width='151' height='151'/%3E%3Crect fill='%23121211' x='1050' y='449' width='151' height='152'/%3E%3Crect fill='%23131312' x='1050' y='299' width='151' height='151'/%3E%3Crect fill='%23131312' x='1050' y='149' width='151' height='151'/%3E%3Crect fill='%23141413' x='1050' y='-1' width='151' height='151'/%3E%3Crect fill='%23151514' x='1200' y='299' width='151' height='152'/%3E%3Crect fill='%23151514' x='1200' y='149' width='151' height='151'/%3E%3Crect fill='%23161615' x='1200' y='-1' width='151' height='151'/%3E%3Crect fill='%23171716' x='1350' y='299' width='151' height='152'/%3E%3Crect fill='%23171716' x='1350' y='149' width='151' height='151'/%3E%3Crect fill='%23181817' x='1350' y='-1' width='151' height='151'/%3E%3Crect fill='%23181817' x='1500' y='149' width='151' height='152'/%3E%3Crect fill='%23191918' x='1500' y='-1' width='151' height='151'/%3E%3Crect fill='%23191918' x='1650' y='-1' width='151' height='152'/%3E%3Crect fill='%231e1e1a' x='1800' y='149' width='152' height='152'/%3E%3Crect fill='%2323231b' x='1649' y='150' width='152' height='151'/%3E%3Crect fill='%2327271c' x='1800' y='300' width='152' height='151'/%3E%3Crect fill='%232c2c1d' x='1649' y='300' width='152' height='151'/%3E%3Crect fill='%2330301e' x='1800' y='450' width='152' height='151'/%3E%3Crect fill='%2335351f' x='1800' y='600' width='152' height='151'/%3E%3Crect fill='%233a391f' x='1649' y='450' width='152' height='151'/%3E%3Crect fill='%233e3e20' x='1499' y='300' width='151' height='151'/%3E%3Crect fill='%23434321' x='1800' y='750' width='152' height='151'/%3E%3Crect fill='%23494721' x='1649' y='600' width='152' height='151'/%3E%3Crect fill='%234e4c21' x='1499' y='450' width='151' height='151'/%3E%3Crect fill='%23535122' x='1800' y='900' width='152' height='151'/%3E%3Crect fill='%23595622' x='1649' y='750' width='152' height='151'/%3E%3Crect fill='%235e5b22' x='1499' y='600' width='151' height='151'/%3E%3Crect fill='%23646022' x='1349' y='450' width='151' height='151'/%3E%3Crect fill='%23696422' x='1800' y='1049' width='152' height='151'/%3E%3Crect fill='%236f6922' x='1649' y='900' width='152' height='151'/%3E%3Crect fill='%23756e22' x='1499' y='750' width='151' height='151'/%3E%3Crect fill='%237b7322' x='1349' y='600' width='151' height='151'/%3E%3Crect fill='%23827822' x='1199' y='450' width='151' height='151'/%3E%3Crect fill='%23887d21' x='1649' y='1050' width='152' height='151'/%3E%3Crect fill='%238f8221' x='1499' y='1049' width='151' height='152'/%3E%3Crect fill='%23958720' x='1499' y='900' width='151' height='150'/%3E%3Crect fill='%239c8c1f' x='1349' y='1049' width='151' height='152'/%3E%3Crect fill='%23a3911e' x='1349' y='899' width='151' height='151'/%3E%3Crect fill='%23aa971d' x='1349' y='750' width='151' height='150'/%3E%3Crect fill='%23b19c1c' x='1199' y='1049' width='151' height='152'/%3E%3Crect fill='%23b8a11a' x='1199' y='899' width='151' height='151'/%3E%3Crect fill='%23bfa619' x='1199' y='749' width='151' height='151'/%3E%3Crect fill='%23c6ab17' x='1199' y='600' width='151' height='150'/%3E%3Crect fill='%23ceb014' x='1049' y='1049' width='151' height='152'/%3E%3Crect fill='%23d5b512' x='1049' y='899' width='151' height='151'/%3E%3Crect fill='%23ddba0e' x='1049' y='749' width='151' height='151'/%3E%3Crect fill='%23e5bf0a' x='1049' y='600' width='151' height='150'/%3E%3Crect fill='%23edc405' x='899' y='899' width='151' height='152'/%3E%3Crect fill='%23320000' x='-1' y='149' width='152' height='152'/%3E%3Crect fill='%23340800' x='150' y='150' width='150' height='151'/%3E%3Crect fill='%23360f00' x='-1' y='300' width='152' height='151'/%3E%3Crect fill='%23381500' x='150' y='300' width='151' height='151'/%3E%3Crect fill='%233b1a00' x='-1' y='450' width='152' height='151'/%3E%3Crect fill='%233e1f00' x='-1' y='600' width='152' height='151'/%3E%3Crect fill='%23412500' x='150' y='450' width='151' height='151'/%3E%3Crect fill='%23452a00' x='300' y='300' width='150' height='151'/%3E%3Crect fill='%23492f00' x='-1' y='750' width='152' height='151'/%3E%3Crect fill='%234e3400' x='150' y='600' width='151' height='151'/%3E%3Crect fill='%23523900' x='300' y='450' width='151' height='151'/%3E%3Crect fill='%23573e00' x='-1' y='900' width='152' height='151'/%3E%3Crect fill='%235d4300' x='150' y='750' width='151' height='151'/%3E%3Crect fill='%23624900' x='300' y='600' width='151' height='151'/%3E%3Crect fill='%23684e00' x='450' y='450' width='151' height='151'/%3E%3Crect fill='%236e5400' x='-1' y='1050' width='152' height='151'/%3E%3Crect fill='%23745900' x='150' y='900' width='151' height='151'/%3E%3Crect fill='%237a5e00' x='300' y='750' width='151' height='151'/%3E%3Crect fill='%23806400' x='450' y='600' width='151' height='151'/%3E%3Crect fill='%23866a00' x='600' y='450' width='150' height='151'/%3E%3Crect fill='%238d6f00' x='150' y='1050' width='151' height='151'/%3E%3Crect fill='%23947500' x='300' y='1049' width='151' height='152'/%3E%3Crect fill='%239a7b00' x='300' y='900' width='151' height='150'/%3E%3Crect fill='%23a18000' x='450' y='1049' width='151' height='152'/%3E%3Crect fill='%23a88600' x='450' y='899' width='152' height='151'/%3E%3Crect fill='%23af8c00' x='450' y='750' width='152' height='150'/%3E%3Crect fill='%23b69200' x='600' y='1049' width='151' height='152'/%3E%3Crect fill='%23bd9800' x='600' y='899' width='151' height='151'/%3E%3Crect fill='%23c49e00' x='600' y='749' width='151' height='151'/%3E%3Crect fill='%23cba400' x='600' y='600' width='151' height='150'/%3E%3Crect fill='%23d2aa00' x='750' y='1049' width='151' height='152'/%3E%3Crect fill='%23d9b000' x='750' y='899' width='150' height='151'/%3E%3Crect fill='%23e0b600' x='750' y='749' width='151' height='151'/%3E%3Crect fill='%23e7bc00' x='750' y='600' width='150' height='150'/%3E%3Crect fill='%23eec300' x='900' y='1050' width='150' height='151'/%3E%3Crect fill='%23000000' x='-1' y='-1' width='151' height='151'/%3E%3Crect fill='%23F5C900' x='900' y='750' width='150' height='150'/%3E%3Crect fill='%231A1A19' x='1800' y='-1' width='151' height='151'/%3E%3Cg fill-opacity='0.52'%3E%3Crect fill='url(%23a)' width='1950' height='1200'/%3E%3Crect fill='url(%23b)' width='1950' height='1200'/%3E%3Crect fill='url(%23c)' width='1950' height='1200'/%3E%3Crect fill='url(%23d)' width='1950' height='1200'/%3E%3Crect fill='url(%23e)' width='1950' height='1200'/%3E%3Crect fill='url(%23f)' width='1950' height='1200'/%3E%3C/g%3E%3C/svg%3E"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: 0.2,
        }}
      />
      {/* Content */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '80px',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '60px',
          }}
        >
          <svg width="125" height="125" viewBox="0 0 50 50" fill="none">
            <path
              fill="white"
              d="M4.375 49.195c-.71 0-1.36-.179-1.953-.537a4.207 4.207 0 0 1-1.445-1.426A3.67 3.67 0 0 1 .439 45.3v-.596c0-.059.033-.088.098-.088h2.266c.052 0 .078.03.078.088v.46c0 .448.146.83.44 1.142.292.306.644.459 1.054.459.417 0 .768-.157 1.055-.47a1.64 1.64 0 0 0 .43-1.132v-1.357c0-.417-.15-.765-.45-1.045-.3-.28-.67-.42-1.113-.42-.573 0-1.045.228-1.416.683l-.04.059-2.138-.166c-.071 0-.107-.032-.107-.098L.84 37.34l.117-2.178c0-.052.026-.078.078-.078h6.729c.052 0 .078.026.078.078v2.178c0 .065-.026.097-.078.097H3.076l-.097 2.764a2.72 2.72 0 0 1 .634-.195 3.21 3.21 0 0 1 .703-.088c.723 0 1.387.176 1.993.527.605.358 1.087.83 1.445 1.416.364.586.547 1.234.547 1.944v1.357a4 4 0 0 1-.528 2.012 4.238 4.238 0 0 1-1.425 1.474 3.69 3.69 0 0 1-1.973.547Zm8.97 0c-.846 0-1.598-.182-2.256-.547a4.12 4.12 0 0 1-1.533-1.455 3.859 3.859 0 0 1-.547-2.011l.02-6.338c0-.742.185-1.41.556-2.002a3.998 3.998 0 0 1 1.524-1.436c.65-.364 1.396-.547 2.236-.547.86 0 1.608.18 2.246.538a4.01 4.01 0 0 1 1.504 1.445c.371.599.557 1.266.557 2.002l.02 6.338a3.84 3.84 0 0 1-.548 2.002 4.094 4.094 0 0 1-1.533 1.464c-.644.365-1.393.547-2.246.547Zm1.904-4.013-.02-6.338c0-.469-.175-.85-.527-1.143-.345-.293-.797-.44-1.357-.44-.573 0-1.032.147-1.377.44a1.428 1.428 0 0 0-.518 1.143v6.338c0 .494.173.885.518 1.171.345.287.804.43 1.377.43.56 0 1.015-.143 1.367-.43.358-.286.537-.677.537-1.171Zm8.941 4.013a3.7 3.7 0 0 1-1.963-.547 4.18 4.18 0 0 1-1.426-1.455 3.968 3.968 0 0 1-.528-2.011v-.918c0-.072.033-.108.098-.108h2.246c.052 0 .078.036.078.108v.918c0 .436.147.813.44 1.133.293.312.644.468 1.054.468.417 0 .772-.16 1.065-.478.293-.326.44-.7.44-1.123 0-.489-.32-.915-.958-1.28a7.56 7.56 0 0 0-.41-.234 15.863 15.863 0 0 0-.586-.332l-.664-.361a34.92 34.92 0 0 0-.625-.352c-.729-.43-1.273-.967-1.63-1.611-.352-.651-.528-1.38-.528-2.188 0-.742.182-1.413.547-2.011a4.095 4.095 0 0 1 1.426-1.407 3.704 3.704 0 0 1 1.924-.527c.71 0 1.36.176 1.953.527a4.07 4.07 0 0 1 1.416 1.426c.358.593.537 1.257.537 1.992v1.64c0 .053-.026.079-.078.079H25.77c-.052 0-.078-.026-.078-.078l-.02-1.64c0-.47-.146-.85-.439-1.143a1.428 1.428 0 0 0-1.045-.44c-.41 0-.761.156-1.054.469-.293.312-.44.684-.44 1.113 0 .436.091.801.274 1.094.189.293.53.573 1.025.84a49.005 49.005 0 0 1 .986.547c.235.123.446.237.635.342l.342.175c.664.371 1.188.827 1.572 1.367.39.54.586 1.205.586 1.993 0 .761-.175 1.445-.527 2.05a4.017 4.017 0 0 1-1.426 1.436 3.793 3.793 0 0 1-1.973.527Zm11.694 1.085-1.377-1.397c-.488.208-.99.312-1.504.312-.71 0-1.36-.179-1.953-.537a4.126 4.126 0 0 1-1.445-1.455 3.964 3.964 0 0 1-.537-2.021l.02-6.338c0-.71.175-1.367.526-1.973a4.017 4.017 0 0 1 1.407-1.455 3.658 3.658 0 0 1 1.982-.557c.71 0 1.36.176 1.953.528a4.043 4.043 0 0 1 1.416 1.435c.358.6.537 1.273.537 2.022l.02 6.338c0 .384-.055.758-.166 1.123-.104.358-.244.69-.42.996l1.24 1.26c.065.052.072.097.02.136L36.03 50.28c-.046.04-.095.04-.147 0Zm-2.88-3.497c.455 0 .82-.17 1.093-.508.273-.345.41-.71.41-1.093l-.02-6.338c0-.43-.14-.801-.42-1.114a1.367 1.367 0 0 0-1.064-.468c-.45 0-.81.16-1.084.478a1.65 1.65 0 0 0-.41 1.104v6.338c0 .481.156.869.469 1.162.312.293.654.44 1.025.44Z"
            />
            <path fill="#F5C900" d="M.004 30.745h3.581V3.585h42.83v42.83h-6.464v3.581h10.05V0H.004v30.745Z" />
          </svg>
        </div>
        <div
          style={{
            fontSize: 64,
            fontWeight: 600,
            color: 'white',
            textAlign: 'center',
            lineHeight: 1.5,
            marginBottom: '35px',
          }}
        >
          Built by photographers. For photographers.
        </div>
        <div
          style={{
            fontSize: 22,
            color: '#a1a1aa',
            textAlign: 'center',
            lineHeight: 1.4,
          }}
        >
          Upload in seconds. Organize effortlessly. Deliver beautifully.
        </div>
      </div>
    </div>,
    {
      ...size,
    },
  )
}
