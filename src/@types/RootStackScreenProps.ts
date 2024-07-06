import { RouteProp, ParamListBase } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackScreenDefaultProps<T extends keyof ParamListBase> = {
  navigation: StackNavigationProp<ParamListBase, T>;
  route: RouteProp<ParamListBase, T>;
};