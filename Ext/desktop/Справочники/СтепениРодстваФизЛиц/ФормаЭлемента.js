Ext.define('Справочники.СтепениРодстваФизЛиц.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 85,width: 408,
	iconCls: 'bogus',
	title: 'Степени родства физических лиц',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:360px;top:33px;width:40px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:96px;top:33px;width:220px;height:19px;',
		},
	]
});