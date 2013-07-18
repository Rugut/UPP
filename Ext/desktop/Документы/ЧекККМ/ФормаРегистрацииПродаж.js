Ext.require(['Данные.Документы.ЧекККМ'], function () 
{
	Ext.define('Документы.ЧекККМ.ФормаРегистрацииПродаж',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:782px;height:450px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Чек ККМ',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'СуммаДокумента',
			text: '1000000.00',
			style: 'position:absolute;left:458px;top:354px;width:311px;height:57px;text-align:right;',
		},
		{
			xtype: 'label',
			name: 'НадписьТекущийПользователь',
			text: '',
			style: 'position:absolute;left:267px;top:5px;width:507px;height:15px;text-align:right;',
		},
		{
			xtype: 'label',
			name: 'ДисконтнаяКарта',
			text: '',
			style: 'position:absolute;left:160px;top:349px;width:129px;height:18px;text-align:left;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:425px;width:782px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьИтог',
			text: 'Итого:',
			style: 'position:absolute;left:300px;top:354px;width:152px;height:57px;',
		},
		{
			xtype: 'label',
			name: 'Скидки',
			text: 'Скидки:',
			style: 'position:absolute;left:13px;top:395px;width:70px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:5px;width:766px;height:336px;',
			height: 336,width: 766,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Товары',
					items:
					[
		{
			id: 'Товары',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:15px;width:766px;height:252px;',
			height: 252,width: 766,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Код',
					width:'66',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Артикул',
					width:'110',
					dataIndex:'Артикул',
					flex:1,
				},
				{
					text:'Штрихкод',
					width:'100',
					dataIndex:'ШтрихКод',
					flex:1,
				},
				{
					text:'Номенклатура',
					width:'299',
					dataIndex:'Номенклатура',
					flex:1,
				},
				{
					text:'Количество',
					width:'72',
					dataIndex:'Количество',
					flex:1,
				},
				{
					text:'Ед. изм.',
					width:'66',
					dataIndex:'ЕдиницаИзмерения',
					flex:1,
				},
				{
					text:'Цена',
					width:'85',
					dataIndex:'Цена',
					flex:1,
				},
				{
					text:'Сумма без скидок',
					width:'94',
					dataIndex:'СуммаБезСкидок',
					flex:1,
				},
				{
					text:'% Руч.ск.',
					width:'59',
					dataIndex:'ПроцентСкидкиНаценки',
					flex:1,
				},
				{
					text:'% Авт.ск.',
					width:'55',
					dataIndex:'ПроцентАвтоматическихСкидок',
					flex:1,
				},
				{
					text:'Сумма',
					width:'102',
					dataIndex:'Сумма',
					flex:1,
				},
				{
					text:'Характеристика номенклатуры',
					width:'122',
					dataIndex:'ХарактеристикаНоменклатуры',
					flex:1,
				},
				{
					text:'Серия номенклатуры',
					width:'123',
					dataIndex:'СерияНоменклатуры',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ЧекККМ/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'Код',
					},
					{
						name:'Артикул',
					},
					{
						name:'ШтрихКод',
					},
					{
						name:'Номенклатура',
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
						name:'СуммаБезСкидок',
					},
					{
						name:'ПроцентСкидкиНаценки',
					},
					{
						name:'ПроцентАвтоматическихСкидок',
					},
					{
						name:'Сумма',
					},
					{
						name:'ХарактеристикаНоменклатуры',
					},
					{
						name:'СерияНоменклатуры',
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
						var грид = Ext.getCmp('Товары');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.ЧекККМ.ФормаРегистрацииПродажСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ЧекККМ.ФормаРегистрацииПродажСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'fieldset',
			title: '',
			style: 'position:absolute;left:0px;top:271px;width:766px;height:65px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'СкидкиИтогоСумма',
			text: '',
			style: 'position:absolute;left:175px;top:395px;width:114px;height:19px;text-align:right;',
		},
		{
			xtype: 'fieldset',
			title: '',
			style: 'position:absolute;left:8px;top:345px;width:284px;height:74px;',
		},
		{
			xtype: 'fieldset',
			title: '',
			style: 'position:absolute;left:295px;top:345px;width:479px;height:74px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДисконтнаяКарта',
			text: 'Дисконтная карта:',
			style: 'position:absolute;left:13px;top:349px;width:142px;height:18px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ВладелецДисконтнойКарты',
			text: 'Владелец дисконтной карты',
			style: 'position:absolute;left:13px;top:371px;width:276px;height:18px;',
		},
		],
	}],
	dockedItems:
	[
	]
	});
});