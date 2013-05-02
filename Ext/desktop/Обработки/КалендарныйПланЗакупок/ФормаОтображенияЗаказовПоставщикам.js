Ext.define('Обработки.КалендарныйПланЗакупок.ФормаОтображенияЗаказовПоставщикам',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:748px;height:421px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Заказы поставщикам',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:748px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:732px;height:380px;',
			height: 380,width: 732,
			columns:
			[
				{
					text:'',
					width:'20',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Дата',
					width:'132',
					dataIndex:'Дата',
					flex:1,
				},
				{
					text:'Номер',
					width:'80',
					dataIndex:'НомерЗаказа',
					flex:1,
				},
				{
					text:'Поступление',
					width:'120',
					dataIndex:'ДатаПоступления',
					flex:1,
				},
				{
					text:'Оплата',
					width:'120',
					dataIndex:'ДатаОплаты',
					flex:1,
				},
				{
					text:'Контрагент',
					width:'120',
					dataIndex:'Контрагент',
					flex:1,
				},
				{
					text:'Сумма',
					width:'80',
					dataIndex:'Сумма',
					flex:1,
				},
				{
					text:'Валюта',
					width:'60',
					dataIndex:'Валюта',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/КалендарныйПланЗакупок/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Картинка',
					},
					{
						name:'Дата',
					},
					{
						name:'НомерЗаказа',
					},
					{
						name:'ДатаПоступления',
					},
					{
						name:'ДатаОплаты',
					},
					{
						name:'Контрагент',
					},
					{
						name:'Сумма',
					},
					{
						name:'Валюта',
					},
				]
			},
		},
	]
});