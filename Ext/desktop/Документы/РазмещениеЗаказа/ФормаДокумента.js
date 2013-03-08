Ext.define('Документы.РазмещениеЗаказа.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 351,width: 640,
	iconCls: 'bogus',
	title: 'Размещение заказа',
	
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
			style: 'position:absolute;left:90px;top:299px;width:542px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Заказ',
			style: 'position:absolute;left:90px;top:56px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КонтрагентПодразделениеЗаказа',
			style: 'position:absolute;left:412px;top:56px;width:220px;height:19px;',
		},
	]
});