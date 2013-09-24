Ext.require(['Данные.Обработки.ПечатьТТН'], function () 
{
	Ext.define('Обработки.ПечатьТТН.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:997px;height:579px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Печать ТТН',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
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
			width: 430,
			height: 19,
			style: 'position:absolute;left:90px;top:4px;width:430px;height:19px;',
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:3px;top:30px;width:990px;height:544px;',
			height: 544,width: 990,
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			text: ' Автотранспортное средство ',
			style: 'position:absolute;left:0px;top:0px;width:512px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
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
			width: 200,
			height: 19,
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
			width: 200,
			height: 19,
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
			width: 136,
			height: 19,
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
			width: 136,
			height: 19,
			style: 'position:absolute;left:376px;top:45px;width:136px;height:19px;',
		},
		{
			xtype: 'label',
			text: 'Контрагенты ',
			style: 'position:absolute;left:0px;top:138px;width:512px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
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
			width: 400,
			height: 19,
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
			width: 400,
			height: 19,
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
			width: 400,
			height: 19,
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
			width: 400,
			height: 19,
			style: 'position:absolute;left:112px;top:228px;width:400px;height:19px;',
		},
		{
			xtype: 'label',
			text: 'Места назначения ',
			style: 'position:absolute;left:0px;top:207px;width:512px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			text: 'Прочие сведения о доставке ',
			style: 'position:absolute;left:0px;top:276px;width:512px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
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
			format: 'd.m.Y',
			name: 'СрокДоставки',
			width: 88,
			height: 19,
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
			width: 400,
			height: 19,
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
			width: 400,
			height: 19,
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
			width: 160,
			height: 19,
		},
		{
			xtype: 'label',
			text: 'Водитель ',
			style: 'position:absolute;left:0px;top:69px;width:512px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
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
			width: 400,
			height: 19,
			style: 'position:absolute;left:112px;top:114px;width:400px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ГосНомерАвтомобиля2',
			width: 136,
			height: 19,
			style: 'position:absolute;left:376px;top:21px;width:136px;height:19px;',
		},
		{
			xtype: 'label',
			text: 'Цены',
			style: 'position:absolute;left:0px;top:346px;width:512px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			name: 'НадписьТипЦен',
			text: 'Тип цен:',
			style: 'position:absolute;left:6px;top:366px;width:104px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'ТипЦен.Представление',
			width: 400,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:112px;top:366px;width:400px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.ПечатьТТН.ФормаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ПечатьТТН.ФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.ПечатьТТН.ФормаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ПечатьТТН.ФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:499px;width:988px;height:25px;',
			width: 988,
			height: 25,
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Печать',
					tooltip:'Печать товаротранспортной накладной',
				},
				'-',
				{
					text:'Закрыть',
					tooltip:'Закрыть',
					iconCls:'x-Close',
					handler: function () {this.up('window').close();},
				},
			]
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:499px;width:988px;height:25px;',
			width: 988,
			height: 25,
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Печать',
					tooltip:'Печать транспортной накладной, Приложение № 4',
				},
				'-',
				{
					text:'Закрыть',
					tooltip:'Закрыть',
					iconCls:'x-Close',
					handler: function () {this.up('window').close();},
				},
			]
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:499px;width:988px;height:25px;',
			width: 988,
			height: 25,
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Печать',
					tooltip:'Печать сопроводительной ведомости, Приложение № 8',
				},
				'-',
				{
					text:'Закрыть',
					tooltip:'Закрыть',
					iconCls:'x-Close',
					handler: function () {this.up('window').close();},
				},
			]
		},
					]
				},
			]
		},
		],
	}],
	dockedItems:
	[
	]
	});
});