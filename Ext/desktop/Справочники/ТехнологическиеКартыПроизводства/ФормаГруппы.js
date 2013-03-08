Ext.define('Справочники.ТехнологическиеКартыПроизводства.ФормаГруппы',
	{
	extend: 'Ext.window.Window',
	height: 112,width: 423,
	iconCls: 'bogus',
	title: 'Группа Технологические карты производства',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:351px;top:60px;width:64px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:97px;top:60px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Родитель',
			style: 'position:absolute;left:97px;top:33px;width:318px;height:19px;',
		},
	]
});