Ext.define('Справочники.СпецификацииНоменклатуры.ФормаАвтоподбораНоменклатуры',
	{
	extend: 'Ext.window.Window',
	height: 262,width: 500,
	iconCls: 'bogus',
	title: 'Автоподбор номенклатуры',
	
	items: [
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
	]
});