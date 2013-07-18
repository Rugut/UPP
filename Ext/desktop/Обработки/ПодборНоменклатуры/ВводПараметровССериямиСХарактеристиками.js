Ext.require(['Данные.Обработки.ПодборНоменклатуры'], function () 
{
	Ext.define('Обработки.ПодборНоменклатуры.ВводПараметровССериямиСХарактеристиками',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:394px;height:255px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Ввод количества и цены',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:394px;height:25px;',
			items:
			[
				'-',
			]
		},
		{
			xtype: 'label',
			name: 'НадписьВалютаСуммы',
			text: 'Надпись',
			style: 'position:absolute;left:167px;top:179px;width:79px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСумма',
			text: 'Сумма:',
			style: 'position:absolute;left:8px;top:179px;width:68px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьФомулаСумма',
			text: 'Надпись',
			style: 'position:absolute;left:78px;top:179px;width:82px;height:19px;text-align:right;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:230px;width:394px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Получить вес',
				},
				'-',
				{
					text:'ОК',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьВесы',
			text: 'Весы:',
			style: 'position:absolute;left:8px;top:203px;width:68px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:78px;top:203px;width:308px;height:19px;',
		},
		{
			id: 'ТаблицаХарактеристикНоменклатуры',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:378px;height:139px;',
			height: 139,width: 378,
			columns:
			[
				{
					text:'Характеристика номенклатуры',
					width:'120',
					dataIndex:'Характеристика',
					flex:1,
				},
				{
					text:'Серия номенклатуры',
					width:'120',
					dataIndex:'Серия',
					flex:1,
				},
				{
					text:'Количество',
					width:'64',
					dataIndex:'Количество',
					flex:1,
				},
				{
					text:'Единица измерения',
					width:'54',
					dataIndex:'ЕдиницаИзмерения',
					flex:1,
				},
				{
					text:'Цена',
					width:'80',
					dataIndex:'Цена',
					flex:1,
				},
				{
					text:'Валюта цены',
					width:'60',
					dataIndex:'ВалютаЦены',
					flex:1,
				},
				{
					text:'Свободный остаток',
					width:'100',
					dataIndex:'КоличествоСвободныйОстаток',
					flex:1,
				},
				{
					text:'Остаток организации',
					width:'100',
					dataIndex:'КоличествоОстатокОрганизации',
					flex:1,
				},
				{
					text:'Качество',
					width:'100',
					dataIndex:'Качество',
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
						name:'Характеристика',
					},
					{
						name:'Серия',
					},
					{
						name:'Количество',
					},
					{
						name:'ЕдиницаИзмерения',
					},
					{
						name:'Цена',
					},
					{
						name:'ВалютаЦены',
					},
					{
						name:'КоличествоСвободныйОстаток',
					},
					{
						name:'КоличествоОстатокОрганизации',
					},
					{
						name:'Качество',
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
						var грид = Ext.getCmp('ТаблицаХарактеристикНоменклатуры');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.ПодборНоменклатуры.ВводПараметровССериямиСХарактеристикамиСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ПодборНоменклатуры.ВводПараметровССериямиСХарактеристикамиСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Показывать остатки',
			style: 'position:absolute;left:260px;top:183px;width:123px;height:15px;',
		},
		],
	}],
	dockedItems:
	[
	]
	});
});