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
			style: 'position:absolute;left:442px;top:57px;width:24px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Код',
			width: 55,
			height: 19,
			style: 'position:absolute;left:468px;top:57px;width:55px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:57px;width:131px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Наименование',
			width: 296,
			height: 19,
			style: 'position:absolute;left:139px;top:57px;width:296px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРодитель',
			text: 'Группа:',
			style: 'position:absolute;left:8px;top:33px;width:131px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'Родитель',
			width: 384,
			height: 19,
			style: 'position:absolute;left:139px;top:33px;width:384px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВидРезультатаАнализа',
			text: 'Вид результата анализа:',
			style: 'position:absolute;left:8px;top:81px;width:131px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'ВидРезультатаАнализа',
			width: 384,
			height: 19,
			style: 'position:absolute;left:139px;top:81px;width:384px;height:19px;',
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
			style: 'position:absolute;left:0px;top:6px;width:131px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'МинЗначение',
			style: 'position:absolute;left:131px;top:6px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьМаксЗначение',
			text: 'Максимальное значение:',
			style: 'position:absolute;left:0px;top:31px;width:131px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'МаксЗначение',
			style: 'position:absolute;left:131px;top:31px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьЕдиницаИзмерения',
			text: 'Единица измерения:',
			style: 'position:absolute;left:0px;top:56px;width:131px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'ЕдиницаИзмерения',
			width: 80,
			height: 19,
			style: 'position:absolute;left:131px;top:56px;width:80px;height:19px;',
		},
					]
				},
				{
					title:'Вхождение в список',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:30px;width:515px;height:116px;',
			height: 116,width: 515,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Значение показателя',
					width:'445',
					dataIndex:'ЗначениеПоказателя',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПоказателиАнализовНоменклатуры/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'ЗначениеПоказателя',
					},
				]
			},
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьТекстПояснение',
			text: '',
			style: 'position:absolute;left:10px;top:258px;width:513px;height:29px;text-align:left;',
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:531px;height:25px;',
			dock: 'top',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:295px;width:531px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
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
	]
});