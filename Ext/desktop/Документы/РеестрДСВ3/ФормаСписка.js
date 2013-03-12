Ext.define('Документы.РеестрДСВ3.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:1000px;height:421px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Реестры застрахованных лиц (по форме ДСВ-3)',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:57px;width:984px;height:356px;',
			height: 356,width: 984,
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
					width:'121',
				},
				{
					text:'Платежное поручение: № и дата',
					width:'180',
				},
				{
					text:'Номер ПП',
					width:'100',
				},
				{
					text:'Дата ПП',
					width:'80',
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
			style: 'position:absolute;left:0px;top:0px;width:1000px;height:25px;',
			items:
			[
				'-',
				{
					text:'Действие',
				},
				{
					text:'Действие22',
				},
				{
					text:'Действие14',
				},
				{
					text:'Действие5',
				},
				'-',
				{
					text:'Действие6',
				},
				{
					text:'Действие3',
				},
				'-',
				'-',
				{
					text:'Структура подчиненности документа',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие16',
				},
				'-',
				'-',
				{
					text:'Действие12',
				},
				{
					text:'Действие7',
				},
				'-',
				'-',
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'Действие15',
				},
				'-',
				'-',
				{
					text:'',
				},
				'-',
				{
					text:'',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие17',
				},
				{
					text:'',
				},
				{
					text:'Действие19',
				},
				'-',
				{
					text:'Действие13',
				},
				'-',
				{
					text:'Действие11',
				},
				'-',
				{
					text:'Действие13',
				},
				{
					text:'Действие20',
				},
				{
					text:'Действие21',
				},
				{
					text:'Действие14',
				},
				'-',
				{
					text:'Действие12',
				},
				{
					text:'Действие18',
				},
				'-',
				{
					text:'Действие2',
				},
				{
					text:'Печать',
				},
				'-',
				{
					text:'Действие10',
				},
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