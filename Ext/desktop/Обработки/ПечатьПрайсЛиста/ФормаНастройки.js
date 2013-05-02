Ext.define('Обработки.ПечатьПрайсЛиста.ФормаНастройки',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:624px;height:326px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Настройка прайс-листа',
	
	items:
	[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:8px;width:606px;height:284px;',
			height: 284,width: 606,
			items:
			[
				{
					title:'Общие',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:80px;top:6px;width:377px;height:20px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Организация:',
			style: 'position:absolute;left:6px;top:6px;width:70px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Валюта:',
			style: 'position:absolute;left:249px;top:50px;width:43px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Валюта',
			style: 'position:absolute;left:297px;top:50px;width:80px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Отсутствующие на складах предприятия',
			style: 'position:absolute;left:6px;top:115px;width:224px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'По которым не заданы цены',
			style: 'position:absolute;left:6px;top:92px;width:167px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаДатаНач',
			style: 'position:absolute;left:524px;top:6px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'На дату:',
			style: 'position:absolute;left:471px;top:6px;width:48px;height:19px;text-align:left;',
		},
		{
			xtype: 'radio',
			boxLabel: 'В валютах цен',
			style: 'position:absolute;left:6px;top:50px;width:92px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'В выбранной валюте',
			style: 'position:absolute;left:119px;top:50px;width:124px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Использовать свойства и категории',
			style: 'position:absolute;left:6px;top:180px;width:205px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Цены которых не изменились с:',
			style: 'position:absolute;left:6px;top:138px;width:182px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаЦеныНеИзменились',
			style: 'position:absolute;left:193px;top:138px;width:80px;height:19px;',
		},
					]
				},
				{
					title:'Группировки',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:598px;height:234px;',
			height: 234,width: 598,
			columns:
			[
				{
					text:'Группировки строк',
					width:'196',
					dataIndex:'Поле',
					flex:1,
				},
				{
					text:'Тип',
					width:'87',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПечатьПрайсЛиста/ВыбратьПоСсылке/100'},
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
			style: 'position:absolute;left:6px;top:0px;width:598px;height:24px;',
			items:
			[
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
			style: 'position:absolute;left:6px;top:24px;width:598px;height:234px;',
			height: 234,width: 598,
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПечатьПрайсЛиста/ВыбратьПоСсылке/100'},
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
			style: 'position:absolute;left:6px;top:0px;width:598px;height:24px;',
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
			style: 'position:absolute;left:6px;top:24px;width:592px;height:234px;',
			height: 234,width: 592,
			columns:
			[
				{
					text:'Поле',
					width:'237',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПечатьПрайсЛиста/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Поле',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:592px;height:24px;',
			items:
			[
			]
		},
					]
				},
				{
					title:'Сортировка',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:592px;height:234px;',
			height: 234,width: 592,
			columns:
			[
				{
					text:'Поле',
					width:'393',
					dataIndex:'Имя',
					flex:1,
				},
				{
					text:'Направление сортировки',
					width:'173',
					dataIndex:'НаправлениеСортировки',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПечатьПрайсЛиста/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Имя',
					},
					{
						name:'НаправлениеСортировки',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:592px;height:24px;',
			items:
			[
			]
		},
					]
				},
				{
					title:'Печать',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:592px;height:210px;',
			height: 210,width: 592,
			columns:
			[
				{
					text:'Поле',
					width:'198',
					dataIndex:'Поле',
					flex:1,
				},
				{
					text:'Представление поля',
					width:'111',
					dataIndex:'Псевдоним',
					flex:1,
				},
				{
					text:'Печать',
					width:'41',
					dataIndex:'ВыводитьНаПечать',
					flex:1,
				},
				{
					text:'Положение',
					width:'211',
					dataIndex:'Положение',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПечатьПрайсЛиста/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Поле',
					},
					{
						name:'Псевдоним',
					},
					{
						name:'ВыводитьНаПечать',
					},
					{
						name:'Положение',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:592px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Раскрашивать иерархию групп',
			style: 'position:absolute;left:6px;top:239px;width:175px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Показывать в отчете строку отбора',
			style: 'position:absolute;left:194px;top:239px;width:200px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:300px;width:624px;height:25px;',
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
	]
});