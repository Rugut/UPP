Ext.define('Справочники.НоменклатурныеГруппы.ФормаГруппы',
	{
	extend: 'Ext.window.Window',
	height: 111,width: 398,
	iconCls: 'bogus',
	title: 'Группа Номенклатурные группы',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:326px;top:59px;width:64px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:93px;top:59px;width:189px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Родитель',
			style: 'position:absolute;left:95px;top:33px;width:295px;height:19px;',
		},
	]
});