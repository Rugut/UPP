Ext.define('Справочники.ДолжностиОрганизаций.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 473,width: 565,
	iconCls: 'bogus',
	title: 'Должности организаций',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:477px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:98px;top:33px;width:342px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КодПоОКПДТР',
			style: 'position:absolute;left:98px;top:59px;width:80px;height:19px;',
		},
	]
});