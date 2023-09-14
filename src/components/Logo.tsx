import Image from 'next/image'

type Size = {
    width?: number|null,
    height?: number|null
}

const DefaultStyle = {
    width: 'auto',
    height: 'auto'
}

// let LogoSize: Size = {
//     width: 70,
//     height: 70,
// }

export default function Logo({width, height}: Size) {
    return (
        <Image
            src="/images/logo.png"
            width={width??40}
            height={height??40}
            style={DefaultStyle}
            alt="Logo"
            priority={true}
        />
    )
}