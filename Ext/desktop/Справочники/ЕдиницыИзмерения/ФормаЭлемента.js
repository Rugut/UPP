Ext.define('Справочники.ЕдиницыИзмерения.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:470px;height:250px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Единицы измерения',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьКод',
			text: 'Код:',
			style: 'position:absolute;left:340px;top:79px;width:40px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:382px;top:79px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:79px;width:108px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:118px;top:79px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВладелец',
			text: 'Номенклатура:',
			style: 'position:absolute;left:8px;top:33px;width:108px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Владелец',
			style: 'position:absolute;left:118px;top:33px;width:344px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьЕдиницаПоКлассификатору',
			text: 'По классификатору:',
			style: 'position:absolute;left:8px;top:56px;width:108px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЕдиницаПоКлассификатору',
			style: 'position:absolute;left:118px;top:56px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВес',
			text: 'Вес:',
			style: 'position:absolute;left:8px;top:102px;width:108px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Вес',
			style: 'position:absolute;left:118px;top:102px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКоэффициент',
			text: 'Содержит:',
			style: 'position:absolute;left:8px;top:148px;width:108px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Коэффициент',
			style: 'position:absolute;left:118px;top:148px;width:88px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:470px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:225px;width:470px;height:25px;',
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
			name: 'НадписьОбъем',
			text: 'Объем:',
			style: 'position:absolute;left:8px;top:125px;width:108px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Объем',
			style: 'position:absolute;left:118px;top:125px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПорогОкругления',
			text: 'Округлять с:',
			style: 'position:absolute;left:8px;top:171px;width:108px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПорогОкругления',
			style: 'position:absolute;left:118px;top:171px;width:88px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'При округлении предупреждать о нецелых местах',
			style: 'position:absolute;left:8px;top:198px;width:438px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИнформацияОбОкруглении',
			text: '',
			style: 'position:absolute;left:210px;top:171px;width:236px;height:19px;',
		},
	]
});