Ext.define('Справочники.Подразделения.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 472,width: 538,
	iconCls: 'bogus',
	title: 'Подразделения',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:430px;top:33px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:91px;top:33px;width:300px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидПодразделения',
			style: 'position:absolute;left:93px;top:93px;width:295px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидЦФО',
			style: 'position:absolute;left:93px;top:120px;width:295px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОсновнойПроект',
			style: 'position:absolute;left:93px;top:143px;width:295px;height:19px;',
		},
	]
});