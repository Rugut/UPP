Ext.define('Документы.КорректировкаЗаказаНаПроизводство.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 395,width: 657,
	iconCls: 'bogus',
	title: 'Документ Корректировка заказа на производство',
	
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
			style: 'position:absolute;left:90px;top:344px;width:559px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Подразделение',
			style: 'position:absolute;left:450px;top:56px;width:199px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:90px;top:56px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЗаказНаПроизводство',
			style: 'position:absolute;left:90px;top:80px;width:220px;height:19px;',
		},
	]
});