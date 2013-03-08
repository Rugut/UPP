Ext.define('Справочники.СпецификацииНоменклатуры.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 444,width: 652,
	iconCls: 'bogus',
	title: 'Спецификации номенклатуры',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:468px;top:58px;width:64px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:94px;top:58px;width:330px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Родитель',
			style: 'position:absolute;left:94px;top:33px;width:550px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КодВерсии',
			style: 'position:absolute;left:604px;top:58px;width:40px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:94px;top:392px;width:550px;height:19px;',
		},
	]
});