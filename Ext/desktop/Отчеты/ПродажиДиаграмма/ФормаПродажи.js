Ext.define('Отчеты.ПродажиДиаграмма.ФормаПродажи',
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
					text:'Разделитель3',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Подменю',
				},
				{
					text:'Настройка',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'СохранитьЗначения',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Выполнить',
				},
				{
					text:'Транспонировать',
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
				{
					text:'ВосстановитьЗначения',
				},
				{
					text:'Печать',
				},
				{
					text:'Действие3',
				},
				{
					text:'Разделитель4',
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
					text:'Отбор',
				},
				{
					text:'Настройка',
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
			style: 'position:absolute;left:66px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаКон',
			style: 'position:absolute;left:166px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:248px;top:33px;width:20px;height:19px;',
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
			name: 'ПолеНастройкиПокупатель',
			style: 'position:absolute;left:288px;top:0px;width:300px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеНастройкиНоменклатура',
			style: 'position:absolute;left:288px;top:24px;width:300px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеНастройкиПодразделение',
			style: 'position:absolute;left:288px;top:48px;width:300px;height:19px;',
		},
					]
				},
			]
		},
	]
});