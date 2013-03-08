Ext.define('Справочники.КлючиАналитикиВидаУчета.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 298,width: 375,
	iconCls: 'bogus',
	title: 'Ключ аналитики вида учета',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:97px;top:33px;width:270px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:97px;top:81px;width:270px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПодразделениеОрганизации',
			style: 'position:absolute;left:97px;top:222px;width:270px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Подразделение',
			style: 'position:absolute;left:97px;top:151px;width:270px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетУчета',
			style: 'position:absolute;left:97px;top:246px;width:81px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетУчетаНУ',
			style: 'position:absolute;left:286px;top:246px;width:81px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Проект',
			style: 'position:absolute;left:97px;top:175px;width:270px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Склад',
			style: 'position:absolute;left:97px;top:105px;width:270px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'РазделУчета',
			style: 'position:absolute;left:97px;top:57px;width:270px;height:19px;',
		},
	]
});