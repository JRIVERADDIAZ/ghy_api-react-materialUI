import React from 'react'

import { useGiphys } from '../hooks/useGiphys'
import LoadingPage from './LoadingPage'
import CardGiphys from './CardGiphys'


const GIphyCards = () => {

    const { isLoading } = useGiphys()

    return (
        <>
            {
                isLoading ?
                    <LoadingPage /> :
                    <CardGiphys />
            }
        </>
    )
}

export default GIphyCards