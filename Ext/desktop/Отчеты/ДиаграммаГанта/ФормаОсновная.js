Ext.define('Отчеты.ДиаграммаГанта.ФормаОсновная',
	{
	extend: 'Ext.window.Window',
	height: 457,width: 586,
	iconCls: 'bogus',
	title: '',
	
	items:
	[
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
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:586px;height:25px;',
			items:
			[
				{
					text:'Отбор',
				},
				{
					text:'Действие',
				},
				{
					text:'Выполнить',
				},
				{
					text:'Настройка',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Действие1',
				},
				{
					text:'Печать',
				},
				{
					text:'Печать1',
				},
				{
					text:'СписокНастроек1',
				},
				{
					text:'Отбор',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Выполнить',
				},
				{
					text:'Действие4',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Подменю',
				},
				{
					text:'Настройка',
				},
			]
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:248px;top:33px;width:20px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:57px;width:570px;height:24px;',
			height: 24,width: 570,
			items:
			[
				{
					title:'Страница2',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеНастройки1',
			style: 'position:absolute;left:324px;top:0px;width:246px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеНастройкиС1',
			style: 'position:absolute;left:324px;top:0px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеНастройкиПо1',
			style: 'position:absolute;left:450px;top:0px;width:120px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:81px;width:570px;height:24px;',
			height: 24,width: 570,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеНастройки2',
			style: 'position:absolute;left:324px;top:0px;width:246px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеНастройкиС2',
			style: 'position:absolute;left:324px;top:0px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеНастройкиПо2',
			style: 'position:absolute;left:450px;top:0px;width:120px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:105px;width:570px;height:24px;',
			height: 24,width: 570,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеНастройки3',
			style: 'position:absolute;left:324px;top:0px;width:246px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеНастройкиС3',
			style: 'position:absolute;left:324px;top:0px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеНастройкиПо3',
			style: 'position:absolute;left:450px;top:0px;width:120px;height:19px;',
		},
					]
				},
			]
		},
	]
});