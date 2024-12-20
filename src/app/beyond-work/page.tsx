import TypeRacerBadge from "@/components/beyond-work/TypeRacerBadge"
import LichessUserData from "@/components/beyond-work/LichessUserData"
import MonkeytypeUserData from "@/components/beyond-work/MonkeytypeUserData"

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
