Ext.define('Справочники.ФизическиеЛица.ФормаЗаписиСведенияОбИнвалидности',
	{
	extend: 'Ext.window.Window',
	height: 199,width: 270,
	iconCls: 'bogus',
	title: 'Сведения об инвалидности',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Период',
			style: 'position:absolute;left:142px;top:147px;width:92px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СерияСправки',
			style: 'position:absolute;left:142px;top:32px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерСправки',
			style: 'position:absolute;left:142px;top:56px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаВыдачи',
			style: 'position:absolute;left:142px;top:80px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СрокДействияСправки',
			style: 'position:absolute;left:142px;top:104px;width:120px;height:19px;',
		},
	]
});