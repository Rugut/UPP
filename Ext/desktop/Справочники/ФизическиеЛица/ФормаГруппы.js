Ext.define('Справочники.ФизическиеЛица.ФормаГруппы',
	{
	extend: 'Ext.window.Window',
	height: 109,width: 634,
	iconCls: 'bogus',
	title: 'Группа физических лиц',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:546px;top:57px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:102px;top:57px;width:408px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Родитель',
			style: 'position:absolute;left:102px;top:33px;width:524px;height:19px;',
		},
	]
});