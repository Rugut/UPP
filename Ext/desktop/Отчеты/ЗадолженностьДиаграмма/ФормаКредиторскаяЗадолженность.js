Ext.define('Отчеты.ЗадолженностьДиаграмма.ФормаКредиторскаяЗадолженность',
	{
	extend: 'Ext.window.Window',
	height: 450,width: 604,
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
					text:'Выполнить',
				},
				{
					text:'Настройка',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Настройка',
				},
				{
					text:'Печать',
				},
				{
					text:'Транспонировать',
				},
				{
					text:'Выполнить',
				},
				{
					text:'Действие1',
				},
				{
					text:'Отбор',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'Подменю',
				},
				{
					text:'ВосстановитьЗначения',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие3',
				},
				{
					text:'СохранитьЗначения',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Отбор',
				},
				{
					text:'Транспонировать',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНач',
			style: 'position:absolute;left:62px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:58px;width:588px;height:49px;',
			height: 49,width: 588,
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
			style: 'position:absolute;left:292px;top:23px;width:296px;height:19px;',
		},
					]
				},
			]
		},
	]
});