import * as React from 'react'
import { makePrimeNumber } from '../test'
import { logCallTest } from '../util'

const MakePrimeNumberTest = () => {
    const ARGS = [
        [1, 2, 3, 4],
        [1, 2, 7, 6, 4],
    ]

    const results = ARGS.map((arg, i) => {
        const start = performance.now()
        const answer = makePrimeNumber(arg)
        const end = performance.now()

        logCallTest(arg, end - start, answer)
        return {
            time: end - start,
            answer,
        }
    })

    return (
        <>
            <p>프로그래머스 : 소수 만들기</p>
            <ul>
                {results.map((res, i) => (
                    <li key={`make-prime-number-test-${i}`}>
                        <span>{`CASE ${i} Answer is `}</span>
                        <span>{res.answer}</span>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default MakePrimeNumberTest
