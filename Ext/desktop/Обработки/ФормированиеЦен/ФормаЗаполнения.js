Ext.define('Обработки.ФормированиеЦен.ФормаЗаполнения',
	{
	extend: 'Ext.window.Window',
	height: 338,width: 676,
	iconCls: 'bogus',
	title: 'Обработка  Формирование цен',
	
	items:
	[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:8px;width:660px;height:276px;',
			height: 276,width: 660,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:646px;height:24px;',
			items:
			[
				{
					text:'Действие1',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие3',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:646px;height:220px;',
			height: 220,width: 646,
			columns:
			[
				{
					text:'Использование',
				},
				{
					text:'Имя',
				},
				{
					text:'ВидСравнения',
				},
				{
					text:'Значение',
				},
				{
					text:'ЗначениеС',
				},
				{
					text:'ЗначениеПо',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:313px;width:676px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Выполнить',
				},
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:284px;width:660px;height:21px;',
			height: 21,width: 660,
			items:
			[
				{
					title:'СтраницаЗаполнения',
					items:
					[
					]
				},
			]
		},
	]
});