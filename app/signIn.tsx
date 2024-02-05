import { View, H1, Paragraph, YStack, Input, Label, SizableText, Button } from 'tamagui'
import { useSession } from '../auth/clsx';
import { router } from 'expo-router';
import { ImageBackground, StatusBar, } from 'react-native';
import React from 'react';

/**
 * TODO: 
 *  [] Usar Hookform para validar o login
 */

export default function SignIn() {
  const { signIn } = useSession();

  return (
    <ImageBackground source={require('../assets/images/backgroundSingin.png')} style={{ flex: 1 }}>
      <StatusBar
        barStyle="light-content"
      />
      <View f={1} jc={'flex-end'} theme={'dark'}>
        <YStack paddingHorizontal={'$5'} gap={'$2'} mb={'$6'}>
          <H1 color={'white'} size={'$9'}>Bem-vindo de volta!</H1>
          <Paragraph size="$2" color={'white'}>
            Preparado para mais uma jornada?
          </Paragraph>
        </YStack>
        <YStack bc={'$background'} p={'$5'} gap={'$4'} borderRadius={20}>
          <YStack>
            <Label htmlFor="email" color={'white'}>Informações da conta</Label>
            <Input size="$4" placeholder='Insira seu e-mail' id='email' />
            <Label htmlFor="password" color={'white'}>Senha</Label>
            <Input secureTextEntry={true} size="$4" placeholder='Senha' id='password' />
          </YStack>
          <SizableText theme="alt1" size="$4" alignSelf='flex-end' color={'$yellow10'}>
            Esqueceu a Senha?
          </SizableText>
          <Button bc={'$yellow10'} borderRadius={'$10'}
            onPress={() => {
              signIn();
              router.replace('/');
            }}
          >
            Entrar
          </Button>
        </YStack>
      </View>
    </ImageBackground>
  )
}
