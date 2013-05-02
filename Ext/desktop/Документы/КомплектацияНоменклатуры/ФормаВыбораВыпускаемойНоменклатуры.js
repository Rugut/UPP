Ext.define('Документы.КомплектацияНоменклатуры.ФормаВыбораВыпускаемойНоменклатуры',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:664px;height:174px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Выберите выпускаемую номенклатуру',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:664px;height:25px;',
			items:
			[
				{
					text:'Выбрать',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:648px;height:133px;',
			height: 133,width: 648,
			columns:
			[
				{
					text:'Номенклатура',
					width:'168',
					dataIndex:'Номенклатура',
					flex:1,
				},
				{
					text:'Характеристика номенклатуры',
					width:'172',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/КомплектацияНоменклатуры/ВыбратьПоСсылке/100'},
				fields:
				[
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
		},
	]
});