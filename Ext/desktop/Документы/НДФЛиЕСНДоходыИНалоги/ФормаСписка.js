Ext.define('Документы.НДФЛиЕСНДоходыИНалоги.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:727px;height:421px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Корректировки учета по НДФЛ, страховым взносам и ЕСН',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:57px;width:711px;height:356px;',
			height: 356,width: 711,
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
					text:'Налоговый (расчетный) период',
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
					text:'Комментарий',
					width:'120',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:727px;height:25px;',
			items:
			[
				{
					text:'Действие8',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие',
				},
				'-',
				'-',
				'-',
				'-',
				{
					text:'Действие1',
				},
				{
					text:'Действие2',
				},
				'-',
				{
					text:'Действие9',
				},
				{
					text:'Действие5',
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
				{
					text:'',
				},
				{
					text:'Действие11',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие3',
				},
				'-',
				{
					text:'Действие10',
				},
				{
					text:'Действие1',
				},
				'-',
				'-',
				{
					text:'Действие6',
				},
				{
					text:'Действие14',
				},
				'-',
				{
					text:'Действие6',
				},
				{
					text:'Действие4',
				},
				{
					text:'Структура подчиненности документа',
				},
				'-',
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие12',
				},
				{
					text:'Действие13',
				},
				{
					text:'Действие2',
				},
				'-',
				{
					text:'Действие10',
				},
				'-',
				'-',
				{
					text:'Действие',
				},
				'-',
				{
					text:'Действие5',
				},
				'-',
				{
					text:'Действие8',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:711px;height:19px;',
			height: 19,width: 711,
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