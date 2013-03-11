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
				},
				{
					title:'ВозвратныеОтходы',
				},
			]
		},
	]
});