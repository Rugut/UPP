Ext.define('Справочники.ПрофилиИзмененияПлановПоИзмерениям.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 437,width: 474,
	iconCls: 'bogus',
	title: 'Профили изменения планов по измерениям',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:122px;top:33px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидРаспределения',
			style: 'position:absolute;left:122px;top:84px;width:344px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИзмерениеБюджетирования',
			style: 'position:absolute;left:122px;top:57px;width:344px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИсточникДанных',
			style: 'position:absolute;left:122px;top:108px;width:344px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПоказательИсточника',
			style: 'position:absolute;left:122px;top:132px;width:344px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:386px;top:33px;width:80px;height:19px;',
		},
	]
});