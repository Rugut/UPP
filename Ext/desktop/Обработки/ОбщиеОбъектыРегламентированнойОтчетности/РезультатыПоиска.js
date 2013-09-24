Ext.require(['Данные.Обработки.ОбщиеОбъектыРегламентированнойОтчетности'], function () 
{
	Ext.define('Обработки.ОбщиеОбъектыРегламентированнойОтчетности.РезультатыПоиска',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:728px;height:235px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Результаты поиска',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:728px;height:25px;',
			width: 728,
			height: 25,
			items:
			[
				{
					text:'Назад',
					tooltip:'c904ff7-1195-4a7c-9a38-7b1f6ca49cc',
					iconCls:'x-Back',
				},
				{
					text:'Вперед',
					tooltip:'Вперед',
				},
				'-',
			]
		},
		{
			id: 'РезультатыПоиска',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:25px;width:728px;height:210px;',
			height: 210,width: 728,
			columns:
			[
				{
					text:'Наименование раздела',
					width:'254',
					dataIndex:'НаименованиеЛиста',
					flex:1,
				},
				{
					text:'№ листа',
					width:'87',
					dataIndex:'Страница',
					flex:1,
				},
				{
					text:'Найдено в строке',
					width:'374',
					dataIndex:'НайденоВСтроке',
					flex:1,
				},
				{
					text:'Ячейка',
					width:'185',
					dataIndex:'ИмяЯчейки',
					flex:1,
				},
				{
					text:'Раздел',
					width:'63',
					dataIndex:'Раздел',
					flex:1,
				},
				{
					text:'СтрокаПП',
					width:'58',
					dataIndex:'СтрокаПП',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ОбщиеОбъектыРегламентированнойОтчетности/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НаименованиеЛиста',
					},
					{
						name:'Страница',
					},
					{
						name:'НайденоВСтроке',
					},
					{
						name:'ИмяЯчейки',
					},
					{
						name:'Раздел',
					},
					{
						name:'СтрокаПП',
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
						var грид = Ext.getCmp('РезультатыПоиска');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ОбщиеОбъектыРегламентированнойОтчетности.РезультатыПоискаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ОбщиеОбъектыРегламентированнойОтчетности.РезультатыПоискаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			name: 'НадписьНайдено',
			text: 'НадписьНайдено',
			style: 'position:absolute;left:100px;top:5px;width:622px;height:15px;text-align:right;',
		},
		],
	}],
	dockedItems:
	[
	]
	});
});