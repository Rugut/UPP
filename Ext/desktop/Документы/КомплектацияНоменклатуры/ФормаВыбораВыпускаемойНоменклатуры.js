Ext.require(['Данные.Документы.КомплектацияНоменклатуры'], function () 
{
	Ext.define('Документы.КомплектацияНоменклатуры.ФормаВыбораВыпускаемойНоменклатуры',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:664px;height:174px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Выберите выпускаемую номенклатуру',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:664px;height:25px;',
			width: 664,
			height: 25,
			items:
			[
				{
					text:'Выбрать',
				},
				'-',
				{
					text:'Закрыть',
					handler: function () {this.up('window').close();},
				},
			]
		},
		{
			id: 'ТаблицаНоменклатуры',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:648px;height:133px;',
			height: 133,width: 648,
			columns:
			[
				{
					text:'Номенклатура',
					width:'167',
					dataIndex:'Номенклатура',
					flex:1,
				},
				{
					text:'Характеристика номенклатуры',
					width:'171',
					dataIndex:'ХарактеристикаНоменклатуры',
					flex:1,
				},
				{
					text:'Количество',
					width:'67',
					dataIndex:'Количество',
					flex:1,
				},
				{
					text:'Ед. изм.',
					width:'51',
					dataIndex:'ЕдиницаИзмерения',
					flex:1,
				},
				{
					text:'Спецификация',
					width:'101',
					dataIndex:'Спецификация',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/КомплектацияНоменклатуры/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Номенклатура',
					},
					{
						name:'ХарактеристикаНоменклатуры',
					},
					{
						name:'Количество',
					},
					{
						name:'ЕдиницаИзмерения',
					},
					{
						name:'Спецификация',
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
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.КомплектацияНоменклатуры.ФормаВыбораВыпускаемойНоменклатурыСобытия'], function ()
						{
							var obj = Ext.create("Справочники.КомплектацияНоменклатуры.ФормаВыбораВыпускаемойНоменклатурыСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		],
	}],
	dockedItems:
	[
	]
	});
});