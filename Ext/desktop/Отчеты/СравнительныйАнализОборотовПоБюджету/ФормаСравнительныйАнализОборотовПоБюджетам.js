Ext.define('Отчеты.СравнительныйАнализОборотовПоБюджету.ФормаСравнительныйАнализОборотовПоБюджетам',
	{
	extend: 'Ext.window.Window',
	height: 436,width: 604,
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
					text:'Настройка',
				},
				{
					text:'Выполнить',
				},
				{
					text:'Отбор',
				},
				{
					text:'Действие1',
				},
				{
					text:'Заголовок',
				},
				{
					text:'СохранитьЗначения',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Отбор',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'ВосстановитьЗначения',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Действие1',
				},
				{
					text:'Настройка',
				},
				{
					text:'Подменю',
				},
				{
					text:'Действие3',
				},
				{
					text:'Заголовок',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Выполнить',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие2',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:60px;width:588px;height:48px;',
			height: 48,width: 588,
			items:
			[
				{
					title:'Страница2',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеНастройкиЦФО',
			style: 'position:absolute;left:292px;top:24px;width:296px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеНастройкиПроект',
			style: 'position:absolute;left:292px;top:0px;width:296px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Бюджет',
			style: 'position:absolute;left:98px;top:33px;width:498px;height:19px;',
		},
	]
});