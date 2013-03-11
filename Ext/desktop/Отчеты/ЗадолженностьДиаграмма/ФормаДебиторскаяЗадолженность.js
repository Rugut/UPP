Ext.define('Отчеты.ЗадолженностьДиаграмма.ФормаДебиторскаяЗадолженность',
	{
	extend: 'Ext.window.Window',
	height: 449,width: 604,
	iconCls: 'bogus',
	title: '',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:604px;height:25px;',
			items:
			[
				{
					text:'Действие1',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие1',
				},
				{
					text:'ВосстановитьЗначения',
				},
				{
					text:'Печать',
				},
				{
					text:'Настройка',
				},
				{
					text:'Действие3',
				},
				{
					text:'СохранитьЗначения',
				},
				{
					text:'Отбор',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Настройка',
				},
				{
					text:'Транспонировать',
				},
				{
					text:'Выполнить',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'Действие',
				},
				{
					text:'Подменю',
				},
				{
					text:'Транспонировать',
				},
				{
					text:'Выполнить',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Отбор',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаКон',
			style: 'position:absolute;left:62px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:57px;width:588px;height:46px;',
			height: 46,width: 588,
			items:
			[
				{
					title:'Страница2',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеНастройкиОрганизация',
			style: 'position:absolute;left:292px;top:0px;width:296px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеНастройкиВидВзаиморасчетов',
			style: 'position:absolute;left:292px;top:22px;width:296px;height:19px;',
		},
					]
				},
			]
		},
	]
});