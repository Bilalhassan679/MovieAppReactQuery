import { ActivityIndicator, FlatList, StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';
import { useEffect, useState } from 'react';
import { fetchTopRatedMovies } from '@/api/movies';
import MovieListItem from '@/components/MovieListItem';
import {
  useQuery,
  useInfiniteQuery
} from '@tanstack/react-query'
export default function TabOneScreen() {

  const { isPending, error, data,fetchNextPage } = useInfiniteQuery({
    queryKey: ['movies'],
    queryFn: fetchTopRatedMovies,
    initialPageParam:1,
    getNextPageParam: (lastPage, pages) => pages.length + 1,
  })
  if (isPending) {
    return( 
    <View style={{flex:1,backgroundColor:'rgba(0,0,0,0.7)',justifyContent:'center',alignItems:'center',...StyleSheet.absoluteFillObject}}>
      <ActivityIndicator />
    </View>)
  }

  if (error) {
    return <Text>{error.message}</Text>
  }

  const movies=data?.pages.flat()
  console.log(movies,'asdfjalskd1111fjaklsdjf')
  return (
    <View style={styles.container}>
      <FlatList
      numColumns={2}
      contentContainerStyle={{ gap: 5, padding: 5 }}
      columnWrapperStyle={{ gap: 5 }}
      data={movies}
      renderItem={({item})=><MovieListItem  movies={item}/>}
      onEndReached={()=>{
      console.log("END REACED")
      fetchNextPage()
    }}
      />
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
 
});
