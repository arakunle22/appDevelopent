import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { useOAuth } from "@clerk/clerk-expo";
import * as WebBrowser from "expo-web-browser";
import { COLORS, SIZES, images } from "../../Utils";
import { TouchableOpacity } from "react-native";
import { useWarmUpBrowser } from "../../hooks/warmUpBrowser";


WebBrowser.maybeCompleteAuthSession();

export default function Login() {
  useWarmUpBrowser();
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const onPress = React.useCallback (async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } = 
        await startOAuthFlow();

      if (createdSessionId ) {
        setActive({ session: createdSessionId });
      } else {
        // use signIn or signup for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err)
    }
  }, []);

  return (
    <View style={{ alignItems: "center" }}>
      <Image source={images.login} style={styles.loginImage} />

      <View style={styles.subContainer}>
        <Text
          style={{
            fontSize: SIZES.large,
            color: COLORS.WHITE,
            textAlign: "center",
          }}
        >
          Let's find
          <Text style={{ fontWeight: "bold" }}>
            {" "}
            Professional Cleaning and repair{" "}
          </Text>
          Service
        </Text>

        <Text
          style={{
            fontSize: SIZES.medium,
            color: COLORS.WHITE,
            textAlign: "center",
            marginTop: SIZES.large,
          }}
        >
          {" "}
          Best App to find services near you which deliver you a professional
          service
        </Text>

        <TouchableOpacity
          style={styles.buttton}
          onPress={onPress}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: SIZES.small,
              color: COLORS.PRIMARY,
            }}
          >
            Let's Get Started!
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  loginImage: {
    width: 230,
    height: 450,
    marginTop: 70,
    borderWidth: 4,
    borderColor: COLORS.BLACK,
    borderRadius: SIZES.medium,
  },

  subContainer: {
    width: "100%",
    backgroundColor: COLORS.PRIMARY,
    height: "70%",
    borderTopLeftRadius: 30,
    marginTop: -20,
    borderTopRightRadius: 30,
    padding: SIZES.large,
  },

  buttton: {
    padding: 15,
    backgroundColor: COLORS.WHITE,
    marginTop: 40,
    borderRadius: 99,
  },
});
