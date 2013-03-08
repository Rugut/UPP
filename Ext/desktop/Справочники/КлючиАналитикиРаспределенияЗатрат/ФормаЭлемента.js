Ext.define('Справочники.КлючиАналитикиРаспределенияЗатрат.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 230,width: 400,
	iconCls: 'bogus',
	title: 'Ключ аналитики распределения затрат',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:159px;top:33px;width:233px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НоменклатурнаяГруппа',
			style: 'position:absolute;left:159px;top:57px;width:233px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Продукция',
			style: 'position:absolute;left:159px;top:81px;width:233px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ХарактеристикаПродукции',
			style: 'position:absolute;left:159px;top:105px;width:233px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СерияПродукции',
			style: 'position:absolute;left:159px;top:129px;width:233px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Спецификация',
			style: 'position:absolute;left:159px;top:153px;width:233px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВариантВыпускаПродукции',
			style: 'position:absolute;left:159px;top:178px;width:233px;height:19px;',
		},
	]
});