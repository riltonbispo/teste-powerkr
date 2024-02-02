import { Link, Redirect, Tabs } from 'expo-router'
import { Pressable } from 'react-native'
import { Text } from 'tamagui'
import { useSession } from '../../auth/clsx';

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
        tabBarActiveTintColor: 'red',
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          title: 'Tab One',
          tabBarIcon: ({ color }) => <Text>Hello!</Text>,
          headerRight: () => (
            <Link href='/modal' asChild>
              <Pressable>
                <Text>Hello!</Text>
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name='two'
        options={{
          title: 'Tab Two',
          tabBarIcon: ({ color }) => <Text>Hello!</Text>,
        }}
      />
    </Tabs>
  )
}
