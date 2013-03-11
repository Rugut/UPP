Ext.define('Отчеты.ВизитныеКарточкиРаботников.Форма',
	{
	extend: 'Ext.window.Window',
	height: 412,width: 720,
	iconCls: 'bogus',
	title: 'Визитные карточки сотрудников',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:720px;height:25px;',
			items:
			[
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Действие3',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'ВыполнитьПечать',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'ВыполнитьПечать',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Сформировать1',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель6',
				},
				{
					text:'ДействиеНовыйОтчет',
				},
				{
					text:'Действие1',
				},
				{
					text:'Заголовок',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Отбор',
				},
				{
					text:'Действие2',
				},
				{
					text:'НовыйОтчет',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие1',
				},
				{
					text:'Настройка',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Сформировать',
				},
				{
					text:'Подменю',
				},
				{
					text:'Отбор',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Настройка',
				},
				{
					text:'Заголовок',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:704px;height:49px;',
			height: 49,width: 704,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеНастройкиДолжность',
			style: 'position:absolute;left:218px;top:28px;width:486px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеНастройкиПодразделение',
			style: 'position:absolute;left:218px;top:4px;width:486px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНач',
			style: 'position:absolute;left:633px;top:2px;width:80px;height:19px;',
		},
	]
});