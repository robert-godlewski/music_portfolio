# Description
This is a portfolio of all of the music I have produced or engineered in the past.

# Data information
for the actual information refer to master resume

ReleaseData = {
    title: String,
    release_date: Date,
    album_artwork: String - image link,
    stream_links: [Strings - links to streaming services]
    artists: [..., ArtistData],
    songs: [..., SongData],
    ...other information here
}

SongData = {
    title: String,
    composers: [..., ArtistData],
    releases: [..., ReleaseData],
    stream_links: [Strings - links to streaming services]
    ...other information here
}

ArtistData = {
    first_name: String,
    middle_name: String,
    last_name: String,
    roles: [Option strings],
    projects: [ReleaseData, SongData],
    ...other information here
}

# Product build
Tech stack is MERN.  Deployment of the web app will be Heroku/ AWS/ Google Cloud.

# Product Backlog
* Link to my COD Website and music
* A messenger for future music production leads - Using email to drive traffic
