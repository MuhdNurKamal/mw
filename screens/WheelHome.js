import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

import Roulette from 'react-native-roulette';

class AppIcon extends React.Component {
  constructor(props) {
    super(props)
    console.log(props)
  }
  render() {
    return (
      <Image source={this.props.logo}></Image>
    )
  }
}

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props)
    // TODO: Add props and default wheel from config
    ramen = {
      name: "Ramen",
      pic: ""
    }
    soba = {
      name: "Soba",
      pic: ""
    }
    chickenRice = {
      name: "Chicken Rice",
      pic: ""
    }
    this.state = { foodList: [
      ramen, soba, chickenRice
    ]}
  }

  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>

        <Roulette rouletteRotate={10} enableUserRotate={false} onRotate={(props) => console.log(props)} >
  <AppIcon
    ref="icon"
    logo={require('../assets/images/robot-dev.png')}
    title={"TAPBOO"}
    onPress={() => console.log("HI")}
  />
  <AppIcon
    ref="icon"
    logo={require('../assets/images/robot-dev.png')}
    title="TUCHAT"
    onPress={() => console.log("HI")}
  />
</Roulette>
          
          <View style={styles.welcomeContainer}>
            <Image
              source={
                __DEV__
                  ? require('../assets/images/robot-dev.png')
                  : require('../assets/images/robot-prod.png')
              }
              style={styles.welcomeImage}
            />
          </View>

          <View style={styles.getStartedContainer}>

            <Text>{this.state.foodList.map(food=>food.name).join()}</Text>

            <Text style={styles.getStartedText}>Get started by opening</Text>

            <View style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>
              <MonoText style={styles.codeHighlightText}>screens/HomeScreen.js</MonoText>
            </View>

            <View style={styles.horizontalContainer}>
              <View style={styles.buttonContainer}>
                <Button
                  title="Create"
                  onPress={()=>console.log("Create")}
                />
              </View>

              <View style={styles.buttonContainer2}>
                <Button
                  title="Spin"
                  onPress={()=>console.log("Spin")}
                />
              </View>

              <View style={styles.buttonContainer}>
                <Button
                  title="Select"
                  onPress={()=>console.log("Select")}
                />
              </View>
            </View>
          </View>

          <View style={styles.helpContainer}>
            <TouchableOpacity onPress={this._handleHelpPress} style={styles.helpLink}>
              <Text style={styles.helpLinkText}>Help, it didn’t automatically reload!</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  horizontalContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
  buttonContainer2: {
    flex: 2,
    marginHorizontal:15,
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 40,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
