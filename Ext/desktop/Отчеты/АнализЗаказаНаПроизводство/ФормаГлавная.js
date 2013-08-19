Ext.require(['Данные.Отчеты.АнализЗаказаНаПроизводство'], function () 
{
	Ext.define('Отчеты.АнализЗаказаНаПроизводство.ФормаГлавная',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:767px;height:406px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Анализ заказа на производство',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:767px;height:25px;',
			items:
			[
				'-',
				{
					text:'Сформировать',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьЗаказ',
			text: 'Заказ на производство:',
			style: 'position:absolute;left:8px;top:33px;width:135px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Заказ.Представление',
			width: 611,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:148px;top:33px;width:611px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Отчеты.АнализЗаказаНаПроизводство.ФормаГлавнаяСобытия'], function ()
					{
						var объект = Ext.create("Отчеты.АнализЗаказаНаПроизводство.ФормаГлавнаяСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Отчеты.АнализЗаказаНаПроизводство.ФормаГлавнаяСобытия'], function ()
					{
						var объект = Ext.create("Отчеты.АнализЗаказаНаПроизводство.ФормаГлавнаяСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:623px;top:0px;width:144px;height:24px;',
			height: 24,width: 144,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'На дату',
					items:
					[
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ПолеВводаНаДату',
			width: 80,
			height: 19,
			style: 'position:absolute;left:57px;top:2px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаДату',
			text: 'На дату:',
			style: 'position:absolute;left:0px;top:2px;width:55px;height:19px;',
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