Ext.require(['Данные.Документы.ДоговорНаВыполнениеРаботСФизЛицом'], function () 
{
	Ext.define('Документы.ДоговорНаВыполнениеРаботСФизЛицом.ФормаОтраженияВУчете',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:514px;height:173px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Отражение в учете договора',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'НадписьСпособОтраженияВБухучете',
			text: 'Способ отражения в бухучете:',
			style: 'position:absolute;left:8px;top:8px;width:157px;height:15px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'СпособОтраженияВБухучете.Представление',
			width: 498,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:8px;top:27px;width:498px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ДоговорНаВыполнениеРаботСФизЛицом.ФормаОтраженияВУчетеСобытия'], function ()
					{
						var объект = Ext.create("Документы.ДоговорНаВыполнениеРаботСФизЛицом.ФормаОтраженияВУчетеСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ДоговорНаВыполнениеРаботСФизЛицом.ФормаОтраженияВУчетеСобытия'], function ()
					{
						var объект = Ext.create("Документы.ДоговорНаВыполнениеРаботСФизЛицом.ФормаОтраженияВУчетеСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьОтнесениеРасходовКДеятельностиЕНВД',
			text: 'Отнесение расходов к деятельности ЕНВД:',
			style: 'position:absolute;left:8px;top:106px;width:224px;height:15px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'ОтнесениеРасходовКДеятельностиЕНВД.Представление',
			width: 498,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:8px;top:121px;width:498px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ДоговорНаВыполнениеРаботСФизЛицом.ФормаОтраженияВУчетеСобытия'], function ()
					{
						var объект = Ext.create("Документы.ДоговорНаВыполнениеРаботСФизЛицом.ФормаОтраженияВУчетеСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ДоговорНаВыполнениеРаботСФизЛицом.ФормаОтраженияВУчетеСобытия'], function ()
					{
						var объект = Ext.create("Документы.ДоговорНаВыполнениеРаботСФизЛицом.ФормаОтраженияВУчетеСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьРасшифровкаОтражениеВБухучете',
			text: 'НадписьРасшифровкаОтражениеВБухучете',
			style: 'position:absolute;left:8px;top:46px;width:498px;height:56px;text-align:left;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:148px;width:514px;height:25px;',
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