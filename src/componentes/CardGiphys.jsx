import React, { useState } from 'react'
import { Box, Button, TextField } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'

import { useGiphys } from '../hooks/useGiphys'
import styles from '../styles/cardGiphyStyles.module.css'
import theme from '../styles/Styles'


const CardGiphys = () => {

    const [currentPage, setcurrentPage] = useState(0)
    const [search, setSearch] = useState('')

    const { giphys } = useGiphys()
    console.log(search);
    let filteredGiphys = () => {

        if (search.length === 0) {
            return giphys.slice(currentPage, currentPage + 10)
        }

        const filtered = giphys.filter(giphy => giphy.title.includes(search))

        return filtered.slice(currentPage, currentPage + 10)

    }

    const searchGiphys = ({ target }) => {
        setcurrentPage(0)
        setSearch(target.value)

    }

    const nextPage = () => {
        if (currentPage < giphys.length) {
            setcurrentPage(currentPage + 10)
        }
    }

    const prevPage = () => {
        if (currentPage >= 5) {
            setcurrentPage(currentPage - 10)
        }
    }

    return (
        <>
            <ThemeProvider theme={theme}>
                <Box
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField
                        sx={{
                            bgcolor: 'white',
                            minWidth: 1000,
                            size: 'large'
                        }}
                        size="large"
                        bgcolor="primary"
                        color="secondary"
                        label="Search Giphy"
                        variant='filled'
                        value={search}
                        onChange={searchGiphys}
                    />
                </Box>
                
                    <Button
                        color="primary"
                        variant="contained"
                        onClick={() => prevPage()}  > Prev </Button>

                    <Button
                        color='secondary'
                        variant='contained'
                        onClick={() => nextPage()}  > next </Button>
            
                <div className={styles.giphy_card_body}>
                    {
                        filteredGiphys().map(({ id, title, url }) => (
                            <div className={styles.giphy_card_container} key={id} >
                                <div className={styles.giphy_cards_title_container}>
                                    <div >
                                        <div className={styles.giphy_cards_image_container}>
                                            <img
                                                className={styles.giphy_cards_image}
                                                src={url}
                                                alt={title}
                                            />
                                        </div>
                                        <p className={styles.giphy_cards_title}>{title}</p>
                                    </div>
                                </div>
                            </div>
                        )
                        )
                    }
                </div>
            </ThemeProvider>
        </>
    )
}

export default CardGiphys