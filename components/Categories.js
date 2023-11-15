import { View, Text, FlatList } from "react-native"
import React, { useEffect, useState } from "react"
import { ScrollView } from "react-native"
import CategoryCard from "./CategoryCard"

const Categories = () => {
  return (
    <ScrollView
      contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {/* CategoryCard  */}

      <CategoryCard
        imgUrl='https://img2.storyblok.com/filters:format(webp)/f/62776/512x256/dd8a3a1d71/chicken-wide.jpg'
        title='title 1'
      />
      <CategoryCard imgUrl='https://img2.storyblok.com/filters:format(webp)/f/62776/512x256/b07158449c/sushi-wide.jpg' title='title 2' />

      <CategoryCard
        imgUrl='https://img2.storyblok.com/filters:format(webp)/f/62776/512x256/e0988a5a22/curry-wide.jpg'
        title='title 3'
      />
      <CategoryCard
        imgUrl='https://img2.storyblok.com/filters:format(webp)/f/62776/512x256/8bd9a1cb99/bowl-wide.jpg
        '
        title='title 4'
      />
      <CategoryCard
        imgUrl='https://img2.storyblok.com/filters:format(webp)/f/62776/512x256/0ee9c5082d/dessert-wide.jpg'
        title='title 5'
      />

      <CategoryCard
        imgUrl='https://img2.storyblok.com/filters:format(webp)/f/62776/512x256/b07158449c/sushi-wide.jpg
        '
        title='title 6'
      />
    </ScrollView>
  )
}

export default Categories
