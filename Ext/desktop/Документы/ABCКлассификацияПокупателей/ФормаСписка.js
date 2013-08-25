Ext.require(['Данные.Документы.ABCКлассификацияПокупателей'], function () 
{
	Ext.define('Документы.ABCКлассификацияПокупателей.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:760px;height:421px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'ABC-классификации покупателей',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'ДокументСписок',
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
					width:'79',
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
					width:'160',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ABCКлассификацияПокупателей/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
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
			listeners:
			{
				dblclick:
				{
					element: 'body',
					fn: function ()
					{
						var грид = Ext.getCmp('ДокументСписок');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ABCКлассификацияПокупателей.ФормаСпискаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ABCКлассификацияПокупателей.ФормаСпискаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:760px;height:25px;',
			width: 760,
			height: 25,
			items:
			[
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
		],
	}],
	dockedItems:
	[
	]
	});
});