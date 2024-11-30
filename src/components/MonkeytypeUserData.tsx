"use client"

import axios from "axios"
import { useEffect, useState } from "react"
import { MonkeytypeUserDataType } from "@/types"

const MonkeytypeUserData = () => {

    const [userData, setUserData] = useState<MonkeytypeUserDataType | null>(null)

    const username = "Hube"
    const apiUrl = `https://api.monkeytype.com/users/${username}/profile`
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

    const times = [
        "15",
        "30",
        "60",
        "120",
    ]

    const words = [
        "10",
        "25",
        "50",
        "100",
    ]
    
    return (
        <div>
            <h1>Monkeytype Profile</h1>
            {userData && 
                <div>
                    <h2>
                        <a
                            href="https://monkeytype.com/profile/Hube"
                        >
                            {userData.data.name}
                        </a>
                    </h2>
                    <div className="flex flex-row">
                        <h2>All-Time English Leaderboards</h2>
                        <div>
                            <h2>15 seconds</h2>
                            <p>{userData.data.allTimeLbs.time["15"]["english"].rank}nd</p>
                            <p>Top {(userData.data.allTimeLbs.time["15"]["english"].rank / userData.data.allTimeLbs.time["15"]["english"].count * 100).toFixed(2)}%</p>
                        </div>
                        <div>
                            <h2>60 seconds</h2>
                            <p>{userData.data.allTimeLbs.time["60"]["english"].rank}nd</p>
                            <p>Top {(userData.data.allTimeLbs.time["60"]["english"].rank / userData.data.allTimeLbs.time["60"]["english"].count * 100).toFixed(2)}%</p>
                        </div>
                    </div>
                    <h2>Times</h2>
                    <div className="flex flex-row">
                        {times.map((time) => (
                            <div key={time} className="border mx-auto">
                                <h2>{time}</h2>
                                <p>WPM: {userData.data.personalBests.time[time][0].wpm}</p>
                                <p>Raw WPM: {userData.data.personalBests.time[time][0].raw}</p>
                                <p>Accuracy: {userData.data.personalBests.time[time][0].acc}%</p>
                                <p>Consistency: {userData.data.personalBests.time[time][0].consistency}%</p>
                            </div>
                        ))}
                    </div>
                    <h2>Words</h2>
                    <div className="flex flex-row">
                        {words.map((word) => (
                            <div key={word} className="border mx-auto">
                                <h2>{word}</h2>
                                <p>WPM: {userData.data.personalBests.words[word][0].wpm}</p>
                                <p>Raw WPM: {userData.data.personalBests.words[word][0].raw}</p>
                                <p>Accuracy: {userData.data.personalBests.words[word][0].acc}</p>
                                <p>Consistency: {userData.data.personalBests.words[word][0].consistency}</p>
                            </div>
                        ))}
                    </div>
                    <h2>Puzzles</h2>
                </div>
            }
        </div>
    )
}

export default MonkeytypeUserData