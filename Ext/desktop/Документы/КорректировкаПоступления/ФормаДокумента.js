Ext.define('Документы.КорректировкаПоступления.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 478,width: 671,
	iconCls: 'bogus',
	title: 'Корректировка поступления',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:94px;top:32px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:194px;top:32px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:94px;top:426px;width:569px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:94px;top:56px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Всего',
			style: 'position:absolute;left:540px;top:359px;width:116px;height:17px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВсегоНДС',
			style: 'position:absolute;left:540px;top:380px;width:116px;height:17px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДокументПоступления',
			style: 'position:absolute;left:94px;top:80px;width:220px;height:19px;',
		},
	]
});