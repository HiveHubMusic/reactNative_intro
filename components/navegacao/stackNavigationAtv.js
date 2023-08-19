import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import Atividades from './atividades'
import Atv1 from '../atividade/atividade_001'
import Atv2 from '../atividade/atividade_002'
import Atv3 from '../atividade/atividade_003'
import Atv4 from '../atividade/atividade_004'
import Atv5 from '../atividade/atividade_005'
import Atv6 from '../atividade/atividade_006'
import Atv7 from '../atividade/atividade_007'


function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Atividades" component={Atividades} />
      <Stack.Screen name="Atv1" component={Atv1} />
      <Stack.Screen name="Atv2" component={Atv2} />
      <Stack.Screen name="Atv3" component={Atv3} />
      <Stack.Screen name="Atv4" component={Atv4} />
      <Stack.Screen name="Atv5" component={Atv5} />
      <Stack.Screen name="Atv6" component={Atv6} />
      <Stack.Screen name="Atv7" component={Atv7} />
    </Stack.Navigator>
  );
}

export default MyStack;