Ext.require(['Данные.Отчеты.ОтчетПоДаннымКонтрагента'], function () 
{
	Ext.define('Отчеты.ОтчетПоДаннымКонтрагента.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:810px;height:486px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Отчет по данным контрагента',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'НачОтчета',
			text: 'На дату:',
			style: 'position:absolute;left:8px;top:7px;width:52px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаОтчета',
			width: 80,
			height: 19,
			style: 'position:absolute;left:62px;top:7px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'по контрагенту:',
			style: 'position:absolute;left:144px;top:7px;width:88px;height:19px;text-align:center;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'КонтрагентОтчета.Представление',
			width: 220,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:234px;top:7px;width:220px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Отчеты.ОтчетПоДаннымКонтрагента.ФормаСобытия'], function ()
					{
						var объект = Ext.create("Отчеты.ОтчетПоДаннымКонтрагента.ФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Отчеты.ОтчетПоДаннымКонтрагента.ФормаСобытия'], function ()
					{
						var объект = Ext.create("Отчеты.ОтчетПоДаннымКонтрагента.ФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:35px;width:794px;height:418px;',
			height: 418,width: 794,
			items:
			[
				{
				},
				{
					items:
					[
		{
			xtype: 'itemselector',
			style: 'position:absolute;left:6px;top:46px;width:780px;height:324px;',
		},
		{
			xtype: 'label',
			text: 'Состав и порядок отчета',
			style: 'position:absolute;left:6px;top:6px;width:780px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Выводить конт.инф. контактных лиц',
			style: 'position:absolute;left:6px;top:377px;width:205px;height:15px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:22px;width:780px;height:24px;',
			width: 780,
			height: 24,
			items:
			[
				{
					text:'Снять флажки',
				},
				{
					text:'Установить флажки',
				},
				'-',
				{
					text:'Вверх',
				},
				{
					text:'Вниз',
				},
			]
		},
					]
				},
			]
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:461px;width:810px;height:25px;',
			width: 810,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Сформировать',
				},
				'-',
				{
					text:'Закрыть',
					handler: function () {this.up('window').close();},
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