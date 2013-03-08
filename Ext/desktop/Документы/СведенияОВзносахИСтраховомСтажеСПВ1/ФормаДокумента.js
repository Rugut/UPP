Ext.define('Документы.СведенияОВзносахИСтраховомСтажеСПВ1.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 480,width: 846,
	iconCls: 'bogus',
	title: 'Сведения о взносах и страховом стаже для установления трудовой пенсии (СПВ-1)',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:97px;top:428px;width:621px;height:19px;',
		},
	]
});