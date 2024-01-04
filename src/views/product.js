import React, { useState } from 'react'
import redtile from '../assets/redtile.jpg'
import bluetile from '../assets/bluetile.jpg'
import yellowtile from '../assets/yellowtile.jpg'
import graytile from '../assets/graytile.jpg'
import blacktile from '../assets/blacktile.jpg'



export function Products() {

    const [tile, setTile] = useState(redtile);

    let style = {
        bg1: {
            height: '400px',
            width: '500px',
            backgroundImage: `url(${tile})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: '500px, 500px',
            transition: 'opacity 600ms, width 300ms',
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate( -50%, -50% )',
            zIndex: '-1'
          },
          redcircle: {
            height: '50px',
            width: '50px',
            backgroundColor: 'red',
            borderRadius: '50%'
          },
          bluecircle: {
            height: '50px',
            width: '50px',
            backgroundColor: 'blue',
            borderRadius: '50%'
          },
          blackcircle: {
            height: '50px',
            width: '50px',
            backgroundColor: 'black',
            borderRadius: '50%'
          },
          grayircle: {
            height: '50px',
            width: '50px',
            backgroundColor: 'grey',
            borderRadius: '50%'
          },
          yellowcircle: {
            height: '50px',
            width: '50px',
            backgroundColor: 'yellow',
            borderRadius: '50%'
          }
    }

    const changeTile = (tile) => {
        setTile(tile)
    }

    return (
        <div>
            <div style={style.bg1} ></div>
            <div style={style.redcircle} onMouseOver={() => changeTile(redtile)} />
            <div style={style.bluecircle} onMouseOver={() => changeTile(bluetile)} />
            <div style={style.blackcircle} onMouseOver={() => changeTile(blacktile)} />
            <div style={style.grayircle} onMouseOver={() => changeTile(graytile)} />
            <div style={style.yellowcircle} onMouseOver={() => changeTile(yellowtile)} />  
        </div>
    )
}