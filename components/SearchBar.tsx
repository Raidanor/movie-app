import { Image, View, Text, TextInput } from 'react-native'
import React from 'react'
import { icons } from '@/constants/icons'

interface Props {
    placeholder: String;
    onPress: () => void;
}

const SearchBar = ({placeholder, onPress}: Props) => {
  return (
    <View className='flex-row items-center bg-dark-200 rounded-full px-5 py-4'>
        <Image source={icons.search} className="size-5" resizeMode="contain" tintColor="#ab8bff" />
        <TextInput 
            onPress={onPress}
            placeholder={placeholder.toString()}
            value=""
            onChangeText={() => {}}
            placeholderTextColor="#ab85db"
            className='ml-1 fkex-1 text-white'
        />
    </View>
  )
}

export default SearchBar