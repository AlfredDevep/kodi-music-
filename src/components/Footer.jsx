import React from 'react'
import '../style/Footer.css'
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';
import { Grid, Slider } from '@mui/material';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';


export const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer__left">
                {/* Album and Song Info */}
                <img className='footer__albumLogo' src='https://upload.wikimedia.org/wikipedia/en/1/1e/Usher-Yeah!.jpg' alt=''
                />
                <div className="footer__songInfo">
                    <h4>Yeah!</h4>
                    <p>Usher</p>

                </div>
            </div>
            <div className="footer__center">
                {/* Content for footer center */}
                <ShuffleIcon className='footer__green' />
                <SkipPreviousIcon className='footer__icon' />
                <PlayCircleFilledIcon fontSize='large' className='footer__icon' />
                <SkipNextIcon className='footer__icon' />
                <RepeatIcon className='footer__green' />
            </div>
            <div className="footer__right">
                {/* Content for footer right */}
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon />
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon />
                    </Grid>
                    <Grid item xs>
                        <Slider />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}
