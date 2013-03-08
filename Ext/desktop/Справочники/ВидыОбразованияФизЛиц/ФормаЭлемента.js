Ext.define('Справочники.ВидыОбразованияФизЛиц.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 85,width: 380,
	iconCls: 'bogus',
	title: 'Вид образования физического лица',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:332px;top:33px;width:40px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:96px;top:33px;width:192px;height:19px;',
		},
	]
});