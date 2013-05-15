Ext.define('Документы.СчетФактураПолученный.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:760px;height:420px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Счета-фактуры полученные',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:32px;width:744px;height:380px;',
			height: 380,width: 744,
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
					text:'Контрагент',
					width:'112',
					dataIndex:'Контрагент',
					flex:1,
				},
				{
					text:'Вид счета-фактуры',
					width:'120',
					dataIndex:'ВидСчетаФактуры',
					flex:1,
				},
				{
					text:'Сумма',
					width:'84',
					dataIndex:'Сумма',
					flex:1,
				},
				{
					text:'Валюта',
					width:'56',
					dataIndex:'ВалютаДокумента',
					flex:1,
				},
				{
					text:'Документ-основание',
					width:'120',
					dataIndex:'ДокументОснование',
					flex:1,
				},
				{
					text:'Номер вход. документа',
					width:'120',
					dataIndex:'НомерВходящегоДокумента',
					flex:1,
				},
				{
					text:'Дата вход. документа',
					width:'105',
					dataIndex:'ДатаВходящегоДокумента',
					flex:1,
				},
				{
					text:'Исправление',
					width:'80',
					dataIndex:'Исправление',
					flex:1,
				},
				{
					text:'Организация',
					width:'120',
					dataIndex:'Организация',
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
					width:'124',
					dataIndex:'СостояниеЭД',
					flex:1,
				},
				{
					text:'с нашей стороны',
					width:'124',
					dataIndex:'ДействияСНашейСтороны',
					flex:1,
				},
				{
					text:'со стороны другого участника',
					width:'124',
					dataIndex:'ДействияСоСтороныДругогоУчастника',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/СчетФактураПолученный/ВыбратьПоСсылке/100'},
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
						name:'Контрагент',
					},
					{
						name:'ВидСчетаФактуры',
					},
					{
						name:'Сумма',
					},
					{
						name:'ВалютаДокумента',
					},
					{
						name:'ДокументОснование',
					},
					{
						name:'НомерВходящегоДокумента',
					},
					{
						name:'ДатаВходящегоДокумента',
					},
					{
						name:'Исправление',
					},
					{
						name:'Организация',
					},
					{
						name:'Комментарий',
					},
					{
						name:'СостояниеЭД',
					},
					{
						name:'ДействияСНашейСтороны',
					},
					{
						name:'ДействияСоСтороныДругогоУчастника',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:760px;height:25px;',
			items:
			[
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