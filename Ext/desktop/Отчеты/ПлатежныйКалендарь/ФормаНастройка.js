Ext.define('Отчеты.ПлатежныйКалендарь.ФормаНастройка',
	{
	extend: 'Ext.window.Window',
	height: 352,width: 354,
	iconCls: 'bogus',
	title: '',
	
	items:
	[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:8px;width:338px;height:311px;',
			height: 311,width: 338,
			items:
			[
				{
					title:'Общие',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНач',
			style: 'position:absolute;left:96px;top:6px;width:96px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаКон',
			style: 'position:absolute;left:212px;top:6px;width:96px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:310px;top:6px;width:20px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДетализацияПоПериодам',
			style: 'position:absolute;left:193px;top:30px;width:137px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:99px;width:324px;height:68px;',
			height: 68,width: 324,
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
			style: 'position:absolute;left:6px;top:75px;width:324px;height:24px;',
			items:
			[
				{
					text:'СнятьВсе',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие3',
				},
				{
					text:'УстановитьВсе',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:217px;width:324px;height:68px;',
			height: 68,width: 324,
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
			style: 'position:absolute;left:6px;top:193px;width:324px;height:24px;',
			items:
			[
				{
					text:'УстановитьВсе',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие3',
				},
				{
					text:'СнятьВсе',
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
			style: 'position:absolute;left:6px;top:24px;width:324px;height:261px;',
			height: 261,width: 324,
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
			style: 'position:absolute;left:6px;top:0px;width:324px;height:24px;',
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
			style: 'position:absolute;left:0px;top:327px;width:354px;height:25px;',
			items:
			[
				{
					text:'Закрыть',
				},
				{
					text:'ОК',
				},
				{
					text:'Справка',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель1',
				},
			]
		},
	]
});