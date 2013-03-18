Ext.define('Справочники.КлючиАналитикиУчетаПартий.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:439px;height:278px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Ключ аналитики учета партий',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:33px;width:138px;height:19px;text-align:left;',
		},
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
					xtype: 'tbfill'
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьСтатусПартии',
			text: 'Статус партии:',
			style: 'position:absolute;left:8px;top:226px;width:138px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтатусПартии',
			style: 'position:absolute;left:146px;top:226px;width:285px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьЗаказ',
			text: 'Заказ:',
			style: 'position:absolute;left:8px;top:57px;width:138px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Заказ',
			style: 'position:absolute;left:146px;top:57px;width:285px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьЗаказ1',
			text: 'Договор комитента:',
			style: 'position:absolute;left:8px;top:81px;width:138px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДоговорКомитента',
			style: 'position:absolute;left:146px;top:81px;width:285px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДоговорКомиссионера',
			text: 'Договор комиссионера:',
			style: 'position:absolute;left:8px;top:130px;width:138px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДоговорКомиссионера',
			style: 'position:absolute;left:146px;top:130px;width:285px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьЗаказ3',
			text: 'Документ передачи:',
			style: 'position:absolute;left:8px;top:154px;width:138px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДокументПередачи',
			style: 'position:absolute;left:146px;top:154px;width:285px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьЗаказ4',
			text: 'Физ лицо:',
			style: 'position:absolute;left:8px;top:178px;width:138px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ФизЛицо',
			style: 'position:absolute;left:146px;top:178px;width:285px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьЗаказ5',
			text: 'Назначение использования:',
			style: 'position:absolute;left:8px;top:198px;width:138px;height:27px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НазначениеИспользования',
			style: 'position:absolute;left:146px;top:202px;width:285px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомиссионер',
			text: 'Комиссионер:',
			style: 'position:absolute;left:8px;top:105px;width:138px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комиссионер',
			style: 'position:absolute;left:146px;top:105px;width:285px;height:19px;',
		},
	]
});