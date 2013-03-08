Ext.define('Документы.КорректировкаРеализации.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 485,width: 672,
	iconCls: 'bogus',
	title: 'Корректировка реализации',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:98px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:198px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:90px;top:433px;width:574px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:98px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Всего',
			style: 'position:absolute;left:542px;top:388px;width:122px;height:17px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВсегоНДС',
			style: 'position:absolute;left:542px;top:410px;width:122px;height:17px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДокументРеализации',
			style: 'position:absolute;left:98px;top:82px;width:220px;height:19px;',
		},
	]
});