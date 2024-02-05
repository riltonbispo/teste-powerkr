import { MessageCircleMore, Calendar, ChevronUp, Minus, ChevronDown } from '@tamagui/lucide-icons'
import React from 'react'
import { Card, Paragraph, XStack, Button, Text, SizableText } from 'tamagui'

type Props = {
  title: string,
  date: string,
  status: 'hight' | 'medium' | 'low'
}

const CompromisseCard = ({ title, date, status }: Props) => {
  return (
    <Card bordered h={'$12'} maxWidth={'$20'} bg={'#202939'} borderWidth={'$0'} theme={'dark'}>
      <Card.Header padded>
        <Paragraph>
          {title}
        </Paragraph>
      </Card.Header>
      <Card.Footer padded>
        <XStack flex={1} ai={'center'}>
          <MessageCircleMore color={'#F7B519'} />
          <XStack gap={'$2'} f={1} ai={'center'} jc={'center'}>
            <Calendar color={'#9AA4B2'} />
            <SizableText theme="alt1" >
              {date}
            </SizableText>
          </XStack>
          <ButtonStatus status={status} />
        </XStack>
      </Card.Footer>
    </Card>
  )
}

const ButtonStatus = ({ status }: { status: 'hight' | 'medium' | 'low' }) => {
  return (
    <Button
      size={'$2'}
      fontWeight={'bold'}
      borderRadius="$10"
      bg={status === 'hight' ? '#F1FEEB' : status === 'low' ? '#FEDCDC' : '#FFFEEB'}
      color={status === 'hight' ? '#1D8935' : status === 'low' ? '#8f2c1b' : '#907F0A'}
      icon={status === 'hight' ? <ChevronUp /> : status === 'low' ? <ChevronDown /> : <Minus />}
    >
      Purchase
    </Button>
  );
}

export default CompromisseCard