import axios from "axios";
import { Box, Button } from "@ui";
import Login from './blocks/Login';
import Messenger from './blocks/Messenger.tsx';
import { useEffect, useState } from "react";

interface AccessTokenObject {
  token: string;
}

const limit = 3;

export const Umnico = () => {
	const [auth, setAuth] = useState(false);
	const [messages, setMessages] = useState([]);
  const [offset, setOffset] = useState(0);

	useEffect(() => {
		const accessTokenString = localStorage.getItem("accessToken");
		if (accessTokenString) {
			const accessToken: AccessTokenObject = JSON.parse(accessTokenString);
			setAuth(true);
			fetchConversations(accessToken);
		}
	}, [offset]);

	const fetchConversations = async (accessToken: AccessTokenObject) => {
		try {
			const response = await axios({
				method: "GET",
				url: `https://api.umnico.com/v1.3/leads/inbox?offset=${offset}&limit=${limit}`,
				headers: {
					'Content-Type': 'application/json',
					'Authorization': `${accessToken.token}`
				}
			})

      if(response.data.length === 0) {
				return;
			}

			if(response.status === 200) {
				setMessages(response.data);
			}
		} catch (error) {
			console.error('Error during login:', error.response.data);
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      setAuth(false);
		}
	}

  const prev = () => {
    setOffset(prev => prev - messages.length)
  }

  const next = () => {
    setOffset(prev => prev + messages.length)
  }

  const handleSendToTalkAndCall = async () => {
    try {
			const response = await axios({
				method: "POST",
				url: `https://call-center1.leadvertex.ru/api/admin/addOrder.html?token=api_key_here`,
				headers: {
					'Content-Type': 'application/json',
				},
        data: {
          items: messages
        }
			})

			if(response.status === 200) {
				alert('Успешно!')
			}
		} catch (error) {
			console.error('Error during login:', error.response.data);
      alert('Ошибка!')
		}
  }

	return (
		<Box>
			{!auth && messages.length === 0 ? (
				<Login setAuth={setAuth} fetchConversations={fetchConversations}/>
			) : (
				<>
					{messages.length > 0 ? (
            <div>
              <div className="flex items-center gap-3 mb-3">
                <Button 
                  text="prev" 
                  className="btn btn-outline border-white text-white" 
                  onClick={prev}
                />
                <Button 
                  text="next" 
                  className="btn btn-outline border-white text-white" 
                  onClick={next}
                />

                <Button 
                  text="send to Talk&Call" 
                  className="btn btn-outline border-green-400 text-green-500 ml-auto" 
                  onClick={handleSendToTalkAndCall}
                />
              </div>
              
						  <Messenger messages={messages}/> 
            </div>
					) : (
						<span className="loading loading-infinity loading-lg"></span>
					)}
				</>
			)}
		</Box>
	)
}