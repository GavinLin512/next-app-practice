import Image from 'next/image'

export default function Logo() {
    return (
        <Image
            src="/images/logo.png"
            width={40}
            height={40}
            alt="Logo"
        />
    )
}