import Image from "next/image"

const TypeRacerBadge = () => {
    return (
        <a
            href="https://data.typeracer.com/pit/profile?user=hube04&ref=badge"
            target="_top"
        >
            <div className="w-1/6">
                <Image
                    src="https://data.typeracer.com/misc/badge?user=hube04"
                    layout="responsive"
                    width={100}
                    height={100}
                    style={{ border: 0 }}
                    alt="TypeRacer.com scorecard for user hube04"
                />
            </div>
        </a>
    )
}

export default TypeRacerBadge
