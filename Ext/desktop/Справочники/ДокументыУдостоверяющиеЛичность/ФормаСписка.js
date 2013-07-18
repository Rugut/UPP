Ext.require(['Данные.Справочники.ДокументыУдостоверяющиеЛичность'], function () 
{
	Ext.define('Справочники.ДокументыУдостоверяющиеЛичность.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:470px;height:361px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Документы, удостоверяющие личность',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'СправочникСписок',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:454px;height:320px;',
			height: 320,width: 454,
			columns:
			[
				{
					text:'',
					width:'32',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Наименование',
					width:'220',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Код ИФНС',
					width:'60',
					dataIndex:'КодИМНС',
					flex:1,
				},
				{
					text:'Код ПФР',
					width:'120',
					dataIndex:'КодПФР',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Данные.Справочники.ДокументыУдостоверяющиеЛичность").data,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ДокументыУдостоверяющиеЛичность/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
					{
						name:'Картинка',
					},
					{
						name:'Наименование',
					},
					{
						name:'КодИМНС',
					},
					{
						name:'КодПФР',
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
						Ext.require(['Справочники.ДокументыУдостоверяющиеЛичность.ФормаСпискаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ДокументыУдостоверяющиеЛичность.ФормаСпискаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:470px;height:25px;',
			items:
			[
			]
		},
		],
	}],
	dockedItems:
	[
	]
	});
});