Ext.define('Справочники.НормативыОбслуживанияОС.ФормаГруппы',
	{
	extend: 'Ext.window.Window',
	height: 109,width: 400,
	iconCls: 'bogus',
	title: 'Группа Нормативы обслуживания ОС',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:352px;top:33px;width:40px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:93px;top:33px;width:213px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Родитель',
			style: 'position:absolute;left:93px;top:57px;width:299px;height:19px;',
		},
	]
});