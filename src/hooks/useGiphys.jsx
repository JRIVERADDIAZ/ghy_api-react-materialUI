

import { useState, useEffect } from 'react'

import { fetchData } from '../helpers/getData'

export const useGiphys = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [giphys, setGiphys] = useState([])

    useEffect(() => {

        fetchData()
            .then((giphysData) => {
                setIsLoading(false);
                setGiphys(giphysData)
            }
            )
    },[])


    // const giphysFiltered = () => {

    // }


    return { isLoading, giphys }
}
