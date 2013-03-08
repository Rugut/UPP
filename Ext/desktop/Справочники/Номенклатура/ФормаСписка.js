Ext.define('Справочники.Номенклатура.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 345,width: 793,
	iconCls: 'bogus',
	title: 'Номенклатура',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЗначениеОтбораСпискаНоменклатуры',
			style: 'position:absolute;left:234px;top:33px;width:552px;height:19px;',
		},
	]
});