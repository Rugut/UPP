Ext.define('Справочники.СпецификацииНоменклатуры.ФормаАвтоподбораНоменклатуры',
	{
	extend: 'Ext.window.Window',
	height: 262,width: 500,
	iconCls: 'bogus',
	title: 'Автоподбор номенклатуры',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:237px;width:500px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Ок',
				},
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВариантАвтоподбора',
			style: 'position:absolute;left:150px;top:6px;width:342px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Свойство',
			style: 'position:absolute;left:150px;top:30px;width:342px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:60px;width:484px;height:169px;',
			height: 169,width: 484,
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