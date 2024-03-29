import { Redirect, Tabs } from 'expo-router'
import { Text } from 'tamagui'
import { useSession } from '../../auth/clsx';
import { Menu, Bell, AlignStartHorizontal, CircleUserRound } from '@tamagui/lucide-icons'


export default function TabLayout() {
  const { session, isLoading } = useSession();

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (!session) {
    // On web, static rendering will stop here as the user is not authenticated
    // in the headless Node process that the pages are rendered in.
    return <Redirect href="/signIn" />;
  }

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: '#9AA4B2',
        tabBarStyle: {
          backgroundColor: '#112439',
          position: 'absolute',
          borderRadius: 20,
          height: 60,
          borderTopWidth: 0,
        },
        headerLeft: () => (
          <Menu ml={'$3'} color={'white'} />
        ),
        headerRight: () => (
          <Bell mr={'$3'} color={'white'} />
        ),
        headerStyle: {
          backgroundColor: '#121926'
        },
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          title: 'Compromissos',
          headerTitle: '',
          tabBarIcon: ({ color }) => <AlignStartHorizontal color={color} />,
        }}
      />
      <Tabs.Screen
        name='profile'
        options={{
          title: 'Perfil',
          headerTitle: 'Perfil',
          headerTintColor: 'white',
          headerTitleAlign: 'center',
          tabBarIcon: ({ color }) => <CircleUserRound color={color} />,
          headerRight: () => null
        }}
      />
    </Tabs>
  )
}
