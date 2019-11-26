import React, {Component} from 'react';
import {Image,StyleSheet} from 'react-native'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import Index from '../pages/index'
import My from '../pages/my'

const BottomTabNavigator = createBottomTabNavigator({ 
    Home:{
        screen: Index,
        navigationOptions: {
            tabBarLabel: '首页',
            tabBarIcon: ({tintColor, focused}) => {
                var icon = focused ? require('../images/home_active.png'): require('../images/home.png')
                return (<Image source={icon} style={styles.icon} />)
            },
            tabBarOptions: {
                activeTintColor: '#02DB94',
                labelStyle: {
                    fontSize: 10,
                    marginBottom: 0
                },
                style: { // 整体TabBar的样式
                    height:49,
                    borderTopWidth:1,
                    borderTopColor: '#dddddd',
                    paddingTop: 15,
                    paddingBottom: 3
                },
            }
        }
    },
    My:{
        screen: My,
        navigationOptions: {
            tabBarLabel: '我的',
            tabBarIcon: ({tintColor, focused}) => {
                var icon = focused ? require('../images/mine_active.png'): require('../images/mine.png')
                return (<Image source={icon} style={styles.icon} />)
            },
            tabBarOptions: {
                activeTintColor: '#02DB94',
                labelStyle: {
                    fontSize: 10,
                    marginBottom: 0
                },
                style: { // 整体TabBar的样式
                    height:49,
                    borderTopWidth:1,
                    borderTopColor: '#dddddd',
                    paddingTop: 15,
                    paddingBottom: 3
                },
            }
        }
    },
});
const styles = StyleSheet.create({
    icon : {
        width: 23,
        height: 23,
        marginBottom: 10
    }
})
export default createAppContainer(BottomTabNavigator)