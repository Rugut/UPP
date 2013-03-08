Ext.define('Справочники.ВнешниеОбработки.ФормаГруппы',
	{
	extend: 'Ext.window.Window',
	height: 135,width: 400,
	iconCls: 'bogus',
	title: 'Группа Внешние обработки',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:93px;top:33px;width:299px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:93px;top:58px;width:299px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Родитель',
			style: 'position:absolute;left:93px;top:83px;width:299px;height:19px;',
		},
	]
});