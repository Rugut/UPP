Ext.define('Справочники.ТарифныеРазряды.ФормаГруппы',
	{
	extend: 'Ext.window.Window',
	height: 109,width: 433,
	iconCls: 'bogus',
	title: 'Группа тарифных разрядов',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:345px;top:57px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:93px;top:57px;width:215px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Родитель',
			style: 'position:absolute;left:93px;top:33px;width:332px;height:19px;',
		},
	]
});