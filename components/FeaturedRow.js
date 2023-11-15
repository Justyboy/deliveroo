import { ScrollView, Text, View } from "react-native"
import React from "react"
import { ArrowRightIcon } from "react-native-heroicons/outline"
import RestaurantCard from "./RestaurantCard"

const FeaturedRow = ({ id, title, description }) => {
  return (
    <View >
      <View className='px-4 mt-4 flex-row items-center justify-between'>
        <Text className='font-bold text-lg'>{title}</Text>
        <ArrowRightIcon color='#00CCBB' />
      </View>
      <Text className='text-gray-500 text-xs px-4'>{description}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className='pt-4'
      >
        {/* Restaurant cards */}
        <RestaurantCard
        id={123}
        imgUrl="https://img2.storyblok.com/filters:format(webp)/f/62776/512x256/b07158449c/sushi-wide.jpg"
        title={"Yo! Sushi"}
        rating={4.5}
        genre="Japanese"
        address="123 Main Street"
        short_description="This is a test description"
        dishes={[]}
        long={20}
        lat={0}
        />


  {/* Restaurant cards */}
  <RestaurantCard
        id={123}
        imgUrl="https://img2.storyblok.com/filters:format(webp)/f/62776/512x256/b07158449c/sushi-wide.jpg"
        title={"Yo! Sushi"}
        rating={4.5}
        genre="Japanese"
        address="123 Main Street"
        short_description="This is a test description"
        dishes={[]}
        long={20}
        lat={0}
        />

          {/* Restaurant cards */}
          <RestaurantCard
        id={123}
        imgUrl="https://img2.storyblok.com/filters:format(webp)/f/62776/512x256/b07158449c/sushi-wide.jpg"
        title={"Yo! Sushi"}
        rating={4.5}
        genre="Japanese"
        address="123 Main Street"
        short_description="This is a test description"
        dishes={[]}
        long={20}
        lat={0}
        />
      </ScrollView>
    </View>
  )
}

export default FeaturedRow
