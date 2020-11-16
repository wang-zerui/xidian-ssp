import React, { Component } from 'react'
import { AtTabs, AtTabsPane, AtButton } from 'taro-ui'
import { View } from '@tarojs/components'
import AtTabsR from '../../components/tabsRight/tabsr'
import "taro-ui/dist/style/components/button.scss" // 按需引入
import "taro-ui/dist/style/components/tabs.scss" // 按需引入

import './index.scss'

export default class Index extends Component {

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }
  constructor() {
    super(...arguments)
    this.state = {
      current: 0,
      current1: 0,
      current2: 0,
    }
  }
  handleClick(stateName, value) {
    this.setState({
      [stateName]: value
    })
  }
  render() {
    const tabList = [{ title: '职位' }, { title: '内推' }, { title: '宣讲会' }];
    const tabList1 = [{ title: '最新' }, { title: '热门' }];
    return (
      <View>
        <View className='search'>
          <AtButton type='secondary' circle={true} className='search_box'>搜索职位/单位</AtButton>
        </View>
        <AtTabs current={this.state.current} tabList={tabList} onClick={this.handleClick.bind(this, "current")}>
          <AtTabsPane current={this.state.current} index={0}>
            <View className='content1'>
              <AtTabsR swipeable={false} animated={false} current={this.state.current1} tabList={tabList1} onClick={this.handleClick.bind(this, "current1")}>
                <AtTabsPane current={this.state.current1} index={0} >
                  <View style='padding: 100px 50px;background-color: white;text-align: center;' >最新</View>
                </AtTabsPane>
                <AtTabsPane current={this.state.current1} index={1}>
                  <View style='padding: 100px 50px;background-color: white;text-align: center;'>热门</View>
                </AtTabsPane>
              </AtTabsR>
            </View>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={1}>
            <View className='content1'>
              <AtTabsR swipeable={false} animated={false} current={this.state.current2} tabList={tabList1} onClick={this.handleClick.bind(this, "current2")}>
                <AtTabsPane current={this.state.current2} index={0} >
                  <View style='padding: 100px 50px;background-color: white;text-align: center;' >最新</View>
                </AtTabsPane>
                <AtTabsPane current={this.state.current2} index={1}>
                  <View style='padding: 100px 50px;background-color: white;text-align: center;'>热门</View>
                </AtTabsPane>
              </AtTabsR>
            </View>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={2}>
            <View style='padding: 100px 50px;background-color: white;text-align: center;'>标签页三的内容</View>
          </AtTabsPane>
        </AtTabs>
      </View>
    )
  }
}
