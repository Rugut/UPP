Ext.define('Документы.РеестрДСВ3.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 498,width: 765,
	iconCls: 'bogus',
	title: 'Реестр застрахованных лиц (форма ДСВ-3)',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:94px;top:446px;width:663px;height:19px;',
		},
	]
});