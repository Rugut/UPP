Ext.define('Отчеты.ОтчетОКонтактнойИнформации.Форма',
	{
	extend: 'Ext.window.Window',
	height: 409,width: 604,
	iconCls: 'bogus',
	title: 'Отчет о контактной информации',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:604px;height:25px;',
			items:
			[
				{
					text:'Действие2',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'Разделитель6',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Подменю',
				},
				{
					text:'Сформировать1',
				},
				{
					text:'ДействиеНовыйОтчет',
				},
				{
					text:'Отбор',
				},
				{
					text:'Заголовок',
				},
				{
					text:'Разделитель7',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ДействиеНовыйОтчет',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ВыполнитьПечать',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Настройка',
				},
				{
					text:'Сформировать',
				},
				{
					text:'Действие2',
				},
				{
					text:'Настройка',
				},
				{
					text:'Действие3',
				},
				{
					text:'Отбор',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Заголовок',
				},
				{
					text:'ВыполнитьПечать',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:57px;width:588px;height:24px;',
			height: 24,width: 588,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВидаСравненияОбъект',
			style: 'position:absolute;left:81px;top:0px;width:132px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеНастройкиОбъект',
			style: 'position:absolute;left:218px;top:0px;width:370px;height:19px;',
		},
					]
				},
			]
		},
	]
});