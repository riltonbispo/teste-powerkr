import { Text, View } from 'tamagui'
import { useSession } from '../auth/clsx';
import { router } from 'expo-router';

export default function SignIn() {
  const { signIn } = useSession();

  return (
    <View flex={1} alignItems="center">
      <Text
        onPress={() => {
          signIn();
          // Navigate after signing in. You may want to tweak this to ensure sign-in is
          // successful before navigating.
          router.replace('/');
        }}>
        Sign In
      </Text>
      <Text fontSize={20}>SignIn</Text>
    </View>
  )
}
