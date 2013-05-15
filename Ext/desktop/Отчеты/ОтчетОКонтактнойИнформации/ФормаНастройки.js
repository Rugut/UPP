Ext.define('Отчеты.ОтчетОКонтактнойИнформации.ФормаНастройки',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:490px;height:397px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Настройка ""Отчет о контактной информации""',
	
	items:
	[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:8px;width:474px;height:356px;',
			height: 356,width: 474,
			items:
			[
				{
					title:'Общие',
					items:
					[
		{
			xtype: 'combobox',
			style: 'position:absolute;left:88px;top:6px;width:378px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Использовать свойства и категории',
			style: 'position:absolute;left:6px;top:30px;width:210px;height:15px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:113px;width:460px;height:160px;',
			height: 160,width: 460,
			columns:
			[
				{
					text:'',
					width:'20',
					dataIndex:'Использование',
					flex:1,
				},
				{
					text:'Тип',
					width:'120',
					dataIndex:'Тип',
					flex:1,
				},
				{
					text:'Вид',
					width:'220',
					dataIndex:'ВидКонтактнойИнформации',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ОтчетОКонтактнойИнформации/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Использование',
					},
					{
						name:'Тип',
					},
					{
						name:'ВидКонтактнойИнформации',
					},
				]
			},
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:346px;top:92px;width:120px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:89px;width:250px;height:24px;',
			items:
			[
				{
					text:'',
				},
				{
					text:'',
				},
				'-',
				{
					text:'',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Конструктор настроек...',
				},
				{
					text:'',
				},
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Выводить персональные значения видов контактной информации для объектов, содержащие строку:',
			style: 'position:absolute;left:7px;top:278px;width:436px;height:28px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'СтрокаПерсональныхВидовКИ',
			style: 'position:absolute;left:7px;top:311px;width:459px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Виды контактной информации',
			style: 'position:absolute;left:6px;top:73px;width:460px;height:16px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Раскрашивать группировки',
			style: 'position:absolute;left:6px;top:50px;width:164px;height:15px;',
		},
					]
				},
				{
					title:'Группировки',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:460px;height:306px;',
			height: 306,width: 460,
			columns:
			[
				{
					text:'Поле',
					width:'305',
					dataIndex:'Поле',
					flex:1,
				},
				{
					text:'Тип',
					width:'122',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ОтчетОКонтактнойИнформации/ВыбратьПоСсылке/100'},
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
					]
				},
				{
					title:'Отбор',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:460px;height:306px;',
			height: 306,width: 460,
			columns:
			[
				{
					text:'',
					width:'18',
					dataIndex:'Использование',
					flex:1,
				},
				{
					text:'Поле',
					width:'125',
					dataIndex:'Имя',
					flex:1,
				},
				{
					text:'Тип сравнения',
					width:'82',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ОтчетОКонтактнойИнформации/ВыбратьПоСсылке/100'},
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
			xtype: 'label',
			name: 'Надпись1',
			text: 'Объект отчета:',
			style: 'position:absolute;left:6px;top:6px;width:80px;height:19px;',
		},
					]
				},
				{
					title:'Сортировка',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:460px;height:306px;',
			height: 306,width: 460,
			columns:
			[
				{
					text:'Поле',
					width:'331',
					dataIndex:'Имя',
					flex:1,
				},
				{
					text:'Направление',
					width:'94',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ОтчетОКонтактнойИнформации/ВыбратьПоСсылке/100'},
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
					]
				},
			]
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:372px;width:490px;height:25px;',
			dock: 'bottom',
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
	]
});