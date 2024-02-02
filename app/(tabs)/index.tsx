import { Text, View } from 'tamagui'
import { useSession } from '../../auth/clsx';

export default function TabOneScreen() {
  const { signOut } = useSession();

  return (
    <View flex={1} alignItems="center">
      <Text
        onPress={() => {
          signOut();
        }}>
        Sign Out
      </Text>
      <Text fontSize={20}>Tab One</Text>
    </View>
  )
}
