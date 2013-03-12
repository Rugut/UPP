Ext.define('Документы.ЗаявкаНаОткрытиеСчетов.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:1000px;height:321px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Заявка на открытие счетов',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:57px;width:984px;height:256px;',
			height: 256,width: 984,
			columns:
			[
				{
					text:'',
					width:'32',
				},
				{
					text:'Дата',
					width:'132',
				},
				{
					text:'Номер',
					width:'80',
				},
				{
					text:'Организация',
					width:'120',
				},
				{
					text:'Сотрудники',
					width:'101',
				},
				{
					text:'Ответственный',
					width:'120',
				},
				{
					text:'Банковский счет',
					width:'120',
				},
				{
					text:'№ договора',
					width:'80',
				},
				{
					text:'Обработано в банке',
					width:'100',
				},
				{
					text:'Комментарий',
					width:'220',
				},
				{
					text:'Валюта',
					width:'80',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:1000px;height:25px;',
			items:
			[
				{
					text:'Действие8',
				},
				'-',
				{
					text:'Действие7',
				},
				'-',
				{
					text:'Действие9',
				},
				'-',
				'-',
				{
					text:'Действие',
				},
				{
					text:'',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие4',
				},
				{
					text:'Структура подчиненности документа',
				},
				{
					text:'Действие10',
				},
				'-',
				{
					text:'Действие2',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие1',
				},
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'Лицевые счета сотрудников организации',
				},
				{
					text:'Действие5',
				},
				'-',
				'-',
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:984px;height:19px;',
			height: 19,width: 984,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Организация:',
			style: 'position:absolute;left:0px;top:0px;width:87px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:92px;top:0px;width:220px;height:19px;',
		},
					]
				},
			]
		},
	]
});