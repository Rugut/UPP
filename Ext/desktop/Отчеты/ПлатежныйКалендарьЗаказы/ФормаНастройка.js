Ext.define('Отчеты.ПлатежныйКалендарьЗаказы.ФормаНастройка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:354px;height:412px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: '',
	
	items:
	[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:8px;width:338px;height:371px;',
			height: 371,width: 338,
			items:
			[
				{
					title:'Общие',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись36',
			text: 'Период с:',
			style: 'position:absolute;left:6px;top:6px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНач',
			style: 'position:absolute;left:96px;top:6px;width:96px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись37',
			text: 'по:',
			style: 'position:absolute;left:194px;top:6px;width:16px;height:19px;',
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
			xtype: 'label',
			name: 'Надпись1',
			text: 'Детализация по периодам:',
			style: 'position:absolute;left:6px;top:30px;width:186px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:122px;width:324px;height:83px;',
			height: 83,width: 324,
			columns:
			[
				{
					text:'N',
					width:'28',
				},
				{
					text:'',
					width:'21',
				},
				{
					text:'Группировка',
					width:'273',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:98px;width:324px;height:24px;',
			items:
			[
				{
					text:'&Переместить вверх',
				},
				{
					text:'Снять все',
				},
				{
					text:'Установить все',
				},
				{
					text:'&Переместить вниз',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:254px;width:324px;height:91px;',
			height: 91,width: 324,
			columns:
			[
				{
					text:'N',
					width:'28',
				},
				{
					text:'',
					width:'21',
				},
				{
					text:'Группировка',
					width:'275',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:230px;width:324px;height:24px;',
			items:
			[
				{
					text:'Снять все',
				},
				{
					text:'&Переместить вниз',
				},
				{
					text:'&Переместить вверх',
				},
				{
					text:'Установить все',
				},
			]
		},
					]
				},
				{
					title:'Отбор',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:324px;height:313px;',
			height: 313,width: 324,
			columns:
			[
				{
					text:'',
					width:'20',
				},
				{
					text:'Поле',
					width:'120',
				},
				{
					text:'Тип сравнения',
					width:'80',
				},
				{
					text:'Значение',
					width:'240',
				},
				{
					text:'С',
					width:'120',
				},
				{
					text:'По',
					width:'120',
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
			style: 'position:absolute;left:0px;top:387px;width:354px;height:25px;',
			items:
			[
				{
					text:'ОК',
				},
				'-',
				'-',
				{
					text:'Справка',
				},
				{
					text:'Закрыть',
				},
			]
		},
	]
});