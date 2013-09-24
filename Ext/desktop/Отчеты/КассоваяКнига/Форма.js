Ext.require(['Данные.Отчеты.КассоваяКнига'], function () 
{
	Ext.define('Отчеты.КассоваяКнига.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:639px;height:420px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Кассовая книга за период',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Организация:',
			style: 'position:absolute;left:319px;top:33px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Организация.Представление',
			width: 220,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:411px;top:33px;width:220px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Отчеты.КассоваяКнига.ФормаСобытия'], function ()
					{
						var объект = Ext.create("Отчеты.КассоваяКнига.ФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Отчеты.КассоваяКнига.ФормаСобытия'], function ()
					{
						var объект = Ext.create("Отчеты.КассоваяКнига.ФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
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
					tooltip:'Сформировать отчет',
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
					tooltip:'Сформировать отчет',
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
			name: 'Надпись36',
			text: 'Период с:',
			style: 'position:absolute;left:8px;top:33px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаНач',
			width: 80,
			height: 19,
			style: 'position:absolute;left:91px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись37',
			text: 'по:',
			style: 'position:absolute;left:173px;top:33px;width:16px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаКон',
			width: 80,
			height: 19,
			style: 'position:absolute;left:191px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:273px;top:33px;width:19px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Пересчитать номера листов с начала года',
			style: 'position:absolute;left:8px;top:60px;width:284px;height:16px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Выводить основания кассовых ордеров',
			style: 'position:absolute;left:8px;top:81px;width:284px;height:16px;',
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:319px;top:60px;width:312px;height:58px;',
			height: 58,width: 312,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьПоследнийЛист',
			text: 'Последний лист:',
			style: 'position:absolute;left:0px;top:0px;width:88px;height:16px;text-align:left;',
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Обычный',
			style: 'position:absolute;left:92px;top:0px;width:72px;height:16px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Последний в месяце',
			style: 'position:absolute;left:92px;top:21px;width:128px;height:16px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Последний в году',
			style: 'position:absolute;left:92px;top:42px;width:112px;height:16px;',
		},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Всегда выводить листы на начало и конец периода',
			style: 'position:absolute;left:8px;top:102px;width:284px;height:15px;',
		},
		],
	}],
	dockedItems:
	[
	]
	});
});