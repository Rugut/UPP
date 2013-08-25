Ext.require(['Данные.Отчеты.ЖурналУчетаСчетовФактур1137'], function () 
{
	Ext.define('Отчеты.ЖурналУчетаСчетовФактур1137.ФормаОтчета',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:815px;height:516px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Журнал учета полученных и выставленных счетов-фактур по Постановлению № 1137',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'button',
			name: 'КнопкаКварталНазад',
			text: '',
			style: 'position:absolute;left:8px;top:28px;width:20px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКвартал',
			text: '<НадписьКвартал>',
			style: 'position:absolute;left:35px;top:28px;width:108px;height:19px;text-align:center;',
		},
		{
			xtype: 'button',
			name: 'КнопкаКварталВперед',
			text: '',
			style: 'position:absolute;left:149px;top:28px;width:20px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:182px;top:28px;width:74px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Организация.Представление',
			width: 228,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:258px;top:28px;width:228px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Отчеты.ЖурналУчетаСчетовФактур1137.ФормаОтчетаСобытия'], function ()
					{
						var объект = Ext.create("Отчеты.ЖурналУчетаСчетовФактур1137.ФормаОтчетаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Отчеты.ЖурналУчетаСчетовФактур1137.ФормаОтчетаСобытия'], function ()
					{
						var объект = Ext.create("Отчеты.ЖурналУчетаСчетовФактур1137.ФормаОтчетаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:815px;height:24px;',
			width: 815,
			height: 24,
			items:
			[
				{
					text:'Сформировать',
				},
				'-',
				{
					text:'Настройка',
				},
				'-',
				{
					text:'Сохранить значения',
				},
				{
					text:'Восстановить значения',
				},
				'-',
				{
					text:'Справка',
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