import Album from '../../../Models/Album';
import styles from '../../../Styles/styles';
import React, { useEffect } from "react";
import acess from '../../../../acess';

import { Text, View, Image } from "react-native";

interface PropAlbum{
    Album:Album
}

const ItemAlbum:React.FC<PropAlbum> = ( {Album})=> {

    
    
    return (
        <View style={styles.card} >
            <Text style={styles.cardText} >{Album.nomeAlbum}</Text>
            <Text style={styles.cardText} >{Album.nomeArtista}</Text>
            <Text style={styles.cardText} >{Album.lancamento}</Text>
            <Image source={{uri:Album.foto} } 
             style={styles.image}   />
  
            
        </View>
    )

}

export default ItemAlbum;