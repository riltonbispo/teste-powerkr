import { Link, Redirect, Tabs } from 'expo-router'
import { Pressable } from 'react-native'
import { Button, Text } from 'tamagui'
import { useSession } from '../../auth/clsx';
import { Menu, Bell, Clapperboard, AlignStartHorizontal, CircleUserRound } from '@tamagui/lucide-icons'


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
        name='two'
        options={{
          title: 'Perfil',
          headerTitle: '',
          tabBarIcon: ({ color }) => <CircleUserRound color={color} />,
        }}
      />
    </Tabs>
  )
}
