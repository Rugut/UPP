Ext.define('Отчеты.КонтролируемыеЗначенияПоБюджетам.ФормаНастройка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:488px;height:377px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
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
			xtype: 'label',
			name: 'НадписьСценарий',
			text: 'Сценарий:',
			style: 'position:absolute;left:6px;top:30px;width:56px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Раскрашивать измерения',
			style: 'position:absolute;left:6px;top:126px;width:154px;height:15px;',
		},
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
					text:'№',
					width:'28',
				},
				{
					text:'',
					width:'20',
				},
				{
					text:'Показатель',
					width:'281',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:162px;width:264px;height:25px;',
			items:
			[
				{
					text:'Установить все',
				},
				{
					text:'&Переместить вниз',
				},
				{
					text:'&Переместить вверх',
				},
				{
					text:'Снять все',
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
		{
			xtype: 'checkbox',
			boxLabel: 'Выводить в разных колонках',
			style: 'position:absolute;left:290px;top:167px;width:176px;height:15px;',
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
					text:'Группировки строк',
					width:'120',
				},
				{
					text:'Тип',
					width:'80',
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
					text:'Группировки колонок',
					width:'120',
				},
				{
					text:'Тип',
					width:'80',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:224px;top:117px;width:24px;height:109px;',
			items:
			[
				{
					text:' >',
				},
				{
					text:' <',
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
			style: 'position:absolute;left:6px;top:24px;width:460px;height:281px;',
			height: 281,width: 460,
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
			xtype: 'checkbox',
			boxLabel: 'Выводить дополнительные поля в отдельной колонке',
			style: 'position:absolute;left:6px;top:6px;width:300px;height:15px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:53px;width:460px;height:254px;',
			height: 254,width: 460,
			columns:
			[
				{
					text:'Поле',
					width:'120',
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
		{
			xtype: 'label',
			name: 'Надпись37',
			text: 'На дату:',
			style: 'position:absolute;left:6px;top:6px;width:56px;height:19px;',
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
				'-',
				{
					text:'Справка',
				},
				{
					text:'ОК',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
	]
});