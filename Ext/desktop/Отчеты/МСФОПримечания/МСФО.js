Ext.require(['Данные.Отчеты.МСФОПримечания'], function () 
{
	Ext.define('Отчеты.МСФОПримечания.МСФО',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:780px;height:434px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Примечания',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:780px;height:25px;',
			width: 780,
			height: 25,
			items:
			[
				{
					text:'Заполнить',
					tooltip:'Заполнить отчет по учетным данным',
				},
				'-',
				{
					text:'Очистить',
					tooltip:'Очистить все данные отчета',
				},
				'-',
				{
					text:'Настройка',
					tooltip:'Настройки отчета',
				},
				'-',
				{
					text:'Поиск',
					tooltip:'Поиск в регламентированном отчете',
				},
				'-',
				{
					text:'Обновить',
					tooltip:'Обновить сведения об организации',
				},
				'-',
				{
					text:'Режим ввода информации',
					tooltip:'Режим ввода информации',
				},
				'-',
				{
					text:'Справка',
					tooltip:'Открыть справку',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:409px;width:780px;height:25px;',
			width: 780,
			height: 25,
			items:
			[
				{
					xtype: 'tbfill'
				},
			]
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:82px;width:765px;height:298px;',
			height: 298,width: 765,
			items:
			[
				{
					items:
					[
		{
			xtype: 'combobox',
			style: 'position:absolute;left:6px;top:251px;width:160px;height:19px;',
			width: 160,
			height: 19,
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПолеВводаЗначениеКорректировкиПримечания',
			style: 'position:absolute;left:172px;top:251px;width:120px;height:19px;',
			width: 120,
			height: 19,
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеВводаКомментарийПримечания',
			width: 290,
			height: 19,
			style: 'position:absolute;left:298px;top:251px;width:290px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтрокиПримечания',
			text: 'Добавить',
			style: 'position:absolute;left:591px;top:251px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтрокиПримечания',
			text: 'Удалить',
			style: 'position:absolute;left:677px;top:251px;width:80px;height:19px;',
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'combobox',
			style: 'position:absolute;left:6px;top:252px;width:160px;height:19px;',
			width: 160,
			height: 19,
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПолеВводаЗначениеКорректировкиПримечанияСД',
			style: 'position:absolute;left:172px;top:252px;width:120px;height:19px;',
			width: 120,
			height: 19,
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеВводаКомментарийПримечанияСД',
			width: 289,
			height: 19,
			style: 'position:absolute;left:298px;top:252px;width:289px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтрокиПримечанияСД',
			text: 'Добавить',
			style: 'position:absolute;left:591px;top:253px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтрокиПримечанияСД',
			text: 'Удалить',
			style: 'position:absolute;left:677px;top:253px;width:80px;height:19px;',
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'combobox',
			style: 'position:absolute;left:6px;top:253px;width:160px;height:19px;',
			width: 160,
			height: 19,
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПолеВводаЗначениеКорректировкиДСОтОперДеят',
			style: 'position:absolute;left:172px;top:253px;width:120px;height:19px;',
			width: 120,
			height: 19,
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеВводаКомментарийДСОтОперДеят',
			width: 459,
			height: 19,
			style: 'position:absolute;left:298px;top:253px;width:459px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: '_ИндикаторВнешнегоОтчета',
			text: 'Внешний отчет',
			style: 'position:absolute;left:694px;top:5px;width:78px;height:15px;',
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:33px;width:765px;height:49px;',
			height: 49,width: 765,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'combobox',
			style: 'position:absolute;left:80px;top:0px;width:80px;height:19px;',
			width: 80,
			height: 19,
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПолеВводаТочностьЕдиницыИзмерения',
			style: 'position:absolute;left:224px;top:0px;width:32px;height:19px;',
			width: 32,
			height: 19,
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
			style: 'position:absolute;left:80px;top:24px;width:80px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			name: 'ВидОтчета.Представление',
			width: 220,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:545px;top:0px;width:220px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Отчеты.МСФОПримечания.МСФОСобытия'], function ()
					{
						var объект = Ext.create("Отчеты.МСФОПримечания.МСФОСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Отчеты.МСФОПримечания.МСФОСобытия'], function ()
					{
						var объект = Ext.create("Отчеты.МСФОПримечания.МСФОСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Отключить авторасчет вычисляемых ячеек',
			style: 'position:absolute;left:172px;top:24px;width:244px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:380px;width:765px;height:21px;',
			height: 21,width: 765,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись31',
			text: 'Комментарий:',
			style: 'position:absolute;left:0px;top:4px;width:76px;height:15px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			width: 680,
			height: 19,
			style: 'position:absolute;left:85px;top:2px;width:680px;height:19px;',
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