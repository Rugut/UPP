Ext.define('Обработки.ПодборНоменклатуры.ВводПараметровБезСерийСХарактеристиками',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:394px;height:253px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Ввод количества и цены',
	
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
			style: 'position:absolute;left:167px;top:177px;width:79px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСумма',
			text: 'Сумма:',
			style: 'position:absolute;left:8px;top:177px;width:68px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьФомулаСумма',
			text: 'Надпись',
			style: 'position:absolute;left:78px;top:177px;width:82px;height:19px;text-align:right;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:228px;width:394px;height:25px;',
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
			style: 'position:absolute;left:8px;top:201px;width:68px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:78px;top:201px;width:308px;height:19px;',
		},
		{
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПодборНоменклатуры/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Характеристика',
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
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Показывать остатки',
			style: 'position:absolute;left:262px;top:181px;width:124px;height:15px;',
		},
	],
	dockedItems:
	[
	]
});