import { AvatarUL, ContainerUl, RoleUL, userDiscord, UserUL } from "@/DiscordPage";
import { FC } from 'react';


interface UseProps{
	id: string;
	avatar: string;
	nicknameUL: string;
	isBot?: boolean;
};

const UserRowUL: FC<UseProps> = ({id, avatar, nicknameUL, isBot}) =>{
	return (
    <UserUL key={id}>
      <AvatarUL className={isBot ? "bot" : ""}>
        <img src={avatar} alt={nicknameUL}/>
      </AvatarUL>
      <strong>{nicknameUL}</strong>
      {isBot && <span>Bot</span>}
    </UserUL>
  );
}

export interface PorpsUL {}

export const UserList :FC<PorpsUL> = () => {
	let d=0;
	let nd=0;
	return (
		<ContainerUl>
				<>
					<RoleUL>Disponible - {d}</RoleUL>
					{userDiscord.map((user) => {
						return(user.online && <UserRowUL id={user.id} avatar={user.avatar} nicknameUL={user.nickName} isBot={user.isBot}/>)
					})}
					<RoleUL>Offline - {nd}</RoleUL>
					{userDiscord.map((user) => {
						return (!user.online && <UserRowUL id={user.id} avatar={user.avatar} nicknameUL={user.nickName} isBot={user.isBot}/>)
					})}
				</>
		</ContainerUl>
	);
};
