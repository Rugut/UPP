Ext.require(['Данные.Отчеты.ДвиженияДокумента'], function () 
{
	Ext.define('Отчеты.ДвиженияДокумента.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:712px;height:514px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Отчет по движениям документа',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:712px;height:25px;',
			width: 712,
			height: 25,
			items:
			[
				{
					text:'Сформировать',
				},
				'-',
				{
					text:'Сохранить значения...',
				},
				{
					text:'Восстановить значения...',
				},
			]
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'Документ.Представление',
			width: 340,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:102px;top:33px;width:340px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Отчеты.ДвиженияДокумента.ФормаСобытия'], function ()
					{
						var объект = Ext.create("Отчеты.ДвиженияДокумента.ФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Отчеты.ДвиженияДокумента.ФормаСобытия'], function ()
					{
						var объект = Ext.create("Отчеты.ДвиженияДокумента.ФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Документ отчета:',
			style: 'position:absolute;left:8px;top:33px;width:92px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ВыводитьДетализациюПо_',
			text: 'Выводить детализацию по:',
			style: 'position:absolute;left:456px;top:33px;width:147px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:612px;top:33px;width:92px;height:19px;',
			width: 92,
			height: 19,
		},
		],
	}],
	dockedItems:
	[
	]
	});
});