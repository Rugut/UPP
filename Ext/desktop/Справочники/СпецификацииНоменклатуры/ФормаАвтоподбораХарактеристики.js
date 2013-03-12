Ext.define('Справочники.СпецификацииНоменклатуры.ФормаАвтоподбораХарактеристики',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:500px;height:192px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Автоподбор характеристики номенклатуры',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:167px;width:500px;height:25px;',
			items:
			[
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
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:6px;width:484px;height:153px;',
			height: 153,width: 484,
			items:
			[
				{
					title:'Исходные комплектующие',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:484px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:24px;width:484px;height:129px;',
			height: 129,width: 484,
			columns:
			[
				{
					text:'N',
					width:'28',
				},
				{
					text:'Свойство',
					width:'306',
				},
			]
		},
					]
				},
				{
					title:'Возвратные отходы',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:484px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:24px;width:484px;height:129px;',
			height: 129,width: 484,
			columns:
			[
				{
					text:'N',
					width:'28',
				},
				{
					text:'Свойство',
					width:'306',
				},
			]
		},
					]
				},
			]
		},
	]
});