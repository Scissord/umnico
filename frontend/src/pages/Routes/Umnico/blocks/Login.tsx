import axios from 'axios';
import { Box, Icon, Title, Section, Button } from "@ui"
import React, { useState } from "react"
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { FaUser, FaKey } from "react-icons/fa";
import { MdOutlineToken } from "react-icons/md";
import { GrUserManager } from "react-icons/gr";

type LoginProps = {
	setAuth: React.Dispatch<React.SetStateAction<boolean>>;
	fetchConversations: void;
}

export const Login: React.FC<LoginProps> = (props) => {
	const { setAuth, fetchConversations } = props;

	const [way, setWay] = useState(0);
	const [login, setLogin] = useState("mrnurdik@mail.ru");
	const [password, setPassword] = useState("Surgood123#");
	const [showPassword, setShowPassword] = useState(false);
	const [pluginToken, setPluginToken] = useState("");
	const [managerId, setManagerId] = useState("");

	const handleReset = () => {
		if(way === 0) {
			setUsername("");
			setPassword("");
		} else {
			setToken("");
		}
	};

	const handleSetWay = () => {
		way === 0 
			? setWay(1)
			: setWay(0)
	};

	const authByUser = async () => {
		try {
			const response = await axios({
				method: "POST",
				url: 'https://api.umnico.com/v1.3/auth/login',
				headers: {
					'Content-Type': 'application/json'
				},
				data: {
					login: login,
					pass: password
				}
			});

			if(response.status === 200) {
				setAuth(true);
				localStorage.setItem("accessToken", JSON.stringify(response.data.accessToken));
				localStorage.setItem("refreshToken", JSON.stringify(response.data.refreshToken));
				fetchConversations(response.data.accessToken);
			}
		} catch (error) {
			console.error('Error during login:', error);
			alert("Неправильный логин или пороль");
		}
	}

	const authByToken = async () => {
		try {
			const response = await axios({
				method: "POST",
				url: 'https://api.umnico.com/v1.3/auth/plugin',
				headers: {
					'Content-Type': 'application/json'
				},
				data: {
					pluginToken: pluginToken,
					manager: managerId
				}
			});

			if(response.status === 200) {
				setAuth(true);
				localStorage.setItem("accessToken", JSON.stringify(response.data.accessToken));
			}
		} catch (error) {
			console.error('Error during login:', error);
			alert("Неправильный логин или пороль");
		}
	}

	const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		if(way === 0) {
			await authByUser()
		} else {
			await authByToken()
		}
	};

	return (
		<form className="flex flex-col gap-4 px-8 pt-8 pb-6 border border-white w-[400px] rounded-xl">
			<Title text="Login" className=" text-3xl"/>

			<Button 
				text="use Token" 
				className="btn btn-outline border-white text-white" 
				onClick={handleSetWay}
			/>

			{way === 0 ? (
				<Section className="flex flex-col gap-2">
					<Box className="form-control w-full">
						<Box className="label">
							<span className="label-text">Username</span>
						</Box>
						<Box className="input border-white flex items-center gap-2">
							<FaUser/>
							<input 
								type="text" 
								className="grow" 
								placeholder="Example: test@gmail.com"
								value={login}
								onChange={(e) => setLogin(e.target.value)} 
							/>
						</Box>
					</Box>
					<Box className="form-control w-full">
						<Box className="label">
							<span className="label-text">Password</span>
						</Box>
						<Box className="input border-white flex items-center gap-2">
							<FaKey/>
							{/* Must be >= 6 characters */}
							<input 
								type={showPassword ? 'text' : 'password'} 
								className="grow select-none" 
								placeholder="******"
								value={password}
								onChange={(e) => setPassword(e.target.value)} 
							/>
							<kbd className="kbd kbd-sm border-white">
								<Icon 
									icon={showPassword ? <FaRegEyeSlash/> : <FaRegEye/>} 
									onClick={() => setShowPassword(!showPassword)}
								/>
							</kbd>
						</Box>
					</Box>
				</Section>
			) : (
				<Section className="flex flex-col gap-2">
					<Box className="form-control w-full">
						<Box className="label">
							<span className="label-text">pluginToken</span>
						</Box>
						<Box className="input border-white flex items-center gap-2">
							<MdOutlineToken/>
							<input 
								type="text" 
								className="grow" 
								placeholder="here..."
								value={pluginToken}
								onChange={(e) => setPluginToken(e.target.value)} 
							/>
						</Box>
					</Box>
					<Box className="form-control w-full">
						<Box className="label">
							<span className="label-text">ManagerId</span>
						</Box>
						<Box className="input border-white flex items-center gap-2">
							<GrUserManager/>
							<input 
								type="text" 
								className="grow" 
								placeholder="here..."
								value={managerId}
								onChange={(e) => setManagerId(e.target.value)} 
							/>
						</Box>
					</Box>
				</Section>
			)}

			<Section className="flex ml-auto gap-3 mt-3">
				<button 
					className="btn btn-sm btn-success text-white"
					onClick={(e) => handleSubmit(e)}
				>
					Login
				</button>
				<button 
					className="btn btn-sm btn-error text-white" 
					onClick={() => handleReset()}
				>
						Reset
				</button>
			</Section>
		</form>
	)
}

export default Login