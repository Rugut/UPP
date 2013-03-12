Ext.define('Документы.ДоговорЗаймаСРаботником.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:780px;height:421px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Договоры займа с сотрудниками',
	
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
					text:'УУ',
					width:'20',
				},
				{
					text:'БУ',
					width:'20',
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
					text:'Физическое лицо',
					width:'120',
				},
				{
					text:'Сумма займа',
					width:'80',
				},
				{
					text:'Валюта',
					width:'60',
				},
				{
					text:'Начало погашения',
					width:'80',
				},
				{
					text:'Срок погашения',
					width:'80',
				},
				{
					text:'Комментарий',
					width:'120',
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
				{
					text:'',
				},
				'-',
				'-',
				'-',
				{
					text:'Действие10',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие8',
				},
				{
					text:'',
				},
				{
					text:'Действие9',
				},
				'-',
				{
					text:'Действие13',
				},
				{
					text:'Структура подчиненности документа',
				},
				{
					text:'Действие11',
				},
				'-',
				{
					text:'Действие1',
				},
				{
					text:'Действие3',
				},
				'-',
				'-',
				{
					text:'Действие4',
				},
				'-',
				'-',
				'-',
				{
					text:'Действие',
				},
				{
					text:'Действие3',
				},
				{
					text:'',
				},
				'-',
				'-',
				{
					text:'',
				},
				{
					text:'Действие7',
				},
				'-',
				{
					text:'Действие10',
				},
				'-',
				{
					text:'Действие6',
				},
				'-',
				{
					text:'Действие14',
				},
				'-',
				{
					text:'Действие1',
				},
				'-',
				{
					text:'Действие4',
				},
				'-',
				{
					text:'Действие6',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие11',
				},
				{
					text:'Действие12',
				},
				{
					text:'Печать',
				},
				{
					text:'',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие5',
				},
				{
					text:'Движения документа по регистрам',
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