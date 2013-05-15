Ext.define('Обработки.ФормированиеЗаказовНаОбслуживаниеОС.ФормаСформированныхЗаказов',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:643px;height:323px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Сформированные заказы на обслуживание ОС',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:627px;height:281px;',
			height: 281,width: 627,
			columns:
			[
				{
					text:'',
					width:'21',
					dataIndex:'СостояиеДокумента',
					flex:1,
				},
				{
					text:'Дата',
					width:'84',
					dataIndex:'Дата',
					flex:1,
				},
				{
					text:'Номер',
					width:'106',
					dataIndex:'Номер',
					flex:1,
				},
				{
					text:'Услуга',
					width:'106',
					dataIndex:'Услуга',
					flex:1,
				},
				{
					text:'Вид обслуживания',
					width:'102',
					dataIndex:'ВидОбслуживания',
					flex:1,
				},
				{
					text:'Дата обслуживания',
					width:'110',
					dataIndex:'ДатаОбслуживания',
					flex:1,
				},
				{
					text:'Причина',
					width:'181',
					dataIndex:'Причина',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ФормированиеЗаказовНаОбслуживаниеОС/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'СостояиеДокумента',
					},
					{
						name:'Дата',
					},
					{
						name:'Номер',
					},
					{
						name:'Услуга',
					},
					{
						name:'ВидОбслуживания',
					},
					{
						name:'ДатаОбслуживания',
					},
					{
						name:'Причина',
					},
				]
			},
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:643px;height:25px;',
			dock: 'top',
			items:
			[
				'-',
				{
					text:'Обновить',
				},
			]
		},
	]
});