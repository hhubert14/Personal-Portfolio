import TypeRacerBadge from "@/components/TypeRacerBadge"
import LichessUserData from "@/components/LichessUserData"
import MonkeytypeUserData from "@/components/MonkeytypeUserData"

const BeyondWork = () => {
    return (
        <div className="mx-[5%]">
            <h1>Typing</h1>
            <TypeRacerBadge />
            <MonkeytypeUserData />
            <h1>Chess</h1>
            <LichessUserData />
        </div>
    )
}

export default BeyondWork
