import React from 'react'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const DetailsScreen = () => {  
  return (
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Details Screen</Text>
        </View>
    </SafeAreaView>
  )
}

export default DetailsScreen