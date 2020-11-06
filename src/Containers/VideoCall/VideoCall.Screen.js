import React, { Fragment, useState, useEffect } from 'react';
import { View, NativeModules, ScrollView, Text, Dimensions, TouchableOpacity, SafeAreaView } from 'react-native';
import { RtcEngine, AgoraView } from 'react-native-agora';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './VideoCall.Style';
import configs from '../../config';
import { useNavigation } from '@react-navigation/native';

const { Agora } = NativeModules;
// const { AudioProfileDefault, AudioScenarioDefault, Adaptative } = Agora;
const dimensions = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height
};
const VideoCallScreen = props => {
  const navigation = useNavigation();
  const { channelName } = props.route.params;
  const [peerIds, setPeerIds] = useState([]);
  const [uid, setUid] = useState(Math.floor(Math.random() * 100));
  const [videoMute, setVideoMute] = useState(false);
  const [audioMute, setAudioMute] = useState(false);
  const [joinSuccessed, setJoinSuccessed] = useState(false);
  const config = {
    appid: configs.agora.appId,
    channelProfile: 0,
    videoEncoderConfig: {
      width: 720,
      height: 1080,
      bitrate: 1,
      // frameRate: FPS30,
      // orientationMode: Adaptative
    },
    // audioProfile: AudioProfileDefault,
    // audioScenario: AudioScenarioDefault
  };
  RtcEngine.init(config);

  useEffect(() => {
    RtcEngine.on('userJoined', data => {
      if (peerIds.indexOf(data.uid) === -1) {
        setPeerIds([...peerIds, data.uid]);
      }
    });
    RtcEngine.on('userOffline', data => {
      setPeerIds(peerIds.filter(uid => uid !== data.uid));
    });
    RtcEngine.on('joinChannelSuccess', data => {
      RtcEngine.startPreview();
      setJoinSuccessed(true);
    });
    RtcEngine.joinChannel(`${channelName}`, uid);
    RtcEngine.enableAudio();
  }, []);

  const toggleAudio = () => {
    let mute = audioMute;
    RtcEngine.muteLocalAudioStream(!mute);
    setAudioMute(!mute);
  };

  const toggleVideo = () => {
    let mute = videoMute;
    setVideoMute(!mute);
    RtcEngine.muteLocalVideoStream(!videoMute);
  };

  const endCall = () => {
    RtcEngine.destroy();
    navigation.goBack();
  };

  const peerClick = data => {
    let peerIdToSwap = peerIds.indexOf(data);
    setPeerIds(prevState => {
      let currentPeers = [...prevState.peerIds];
      let temp = currentPeers[peerIdToSwap];
      currentPeers[peerIdToSwap] = currentPeers[0];
      currentPeers[0] = temp;
      return { peerIds: currentPeers };
    });
  };

  return (
    <Fragment>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.full}>
          {peerIds.length > 1 ? (
            <View style={styles.full}>
              <View style={{ height: (dimensions.height * 3) / 4 - 50 }}>
                <AgoraView style={styles.full} remoteUid={peerIds[0]} mode={1} key={peerIds[0]} />
              </View>
              <View style={{ height: dimensions.height / 4 }}>
                <ScrollView
                  horizontal={true}
                  decelerationRate={0}
                  snapToInterval={dimensions.width / 2}
                  snapToAlignment={'center'}
                  style={{
                    width: dimensions.width,
                    height: dimensions.height / 4
                  }}>
                  {peerIds.slice(1).map(data => (
                    <TouchableOpacity
                      style={{
                        width: dimensions.width / 2,
                        height: dimensions.height / 4
                      }}
                      onPress={() => peerClick(data)}
                      key={data}>
                      <AgoraView
                        style={{
                          width: dimensions.width / 2,
                          height: dimensions.height / 4
                        }}
                        remoteUid={data}
                        mode={1}
                        key={data}
                      />
                    </TouchableOpacity>
                  ))}
                </ScrollView>
              </View>
            </View>
          ) : peerIds.length > 0 ? (
            <View style={{ height: dimensions.height - 50 }}>
              <AgoraView style={styles.full} remoteUid={peerIds[0]} mode={1} />
            </View>
          ) : (
            <Text>No users connected</Text>
          )}
          {!videoMute ? <AgoraView style={styles.localVideoStyle} zOrderMediaOverlay={true} showLocalVideo={true} mode={1} /> : <View />}
          <View style={styles.buttonBar}>
            <Icon.Button style={styles.iconStyle} backgroundColor="#0093E9" name={audioMute ? 'mic-off' : 'mic'} onPress={toggleAudio} />
            <Icon.Button style={styles.iconStyle} backgroundColor="#0093E9" name="call-end" onPress={endCall} />
            <Icon.Button style={styles.iconStyle} backgroundColor="#0093E9" name={videoMute ? 'videocam-off' : 'videocam'} onPress={toggleVideo} />
          </View>
        </View>
      </SafeAreaView>
    </Fragment>
  );
};
export default VideoCallScreen;
