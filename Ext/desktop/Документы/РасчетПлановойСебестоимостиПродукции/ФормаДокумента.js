Ext.define('Документы.РасчетПлановойСебестоимостиПродукции.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 370,width: 608,
	iconCls: 'bogus',
	title: 'Расчет плановой себестоимости продукции',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:52px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:152px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:96px;top:294px;width:504px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:318px;width:504px;height:19px;',
		},
	]
});