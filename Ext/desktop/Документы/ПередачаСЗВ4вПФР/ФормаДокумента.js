Ext.define('Документы.ПередачаСЗВ4вПФР.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 554,width: 891,
	iconCls: 'bogus',
	title: 'Опись сведений, передаваемых страхователем в ПФР',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:502px;width:670px;height:19px;',
		},
	]
});