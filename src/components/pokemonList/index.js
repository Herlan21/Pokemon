import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, {useEffect} from 'react'
import { useSelector } from 'react-redux'
import { pokemonSuccess } from '../../redux/actions'
import { useDispatch } from 'react-redux';

const PokemonList = () => {

  const dispatch = useDispatch()

  const pokemondata = useSelector(state => {
    console.log(state.appData.pokeData);
    return state.appData.pokeData
  })

  const renderItems = ({ item }) => (
      <View>
        <Text style={{ color: '#000', marginRight: 15 }}>{item.name}</Text>
      </View>
    )

    useEffect(() => {
      dispatch(pokemonSuccess())
    }, [])
  return (
    <View>
      <FlatList 
      numColumns={2}
      keyExtractor={(index)=> index.toString()}
      data={pokemondata}
      renderItem={renderItems}
    /> 
    </View>
  )
}

export default PokemonList

const styles = StyleSheet.create({})