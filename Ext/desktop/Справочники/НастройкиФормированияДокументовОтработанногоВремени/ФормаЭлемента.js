Ext.define('Справочники.НастройкиФормированияДокументовОтработанногоВремени.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 335,width: 416,
	iconCls: 'bogus',
	title: 'Настройки формирования документов отработанного времени',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:101px;top:58px;width:307px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Родитель',
			style: 'position:absolute;left:101px;top:33px;width:307px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВвода2',
			style: 'position:absolute;left:203px;top:82px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВвода6',
			style: 'position:absolute;left:101px;top:283px;width:307px;height:19px;',
		},
	]
});