Ext.define('Справочники.Кассы.ФормаГруппы',
	{
	extend: 'Ext.window.Window',
	height: 133,width: 546,
	iconCls: 'bogus',
	title: 'Группа Кассы',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:478px;top:81px;width:60px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:94px;top:81px;width:340px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Владелец',
			style: 'position:absolute;left:94px;top:33px;width:444px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Родитель',
			style: 'position:absolute;left:94px;top:57px;width:444px;height:19px;',
		},
	]
});