Ext.define('Отчеты.КонтролируемыеЗначенияПоБюджетам.ФормаНастройка',
	{
	extend: 'Ext.window.Window',
	height: 377,width: 488,
	iconCls: 'bogus',
	title: '',
	
	items:
	[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:8px;width:474px;height:333px;',
			height: 333,width: 474,
			items:
			[
				{
					title:'Общие',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Сценарий',
			style: 'position:absolute;left:64px;top:30px;width:402px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОтчета',
			style: 'position:absolute;left:64px;top:6px;width:96px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:187px;width:460px;height:120px;',
			height: 120,width: 460,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'Использование',
				},
				{
					text:'Представление',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:162px;width:264px;height:25px;',
			items:
			[
				{
					text:'УстановитьВсе',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие2',
				},
				{
					text:'СнятьВсе',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидКонтролируемыхЗначений',
			style: 'position:absolute;left:100px;top:75px;width:180px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИспользованиеКонтролируемыхЗначений',
			style: 'position:absolute;left:100px;top:99px;width:180px;height:19px;',
		},
					]
				},
				{
					title:'Группировки',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:212px;height:283px;',
			height: 283,width: 212,
			columns:
			[
				{
					text:'Поле',
				},
				{
					text:'Тип',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:212px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:254px;top:0px;width:212px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:254px;top:24px;width:212px;height:283px;',
			height: 283,width: 212,
			columns:
			[
				{
					text:'Поле',
				},
				{
					text:'Тип',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:224px;top:117px;width:24px;height:109px;',
			items:
			[
				{
					text:'ПеренестиВКолонки',
				},
				{
					text:'ПеренестиВСтроки',
				},
			]
		},
					]
				},
				{
					title:'Страница2',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:460px;height:281px;',
			height: 281,width: 460,
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
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:460px;height:24px;',
			items:
			[
			]
		},
					]
				},
				{
					title:'Поля',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:53px;width:460px;height:254px;',
			height: 254,width: 460,
			columns:
			[
				{
					text:'Поле',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:29px;width:460px;height:24px;',
			items:
			[
			]
		},
					]
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:352px;width:488px;height:25px;',
			items:
			[
				{
					text:'Разделитель1',
				},
				{
					text:'Справка',
				},
				{
					text:'ОК',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Закрыть',
				},
			]
		},
	]
});