import {
  Avatar,
  Button,
  H3,
  ScrollView,
  SizableText,
  Text,
  View,
  XStack,
  YStack
} from 'tamagui'

import {
  CircleUserRound,
  PieChart,
} from '@tamagui/lucide-icons'

import { SelectDemoItem } from '../../components/Select'
import CompromisseCard from '../../components/CompromiseCard'
import CardProgress from '../../components/CardProgress'
import userDetails from '../../data/user'

export default function TabOneScreen() {

  return (
    <ScrollView theme={'dark_blue'}>
      <View  bg={'$background'} paddingHorizontal={24} pb={40} gap={'$6'}>
        <XStack ai="center" jc='space-between' gap="$4" mt='$4'>
          <H3>Olá, {userDetails.name}</H3>
          <SelectDemoItem />
        </XStack>
        <XStack jc={'space-between'} gap={16}>
          <Button
            fontWeight={'bold'}
            borderRadius={100}
            size="$4"
            icon={<CircleUserRound />}
            theme={'active'}
            f={1}
          >
            Pessoal
          </Button>
          <Button
            borderRadius={100}
            fontWeight={'bold'}
            size="$4"
            icon={<PieChart />}
            chromeless
            f={1}
          >
            chromeless
          </Button>

        </XStack>
        <XStack p={'$3'} borderRadius={'$8'} ai={'center'} gap={'$4'}>
          <Avatar circular size="$10">
            <Avatar.Image
              accessibilityLabel="Cam"
              src={userDetails.avatarUrl}
            />
            <Avatar.Fallback backgroundColor="$blue10" />
          </Avatar>
          <YStack>
            <Text>{userDetails.fullName}</Text>
            <SizableText theme="alt1" size="$3">
              {userDetails.company}
            </SizableText>
          </YStack>
        </XStack>
        <YStack gap='$4'>
          <Text>Compromissos homologados</Text>
          <ScrollView
            horizontal={true}
            borderRadius="$4"
            showsHorizontalScrollIndicator={false}
          >
            <XStack gap={'$4'}>
              <CompromisseCard date='25 Out' title='Compromisso Título Lorem ipsum dolorsit...' status='hight' />
              <CompromisseCard date='25 Out' title='Compromisso Título Lorem ipsum dolorsit...' status='medium' />
              <CompromisseCard date='25 Out' title='Compromisso Título Lorem ipsum dolorsit...' status='low' />
            </XStack>
          </ScrollView>
        </YStack>
        <YStack gap='$4'>
          <Text>Compromissos homologados</Text>
          <XStack flexWrap='wrap' gap={'$2'}>
            <CardProgress progress={60} value={7123} title='Assumidos' />
            <CardProgress progress={60} value={7123} title='Realizados' />
            <CardProgress progress={60} value={7123} title='Pontos' />
            <CardProgress progress={60} value={7123} title='Pontuação Média' />
            <CardProgress progress={60} value={7123} title='Execução' />
            <CardProgress progress={60} value={7123} title='Desempenho Médio' />
          </XStack>
        </YStack>
      </View>
    </ScrollView>
  )
}
