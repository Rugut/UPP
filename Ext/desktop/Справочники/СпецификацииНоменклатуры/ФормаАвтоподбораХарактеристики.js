Ext.define('Справочники.СпецификацииНоменклатуры.ФормаАвтоподбораХарактеристики',
	{
	extend: 'Ext.window.Window',
	height: 192,width: 500,
	iconCls: 'bogus',
	title: 'Автоподбор характеристики номенклатуры',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:167px;width:500px;height:25px;',
			items:
			[
				{
					text:'Ок',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ОсновныеДействияФормыЗакрыть',
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
					title:'ИсходныеКомплектующие',
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
					text:'НомерСтроки',
				},
				{
					text:'Свойство',
				},
			]
		},
					]
				},
				{
					title:'ВозвратныеОтходы',
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
					text:'НомерСтроки',
				},
				{
					text:'Свойство',
				},
			]
		},
					]
				},
			]
		},
	]
});