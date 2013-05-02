Ext.define('Документы.ДенежныйЧек.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:760px;height:421px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Денежные чеки',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:744px;height:380px;',
			height: 380,width: 744,
			columns:
			[
				{
					text:'',
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
					text:'Организация',
					width:'120',
					dataIndex:'Организация',
					flex:1,
				},
				{
					text:'Счет организации',
					width:'120',
					dataIndex:'СчетОрганизации',
					flex:1,
				},
				{
					text:'Касса',
					width:'120',
					dataIndex:'Касса',
					flex:1,
				},
				{
					text:'Валюта ',
					width:'60',
					dataIndex:'ВалютаДокумента',
					flex:1,
				},
				{
					text:'Сумма',
					width:'80',
					dataIndex:'СуммаДокумента',
					flex:1,
				},
				{
					text:'Комментарий',
					width:'100',
					dataIndex:'Комментарий',
					flex:1,
				},
				{
					text:'Оплачено',
					width:'60',
					dataIndex:'Оплачено',
					flex:1,
				},
				{
					text:'Дата оплаты',
					width:'80',
					dataIndex:'ДатаОплаты',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ДенежныйЧек/ВыбратьПоСсылке/100'},
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
						name:'Организация',
					},
					{
						name:'СчетОрганизации',
					},
					{
						name:'Касса',
					},
					{
						name:'ВалютаДокумента',
					},
					{
						name:'СуммаДокумента',
					},
					{
						name:'Комментарий',
					},
					{
						name:'Оплачено',
					},
					{
						name:'ДатаОплаты',
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
					text:'Выбрать',
				},
				'-',
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'',
				},
				'-',
					]
				},
			]
		},
	]
});