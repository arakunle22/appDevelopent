import { View, Text, Image, StyleSheet, TextInput } from "react-native";
import { COLORS } from "../../Utils";
import React from "react";
import { useUser } from "@clerk/clerk-expo";
import { FontAwesome } from "@expo/vector-icons";

export default function Header() {
  const { user, isLoading } = useUser();
  return (
    user && (
      <View style={styles.container}>
        {/* Profile Session */}
        <View style={styles.profileMainContainer}>
          <View style={styles.profileContainer}>
            <Image source={{ uri: user?.imageUrl }} style={styles.userImage} />
            <View>
              <Text style={{ color: COLORS.WHITE }}>Welcome,</Text>
              <Text style={{ color: COLORS.WHITE, fontSize: 20 }}>
                {user?.fullName}
              </Text>
            </View>
          </View>
          <FontAwesome name="bookmark-o" size={27} color="white" />
        </View>

        {/* Search Bar Session  */}
        <View style={styles.serachBarContainer}>
          <TextInput placeholder="Search" style={styles.textInput} />
          <FontAwesome
            name="search"
            style={styles.searchBtn}
            size={24}
            color={COLORS.PRIMARY}
          />
        </View>
      </View>
    )
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 40,
    backgroundColor: COLORS.PRIMARY,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  profileMainContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  profileContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  textInput: {
    padding: 7,
    paddingHorizontal: 16,
    backgroundColor: COLORS.WHITE,
    borderRadius: 8,
    width: "85%",
  },
  serachBarContainer: {
    marginTop: 15,
    display: 'flex',
    flexDirection: 'row',
    alignItems: "center",
    gap: 10
  },
  searchBtn: {
    backgroundColor: COLORS.WHITE,
    padding: 10,
    borderRadius: 8,
  },
  userImage: {
    width: 45,
    height: 45,
    borderRadius: 99,
  },
});
