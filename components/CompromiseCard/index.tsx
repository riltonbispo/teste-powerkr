import { MessageCircleMore, Calendar, ChevronUp, Minus, ChevronDown } from '@tamagui/lucide-icons'
import React from 'react'
import { Card, Paragraph, XStack, Button, Text } from 'tamagui'

type Props = {
  title: string,
  date: string,
  status: 'hight' | 'medium' | 'low'
}

const CompromisseCard = ({ title, date, status }: Props) => {
  return (
    <Card bordered h={'$12'} maxWidth={'$20'}>
      <Card.Header padded>
        <Paragraph theme="alt2">
          {title}
        </Paragraph>
      </Card.Header>
      <Card.Footer padded>
        <XStack flex={1} ai={'center'}>
          <MessageCircleMore />
          <XStack gap={'$2'} f={1} ai={'center'} jc={'center'}>
            <Calendar />
            <Text>{date}</Text>
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
      theme={status === 'hight' ? 'green' : status === 'low' ? 'red' : undefined}
      icon={status === 'hight' ? <ChevronUp /> : status === 'low' ? <ChevronDown /> : <Minus />}
    >
      Purchase
    </Button>
  );
}

export default CompromisseCard