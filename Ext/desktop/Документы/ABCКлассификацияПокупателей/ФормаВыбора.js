Ext.define('Документы.ABCКлассификацияПокупателей.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:600px;height:421px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'ABC-классификации покупателей',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:584px;height:380px;',
			height: 380,width: 584,
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
					text:'Начало',
					width:'80',
					dataIndex:'ДатаНачала',
					flex:1,
				},
				{
					text:'Окончание',
					width:'80',
					dataIndex:'ДатаОкончания',
					flex:1,
				},
				{
					text:'% А класса',
					width:'60',
					dataIndex:'ПроцентAКласса',
					flex:1,
				},
				{
					text:'% B класса',
					width:'60',
					dataIndex:'ПроцентBКласса',
					flex:1,
				},
				{
					text:'% С класса',
					width:'60',
					dataIndex:'ПроцентCКласса',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ABCКлассификацияПокупателей/ВыбратьПоСсылке/100'},
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
						name:'ДатаНачала',
					},
					{
						name:'ДатаОкончания',
					},
					{
						name:'ПроцентAКласса',
					},
					{
						name:'ПроцентBКласса',
					},
					{
						name:'ПроцентCКласса',
					},
					{
						name:'Комментарий',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:600px;height:25px;',
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