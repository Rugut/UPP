Ext.define('Справочники.НастройкаИнтервалов.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 373,width: 384,
	iconCls: 'bogus',
	title: 'Настройка интервала',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:94px;top:33px;width:283px;height:19px;',
		},
	]
});