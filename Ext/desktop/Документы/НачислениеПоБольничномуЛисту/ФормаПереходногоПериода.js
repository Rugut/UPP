Ext.require(['Данные.Документы.НачислениеПоБольничномуЛисту'], function () 
{
	Ext.define('Документы.НачислениеПоБольничномуЛисту.ФормаПереходногоПериода',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:377px;height:142px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Расчет пособия за период после 1 января 2007 года',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'НадписьПричинаНетрудоспособностиПереходногоПериода',
			text: 'Причина нетрудоспособности:',
			style: 'position:absolute;left:8px;top:8px;width:154px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'ПричинаНетрудоспособностиПереходногоПериода.Представление',
			width: 200,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:169px;top:8px;width:200px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.НачислениеПоБольничномуЛисту.ФормаПереходногоПериодаСобытия'], function ()
					{
						var объект = Ext.create("Документы.НачислениеПоБольничномуЛисту.ФормаПереходногоПериодаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.НачислениеПоБольничномуЛисту.ФормаПереходногоПериодаСобытия'], function ()
					{
						var объект = Ext.create("Документы.НачислениеПоБольничномуЛисту.ФормаПереходногоПериодаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьСлучайУходаЗаБольнымРебенкомПереходногоПериода1',
			text: 'В случае ухода за ребенком:',
			style: 'position:absolute;left:8px;top:36px;width:154px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'СлучайУходаЗаБольнымРебенкомПереходногоПериода.Представление',
			width: 200,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:169px;top:36px;width:200px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.НачислениеПоБольничномуЛисту.ФормаПереходногоПериодаСобытия'], function ()
					{
						var объект = Ext.create("Документы.НачислениеПоБольничномуЛисту.ФормаПереходногоПериодаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.НачислениеПоБольничномуЛисту.ФормаПереходногоПериодаСобытия'], function ()
					{
						var объект = Ext.create("Документы.НачислениеПоБольничномуЛисту.ФормаПереходногоПериодаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьПроцентОплатыПереходногоПериода1',
			text: 'Процент среднего заработка:',
			style: 'position:absolute;left:8px;top:62px;width:154px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПроцентОплатыПереходногоПериода',
			style: 'position:absolute;left:169px;top:62px;width:74px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОграничениеПособияПереходногоПериода',
			text: 'Ограничение:',
			style: 'position:absolute;left:8px;top:90px;width:154px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'ОграничениеПособияПереходногоПериода.Представление',
			width: 200,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:169px;top:90px;width:200px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.НачислениеПоБольничномуЛисту.ФормаПереходногоПериодаСобытия'], function ()
					{
						var объект = Ext.create("Документы.НачислениеПоБольничномуЛисту.ФормаПереходногоПериодаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.НачислениеПоБольничномуЛисту.ФормаПереходногоПериодаСобытия'], function ()
					{
						var объект = Ext.create("Документы.НачислениеПоБольничномуЛисту.ФормаПереходногоПериодаСобытия");
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
			style: 'position:absolute;left:0px;top:117px;width:377px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'OK',
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