Ext.define('Документы.ПереоценкаТоваровПринятыхНаКомиссию.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:552px;height:421px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Переоценки товаров принятых на комиссию',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:536px;height:380px;',
			height: 380,width: 536,
			columns:
			[
				{
					text:'',
					width:'32',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'УУ',
					width:'20',
					dataIndex:'ОтражатьВУправленческомУчете',
					flex:1,
				},
				{
					text:'БУ',
					width:'20',
					dataIndex:'ОтражатьВБухгалтерскомУчете',
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
					width:'120',
					dataIndex:'Контрагент',
					flex:1,
				},
				{
					text:'Договор контрагента',
					width:'120',
					dataIndex:'ДоговорКонтрагента',
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
					width:'100',
					dataIndex:'Комментарий',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПереоценкаТоваровПринятыхНаКомиссию/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Картинка',
					},
					{
						name:'ОтражатьВУправленческомУчете',
					},
					{
						name:'ОтражатьВБухгалтерскомУчете',
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
						name:'ДоговорКонтрагента',
					},
					{
						name:'Организация',
					},
					{
						name:'Комментарий',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:552px;height:25px;',
			items:
			[
				{
					text:'Выбрать',
				},
				'-',
				{
					xtype: 'splitbutton',
					text:'Перейти',
					menu: [
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'Структура подчиненности документа',
				},
				'-',
					]
				},
				{
					text:'Дт/кт',
				},
			]
		},
	]
});