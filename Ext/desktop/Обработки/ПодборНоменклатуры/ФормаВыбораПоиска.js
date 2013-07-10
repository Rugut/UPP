Ext.define('Обработки.ПодборНоменклатуры.ФормаВыбораПоиска',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:676px;height:321px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Выбор номенклатуры',
	
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'ТаблицаНоменклатуры',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:8px;width:660px;height:280px;',
			height: 280,width: 660,
			columns:
			[
				{
					text:'Код',
					width:'80',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Артикул',
					width:'1200',
					dataIndex:'Артикул',
					flex:1,
				},
				{
					text:'Номенклатура',
					width:'1200',
					dataIndex:'Номенклатура',
					flex:1,
				},
				{
					text:'Полное наименование',
					width:'2200',
					dataIndex:'НаименованиеПолное',
					flex:1,
				},
				{
					text:'Группа номенклатуры',
					width:'1200',
					dataIndex:'Родитель',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПодборНоменклатуры/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
					{
						name:'Код',
					},
					{
						name:'Артикул',
					},
					{
						name:'Номенклатура',
					},
					{
						name:'НаименованиеПолное',
					},
					{
						name:'Родитель',
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
						var грид = Ext.getCmp('ТаблицаНоменклатуры');
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
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:296px;width:676px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
	]
});