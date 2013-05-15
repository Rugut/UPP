Ext.define('Документы.ПеречислениеНДФЛвБюджет.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:740px;height:421px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Перечисление НДФЛ в бюджет РФ',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:724px;height:380px;',
			height: 380,width: 724,
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
					text:'Месяц ',
					width:'84',
					dataIndex:'МесяцРасчетногоПериода',
					flex:1,
				},
				{
					text:'Дата операции',
					width:'84',
					dataIndex:'ДатаПлатежа',
					flex:1,
				},
				{
					text:'Сумма',
					width:'80',
					dataIndex:'Сумма',
					flex:1,
				},
				{
					text:'ОКАТО/КПП',
					width:'77',
					dataIndex:'КодПоОКАТО',
					flex:1,
				},
				{
					text:'Ставка',
					width:'60',
					dataIndex:'Ставка',
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
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПеречислениеНДФЛвБюджет/ВыбратьПоСсылке/100'},
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
						name:'МесяцРасчетногоПериода',
					},
					{
						name:'ДатаПлатежа',
					},
					{
						name:'Сумма',
					},
					{
						name:'КодПоОКАТО',
					},
					{
						name:'Ставка',
					},
					{
						name:'Ответственный',
					},
					{
						name:'Комментарий',
					},
				]
			},
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:740px;height:25px;',
			dock: 'top',
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
					]
				},
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
					]
				},
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