Ext.define('Документы.ВводРаспределенияОсновногоЗаработкаРаботниковОрганизации.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:1000px;height:321px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Ввод распределения основного заработка сотрудников',
	
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
					width:'140',
				},
				{
					text:'Номер',
					width:'77',
				},
				{
					text:'Месяц',
					width:'100',
				},
				{
					text:'Организация',
					width:'110',
				},
				{
					text:'Сотрудники',
					width:'110',
				},
				{
					text:'Ответственный',
					width:'110',
				},
				{
					text:'Комментарий',
					width:'100',
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
					text:'Действие20',
				},
				{
					text:'Действие17',
				},
				{
					text:'Действие5',
				},
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'Действие1',
				},
				'-',
				{
					text:'Действие21',
				},
				{
					text:'Действие14',
				},
				{
					text:'Действие15',
				},
				'-',
				'-',
				'-',
				{
					text:'Действие11',
				},
				{
					text:'Действие2',
				},
				'-',
				{
					text:'Действие18',
				},
				{
					text:'Действие13',
				},
				'-',
				{
					text:'Действие',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие10',
				},
				{
					text:'Действие19',
				},
				{
					text:'Структура подчиненности документа',
				},
				'-',
				{
					text:'',
				},
				'-',
				{
					text:'Действие13',
				},
				{
					text:'Действие16',
				},
				{
					text:'Действие12',
				},
				'-',
				'-',
				'-',
				{
					text:'Действие11',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие3',
				},
				'-',
				{
					text:'Действие8',
				},
				{
					text:'Действие4',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Действие14',
				},
				'-',
				{
					text:'Действие12',
				},
				{
					text:'Действие9',
				},
				{
					text:'',
				},
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