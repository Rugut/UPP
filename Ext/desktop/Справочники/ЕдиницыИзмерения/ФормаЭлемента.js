Ext.define('Справочники.ЕдиницыИзмерения.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 250,width: 470,
	iconCls: 'bogus',
	title: 'Единицы измерения',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:382px;top:79px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:118px;top:79px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Владелец',
			style: 'position:absolute;left:118px;top:33px;width:344px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЕдиницаПоКлассификатору',
			style: 'position:absolute;left:118px;top:56px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Вес',
			style: 'position:absolute;left:118px;top:102px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Коэффициент',
			style: 'position:absolute;left:118px;top:148px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Объем',
			style: 'position:absolute;left:118px;top:125px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПорогОкругления',
			style: 'position:absolute;left:118px;top:171px;width:88px;height:19px;',
		},
	]
});