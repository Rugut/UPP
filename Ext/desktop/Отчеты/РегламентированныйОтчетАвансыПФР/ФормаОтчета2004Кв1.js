Ext.define('Отчеты.РегламентированныйОтчетАвансыПФР.ФормаОтчета2004Кв1',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:780px;height:460px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Авансы в ПФР',
	
	items:
	[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:83px;width:764px;height:346px;',
			height: 346,width: 764,
			items:
			[
				{
					title:'Титульный',
				},
				{
					title:'Физ. лица',
				},
				{
					title:'Раздел 1',
				},
				{
					title:'Раздел 2',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:298px;width:762px;height:28px;',
			height: 28,width: 762,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'combobox',
			style: 'position:absolute;left:7px;top:5px;width:232px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПолеВводаЗначениеКорректировкиРаздел2',
			style: 'position:absolute;left:244px;top:5px;width:117px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеВводаКомментарийРаздел2',
			style: 'position:absolute;left:366px;top:5px;width:396px;height:20px;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'Раздел 2.1',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:298px;width:762px;height:28px;',
			height: 28,width: 762,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'combobox',
			style: 'position:absolute;left:6px;top:5px;width:232px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПолеВводаЗначениеКорректировкиРаздел2_1',
			style: 'position:absolute;left:243px;top:5px;width:117px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеВводаКомментарийРаздел2_1',
			style: 'position:absolute;left:365px;top:5px;width:397px;height:19px;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'Раздел 2.2',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:298px;width:762px;height:28px;',
			height: 28,width: 762,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'combobox',
			style: 'position:absolute;left:6px;top:5px;width:232px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПолеВводаЗначениеКорректировкиРаздел2_2',
			style: 'position:absolute;left:243px;top:5px;width:117px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеВводаКомментарийРаздел2_2',
			style: 'position:absolute;left:365px;top:5px;width:397px;height:19px;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'Раздел 2.3',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:298px;width:762px;height:28px;',
			height: 28,width: 762,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'combobox',
			style: 'position:absolute;left:6px;top:5px;width:232px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПолеВводаЗначениеКорректировкиРаздел2_3',
			style: 'position:absolute;left:243px;top:5px;width:117px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеВводаКомментарийРаздел2_3',
			style: 'position:absolute;left:365px;top:5px;width:397px;height:19px;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'Раздел 2.4',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:298px;width:762px;height:28px;',
			height: 28,width: 762,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'combobox',
			style: 'position:absolute;left:6px;top:5px;width:232px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПолеВводаЗначениеКорректировкиРаздел2_4',
			style: 'position:absolute;left:243px;top:5px;width:117px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеВводаКомментарийРаздел2_4',
			style: 'position:absolute;left:365px;top:5px;width:397px;height:19px;',
		},
					]
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: '_ИндикаторВнешнегоОтчета',
			text: 'Внешний отчет',
			style: 'position:absolute;left:635px;top:5px;width:137px;height:15px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:764px;height:50px;',
			height: 50,width: 764,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПолеВводаТочностьЕдиницыИзмерения',
			style: 'position:absolute;left:271px;top:0px;width:32px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			name: 'ПолеВводаДатаСдачи',
			style: 'position:absolute;left:116px;top:24px;width:96px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:116px;top:0px;width:96px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПолеВводаЧисленностьМ1',
			style: 'position:absolute;left:410px;top:24px;width:48px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПолеВводаЧисленностьМ2',
			style: 'position:absolute;left:535px;top:24px;width:48px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПолеВводаЧисленностьМ3',
			style: 'position:absolute;left:657px;top:24px;width:48px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:312px;top:0px;width:116px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'НомерКорректировки',
			style: 'position:absolute;left:443px;top:0px;width:49px;height:19px;',
		},
					]
				},
			]
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:780px;height:25px;',
			dock: 'top',
			items:
			[
				{
					text:'Заполнить',
				},
				'-',
				{
					text:'Очистить',
				},
				'-',
				{
					text:'Настройка...',
				},
				'-',
				{
					text:'Поиск',
				},
				'-',
				{
					text:'Обновить',
				},
				'-',
				{
					text:'Расширить поле бланка',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:435px;width:780px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
			]
		},
	]
});