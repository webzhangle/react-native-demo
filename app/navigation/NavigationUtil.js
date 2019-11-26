import {NavigationActions, StackActions} from "react-navigation";

export default class NavigationUtil{
    static goBack(navigation){
        navigation.goBack()
    }
    static goPage(params,page){
        const navigation = NavigationUtil.navigation
        navigation.navigate(
            page,
            params
        )
    }
    static resetToLogin(){
        const navigation = NavigationUtil.navigation
        const resetAction = StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'Login' })],
        });
        navigation.dispatch(resetAction);
    }
    static resetToHomePage(n){
        const navigation = NavigationUtil.navigation
        const resetAction = StackActions.reset({
            index: 0,
            actions: (n == 0 || n == 1)? [NavigationActions.navigate({ routeName: 'HomePage' ,params: {record:n}})] : [NavigationActions.navigate({ routeName: 'HomePage'})]
        });
        navigation.dispatch(resetAction);
    }
}