Ext.define('Отчеты.ОстаткиДенежныхСредствДиаграмма.ФормаДенежныеСредства',
	{
	extend: 'Ext.window.Window',
	height: 420,width: 604,
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
					text:'Печать',
				},
				{
					text:'Транспонировать',
				},
				{
					text:'Настройка',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Подменю',
				},
				{
					text:'Настройка',
				},
				{
					text:'СохранитьЗначения',
				},
				{
					text:'Действие3',
				},
				{
					text:'Отбор',
				},
				{
					text:'Транспонировать',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Отбор',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'ВосстановитьЗначения',
				},
				{
					text:'Выполнить',
				},
				{
					text:'Выполнить',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаКон',
			style: 'position:absolute;left:68px;top:33px;width:97px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:60px;width:588px;height:72px;',
			height: 72,width: 588,
			items:
			[
				{
					title:'Страница2',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеНастройкиВидДенежныхСредств',
			style: 'position:absolute;left:288px;top:0px;width:300px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеНастройкиВалютаДенежныхСредств',
			style: 'position:absolute;left:288px;top:24px;width:300px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеНастройкиБанковскийСчетКасса',
			style: 'position:absolute;left:288px;top:48px;width:300px;height:19px;',
		},
					]
				},
			]
		},
	]
});