Ext.define('Справочники.СпецификацииНоменклатуры.ФормаЗаполненияПоФактическимЗатратам',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:700px;height:337px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Спецификации номенклатуры',
	
	items:
	[
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-search-trigger',
			name: 'Номенклатура',
			width: 220,
			height: 19,
			style: 'position:absolute;left:89px;top:32px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Продукция:',
			style: 'position:absolute;left:8px;top:32px;width:81px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Характеристика продукции:',
			style: 'position:absolute;left:325px;top:28px;width:140px;height:27px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-search-trigger',
			name: 'ХарактеристикаНоменклатуры',
			width: 227,
			height: 19,
			style: 'position:absolute;left:465px;top:32px;width:227px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:138px;width:684px;height:166px;',
			height: 166,width: 684,
			columns:
			[
				{
					text:'Материал',
					width:'119',
					dataIndex:'Материал',
					flex:1,
				},
				{
					text:'Характеристика материала',
					width:'132',
					dataIndex:'ХарактеристикаМатериала',
					flex:1,
				},
				{
					text:'Статья затрат',
					width:'121',
					dataIndex:'СтатьяЗатрат',
					flex:1,
				},
				{
					text:'Ед.',
					width:'50',
					dataIndex:'ЕдиницаИзмерения',
					flex:1,
				},
				{
					text:'Количество',
					width:'73',
					dataIndex:'Количество',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/СпецификацииНоменклатуры/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Материал',
					},
					{
						name:'ХарактеристикаМатериала',
					},
					{
						name:'СтатьяЗатрат',
					},
					{
						name:'ЕдиницаИзмерения',
					},
					{
						name:'Количество',
					},
				]
			},
		},
		{
			xtype: 'fieldset',
			title: 'Фактический расход материалов за месяц',
			style: 'position:absolute;left:8px;top:90px;width:684px;height:17px;',
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Спецификация:',
			style: 'position:absolute;left:8px;top:56px;width:81px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Спецификация',
			width: 220,
			height: 19,
			style: 'position:absolute;left:89px;top:56px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'Подразделение:',
			style: 'position:absolute;left:325px;top:8px;width:140px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Подразделение',
			width: 227,
			height: 19,
			style: 'position:absolute;left:465px;top:8px;width:227px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПериод',
			text: 'Период с:',
			style: 'position:absolute;left:8px;top:8px;width:81px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаНачалаПериода',
			width: 80,
			height: 19,
			style: 'position:absolute;left:89px;top:8px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПериодПо',
			text: 'по:',
			style: 'position:absolute;left:179px;top:8px;width:16px;height:19px;text-align:center;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаОкончанияПериода',
			width: 80,
			height: 19,
			style: 'position:absolute;left:203px;top:8px;width:80px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'Количество',
			style: 'position:absolute;left:325px;top:56px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьЕдиницаИзмерения',
			text: 'Единица:',
			style: 'position:absolute;left:409px;top:56px;width:56px;height:19px;text-align:center;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-search-trigger',
			name: 'ЕдиницаИзмерения',
			width: 80,
			height: 19,
			style: 'position:absolute;left:465px;top:56px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:290px;top:8px;width:19px;height:19px;',
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:312px;width:700px;height:25px;',
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
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:112px;width:684px;height:24px;',
			dock: 'top',
			items:
			[
				'-',
				{
					text:'Заполнить',
				},
			]
		},
	]
});