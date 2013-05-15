Ext.define('Обработки.ФормированиеДокументовПоДаннымОрдеров.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:532px;height:292px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Формирование документов по ордерам',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'по:',
			style: 'position:absolute;left:158px;top:32px;width:18px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			name: 'ДатаОкончанияПериода',
			style: 'position:absolute;left:176px;top:32px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНастройка',
			text: 'Настройка:',
			style: 'position:absolute;left:8px;top:8px;width:68px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьГраницаНачала',
			text: 'За период с: ',
			style: 'position:absolute;left:8px;top:32px;width:68px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			name: 'ДатаНачалаПериода',
			style: 'position:absolute;left:76px;top:32px;width:80px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:59px;width:516px;height:200px;',
			height: 200,width: 516,
			items:
			[
				{
					title:'Сформированные документы',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:502px;height:144px;',
			height: 144,width: 502,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'',
					width:'21',
					dataIndex:'Флаг',
					flex:1,
				},
				{
					text:'',
					width:'32',
					dataIndex:'Статус',
					flex:1,
				},
				{
					text:'Дата',
					width:'120',
					dataIndex:'Дата',
					flex:1,
				},
				{
					text:'Номер',
					width:'80',
					dataIndex:'Номер',
					flex:1,
				},
				{
					text:'Документ',
					width:'120',
					dataIndex:'Документ',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ФормированиеДокументовПоДаннымОрдеров/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'Флаг',
					},
					{
						name:'Статус',
					},
					{
						name:'Дата',
					},
					{
						name:'Номер',
					},
					{
						name:'Документ',
					},
				]
			},
		},
					]
				},
				{
					title:'Учтенные документы',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:502px;height:144px;',
			height: 144,width: 502,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'',
					width:'21',
					dataIndex:'Флаг',
					flex:1,
				},
				{
					text:'',
					width:'32',
					dataIndex:'Статус',
					flex:1,
				},
				{
					text:'Дата',
					width:'120',
					dataIndex:'Дата',
					flex:1,
				},
				{
					text:'Номер',
					width:'80',
					dataIndex:'Номер',
					flex:1,
				},
				{
					text:'Документ',
					width:'120',
					dataIndex:'Документ',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ФормированиеДокументовПоДаннымОрдеров/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'Флаг',
					},
					{
						name:'Статус',
					},
					{
						name:'Дата',
					},
					{
						name:'Номер',
					},
					{
						name:'Документ',
					},
				]
			},
		},
					]
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Настройка',
			style: 'position:absolute;left:76px;top:8px;width:448px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаВыбораПериода',
			text: '...',
			style: 'position:absolute;left:258px;top:32px;width:19px;height:19px;',
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:267px;width:532px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Сформировать документы',
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