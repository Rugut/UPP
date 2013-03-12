Ext.define('Документы.СправкаДругогоСтрахователяОЗаработке.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:780px;height:420px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Справки других страхователей о заработке',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:57px;width:764px;height:355px;',
			height: 355,width: 764,
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
					width:'120',
				},
				{
					text:'Страхователь',
					width:'120',
				},
				{
					text:'Ответственный',
					width:'120',
				},
				{
					text:'Комментарий',
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
				'-',
				'-',
				{
					text:'Действие6',
				},
				'-',
				{
					text:'Действие14',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие10',
				},
				{
					text:'Действие3',
				},
				{
					text:'',
				},
				{
					text:'',
				},
				{
					text:'',
				},
				'-',
				'-',
				'-',
				{
					text:'Действие9',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие1',
				},
				'-',
				{
					text:'Действие11',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие12',
				},
				{
					text:'Действие8',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Действие7',
				},
				{
					text:'Действие',
				},
				'-',
				'-',
				'-',
				{
					text:'Действие2',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Действие9',
				},
				'-',
				{
					text:'Действие7',
				},
				{
					text:'Действие13',
				},
				{
					text:'Структура подчиненности документа',
				},
				{
					text:'Действие1',
				},
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие4',
				},
				'-',
				'-',
				{
					text:'Действие',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие10',
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