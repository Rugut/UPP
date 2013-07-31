Ext.require(['Данные.Отчеты.XYZABCАнализПродаж'], function () 
{
	Ext.define('Отчеты.XYZABCАнализПродаж.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:660px;height:430px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'XYZ/ABC-анализ продаж',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'по:',
			style: 'position:absolute;left:519px;top:33px;width:16px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаОкончания',
			width: 113,
			height: 19,
			style: 'position:absolute;left:539px;top:33px;width:113px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:467px;top:58px;width:185px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:157px;top:58px;width:167px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьАнализируемыйПараметр',
			text: 'Анализируемый параметр:',
			style: 'position:absolute;left:8px;top:58px;width:145px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Анализируемый объект:',
			style: 'position:absolute;left:333px;top:58px;width:130px;height:19px;text-align:center;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:83px;width:644px;height:44px;',
			height: 44,width: 644,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ОтборЗначениеКласс',
			width: 318,
			height: 19,
			style: 'position:absolute;left:326px;top:0px;width:318px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'XYZ-класс',
			style: 'position:absolute;left:0px;top:0px;width:144px;height:18px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:149px;top:0px;width:167px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:25px;width:644px;height:19px;',
			height: 19,width: 644,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ОтборЗначениеКлассABC',
			width: 318,
			height: 19,
			style: 'position:absolute;left:326px;top:0px;width:318px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'ABC-класс',
			style: 'position:absolute;left:0px;top:0px;width:144px;height:18px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:149px;top:0px;width:167px;height:19px;',
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
			name: 'Надпись1',
			text: 'Количество периодов:',
			style: 'position:absolute;left:333px;top:33px;width:130px;height:19px;text-align:center;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'КоличествоПериодовАнализа',
			style: 'position:absolute;left:467px;top:33px;width:47px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПериодичность',
			text: 'Периодичность:',
			style: 'position:absolute;left:8px;top:33px;width:145px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'Периодичность.Представление',
			width: 167,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:157px;top:33px;width:167px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Отчеты.XYZABCАнализПродаж.ФормаСобытия'], function ()
					{
						var объект = Ext.create("Отчеты.XYZABCАнализПродаж.ФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Отчеты.XYZABCАнализПродаж.ФормаСобытия'], function ()
					{
						var объект = Ext.create("Отчеты.XYZABCАнализПродаж.ФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:660px;height:25px;',
			dock: 'top',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'Действия',
					menu: [
				'-',
				{
					text:'Сформировать',
				},
				'-',
				{
					text:'Отбор',
				},
				'-',
				{
					text:'Заголовок',
				},
				'-',
				{
					text:'Настройка ...',
				},
				{
					text:'Восстановить значения...',
				},
				{
					text:'Сохранить значения...',
				},
				'-',
				{
					text:'Закрыть',
				},
					]
				},
				'-',
				{
					text:'Сформировать',
				},
				'-',
				{
					text:'Отбор',
				},
				'-',
				{
					text:'Заголовок',
				},
				'-',
				{
					text:'Настройка ...',
				},
				{
					text:'Восстановить значения...',
				},
				{
					text:'Сохранить значения...',
				},
				'-',
				{
					text:'Диаграмма',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
	]
	});
});