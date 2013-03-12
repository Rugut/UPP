Ext.define('Документы.ПеречислениеНДФЛвБюджет.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:799px;height:421px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Перечисление НДФЛ в бюджет РФ',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:57px;width:783px;height:356px;',
			height: 356,width: 783,
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
					width:'121',
				},
				{
					text:'Месяц',
					width:'80',
				},
				{
					text:'Дата операции',
					width:'84',
				},
				{
					text:'Сумма',
					width:'80',
				},
				{
					text:'ОКАТО/КПП',
					width:'77',
				},
				{
					text:'Ставка',
					width:'60',
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
			style: 'position:absolute;left:0px;top:0px;width:799px;height:25px;',
			items:
			[
				{
					text:'Действие14',
				},
				'-',
				'-',
				{
					text:'Действие7',
				},
				{
					text:'',
				},
				'-',
				'-',
				'-',
				'-',
				'-',
				{
					text:'Действие7',
				},
				'-',
				{
					text:'Действие3',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие1',
				},
				'-',
				{
					text:'Структура подчиненности документа',
				},
				'-',
				{
					text:'',
				},
				{
					text:'Действие12',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие10',
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
				{
					text:'Действие6',
				},
				'-',
				{
					text:'Действие5',
				},
				{
					text:'',
				},
				{
					text:'Действие11',
				},
				{
					text:'Действие2',
				},
				'-',
				{
					text:'Действие9',
				},
				'-',
				{
					text:'Действие2',
				},
				'-',
				{
					text:'Действие10',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие13',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие6',
				},
				'-',
				{
					text:'Действие',
				},
				{
					text:'Движения документа по регистрам',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:783px;height:19px;',
			height: 19,width: 783,
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