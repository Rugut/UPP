Ext.define('Справочники.ЗначенияСвойствОбъектов.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 133,width: 406,
	iconCls: 'bogus',
	title: 'Значения свойств объектов',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:358px;top:81px;width:40px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:94px;top:81px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Владелец',
			style: 'position:absolute;left:94px;top:33px;width:304px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Родитель',
			style: 'position:absolute;left:94px;top:57px;width:304px;height:19px;',
		},
	]
});