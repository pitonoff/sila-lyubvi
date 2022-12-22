import { Image } from '@mui/icons-material'
import { Box, Button } from '@mui/material'
import React from 'react'
import logo from '../img/logo.svg';

const Footer = () => {
    return (
        <Box className='box-footer'
            sx={{
                // displayPrint: 'flex',
                // display: 'flex',
                // flexDirection: 'row',
                // position: 'relative',
                // justifyContent: 'space-between'

            }}

        >
            {/* FIXMI logo */}
                <img
                    style={{
                        margin: '25px 101px',
                        gap: 30,
                        width: 83,
                        height: 83
                    }}
                    src={logo} alt="Логотип Сила Любви" />
            <Button
                style={{
                    fontSize: "12px",
                    color: 'black',
                    textColor: 'primary',
                    padding: '22px 30px',
                    margin: '47px 224px',
                    gap: 30,
                    float: 'right',
                    width: 187,
                    height: 61,
                    backgroundColor: '#FFFFFF',
                    borderRadius: 30
                }}
            >ОБРАТНАЯ СВЯЗЬ</Button>
            <p style={{
                color: 'white',
                fontSize: '24px',
                margin: '0px 101px',
            }}>
                Проект движения</p>
                <p style={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: '48px',
                margin: '0px 101px',
            }}>
                СИЛА ЛЮБВИ</p>
        </Box>
    )
}

export default Footer