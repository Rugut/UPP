Ext.require(['Данные.Отчеты.ЖурналУчетаВыданныхСчетовФактур'], function () 
{
	Ext.define('Отчеты.ЖурналУчетаВыданныхСчетовФактур.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:639px;height:488px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Журнал учета выданных счетов-фактур',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:639px;height:25px;',
			width: 639,
			height: 25,
			items:
			[
				{
					xtype: 'splitbutton',
					text:'Действия',
					menu: [
				{
					text:'Сформировать',
					tooltip:'8ef786c-fd3b-4ff0-98dc-2e22f37113f',
				},
				{
					text:'Восстановить значения...',
					tooltip:'Восстановить значения',
					iconCls:'x-RestoreValues',
				},
				{
					text:'Сохранить значения...',
					tooltip:'Сохранить значения',
					iconCls:'x-SaveValues',
				},
				'-',
				{
					text:'Закрыть',
					tooltip:'Закрыть',
					iconCls:'x-Close',
				},
				'-',
				{
					text:'Справка',
					tooltip:'Открыть справку',
				},
					]
				},
				'-',
				{
					text:'Сформировать',
					tooltip:'8ef786c-fd3b-4ff0-98dc-2e22f37113f',
				},
				'-',
				{
					text:'Сохранить значения...',
					tooltip:'Сохранить значения',
					iconCls:'x-SaveValues',
				},
				{
					text:'Восстановить значения...',
					tooltip:'Восстановить значения',
					iconCls:'x-RestoreValues',
				},
				'-',
				{
					text:'Справка',
					tooltip:'Открыть справку',
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Период с:',
			style: 'position:absolute;left:8px;top:33px;width:56px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'НачалоПериода',
			width: 80,
			height: 19,
			style: 'position:absolute;left:66px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'по:',
			style: 'position:absolute;left:148px;top:33px;width:16px;height:19px;text-align:right;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'КонецПериода',
			width: 80,
			height: 19,
			style: 'position:absolute;left:166px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаВыбораПериода',
			text: '...',
			style: 'position:absolute;left:248px;top:33px;width:20px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Организация:',
			style: 'position:absolute;left:288px;top:33px;width:76px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Организация.Представление',
			width: 267,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:364px;top:33px;width:267px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Отчеты.ЖурналУчетаВыданныхСчетовФактур.ФормаСобытия'], function ()
					{
						var объект = Ext.create("Отчеты.ЖурналУчетаВыданныхСчетовФактур.ФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Отчеты.ЖурналУчетаВыданныхСчетовФактур.ФормаСобытия'], function ()
					{
						var объект = Ext.create("Отчеты.ЖурналУчетаВыданныхСчетовФактур.ФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Сформировать отчет по стандартной форме',
			style: 'position:absolute;left:8px;top:56px;width:247px;height:15px;',
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:73px;width:623px;height:48px;',
			height: 48,width: 623,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Отображать счета-фактуры на предв.оплату (до 2009 года)',
			style: 'position:absolute;left:6px;top:6px;width:316px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Группировать по контрагентам',
			style: 'position:absolute;left:399px;top:28px;width:183px;height:18px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Отбирать по контрагенту',
			style: 'position:absolute;left:6px;top:28px;width:149px;height:15px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'КонтрагентДляОтбора.Представление',
			width: 240,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:157px;top:28px;width:240px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Отчеты.ЖурналУчетаВыданныхСчетовФактур.ФормаСобытия'], function ()
					{
						var объект = Ext.create("Отчеты.ЖурналУчетаВыданныхСчетовФактур.ФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Отчеты.ЖурналУчетаВыданныхСчетовФактур.ФормаСобытия'], function ()
					{
						var объект = Ext.create("Отчеты.ЖурналУчетаВыданныхСчетовФактур.ФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Отображать только счета-фактуры на предв. оплату',
			style: 'position:absolute;left:330px;top:6px;width:287px;height:15px;',
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			name: 'ОписаниеСтандартныхНастроек',
			text: 'Выбранный режим формирования отчета соответствует правилам ведения журнала учета выданных счетов-фактур и книги продаж. Для использования дополнительных возможностей отчета снимите установленный флажок "Сформировать отчет по стандартной форме".',
			style: 'position:absolute;left:6px;top:0px;width:611px;height:48px;',
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