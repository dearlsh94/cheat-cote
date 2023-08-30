import * as React from 'react'
import { parkWalk } from '../test'
import { logCallTest } from '../util'

const ParkWalkTest = () => {
    const ARGS = [
        [
            ['SOO', 'OOO', 'OOO'],
            ['E 2', 'S 2', 'W 1'],
        ], // answer : [2, 1]
        [
            ['SOO', 'OXX', 'OOO'],
            ['E 2', 'S 2', 'W 1'],
        ], // answer : [0, 1]
        [
            ['OSO', 'OOO', 'OXO', 'OOO'],
            ['E 2', 'S 3', 'W 1'],
        ], // answer : [0, 0]
    ]

    const results = ARGS.map(arg => {
        const start = performance.now()
        const answer = parkWalk(...arg)
        const end = performance.now()

        logCallTest(arg, end - start, answer)
        return {
            time: end - start,
            answer,
        }
    })

    return (
        <>
            <p>프로그래머스 : 공원 산책</p>
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

export default ParkWalkTest
