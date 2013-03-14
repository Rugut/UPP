Ext.define('Справочники.СпособыОтраженияЗарплатыВУпрУчете.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:404px;height:206px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Способы отражения зарплаты в управленческом учете',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:33px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:94px;top:33px;width:302px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтатьяЗатрат',
			text: 'Статья затрат:',
			style: 'position:absolute;left:14px;top:82px;width:160px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтатьяЗатрат',
			style: 'position:absolute;left:176px;top:82px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНоменклатурнаяГруппа',
			text: 'Номенклатурная группа:',
			style: 'position:absolute;left:14px;top:106px;width:160px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НоменклатурнаяГруппа',
			style: 'position:absolute;left:176px;top:106px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОбъектСтроительства',
			text: 'Объект строительства:',
			style: 'position:absolute;left:14px;top:154px;width:160px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОбъектСтроительства',
			style: 'position:absolute;left:176px;top:154px;width:220px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:404px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:181px;width:404px;height:25px;',
			items:
			[
				{
					text:'OK',
				},
				'-',
				{
					text:'Записать',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьСпособРаспределенияЗатрат',
			text: 'Способ распределения затрат:',
			style: 'position:absolute;left:14px;top:130px;width:160px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СпособРаспределенияЗатрат',
			style: 'position:absolute;left:176px;top:130px;width:220px;height:19px;',
		},
	]
});