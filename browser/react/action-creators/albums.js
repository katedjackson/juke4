export const onLoad = function(albums, artists, playlists) {

  albums: convertAlbums(albums)

  return {
    type: RECEIVE_ARTISTS,
    artists : artists
  }
}
