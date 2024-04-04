import { Link } from 'expo-router'
import {  Text, Pressable, Image } from 'react-native'

const MovieListItem = ({movies }) => {
  console.log(movies)

  return (
    <Link href={'/abc'} asChild>
    <Pressable style={{flex:1}} >
        <Image 
        style={{width:"100%", aspectRatio:3/5,borderRadius:20}}
        source={{uri:'https://image.tmdb.org/t/p/w500'+movies.poster_path}}/>
    </Pressable>
        </Link>
  )
}

export default MovieListItem