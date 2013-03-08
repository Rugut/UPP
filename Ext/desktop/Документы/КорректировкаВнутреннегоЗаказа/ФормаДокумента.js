Ext.define('Документы.КорректировкаВнутреннегоЗаказа.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 370,width: 657,
	iconCls: 'bogus',
	title: 'Корректировка внутреннего заказа',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:90px;top:32px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:190px;top:32px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:90px;top:319px;width:559px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВнутреннийЗаказ',
			style: 'position:absolute;left:90px;top:56px;width:220px;height:19px;',
		},
	]
});