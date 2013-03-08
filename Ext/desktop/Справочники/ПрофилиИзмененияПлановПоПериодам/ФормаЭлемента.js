Ext.define('Справочники.ПрофилиИзмененияПлановПоПериодам.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 377,width: 462,
	iconCls: 'bogus',
	title: 'Профили изменения планов по периодам',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:110px;top:34px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодСмещения',
			style: 'position:absolute;left:110px;top:57px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:374px;top:33px;width:80px;height:19px;',
		},
	]
});