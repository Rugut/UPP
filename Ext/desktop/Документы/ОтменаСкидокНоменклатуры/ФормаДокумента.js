Ext.define('Документы.ОтменаСкидокНоменклатуры.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 321,width: 739,
	iconCls: 'bogus',
	title: 'Отмена скидок номенклатуры',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:51px;top:33px;width:127px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:204px;top:33px;width:163px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:95px;top:244px;width:636px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:95px;top:269px;width:636px;height:19px;',
		},
	]
});