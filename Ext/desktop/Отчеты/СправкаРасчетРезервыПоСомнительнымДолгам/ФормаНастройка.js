Ext.define('Отчеты.СправкаРасчетРезервыПоСомнительнымДолгам.ФормаНастройка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:413px;height:210px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Настройка',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:185px;width:413px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
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
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:8px;width:399px;height:172px;',
			height: 172,width: 399,
			items:
			[
				{
					title:'Общие',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:6px;top:32px;width:76px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:84px;top:30px;width:306px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПериод',
			text: 'Период',
			style: 'position:absolute;left:6px;top:6px;width:57px;height:19px;text-align:left;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Бухгалтерского учета',
			style: 'position:absolute;left:6px;top:78px;width:384px;height:15px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Налогового учета',
			style: 'position:absolute;left:6px;top:97px;width:384px;height:16px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Бухгалтерского учета с постоянными разницами',
			style: 'position:absolute;left:6px;top:117px;width:384px;height:16px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПредставлениеПериодаРегистрации',
			style: 'position:absolute;left:84px;top:6px;width:126px;height:19px;',
		},
					]
				},
				{
					title:'Отбор',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:32px;width:385px;height:109px;',
			height: 109,width: 385,
			columns:
			[
				{
					text:'',
					width:'22',
					dataIndex:'Использование',
					flex:1,
				},
				{
					text:'Поле',
					width:'100',
					dataIndex:'Имя',
					flex:1,
				},
				{
					text:'Тип сравнения',
					width:'60',
					dataIndex:'ВидСравнения',
					flex:1,
				},
				{
					text:'Значение',
					width:'100',
					dataIndex:'Значение',
					flex:1,
				},
				{
					text:'С',
					width:'100',
					dataIndex:'ЗначениеС',
					flex:1,
				},
				{
					text:'По',
					width:'100',
					dataIndex:'ЗначениеПо',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/СправкаРасчетРезервыПоСомнительнымДолгам/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Использование',
					},
					{
						name:'Имя',
					},
					{
						name:'ВидСравнения',
					},
					{
						name:'Значение',
					},
					{
						name:'ЗначениеС',
					},
					{
						name:'ЗначениеПо',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:385px;height:24px;',
			items:
			[
			]
		},
					]
				},
			]
		},
	]
});