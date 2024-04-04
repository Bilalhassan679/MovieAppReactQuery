import { Link } from 'expo-router'
import {  Text, Pressable, Image } from 'react-native'

const MovieListItem = ({movie }) => {
  console.log(movie)

  return (
    <Link href={`/${movie?.id}`} asChild>
    <Pressable style={{flex:1}} >
        <Image 
        style={{width:"100%", aspectRatio:3/5,borderRadius:20}}
        source={{uri:'https://image.tmdb.org/t/p/w500'+movie?.poster_path}}/>
    </Pressable>
        </Link>
  )
}

export default MovieListItem