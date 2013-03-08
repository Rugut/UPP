Ext.define('Справочники.ОстаткиОтпусков.ФормаСпискаПоследнихОстатков',
	{
	extend: 'Ext.window.Window',
	height: 297,width: 477,
	iconCls: 'bogus',
	title: 'Остатки отпусков прошлых лет',
	
	items: [
		{
			xtype: 'button',
			name: 'Изменить',
			text: 'Изменить',
			style: 'position:absolute;left:239px;top:268px;width:101px;height:21px;',
		},
	]
});