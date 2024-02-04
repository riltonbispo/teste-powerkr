import { Avatar, Button, Label, SizableText, Switch, Text, View, XStack, YStack } from 'tamagui'
import userDetails from '../../data/user'
import React from 'react'
import { ChevronRight, HelpCircle, Power } from '@tamagui/lucide-icons'
import { Pressable } from 'react-native'
import { useSession } from '../../auth/clsx';

/**
 * TODO: 
 *  [] Fazer  o toggle modo noturno funcional
 */

export default function TabTwoScreen() {
  const { signOut } = useSession();
  return (
    <View theme={'dark'} bg={'$background'} paddingHorizontal={24} gap={'$6'} f={1}>
      <YStack ai={'center'} mt='$6' gap={'$2'}>
        <Avatar circular size="$10">
          <Avatar.Image
            accessibilityLabel="Cam"
            src={userDetails.avatarUrl}
          />
          <Avatar.Fallback backgroundColor="$blue10" />
        </Avatar>
        <Text fontSize={'$7'}>{userDetails.fullName}</Text>
        <SizableText theme="alt2" size="$3">
          {userDetails.departament}
        </SizableText>
      </YStack>

      <Pressable>
        <XStack jc={'space-between'} ai={'center'}>
          <Text>Nome</Text>
          <XStack gap={'$6'} ai={'center'} theme={'alt1'}>
            <Text>
              {userDetails.fullName}
            </Text>
            <ChevronRight />
          </XStack>
        </XStack>
      </Pressable>

      <Pressable>
        <XStack jc={'space-between'} ai={'center'}>
          <Text>E-mail</Text>
          <XStack gap={'$6'} ai={'center'} theme={'alt1'}>
            <Text>
              {userDetails.email}
            </Text>
            <ChevronRight />
          </XStack>
        </XStack>
      </Pressable>

      <Pressable>
        <XStack jc={'space-between'} ai={'center'}>
          <Text>Alterar senha</Text>
          <XStack gap={'$6'} ai={'center'} theme={'alt1'}>
            <ChevronRight />
          </XStack>
        </XStack>
      </Pressable>

      <YStack>
        <XStack alignItems="center" jc={'space-between'}>
          <Label>Notificações</Label>
          <Switch defaultChecked={true}>
            <Switch.Thumb animation="quick" />
          </Switch>
        </XStack>
        <XStack alignItems="center" jc={'space-between'}>
          <Label>Modo Noturno</Label>
          <Switch defaultChecked={true}>
            <Switch.Thumb animation="quick" />
          </Switch>
        </XStack>
      </YStack>

      <YStack gap='$3'>
        <Button borderRadius={'$12'} variant="outlined" borderColor={'$blue6'} backgroundColor={'$backgroundHover'}>
          <HelpCircle />
          <Text fontWeight={'bold'}>Ajuda</Text>
        </Button>
        <Button
          borderRadius={'$12'}
          variant="outlined"
          borderColor={'$blue6'}
          backgroundColor={'$backgroundHover'}
          onPress={() => {
            signOut();
          }}
        >
          <Power />
          <Text fontWeight={'bold'}>Sair</Text>
        </Button>
      </YStack>
    </View>

  )
}