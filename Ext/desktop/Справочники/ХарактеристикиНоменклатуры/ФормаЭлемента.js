Ext.define('Справочники.ХарактеристикиНоменклатуры.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 334,width: 376,
	iconCls: 'bogus',
	title: 'Элемент Характеристики номенклатуры',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:93px;top:33px;width:275px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОКП',
			style: 'position:absolute;left:93px;top:57px;width:275px;height:19px;',
		},
	]
});