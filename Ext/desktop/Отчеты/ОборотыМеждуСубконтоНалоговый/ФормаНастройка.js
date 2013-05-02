Ext.define('Отчеты.ОборотыМеждуСубконтоНалоговый.ФормаНастройка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:400px;height:292px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Настройка Обороты между субконто',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:267px;width:400px;height:25px;',
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
				'-',
				{
					text:'Справка',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:8px;width:384px;height:251px;',
			height: 251,width: 384,
			items:
			[
				{
					title:'Общее',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Период с:',
			style: 'position:absolute;left:6px;top:6px;width:78px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНач',
			style: 'position:absolute;left:88px;top:6px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'по:',
			style: 'position:absolute;left:212px;top:6px;width:16px;height:19px;text-align:right;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаКон',
			style: 'position:absolute;left:232px;top:6px;width:120px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаВыбораПериода',
			text: '...',
			style: 'position:absolute;left:355px;top:6px;width:21px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:6px;top:32px;width:78px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:88px;top:32px;width:288px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:140px;width:182px;height:85px;',
			height: 85,width: 182,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Вид субконто',
					width:'100',
					dataIndex:'ВидСубконто',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ОборотыМеждуСубконтоНалоговый/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'ВидСубконто',
					},
				]
			},
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:194px;top:140px;width:182px;height:85px;',
			height: 85,width: 182,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Вид субконто',
					width:'100',
					dataIndex:'ВидСубконто',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ОборотыМеждуСубконтоНалоговый/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'ВидСубконто',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:116px;width:182px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:194px;top:116px;width:182px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидУчета',
			style: 'position:absolute;left:88px;top:56px;width:80px;height:19px;',
		},
					]
				},
				{
					title:'Детализация',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:48px;width:222px;height:177px;',
			height: 177,width: 222,
			columns:
			[
				{
					text:'Поле',
					width:'118',
					dataIndex:'Поле',
					flex:1,
				},
				{
					text:'Тип',
					width:'79',
					dataIndex:'Тип',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ОборотыМеждуСубконтоНалоговый/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Поле',
					},
					{
						name:'Тип',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:24px;width:222px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:260px;top:48px;width:116px;height:177px;',
			height: 177,width: 116,
			columns:
			[
				{
					text:'Поле',
					width:'100',
					dataIndex:'Поле',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ОборотыМеждуСубконтоНалоговый/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Поле',
					},
				]
			},
		},
		{
			xtype: 'button',
			name: 'Добавить',
			text: '',
			style: 'position:absolute;left:232px;top:72px;width:24px;height:24px;',
		},
		{
			xtype: 'button',
			name: 'Удалить',
			text: '',
			style: 'position:absolute;left:232px;top:100px;width:24px;height:24px;',
		},
					]
				},
				{
					title:'Отбор',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:31px;width:370px;height:194px;',
			height: 194,width: 370,
			columns:
			[
				{
					text:'',
					width:'20',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ОборотыМеждуСубконтоНалоговый/ВыбратьПоСсылке/100'},
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
			style: 'position:absolute;left:6px;top:6px;width:370px;height:24px;',
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