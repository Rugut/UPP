Ext.define('Справочники.ВидыОплатЧекаККМ.ФормаГруппы',
	{
	extend: 'Ext.window.Window',
	height: 85,width: 402,
	iconCls: 'bogus',
	title: 'Группа Виды оплат чека ККМ',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:354px;top:33px;width:40px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:94px;top:33px;width:216px;height:19px;',
		},
	]
});