Ext.define('Обработки.СоставНабора.ОсновнаяФорма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:600px;height:340px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Состав набора',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:600px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:315px;width:600px;height:25px;',
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
			xtype: 'label',
			name: 'НадписьНоменклатура',
			text: 'Набор :',
			style: 'position:absolute;left:8px;top:33px;width:68px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номенклатура',
			style: 'position:absolute;left:77px;top:33px;width:515px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКоличество',
			text: 'Количество:',
			style: 'position:absolute;left:8px;top:57px;width:68px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
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
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЕдиницаИзмерения',
			style: 'position:absolute;left:290px;top:57px;width:69px;height:19px;',
		},
		{
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
					width:'120',
					dataIndex:'Артикул',
					flex:1,
				},
				{
					text:'Номенклатура',
					width:'220',
					dataIndex:'Номенклатура',
					flex:1,
				},
				{
					text:'Характеристика номенклатуры',
					width:'220',
					dataIndex:'ХарактеристикаНоменклатуры',
					flex:1,
				},
				{
					text:'Серия номенклатуры',
					width:'220',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/СоставНабора/ВыбратьПоСсылке/100'},
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
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:100px;width:584px;height:24px;',
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