Ext.define('Справочники.ИндивидуальныеГрафикиАмортизации.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 377,width: 405,
	iconCls: 'bogus',
	title: 'Индивидуальные графики амортизации',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:358px;top:33px;width:39px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:94px;top:33px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:94px;top:325px;width:303px;height:19px;',
		},
	]
});