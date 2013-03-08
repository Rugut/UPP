Ext.define('Справочники.ПараметрыВыпускаПродукции.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 281,width: 500,
	iconCls: 'bogus',
	title: 'Параметры выпуска продукции',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:428px;top:57px;width:64px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:110px;top:57px;width:274px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Родитель',
			style: 'position:absolute;left:110px;top:33px;width:382px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:110px;top:229px;width:382px;height:19px;',
		},
	]
});