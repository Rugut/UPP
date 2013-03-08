Ext.define('Документы.УстановкаЦенНоменклатурыКонтрагентов.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 343,width: 514,
	iconCls: 'bogus',
	title: 'Установка цен номенклатуры контрагентов',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:96px;top:32px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:197px;top:32px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Контрагент',
			style: 'position:absolute;left:96px;top:56px;width:410px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:97px;top:291px;width:409px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:97px;top:267px;width:409px;height:19px;',
		},
	]
});