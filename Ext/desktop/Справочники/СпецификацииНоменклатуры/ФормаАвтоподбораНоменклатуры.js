Ext.define('Справочники.СпецификацииНоменклатуры.ФормаАвтоподбораНоменклатуры',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:500px;height:262px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Автоподбор номенклатуры',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:237px;width:500px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'OK',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьВариантАвтоподбора',
			text: 'Вариант автоподбора:',
			style: 'position:absolute;left:8px;top:6px;width:142px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ВариантАвтоподбора',
			style: 'position:absolute;left:150px;top:6px;width:342px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСвойство',
			text: 'Свойство характеристики выходного изделия:',
			style: 'position:absolute;left:8px;top:28px;width:142px;height:27px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Свойство',
			style: 'position:absolute;left:150px;top:30px;width:342px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:60px;width:484px;height:169px;',
			height: 169,width: 484,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Исходные комплектующие',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:40px;width:484px;height:129px;',
			height: 129,width: 484,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Значение',
					width:'197',
					dataIndex:'Значение',
					flex:1,
				},
				{
					text:'Номенклатура',
					width:'120',
					dataIndex:'Номенклатура',
					flex:1,
				},
				{
					text:'Количество',
					width:'100',
					dataIndex:'Количество',
					flex:1,
				},
				{
					text:'Единица',
					width:'54',
					dataIndex:'ЕдиницаИзмерения',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/СпецификацииНоменклатуры/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'Значение',
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
				]
			},
		},
		{
			xtype: 'fieldset',
			title: 'Значения свойства',
			style: 'position:absolute;left:0px;top:0px;width:484px;height:16px;',
		},
					]
				},
				{
					title:'Возвратные отходы',
					items:
					[
		{
			xtype: 'fieldset',
			title: 'Значения свойства',
			style: 'position:absolute;left:0px;top:0px;width:484px;height:16px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:40px;width:484px;height:129px;',
			height: 129,width: 484,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Значение',
					width:'197',
					dataIndex:'Значение',
					flex:1,
				},
				{
					text:'Номенклатура',
					width:'120',
					dataIndex:'Номенклатура',
					flex:1,
				},
				{
					text:'Количество',
					width:'100',
					dataIndex:'Количество',
					flex:1,
				},
				{
					text:'Единица',
					width:'54',
					dataIndex:'ЕдиницаИзмерения',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/СпецификацииНоменклатуры/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'Значение',
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
				]
			},
		},
					]
				},
			]
		},
	],
	dockedItems:
	[
	]
});