import {View, Text} from '@tarojs/components'
import {useEffect, useState} from "react";
import './index.scss'


const Index = () => {
  const [msg, setMsg] = useState('')

  useEffect(() => {
    setMsg('1111')
  }, [])

  return (
    <View className='index'>
      <Text>{msg}</Text>
    </View>
  )
}
export default Index
