Ext.define('Справочники.ТорговоеОборудование.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 153,width: 468,
	iconCls: 'bogus',
	title: 'Торговое оборудование',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:93px;top:33px;width:250px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:380px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОбработкаОбслуживания',
			style: 'position:absolute;left:148px;top:78px;width:312px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Модель',
			style: 'position:absolute;left:148px;top:102px;width:312px;height:19px;',
		},
	]
});