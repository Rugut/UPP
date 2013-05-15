Ext.define('Обработки.ПечатьТТН1208.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:997px;height:579px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Печать ТТН',
	
	items:
	[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'По накладной:',
			style: 'position:absolute;left:3px;top:4px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Документ',
			style: 'position:absolute;left:90px;top:4px;width:430px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:3px;top:30px;width:990px;height:544px;',
			height: 544,width: 990,
			items:
			[
				{
					title:'1-Т',
					items:
					[
		{
			xtype: 'fieldset',
			title: ' Автотранспортное средство ',
			style: 'position:absolute;left:0px;top:0px;width:512px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Марка автомобиля:',
			style: 'position:absolute;left:6px;top:21px;width:104px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'МаркаАвтомобиля',
			style: 'position:absolute;left:112px;top:21px;width:200px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Марка прицепа:',
			style: 'position:absolute;left:6px;top:45px;width:104px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'МаркаПрицепа',
			style: 'position:absolute;left:112px;top:45px;width:200px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Гос номер:',
			style: 'position:absolute;left:314px;top:21px;width:60px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ГосНомерАвтомобиля',
			style: 'position:absolute;left:376px;top:21px;width:136px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'Гос номер:',
			style: 'position:absolute;left:314px;top:45px;width:60px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ГосНомерПрицепа',
			style: 'position:absolute;left:376px;top:45px;width:136px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Контрагенты ',
			style: 'position:absolute;left:0px;top:138px;width:512px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'Пункт погрузки:',
			style: 'position:absolute;left:6px;top:252px;width:104px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПунктПогрузки',
			style: 'position:absolute;left:112px;top:252px;width:400px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись7',
			text: 'Перевозчик:',
			style: 'position:absolute;left:6px;top:159px;width:104px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Перевозчик',
			style: 'position:absolute;left:112px;top:159px;width:400px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись8',
			text: 'Заказчик:',
			style: 'position:absolute;left:6px;top:183px;width:104px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Заказчик',
			style: 'position:absolute;left:112px;top:183px;width:400px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись9',
			text: 'Пункт разгрузки:',
			style: 'position:absolute;left:6px;top:228px;width:104px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПунктРазгрузки',
			style: 'position:absolute;left:112px;top:228px;width:400px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Места назначения ',
			style: 'position:absolute;left:0px;top:207px;width:512px;height:16px;',
		},
		{
			xtype: 'fieldset',
			title: 'Прочие сведения о доставке ',
			style: 'position:absolute;left:0px;top:276px;width:512px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'Надпись10',
			text: 'Срок доставки:',
			style: 'position:absolute;left:6px;top:297px;width:104px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			name: 'СрокДоставки',
			style: 'position:absolute;left:112px;top:297px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись11',
			text: 'Водитель:',
			style: 'position:absolute;left:6px;top:90px;width:104px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Водитель',
			style: 'position:absolute;left:112px;top:90px;width:400px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись12',
			text: 'Вид перевозки:',
			style: 'position:absolute;left:6px;top:321px;width:104px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ВидПеревозки',
			style: 'position:absolute;left:112px;top:321px;width:400px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись13',
			text: 'Лицензионная карточка:',
			style: 'position:absolute;left:220px;top:297px;width:130px;height:19px;text-align:left;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:352px;top:297px;width:160px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Водитель ',
			style: 'position:absolute;left:0px;top:69px;width:512px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'Надпись14',
			text: 'Удостоверение №:',
			style: 'position:absolute;left:6px;top:114px;width:104px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ВодительскоеУдостоверение',
			style: 'position:absolute;left:112px;top:114px;width:400px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ГосНомерАвтомобиля2',
			style: 'position:absolute;left:376px;top:21px;width:136px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Цены',
			style: 'position:absolute;left:0px;top:346px;width:512px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьТипЦен',
			text: 'Тип цен:',
			style: 'position:absolute;left:6px;top:366px;width:104px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ТипЦен',
			style: 'position:absolute;left:112px;top:366px;width:400px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:499px;width:988px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Печать',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
					]
				},
				{
					title:'Транспортная накладная',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:499px;width:988px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Печать',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
					]
				},
				{
					title:'Сопроводительная ведомость',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:499px;width:988px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Печать',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
					]
				},
			]
		},
	],
	dockedItems:
	[
	]
});