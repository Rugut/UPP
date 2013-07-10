Ext.define('Обработки.СоставНабора.ОсновнаяФорма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:600px;height:340px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Состав набора',
	
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'НадписьНоменклатура',
			text: 'Набор :',
			style: 'position:absolute;left:8px;top:33px;width:68px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-search-trigger',
			name: 'Номенклатура',
			width: 515,
			height: 19,
			style: 'position:absolute;left:77px;top:33px;width:515px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКоличество',
			text: 'Количество:',
			style: 'position:absolute;left:8px;top:57px;width:68px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'Количество',
			style: 'position:absolute;left:77px;top:57px;width:89px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьЕдиницаИзмерения',
			text: 'Единица измерения:',
			style: 'position:absolute;left:175px;top:57px;width:110px;height:19px;text-align:right;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			name: 'ЕдиницаИзмерения',
			width: 69,
			height: 19,
			style: 'position:absolute;left:290px;top:57px;width:69px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Состав набора',
			style: 'position:absolute;left:8px;top:85px;width:584px;height:16px;',
		},
		{
			id: 'СоставНабора',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:124px;width:584px;height:183px;',
			height: 183,width: 584,
			columns:
			[
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Код',
					width:'60',
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
					width:'2200',
					dataIndex:'Номенклатура',
					flex:1,
				},
				{
					text:'Характеристика номенклатуры',
					width:'2200',
					dataIndex:'ХарактеристикаНоменклатуры',
					flex:1,
				},
				{
					text:'Серия номенклатуры',
					width:'2200',
					dataIndex:'СерияНоменклатуры',
					flex:1,
				},
				{
					text:'Количество',
					width:'64',
					dataIndex:'Количество',
					flex:1,
				},
				{
					text:'Всего',
					width:'64',
					dataIndex:'Всего',
					flex:1,
				},
				{
					text:'Ед.',
					width:'50',
					dataIndex:'ЕдиницаИзмерения',
					flex:1,
				},
				{
					text:'Себестоимость ',
					width:'80',
					dataIndex:'Себестоимость',
					flex:1,
				},
				{
					text:'Качество',
					width:'65',
					dataIndex:'Качество',
					flex:1,
				},
				{
					text:'Склад',
					width:'100',
					dataIndex:'Склад',
					flex:1,
				},
				{
					text:'Способ списания',
					width:'100',
					dataIndex:'СпособСписанияОстаткаТоваров',
					flex:1,
				},
				{
					text:'Цена',
					width:'100',
					dataIndex:'Цена',
					flex:1,
				},
				{
					text:'Собственные, счет учета (БУ)',
					width:'100',
					dataIndex:'СчетУчетаБУ',
					flex:1,
				},
				{
					text:'Принятые, счет учета (БУ)',
					width:'100',
					dataIndex:'ПринятыеСчетУчетаБУ',
					flex:1,
				},
				{
					text:'Собственные, счет учета (НУ)',
					width:'100',
					dataIndex:'СчетУчетаНУ',
					flex:1,
				},
				{
					text:'Принятые счет учета (НУ)',
					width:'100',
					dataIndex:'ПринятыеСчетУчетаНУ',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/СоставНабора/ВыбратьПоСсылке/100', timeout: 3},
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
						name:'Номенклатура',
					},
					{
						name:'ХарактеристикаНоменклатуры',
					},
					{
						name:'СерияНоменклатуры',
					},
					{
						name:'Количество',
					},
					{
						name:'Всего',
					},
					{
						name:'ЕдиницаИзмерения',
					},
					{
						name:'Себестоимость',
					},
					{
						name:'Качество',
					},
					{
						name:'Склад',
					},
					{
						name:'СпособСписанияОстаткаТоваров',
					},
					{
						name:'Цена',
					},
					{
						name:'СчетУчетаБУ',
					},
					{
						name:'ПринятыеСчетУчетаБУ',
					},
					{
						name:'СчетУчетаНУ',
					},
					{
						name:'ПринятыеСчетУчетаНУ',
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
						var грид = Ext.getCmp('СоставНабора');
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
			style: 'position:absolute;left:0px;top:0px;width:600px;height:25px;',
			dock: 'top',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:315px;width:600px;height:25px;',
			dock: 'bottom',
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
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:100px;width:584px;height:24px;',
			dock: 'top',
			items:
			[
				'-',
				{
					text:'Серийные номера',
				},
			]
		},
	]
});