Ext.define('Справочники.КлючиАналитикиУчетаПартий.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 278,width: 439,
	iconCls: 'bogus',
	title: 'Ключ аналитики учета партий',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:146px;top:33px;width:285px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:439px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:253px;width:439px;height:25px;',
			items:
			[
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
				{
					text:'Разделитель1',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтатусПартии',
			style: 'position:absolute;left:146px;top:226px;width:285px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Заказ',
			style: 'position:absolute;left:146px;top:57px;width:285px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДоговорКомитента',
			style: 'position:absolute;left:146px;top:81px;width:285px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДоговорКомиссионера',
			style: 'position:absolute;left:146px;top:130px;width:285px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДокументПередачи',
			style: 'position:absolute;left:146px;top:154px;width:285px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ФизЛицо',
			style: 'position:absolute;left:146px;top:178px;width:285px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НазначениеИспользования',
			style: 'position:absolute;left:146px;top:202px;width:285px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комиссионер',
			style: 'position:absolute;left:146px;top:105px;width:285px;height:19px;',
		},
	]
});