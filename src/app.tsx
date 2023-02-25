import {useEffect} from "react";
import {useDidShow, useDidHide} from '@tarojs/taro'

import './app.scss'

const App = (props) => {
  useEffect(() => {
    //
  }, [])

  useDidShow(() => {
    //
  })

  useDidHide(() => {
    //
  })


  return <div>
    {props.children}
  </div>
}

export default App
