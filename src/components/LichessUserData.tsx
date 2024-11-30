"use client"

import axios from "axios"
import { useEffect, useState } from "react"
import { LichessUserDataType } from "@/types"

const LichessUserData = () => {

    const [userData, setUserData] = useState<LichessUserDataType | null>(null)

    const username = "Regnix"
    const apiUrl = `https://lichess.org/api/user/${username}`
    useEffect(() => {
        axios
            .get(apiUrl)
            .then(function (response) {
                // handle success
                setUserData(response.data)
            })
            .catch(function (error) {
                // handle error
                console.log(error)
            })
    }, [apiUrl])

    const timeControls = [
        "bullet",
        "blitz",
        "rapid",
        "classical",
    ]

    const variants = [
        "chess960",
        "antichess",
        "atomic",
        "horde",
        "crazyhouse",
    ]

    const puzzles = [
        "puzzle",
        "storm",
        "racer", 
        "streak",
    ]
    
    return (
        <div>
            <h1>Lichess Profile</h1>
            {userData && 
                <div>
                    <h2>
                        <a
                            href="https://lichess.org/@/Regnix"
                        >
                            {userData.username}
                        </a>
                    </h2>
                    <h2>Rated Games</h2>
                    <p>{userData.count.rated}</p>
                    <div className="flex flex-row">
                        {timeControls.map((timeControl) => (
                            <div key={timeControl} className="border mx-auto">
                                <h2>{timeControl.charAt(0).toUpperCase() + timeControl.slice(1)}</h2>
                                <p>Rating: {userData.perfs[timeControl].rating}</p>
                                <p>Number of Games: {userData.perfs[timeControl].games}</p>
                            </div>
                        ))}
                    </div>
                    <h2>Variants</h2>
                    <div className="flex flex-row">
                        {variants.map((variant) => (
                            <div key={variant} className="border mx-auto">
                                <h2>{variant.charAt(0).toUpperCase() + variant.slice(1)}</h2>
                                <p>Rating: {userData.perfs[variant].rating}</p>
                                <p>Number of Games: {userData.perfs[variant].games}</p>
                            </div>
                        ))}
                    </div>
                    <h2>Puzzles</h2>
                    <div className="flex flex-row">
                        {puzzles.map((puzzle) => (
                            <div key={puzzle} className="border mx-auto">
                                <h2>{puzzle.charAt(0).toUpperCase() + puzzle.slice(1)}</h2>
                                {userData.perfs[puzzle].rating && <p>Rating: {userData.perfs[puzzle].rating}</p>}
                                {userData.perfs[puzzle].games && <p>Number of Games: {userData.perfs[puzzle].games}</p>}
                                {userData.perfs[puzzle].runs && <p>Runs: {userData.perfs[puzzle].runs}</p>}
                                {userData.perfs[puzzle].score && <p>Score: {userData.perfs[puzzle].score}</p>}
                            </div>
                        ))}
                    </div>
                </div>
            }
        </div>
    )
}

export default LichessUserData