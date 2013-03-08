Ext.define('Документы.СведенияОНачисленномЗаработкеСЗВ63.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 480,width: 846,
	iconCls: 'bogus',
	title: 'Сведения о сумме выплат и иных вознаграждений СЗВ-6-3',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:97px;top:428px;width:621px;height:19px;',
		},
	]
});