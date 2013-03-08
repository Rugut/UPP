Ext.define('Документы.КорректировкаЗаказаПоставщику.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 440,width: 652,
	iconCls: 'bogus',
	title: 'Корректировка заказа поставщику',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:96px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:196px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Всего',
			style: 'position:absolute;left:548px;top:342px;width:96px;height:17px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВсегоНДС',
			style: 'position:absolute;left:549px;top:366px;width:95px;height:17px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЗаказПоставщику',
			style: 'position:absolute;left:96px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:390px;width:548px;height:19px;',
		},
	]
});