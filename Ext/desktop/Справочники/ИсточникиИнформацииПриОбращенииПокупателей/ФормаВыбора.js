Ext.require(['Данные.Справочники.ИсточникиИнформацииПриОбращенииПокупателей'], function () 
{
	Ext.define('Справочники.ИсточникиИнформацииПриОбращенииПокупателей.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:488px;height:321px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Источники информации при обращении покупателей',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'СправочникСписок',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:472px;height:280px;',
			height: 280,width: 472,
			columns:
			[
				{
					text:'',
					width:'32',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Код',
					width:'40',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Наименование',
					width:'220',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Период актуальности информации после события',
					width:'120',
					dataIndex:'ПериодАктуальностиИнформацииПослеСобытия',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Данные.Справочники.ИсточникиИнформацииПриОбращенииПокупателей").data,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ИсточникиИнформацииПриОбращенииПокупателей/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
					{
						name:'Картинка',
					},
					{
						name:'Код',
					},
					{
						name:'Наименование',
					},
					{
						name:'ПериодАктуальностиИнформацииПослеСобытия',
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
						var грид = Ext.getCmp('СправочникСписок');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.ИсточникиИнформацииПриОбращенииПокупателей.ФормаВыбораСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ИсточникиИнформацииПриОбращенииПокупателей.ФормаВыбораСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:488px;height:25px;',
			dock: 'top',
			items:
			[
				{
					text:'Выбрать',
				},
				'-',
			]
		},
	]
	});
});