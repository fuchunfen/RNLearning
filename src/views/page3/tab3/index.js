import React, { Component } from 'react'
import { Image } from 'react-native'
import view from './view'
import { pxToDp } from '../../../util/screen'

export default class Tab3 extends Component {
  static navigationOptions = {
    title: '分辨率',
    tabBarIcon: ({ focused }) => {
      const icon = focused
        ? require('../../../assets/images/tab_home_active.png')
        : require('../../../assets/images/tab_home.png')
      return <Image source={icon} style={{ height: pxToDp(22), width: pxToDp(22) }} />
    },
  }

  constructor(props) {
    super(props)
    this.navigation = props.navigation
  }

  render() {
    return view(this)
  }
}
