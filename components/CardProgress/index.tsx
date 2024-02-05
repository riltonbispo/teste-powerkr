import { AnimatedCircularProgress } from "react-native-circular-progress";
import { Card, SizableText, Text } from "tamagui";

type Props = {
  value: number
  progress: number
  title: string
}

const CardProgress = ({ title, progress, value }: Props) => {
  return (
    <Card bordered borderRadius={'$7'} flexGrow={1} ai={'center'} p={'$4'} theme={'dark'} bg={'#202939'} borderWidth={'$0'}>
      <AnimatedCircularProgress
        size={120}
        width={10}
        fill={progress}
        tintColor="#44CB4B"
        backgroundColor="#364152"
        arcSweepAngle={300}
        rotation={210}
        lineCap='round'
      >
        {
          () => (
            <>
              <Text fontWeight={'bold'}>{value}</Text>
              <SizableText theme="alt1"  ta={'center'} lh={'$2'}>
                {title}
              </SizableText>
            </>

          )
        }
      </AnimatedCircularProgress>
    </Card>
  );
}

export default CardProgress; 