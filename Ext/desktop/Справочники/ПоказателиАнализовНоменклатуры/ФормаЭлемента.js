Ext.define('Справочники.ПоказателиАнализовНоменклатуры.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:531px;height:320px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Показатели анализов номенклатуры',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьКод',
			text: 'Код:',
			style: 'position:absolute;left:442px;top:57px;width:24px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:468px;top:57px;width:55px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:57px;width:131px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:139px;top:57px;width:296px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРодитель',
			text: 'Группа:',
			style: 'position:absolute;left:8px;top:33px;width:131px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Родитель',
			style: 'position:absolute;left:139px;top:33px;width:384px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВидРезультатаАнализа',
			text: 'Вид результата анализа:',
			style: 'position:absolute;left:8px;top:81px;width:131px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидРезультатаАнализа',
			style: 'position:absolute;left:139px;top:81px;width:384px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:531px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:295px;width:531px;height:25px;',
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
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:105px;width:515px;height:152px;',
			height: 152,width: 515,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Числовой диапазон',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьМинЗначение',
			text: 'Минимальное значение:',
			style: 'position:absolute;left:0px;top:6px;width:131px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'МинЗначение',
			style: 'position:absolute;left:131px;top:6px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьМаксЗначение',
			text: 'Максимальное значение:',
			style: 'position:absolute;left:0px;top:31px;width:131px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'МаксЗначение',
			style: 'position:absolute;left:131px;top:31px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьЕдиницаИзмерения',
			text: 'Единица измерения:',
			style: 'position:absolute;left:0px;top:56px;width:131px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЕдиницаИзмерения',
			style: 'position:absolute;left:131px;top:56px;width:80px;height:19px;',
		},
					]
				},
				{
					title:'Вхождение в список',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:6px;width:515px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:30px;width:515px;height:116px;',
			height: 116,width: 515,
			columns:
			[
				{
					text:'N',
					width:'28',
				},
				{
					text:'Значение показателя',
					width:'445',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьТекстПояснение',
			text: '',
			style: 'position:absolute;left:10px;top:258px;width:513px;height:29px;',
		},
	]
});