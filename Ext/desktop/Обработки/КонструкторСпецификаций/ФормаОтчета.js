Ext.define('Обработки.КонструкторСпецификаций.ФормаОтчета',
	{
	extend: 'Ext.window.Window',
	height: 418,width: 604,
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
					text:'Разделитель4',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Выполнить',
				},
				{
					text:'Подменю',
				},
				{
					text:'Отбор',
				},
				{
					text:'Настройка',
				},
				{
					text:'Действие3',
				},
				{
					text:'Настройка',
				},
				{
					text:'ВосстановитьЗначения',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Отбор',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'Заголовок',
				},
				{
					text:'Выполнить',
				},
				{
					text:'СохранитьЗначения',
				},
				{
					text:'Заголовок',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Действие1',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:588px;height:72px;',
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
			name: 'ПолеНастройкиНоменклатура',
			style: 'position:absolute;left:308px;top:0px;width:280px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеНастройкиСтатьяЗатрат',
			style: 'position:absolute;left:308px;top:24px;width:280px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеНастройкиНоменклатурнаяГруппа',
			style: 'position:absolute;left:308px;top:48px;width:280px;height:19px;',
		},
					]
				},
			]
		},
	]
});