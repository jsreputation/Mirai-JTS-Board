import React from 'react'
import {  Dimensions } from 'react-native'
import { Button, View,  } from 'react-native'

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


export default function Button1(props){

    return(
        
        <Button
            title= {props.titlestar}
            color= {props.colorstar}
        />
        );
};


