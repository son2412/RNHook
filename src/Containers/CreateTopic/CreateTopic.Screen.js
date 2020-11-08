import React, { Fragment, useState, useEffect } from 'react';
import { ActivityIndicator, Image, StatusBar, Text, TouchableOpacity, View, SafeAreaView, TextInput } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import styles from './CreateTopic.Style';
import { createTopicRequest } from '../../Redux/Actions/CreateTopic.Action';
import colors from '../../Themes/Colors';
import { barStyle } from '../../const';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import ImagePicker from 'react-native-image-crop-picker';
import configs from '../../config';
import RNFetchBlob from 'rn-fetch-blob';
import { reNewTopic, getTopicRequest } from '../Topic/Topic.Action';
import _ from 'lodash';

const options = {
  multiple: true,
  mediaType: 'photo',
  includeBase64: true
};
const CreateTopicScreen = () => {
  const [title, setTitle] = useState('');
  const [images, setImages] = useState([]);
  const [uploading, setUploading] = useState(false);
  const navigation = useNavigation();
  const topic = useSelector(state => state.createTopic.data);
  const fetching = useSelector(state => state.createTopic.fetching);
  const topics = useSelector(state => state.getTopic.data);
  const dispatch = useDispatch();

  const renderToolbar = () => {
    return (
      <View style={styles.toolbar}>
        <StatusBar hidden={false} backgroundColor={colors.primary} barStyle={barStyle.lightContent} />
        <TouchableOpacity style={styles.viewWrapIcLeft} onPress={() => navigation.goBack()}>
          <MaterialCommunityIcons name={'arrow-left'} size={30} color={colors.white} />
        </TouchableOpacity>
        <View style={styles.viewWrapTitleToolbar}>
          <Text style={styles.titleToolbar}>Create Post</Text>
        </View>
        <TouchableOpacity style={styles.viewWrapIcRight} disabled={!title && !images.length ? true : false} onPress={create}>
          <Text style={{ fontSize: 18, color: '#ffffff' }}>{'Post'}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const create = () => {
    dispatch(createTopicRequest({ title: title, images: images }));
  };

  // useEffect(() => {
  //   if (!fetching && !_.isEmpty(topic) && !_.isEmpty(topics)) {
  //     dispatch(reNewTopic());
  //     dispatch(getTopicRequest({ page_index: 1, page_size: 15 }));
  //     navigation.goBack();
  //   }
  // }, [topic, topics, fetching]);

  const renderLoading = () => {
    if (fetching) {
      return (
        <View style={styles.viewLoading}>
          <ActivityIndicator size="small" />
        </View>
      );
    } else {
      return null;
    }
  };

  const renderButton = () => {
    return (
      <View style={{ flex: 1 }}>
        <TextInput
          style={{ borderColor: 'gray', borderWidth: 0.5, flex: 1 }}
          onChangeText={text => setTitle(text)}
          value={title}
          multiline={true}
          numberOfLines={10}
          placeholder={`What's on your mind?`}
        />
        {!images.length ? null : (
          <View style={{ height: 50, alignItems: 'center', marginTop: 10, flexDirection: 'row' }}>
            {images.map((i, index) => (
              <View style={{ position: 'relative' }} key={index + 1}>
                <Image style={{ width: 50, height: 50, borderRadius: 5, marginLeft: 15 }} source={{ uri: i.url }} />
                <MaterialCommunityIcons
                  style={{ position: 'absolute', top: -7, left: '85%' }}
                  name={'close-circle'}
                  size={20}
                  color={colors.red}
                  onPress={() => removeImage(i)}
                />
              </View>
            ))}
          </View>
        )}
        <TouchableOpacity style={[styles.btnGetData]} disabled={uploading} onPress={addMedia}>
          <Text style={styles.textGetData}>Add media to your post</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const removeImage = image => {
    const imageArr = [];
    images.map(i => {
      if (i !== image) imageArr.push(i);
    });
    setImages(imageArr);
  };

  const addMedia = () => {
    setUploading(true);
    ImagePicker.openPicker(options).then(responses => {
      let imageArr = [];
      responses.map(i =>
        imageArr.push({
          name: 'files',
          filename: i.filename || i.path.substr(i.path.lastIndexOf('/') + 1),
          data: i.data
        })
      );
      // map here
      RNFetchBlob.fetch(
        'POST',
        configs.apiDomain + 'upload/s3',
        {
          'Content-Type': 'multipart/form-data'
        },
        imageArr
      )
        .then(resp => {
          const urls = images;
          const data = JSON.parse(resp.data);
          data.map(d => urls.push({ url: d.location }));
          setImages(urls);
          setUploading(false);
        })
        .catch(err => console.log(err));
    });
  };

  return (
    <Fragment>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.mainContainer}>
          {renderToolbar()}
          {renderButton()}
          {renderLoading()}
        </View>
      </SafeAreaView>
    </Fragment>
  );
};
export default CreateTopicScreen;
