Ext.define('Документы.ЗаказПоставщику.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:780px;height:421px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Заказы поставщикам',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:764px;height:380px;',
			height: 380,width: 764,
			columns:
			[
				{
					text:' ',
					width:'32',
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
					dataIndex:'Номер',
					flex:1,
				},
				{
					text:'Вид операции',
					width:'120',
					dataIndex:'ВидОперации',
					flex:1,
				},
				{
					text:'Сумма',
					width:'80',
					dataIndex:'СуммаДокумента',
					flex:1,
				},
				{
					text:'Валюта',
					width:'60',
					dataIndex:'ВалютаДокумента',
					flex:1,
				},
				{
					text:'Контрагент',
					width:'120',
					dataIndex:'Контрагент',
					flex:1,
				},
				{
					text:'Дата оплаты',
					width:'84',
					dataIndex:'ДатаОплаты',
					flex:1,
				},
				{
					text:'Дата поступл',
					width:'84',
					dataIndex:'ДатаПоступления',
					flex:1,
				},
				{
					text:'Склад',
					width:'120',
					dataIndex:'Склад',
					flex:1,
				},
				{
					text:'Подразделение',
					width:'146',
					dataIndex:'Подразделение',
					flex:1,
				},
				{
					text:'Организация',
					width:'120',
					dataIndex:'Организация',
					flex:1,
				},
				{
					text:'Ответственный',
					width:'120',
					dataIndex:'Ответственный',
					flex:1,
				},
				{
					text:'Комментарий',
					width:'120',
					dataIndex:'Комментарий',
					flex:1,
				},
				{
					text:'Состояние ЭД',
					width:'100',
					dataIndex:'СостояниеЭД',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ЗаказПоставщику/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Картинка',
					},
					{
						name:'Дата',
					},
					{
						name:'Номер',
					},
					{
						name:'ВидОперации',
					},
					{
						name:'СуммаДокумента',
					},
					{
						name:'ВалютаДокумента',
					},
					{
						name:'Контрагент',
					},
					{
						name:'ДатаОплаты',
					},
					{
						name:'ДатаПоступления',
					},
					{
						name:'Склад',
					},
					{
						name:'Подразделение',
					},
					{
						name:'Организация',
					},
					{
						name:'Ответственный',
					},
					{
						name:'Комментарий',
					},
					{
						name:'СостояниеЭД',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:780px;height:25px;',
			items:
			[
				{
					text:'Сформировать, подписать и отправить',
				},
				{
					text:'Сформировать новый электронный документ',
				},
				'-',
				{
					text:'Открыть актуальный электронный документ',
				},
				{
					text:'Перезаполнить данными из электронного документа',
				},
				'-',
				{
					text:'Список электронных документов',
				},
			]
		},
	],
	dockedItems:
	[
	]
});