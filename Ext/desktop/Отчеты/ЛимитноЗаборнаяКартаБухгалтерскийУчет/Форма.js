Ext.define('Отчеты.ЛимитноЗаборнаяКартаБухгалтерскийУчет.Форма',
	{
	extend: 'Ext.window.Window',
	height: 417,width: 604,
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
					text:'Заголовок',
				},
				{
					text:'Подменю',
				},
				{
					text:'Выполнить',
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
					text:'Отбор',
				},
				{
					text:'Действие3',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Отбор',
				},
				{
					text:'Действие1',
				},
				{
					text:'Настройка',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Заголовок',
				},
				{
					text:'ВосстановитьЗначения',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Выполнить',
				},
				{
					text:'Настройка',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'СохранитьЗначения',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель1',
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
			style: 'position:absolute;left:8px;top:57px;width:588px;height:72px;',
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
			name: 'ПолеНастройкиСклад',
			style: 'position:absolute;left:264px;top:0px;width:324px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеНастройкиНоменклатура',
			style: 'position:absolute;left:264px;top:24px;width:324px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеНастройкиПодразделение',
			style: 'position:absolute;left:264px;top:48px;width:324px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Периодичность',
			style: 'position:absolute;left:272px;top:33px;width:96px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:444px;top:33px;width:152px;height:19px;',
		},
	]
});