import React, { useState, useEffect } from 'react'

export default function LogoutScreen({navigation}) {
  useEffect(() => {
    navigation.navigate('Login')
  }, [])
  
  return (
    <></>
  )
}

