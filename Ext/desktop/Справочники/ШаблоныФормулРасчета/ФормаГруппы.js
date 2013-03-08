Ext.define('Справочники.ШаблоныФормулРасчета.ФормаГруппы',
	{
	extend: 'Ext.window.Window',
	height: 110,width: 400,
	iconCls: 'bogus',
	title: 'Группа шаблонов формул расчета',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:328px;top:58px;width:64px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:90px;top:58px;width:194px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Родитель',
			style: 'position:absolute;left:90px;top:33px;width:302px;height:19px;',
		},
	]
});