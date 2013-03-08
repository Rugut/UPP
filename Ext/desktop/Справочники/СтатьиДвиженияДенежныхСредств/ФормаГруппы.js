Ext.define('Справочники.СтатьиДвиженияДенежныхСредств.ФормаГруппы',
	{
	extend: 'Ext.window.Window',
	height: 109,width: 450,
	iconCls: 'bogus',
	title: 'Группа Статьи движения денежных средств',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:362px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:93px;top:33px;width:228px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Родитель',
			style: 'position:absolute;left:93px;top:57px;width:228px;height:19px;',
		},
	]
});