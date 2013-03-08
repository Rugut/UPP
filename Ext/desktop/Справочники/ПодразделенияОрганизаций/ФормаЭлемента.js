Ext.define('Справочники.ПодразделенияОрганизаций.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 351,width: 526,
	iconCls: 'bogus',
	title: 'Подразделение',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:438px;top:33px;width:80px;height:19px;',
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
			style: 'position:absolute;left:91px;top:96px;width:300px;height:19px;',
		},
	]
});