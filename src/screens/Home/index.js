import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, {useEffect} from 'react'
import { useSelector } from 'react-redux'
import { pokemonSuccess } from '../../redux/actions'
import {PokemonList} from '../../components'


const Home = () => {

  return (
   
    <View>
      <Text>Home</Text>
      <PokemonList />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})