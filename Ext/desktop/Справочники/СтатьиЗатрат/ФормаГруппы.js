Ext.define('Справочники.СтатьиЗатрат.ФормаГруппы',
	{
	extend: 'Ext.window.Window',
	height: 110,width: 469,
	iconCls: 'bogus',
	title: 'Группа статей затрат',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:397px;top:58px;width:64px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:129px;top:58px;width:228px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Родитель',
			style: 'position:absolute;left:129px;top:33px;width:332px;height:19px;',
		},
	]
});