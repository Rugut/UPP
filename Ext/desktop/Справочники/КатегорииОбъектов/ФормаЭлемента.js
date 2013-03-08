Ext.define('Справочники.КатегорииОбъектов.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 109,width: 406,
	iconCls: 'bogus',
	title: 'Элемент Категории объектов',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:358px;top:33px;width:40px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:94px;top:33px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НазначениеКатегории',
			style: 'position:absolute;left:94px;top:57px;width:304px;height:19px;',
		},
	]
});