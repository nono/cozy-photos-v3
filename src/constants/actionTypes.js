/**
  Redux actions constants
**/

// index using cozy-stack mango
export const INDEX_FILES_BY_DATE = 'INDEX_FILES_BY_DATE'
export const INDEX_FILES_BY_DATE_SUCCESS = 'INDEX_FILES_BY_DATE_SUCCESS'
export const INDEX_ALBUMS_BY_NAME_SUCCESS = 'INDEX_ALBUMS_BY_NAME_SUCCESS'

// fetch photos
export const FETCH_PHOTOS = 'FETCH_PHOTOS'
export const RECEIVE_PHOTOS = 'RECEIVE_PHOTOS'
export const FETCH_PHOTOS_FAILURE = 'FETCH_PHOTOS_FAILURE'

// albums
export const FETCH_ALBUMS_SUCCESS = 'FETCH_ALBUMS_SUCCESS'
export const FETCH_CURRENT_ALBUM_PHOTOS_SUCCESS = 'FETCH_CURRENT_ALBUM_PHOTOS_SUCCESS'

// upload photos
export const UPLOAD_PHOTOS = 'UPLOAD_PHOTOS'
export const UPLOAD_PHOTOS_SUCCESS = 'UPLOAD_PHOTOS_SUCCESS'
export const UPLOAD_PHOTOS_FAILURE = 'UPLOAD_PHOTOS_FAILURE'
export const UPLOAD_PHOTOS_SUCCESS_WITH_CONFLICTS =
  'UPLOAD_PHOTOS_SUCCESS_WITH_CONFLICTS'

// photo selection
export const SELECT_PHOTO = 'SELECT_PHOTO'
export const UNSELECT_PHOTO = 'UNSELECT_PHOTO'
export const SHOW_SELECTION_BAR = 'SHOW_SELECTION_BAR'
export const HIDE_SELECTION_BAR = 'HIDE_SELECTION_BAR'

// create albums
export const ADD_TO_ALBUM = 'ADD_TO_ALBUM'
export const ADD_TO_ALBUM_SUCCESS = 'ADD_TO_ALBUM_SUCCESS'
export const CANCEL_ADD_TO_ALBUM = 'CANCEL_ADD_TO_ALBUM'
export const CREATE_ALBUM_SUCCESS = 'CREATE_ALBUM_SUCCESS'