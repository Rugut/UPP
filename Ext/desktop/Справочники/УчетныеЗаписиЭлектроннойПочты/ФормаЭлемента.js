Ext.define('Справочники.УчетныеЗаписиЭлектроннойПочты.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 450,width: 582,
	iconCls: 'bogus',
	title: 'Настройки учетной записи',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:517px;top:33px;width:57px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:100px;top:57px;width:474px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'АдресЭлектроннойПочты',
			style: 'position:absolute;left:100px;top:33px;width:368px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НазначениеУчетнойЗаписи',
			style: 'position:absolute;left:100px;top:81px;width:474px;height:19px;',
		},
	]
});