Ext.define('Документы.ДокументРасчетовСКонтрагентом.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 450,width: 609,
	iconCls: 'bogus',
	title: 'Документы расчетов с контрагентом (ручной учет)',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НачПериода',
			style: 'position:absolute;left:94px;top:8px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КонПериода',
			style: 'position:absolute;left:194px;top:8px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'РежимОтбораДокументов',
			style: 'position:absolute;left:94px;top:53px;width:150px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:94px;top:77px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Счет',
			style: 'position:absolute;left:94px;top:149px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:316px;top:8px;width:20px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Контрагент',
			style: 'position:absolute;left:94px;top:101px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДоговорКонтрагента',
			style: 'position:absolute;left:94px;top:125px;width:220px;height:19px;',
		},
	]
});