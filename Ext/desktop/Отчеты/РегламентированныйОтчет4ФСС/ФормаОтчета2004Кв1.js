Ext.require(['Данные.Отчеты.РегламентированныйОтчет4ФСС'], function () 
{
	Ext.define('Отчеты.РегламентированныйОтчет4ФСС.ФормаОтчета2004Кв1',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:780px;height:450px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: '4-ФСС',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:780px;height:25px;',
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
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:81px;width:764px;height:336px;',
			height: 336,width: 764,
			items:
			[
				{
					title:'Титульный',
				},
				{
					title:'Раздел I (табл. 1, 2)',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:286px;width:640px;height:24px;',
			height: 24,width: 640,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'combobox',
			style: 'position:absolute;left:0px;top:5px;width:220px;height:19px;',
			width: 220,
			height: 19,
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПолеВводаЗначениеКорректировкиРаздел1_1',
			style: 'position:absolute;left:226px;top:5px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеВводаКомментарийРаздел1_1',
			width: 287,
			height: 19,
			style: 'position:absolute;left:353px;top:5px;width:287px;height:19px;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'Раздел I (табл. 3)',
					items:
					[
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтрокиРаздел1_2',
			text: 'Добавить',
			style: 'position:absolute;left:144px;top:291px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтрокиРаздел1_2',
			text: 'Удалить',
			style: 'position:absolute;left:230px;top:291px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись27',
			text: 'Дополнительные строки:',
			style: 'position:absolute;left:6px;top:291px;width:132px;height:19px;text-align:left;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:265px;width:640px;height:24px;',
			height: 24,width: 640,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'combobox',
			style: 'position:absolute;left:0px;top:5px;width:220px;height:19px;',
			width: 220,
			height: 19,
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПолеВводаЗначениеКорректировкиРаздел1_2',
			style: 'position:absolute;left:226px;top:5px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеВводаКомментарийРаздел1_2',
			width: 287,
			height: 19,
			style: 'position:absolute;left:353px;top:5px;width:287px;height:19px;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'Раздел II (табл. 4, 5)',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись26',
			text: 'Дополнительные строки:',
			style: 'position:absolute;left:453px;top:291px;width:132px;height:19px;text-align:left;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:284px;width:640px;height:26px;',
			height: 26,width: 640,
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
			name: 'ПолеВводаЗначениеКорректировкиРаздел2_1',
			style: 'position:absolute;left:226px;top:7px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеВводаКомментарийРаздел2_1',
			width: 289,
			height: 19,
			style: 'position:absolute;left:351px;top:7px;width:289px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:0px;top:7px;width:220px;height:19px;',
			width: 220,
			height: 19,
		},
					]
				},
			]
		},
					]
				},
				{
					title:'Раздел II (табл. 6)',
					items:
					[
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтрокиРаздел2_2',
			text: 'Добавить',
			style: 'position:absolute;left:592px;top:291px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтрокиРаздел2_2',
			text: 'Удалить',
			style: 'position:absolute;left:678px;top:291px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись28',
			text: 'Дополнительные строки:',
			style: 'position:absolute;left:454px;top:291px;width:132px;height:19px;text-align:left;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:262px;width:640px;height:26px;',
			height: 26,width: 640,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'combobox',
			style: 'position:absolute;left:0px;top:7px;width:220px;height:19px;',
			width: 220,
			height: 19,
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПолеВводаЗначениеКорректировкиРаздел2_2',
			style: 'position:absolute;left:226px;top:7px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеВводаКомментарийРаздел2_2',
			width: 289,
			height: 19,
			style: 'position:absolute;left:351px;top:7px;width:289px;height:19px;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'Раздел II (табл. 7)',
					items:
					[
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтрокиРаздел2_3',
			text: 'Добавить',
			style: 'position:absolute;left:144px;top:291px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтрокиРаздел2_3',
			text: 'Удалить',
			style: 'position:absolute;left:230px;top:291px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись29',
			text: 'Дополнительные строки:',
			style: 'position:absolute;left:6px;top:291px;width:132px;height:19px;text-align:left;',
		},
					]
				},
				{
					title:'Раздел II (табл. 8)',
					items:
					[
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтрокиРаздел2_4',
			text: 'Добавить',
			style: 'position:absolute;left:144px;top:291px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтрокиРаздел2_4',
			text: 'Удалить',
			style: 'position:absolute;left:230px;top:291px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись26',
			text: 'Дополнительные строки:',
			style: 'position:absolute;left:6px;top:291px;width:132px;height:19px;text-align:left;',
		},
					]
				},
				{
					title:'Раздел III (табл. 9, 10)',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:286px;width:640px;height:24px;',
			height: 24,width: 640,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'combobox',
			style: 'position:absolute;left:0px;top:5px;width:220px;height:19px;',
			width: 220,
			height: 19,
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПолеВводаЗначениеКорректировкиРаздел3_1',
			style: 'position:absolute;left:226px;top:5px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеВводаКомментарийРаздел3_1',
			width: 288,
			height: 19,
			style: 'position:absolute;left:352px;top:5px;width:288px;height:19px;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'Раздел III (табл. 11, 12)',
					items:
					[
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтрокиРаздел3_2',
			text: 'Добавить',
			style: 'position:absolute;left:591px;top:291px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтрокиРаздел3_2',
			text: 'Удалить',
			style: 'position:absolute;left:677px;top:291px;width:80px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:265px;width:640px;height:24px;',
			height: 24,width: 640,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'combobox',
			style: 'position:absolute;left:0px;top:5px;width:220px;height:19px;',
			width: 220,
			height: 19,
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПолеВводаЗначениеКорректировкиРаздел3_2',
			style: 'position:absolute;left:226px;top:5px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеВводаКомментарийРаздел3_2',
			width: 288,
			height: 19,
			style: 'position:absolute;left:352px;top:5px;width:288px;height:19px;',
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
			style: 'position:absolute;left:712px;top:5px;width:60px;height:15px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:764px;height:48px;',
			height: 48,width: 764,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'Ед. измерения:',
			style: 'position:absolute;left:0px;top:0px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПолеВводаТочностьЕдиницыИзмерения',
			style: 'position:absolute;left:222px;top:0px;width:32px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ПолеВводаДатаСдачи',
			width: 80,
			height: 19,
			style: 'position:absolute;left:82px;top:23px;width:80px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:82px;top:0px;width:80px;height:19px;',
			width: 80,
			height: 19,
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:526px;top:23px;width:238px;height:19px;',
			width: 238,
			height: 19,
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:171px;top:23px;width:116px;height:19px;',
			width: 116,
			height: 19,
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'НомерКорректировки',
			style: 'position:absolute;left:302px;top:23px;width:49px;height:19px;',
		},
					]
				},
			]
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:425px;width:780px;height:25px;',
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
});