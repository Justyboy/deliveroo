import { ScrollView, Text, View } from "react-native"
import React from "react"
import { ArrowRightIcon } from "react-native-heroicons/outline"

const FeaturedRow = ({ id, title, description }) => {
  return (
    <View>
      <View className='mt-4 flex-row items-center justify-between'>
        <Text className='font-bold text-lg'>{title}</Text>
        <ArrowRightIcon color='#00CCBB' />
      </View>
      <Text className='text-gray-500 text-xs'>{description}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className='pt-4'
      >
        {/* Restaurant cards */}
      </ScrollView>
    </View>
  )
}

export default FeaturedRow
