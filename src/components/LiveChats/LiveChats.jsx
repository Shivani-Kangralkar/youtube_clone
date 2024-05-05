import React, { useEffect } from 'react'
import ChatMessages from './ChatMessages'
import { useDispatch, useSelector} from "react-redux";
import { addMessage } from '../../redux-store/ChatSlice';
import { generateRandomMessage, generateRandomName } from '../../utils/helper';

const LiveChats = () => {

  const dispatch = useDispatch()
  const chatMessages = useSelector((state)=> state.chat.messages)

	useEffect(()=>{
		const timer = setInterval(()=>{

			// random name and message is generated
      dispatch(addMessage({
        name: generateRandomName(),
        messages: generateRandomMessage(16)
      }))
      
		},2000)

		return () => {
			clearInterval(timer)
		}
	},[])

	return (
		<div className=''>

      {
        chatMessages.map((item,idx)=>
          <ChatMessages key={idx} name={item.name} messages={item.messages}/>)
      }
		</div>
	)
}

export default LiveChats
