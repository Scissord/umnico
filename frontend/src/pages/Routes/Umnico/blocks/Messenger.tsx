import React from "react";

type MessengerProps = {
	messages: [];
}

const headers = [
	{ value: 0, label: 'Клиент' },
	{ value: 1, label: 'Телефон' },
	{ value: 2, label: 'Сообщение' },
	{ value: 3, label: 'Дата' },
	{ value: 4, label: 'Тип' },
]

const Messenger: React.FC<MessengerProps> = (props) => {
	const { messages } = props;

	const handleRebuildDate = (d) => {
		const date = new Date(d);

		return date.toLocaleString('ru', {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
			hour: 'numeric',
			minute: 'numeric',
			second: 'numeric',
			timeZone: 'Asia/Almaty'
		});
	}

	return (
		<div className="overflow-x-auto">
			<table className="table table-xs table-pin-rows table-pin-cols">
				<thead>
					<tr>
						<th></th>
						{headers.map((h) => (
							<td key={h.value}>
								{h.label}
							</td>
						))}
						<th></th> 
					</tr>
				</thead> 
				<tbody>
					{messages.length > 0 && messages.map((message, i) => (
						<tr key={message.id}>
							<th>{i + 1}</th> 
							<td className='flex items-center gap-2'>
								<img className='border rounded-full w-8 h-8' alt="avatar" src={message.customer.avatar ? message.customer.avatar : '/icons/avatar-default.svg'}/>
								<p>{`${message.customer.name}`}</p>
							</td>
							<td><p>{`${message.customer.phone ? message.customer.phone : message.customer.login}`}</p></td>
							<td><p>{`${message.message.data.text}`}</p></td>
							<td><p>{`${handleRebuildDate(message.message.timestamp)}`}</p></td>
							<td><p>{`${message.message.incoming ? 'Входящее' : 'Исходящее'}`}</p></td>
							<th>{i + 1}</th> 
						</tr>
					))}
				</tbody> 
				<tfoot>
					<tr>
						<th></th> 
						{headers.map((h) => (
							<td key={h.value}>
								{h.label}
							</td>
						))}
						<th></th> 
					</tr>
				</tfoot>
			</table>
		</div>
	);
};

export default Messenger;
