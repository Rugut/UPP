Ext.require(['Данные.Отчеты.СправкаРасчетПересчетСтоимостиОтложенныхНалоговыхАктивовИОбязательств'], function () 
{
	Ext.define('Отчеты.СправкаРасчетПересчетСтоимостиОтложенныхНалоговыхАктивовИОбязательств.Отчет',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:604px;height:416px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Пересчет стоимости отложенных налоговых активов и обязательств',
	
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
			style: 'position:absolute;left:177px;top:33px;width:73px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Организация.Представление',
			width: 342,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:254px;top:33px;width:342px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Отчеты.СправкаРасчетПересчетСтоимостиОтложенныхНалоговыхАктивовИОбязательств.ОтчетСобытия'], function ()
					{
						var объект = Ext.create("Отчеты.СправкаРасчетПересчетСтоимостиОтложенныхНалоговыхАктивовИОбязательств.ОтчетСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Отчеты.СправкаРасчетПересчетСтоимостиОтложенныхНалоговыхАктивовИОбязательств.ОтчетСобытия'], function ()
					{
						var объект = Ext.create("Отчеты.СправкаРасчетПересчетСтоимостиОтложенныхНалоговыхАктивовИОбязательств.ОтчетСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:604px;height:25px;',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'Сформировать',
				},
				{
					text:'Заголовок',
				},
				{
					text:'',
				},
					]
				},
				'-',
				{
					text:'Сформировать',
				},
				'-',
				{
					text:'Заголовок',
				},
				'-',
				{
					text:'',
				},
				'-',
				{
					text:'Восстановить значения...',
				},
				{
					text:'Сохранить значения...',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьПериод',
			text: 'Период:',
			style: 'position:absolute;left:8px;top:33px;width:53px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПредставлениеПериодаРегистрации',
			width: 109,
			height: 19,
			style: 'position:absolute;left:61px;top:33px;width:109px;height:19px;',
		},
		],
	}],
	dockedItems:
	[
	]
	});
});