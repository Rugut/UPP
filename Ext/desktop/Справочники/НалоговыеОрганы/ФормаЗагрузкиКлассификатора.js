Ext.define('Справочники.НалоговыеОрганы.ФормаЗагрузкиКлассификатора',
	{
	extend: 'Ext.window.Window',
	height: 164,width: 602,
	iconCls: 'bogus',
	title: 'Импорт классификатора СОУН',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Каталог',
			style: 'position:absolute;left:66px;top:10px;width:528px;height:19px;',
		},
	]
});