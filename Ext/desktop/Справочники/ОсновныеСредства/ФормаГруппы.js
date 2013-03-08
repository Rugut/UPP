Ext.define('Справочники.ОсновныеСредства.ФормаГруппы',
	{
	extend: 'Ext.window.Window',
	height: 108,width: 396,
	iconCls: 'bogus',
	title: 'Группа Основные средства',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:348px;top:56px;width:40px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:94px;top:56px;width:210px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Родитель',
			style: 'position:absolute;left:94px;top:33px;width:294px;height:19px;',
		},
	]
});