Ext.define('Справочники.КлассификаторСпециальностейПоОбразованию.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 110,width: 322,
	iconCls: 'bogus',
	title: 'Классификатор специальностей по образованию (ОКСО)',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:94px;top:58px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:94px;top:33px;width:220px;height:19px;',
		},
	]
});