Ext.define('Справочники.ДоходыЕСН.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 148,width: 406,
	iconCls: 'bogus',
	title: 'Способы отражения доходов в учете ЕСН',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:94px;top:33px;width:304px;height:19px;',
		},
	]
});