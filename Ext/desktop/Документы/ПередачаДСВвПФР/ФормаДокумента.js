Ext.define('Документы.ПередачаДСВвПФР.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 449,width: 778,
	iconCls: 'bogus',
	title: 'Передача в ПФР Заявлений о добровольном вступлении в правоотношения (ДСВ-1)',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:94px;top:397px;width:676px;height:19px;',
		},
	]
});