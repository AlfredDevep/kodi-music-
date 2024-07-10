import React from 'react';
import '../style/Body.css';
import { Header } from './Header';
import { useDataLayerValue } from './DataLayer';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { SongRow } from '../components/SongRow';

export const Body = ({ spotify }) => {
  const [{ discovery_weekly }, dispatch] = useDataLayerValue();

  return (
    <div className='body'>
      <Header spotify={spotify} />

      <div className="body__info">
        {discovery_weekly?.images?.[0]?.url && (
          <img src={discovery_weekly.images[0].url} alt="Discover Weekly" />
        )}
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h1>Discover Weekly</h1>
          <p>{discovery_weekly?.description}</p>
        </div>
      </div>

      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilledIcon className='body__shuffle' />
          <FavoriteIcon fontSize='large' />
          <MoreHorizIcon />
        </div>

        {/** List of songs */}
        {discovery_weekly?.tracks?.items?.map((item) => (
          <SongRow key={item.track.id} track={item.track} />
        ))}
      </div>
    </div>
  );
};

