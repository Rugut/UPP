Ext.define('Справочники.ФизическиеЛица.ФормаВводаДанныхСЗВК',
	{
	extend: 'Ext.window.Window',
	height: 455,width: 756,
	iconCls: 'bogus',
	title: 'Ввод данных СЗВ-К',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТерриториальныеУсловияДляСЗВК',
			style: 'position:absolute;left:151px;top:8px;width:97px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'РайонныйКоэффициентДляСЗВК',
			style: 'position:absolute;left:387px;top:8px;width:52px;height:19px;',
		},
	]
});