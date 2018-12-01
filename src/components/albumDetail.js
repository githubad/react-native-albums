import React from 'react';
import { View, Text, Image, Linking } from 'react-native';
import Card from './card';
import CardSection from './cardSection';
import Button from './button';

const AlbumDetail = ({ album }) => {
    const { title, artist, thumbnail_image, image, url } = album;
    const {  headerContentStyle, headerTextStyle, imageStyle, imageContainerStyle, bigImageStyle } = styles;
return (
    <Card>
        <CardSection>
            <View style={imageContainerStyle}>
                <Image style={imageStyle} source={{ uri: thumbnail_image }} />
            </View>
            <View style={headerContentStyle}>
                <Text style={headerTextStyle}>
                    {title}
                </Text>
                <Text>
                    {artist}
                </Text>
            </View>
        </CardSection>
        <CardSection>
            <Image style={bigImageStyle} source={{ uri: image }} />
        </CardSection>
        <CardSection>
            <Button onPress={() => Linking.openURL(url)} buttonText={'Click a Button'}/>
        </CardSection>
     </Card>

);
};

const styles = {
 headerContentStyle: {
     flexDirection: 'column',
     justifyContent: 'space-around'
 },
 headerTextStyle: {
fontSize: 18
 },
 imageStyle: {
     height:50,
     width:50
 },
 imageContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
 },
 bigImageStyle: {
     height: 300,
     flex: 1,
     width: null
 }
};

export default AlbumDetail;
