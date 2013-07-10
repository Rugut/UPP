Ext.define('Справочники.ИсточникиДанныхДляРасчетовБюджетирования.ФормаВыбораТаблицыИсточника',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:236px;height:361px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Таблицы источника',
	
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'Дерево',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:8px;width:220px;height:320px;',
			height: 320,width: 220,
			columns:
			[
				{
					text:'Описание поля',
					width:'2200',
					dataIndex:'ОписаниеПоля',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Данные.Справочники.ИсточникиДанныхДляРасчетовБюджетирования").data,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ИсточникиДанныхДляРасчетовБюджетирования/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
					{
						name:'ОписаниеПоля',
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
						var грид = Ext.getCmp('Дерево');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.Банки.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.Банки.ФормаЭлементаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:336px;width:236px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'ОК',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		],
	}],
	dockedItems:
	[
	]
});