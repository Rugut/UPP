Ext.define('Справочники.НастройкиРасчетаЦеныНоменклатуры.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 419,width: 531,
	iconCls: 'bogus',
	title: 'Настройка расчета цены номенклатуры',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:99px;top:57px;width:424px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Родитель',
			style: 'position:absolute;left:99px;top:33px;width:424px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:87px;top:367px;width:436px;height:19px;',
		},
	]
});