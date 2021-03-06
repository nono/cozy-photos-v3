import styles from '../styles/albumsList'

import React from 'react'

import { withEmpty } from '../components/Empty'
import AlbumItem from '../components/AlbumItem'

const DumbAlbumsList = props => (
  <div className={styles['pho-album-list']}>
    {props.albums.map((a) =>
      <AlbumItem album={a} shared={props.shared.indexOf(a._id) !== -1} key={a._id} onServerError={props.onServerError} />)}
  </div>
)

const AlbumsList = withEmpty(props => props.albums.length === 0, 'albums', DumbAlbumsList)

export default AlbumsList
