import * as React from 'react'
import { runRace } from '../test'
import { logCallTest } from '../util'

const RunRaceTest = () => {
    const ARGS = [
        {
            players: ['mumu', 'soe', 'poe', 'kai', 'mine'],
            callings: ['kai', 'kai', 'mine', 'mine'],
        },
    ]

    const results = ARGS.map((arg) => {
        const start = performance.now()
        const answer = runRace(arg.players, arg.callings)
        const end = performance.now()

        logCallTest(arg, end - start, answer)
        return {
            time: end - start,
            answer,
        }
    })

    return (
        <>
            <p>프로그래머스 : 달리기 경주</p>
            <ul>
                {results.map((res, i) => (
                    <li key={`run-race-test-${i}`}>
                        <span>{`CASE ${i} Answer is `}</span>
                        <span>{res.answer}</span>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default RunRaceTest
