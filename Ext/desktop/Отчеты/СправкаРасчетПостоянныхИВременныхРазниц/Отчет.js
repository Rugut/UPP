Ext.require(['Данные.Отчеты.СправкаРасчетПостоянныхИВременныхРазниц'], function () 
{
	Ext.define('Отчеты.СправкаРасчетПостоянныхИВременныхРазниц.Отчет',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:604px;height:416px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Постоянные и временные разницы',
	
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
			style: 'position:absolute;left:210px;top:33px;width:76px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Организация.Представление',
			width: 300,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:296px;top:33px;width:300px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Отчеты.СправкаРасчетПостоянныхИВременныхРазниц.ОтчетСобытия'], function ()
					{
						var объект = Ext.create("Отчеты.СправкаРасчетПостоянныхИВременныхРазниц.ОтчетСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Отчеты.СправкаРасчетПостоянныхИВременныхРазниц.ОтчетСобытия'], function ()
					{
						var объект = Ext.create("Отчеты.СправкаРасчетПостоянныхИВременныхРазниц.ОтчетСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:604px;height:25px;',
			width: 604,
			height: 25,
			items:
			[
				{
					xtype: 'splitbutton',
					text:'Действия',
					menu: [
				{
					text:'Сформировать',
					tooltip:'Выполнить формирование отчета',
				},
				{
					text:'Заголовок',
					tooltip:'Заголовок отчета',
				},
				{
					text:'Подписи',
					tooltip:'',
				},
					]
				},
				'-',
				{
					text:'Сформировать',
					tooltip:'Выполнить формирование отчета',
				},
				'-',
				{
					text:'Заголовок',
					tooltip:'Заголовок отчета',
				},
				'-',
				{
					text:'Подписи',
					tooltip:'',
				},
				'-',
				{
					text:'Настройка',
					tooltip:'',
				},
				'-',
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
					text:'Справка',
					tooltip:'Открыть справку',
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'За период:',
			style: 'position:absolute;left:8px;top:34px;width:63px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПредставлениеПериодаРегистрации',
			width: 123,
			height: 19,
			style: 'position:absolute;left:76px;top:34px;width:123px;height:19px;',
		},
		],
	}],
	dockedItems:
	[
	]
	});
});