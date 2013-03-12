Ext.define('Документы.ИсполнительныйЛист.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:780px;height:421px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Исполнительные листы',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:57px;width:764px;height:356px;',
			height: 356,width: 764,
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
					text:'Сотрудник',
					width:'121',
				},
				{
					text:'Получатель',
					width:'120',
				},
				{
					text:'Размер',
					width:'80',
				},
				{
					text:'Дата начала',
					width:'80',
				},
				{
					text:'Дата окончания',
					width:'80',
				},
				{
					text:'Предел',
					width:'80',
				},
				{
					text:'Ответственный',
					width:'120',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:780px;height:25px;',
			items:
			[
				'-',
				{
					text:'Действие3',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие4',
				},
				'-',
				{
					text:'Действие3',
				},
				{
					text:'',
				},
				{
					text:'Печать',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие1',
				},
				'-',
				'-',
				{
					text:'Действие7',
				},
				'-',
				{
					text:'Структура подчиненности документа',
				},
				{
					text:'Действие5',
				},
				'-',
				{
					text:'Действие9',
				},
				'-',
				{
					text:'',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие11',
				},
				{
					text:'Действие8',
				},
				{
					text:'Движения документа по регистрам',
				},
				'-',
				{
					text:'Действие',
				},
				{
					text:'Действие14',
				},
				'-',
				{
					text:'Действие6',
				},
				'-',
				'-',
				{
					text:'Действие5',
				},
				{
					text:'Действие12',
				},
				{
					text:'Действие2',
				},
				{
					text:'',
				},
				'-',
				'-',
				{
					text:'Действие4',
				},
				{
					text:'Действие6',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Действие13',
				},
				'-',
				{
					text:'Действие2',
				},
				{
					text:'Действие',
				},
				'-',
				{
					text:'Действие10',
				},
				'-',
				{
					text:'Действие10',
				},
				'-',
				{
					text:'Действие7',
				},
				{
					text:'',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:764px;height:19px;',
			height: 19,width: 764,
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