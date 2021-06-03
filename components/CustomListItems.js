import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar, ListItem } from "react-native-elements";

const CustomListItems = ({id, chatName, enterChat}) => {
  return (
    <ListItem>
      <Avatar
        rounded
        source={{
          uri: "https://iconape.com/wp-content/png_logo_vector/user-circle.png",
        }}
      ></Avatar>
      <ListItem.Content>
        <ListItem.Title style={{ fontWeight: "bold" }}>
          Note 9 Pro
        </ListItem.Title>
        <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
          This is Mobile. Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Architecto laudantium veniam pariatur velit.
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
};

export default CustomListItems;

const styles = StyleSheet.create({});
