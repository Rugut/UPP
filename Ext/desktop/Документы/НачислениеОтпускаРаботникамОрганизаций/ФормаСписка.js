Ext.define('Документы.НачислениеОтпускаРаботникамОрганизаций.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:780px;height:421px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Начисления отпуска сотрудникам организаций',
	
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
					width:'105',
				},
				{
					text:'Номер',
					width:'80',
				},
				{
					text:'Организация',
					width:'105',
				},
				{
					text:'Месяц начисления',
					width:'110',
				},
				{
					text:'Сотрудник',
					width:'121',
				},
				{
					text:'Дата начала',
					width:'94',
				},
				{
					text:'Дата окончания',
					width:'88',
				},
				{
					text:'Ответственный',
					width:'105',
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
				{
					text:'',
				},
				'-',
				'-',
				'-',
				'-',
				'-',
				{
					text:'Действие3',
				},
				'-',
				{
					text:'Действие6',
				},
				'-',
				{
					text:'Действие11',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие10',
				},
				'-',
				{
					text:'Действие4',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие1',
				},
				'-',
				{
					text:'Действие3',
				},
				{
					text:'',
				},
				{
					text:'Структура подчиненности документа',
				},
				{
					text:'Печать',
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
				{
					text:'Действие14',
				},
				'-',
				{
					text:'',
				},
				'-',
				{
					text:'Действие2',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие7',
				},
				'-',
				{
					text:'Действие1',
				},
				{
					text:'Действие5',
				},
				'-',
				{
					text:'Действие10',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Действие6',
				},
				{
					text:'Действие5',
				},
				'-',
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