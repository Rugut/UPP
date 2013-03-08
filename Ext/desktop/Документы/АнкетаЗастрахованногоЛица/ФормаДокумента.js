Ext.define('Документы.АнкетаЗастрахованногоЛица.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 470,width: 645,
	iconCls: 'bogus',
	title: 'Анкета застрахованного лица (АДВ-1)',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:94px;top:418px;width:543px;height:19px;',
		},
	]
});