Ext.require(['Данные.Справочники.РегистрацияВИФНС'], function () 
{
	Ext.define('Справочники.РегистрацияВИФНС.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:480px;height:382px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Регистрация в ИФНС',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'НадписьКод',
			text: 'Код налогового органа:',
			style: 'position:absolute;left:8px;top:60px;width:131px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Код',
			width: 42,
			height: 19,
			style: 'position:absolute;left:144px;top:60px;width:42px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Наименование',
			width: 328,
			height: 19,
			style: 'position:absolute;left:144px;top:137px;width:328px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:480px;height:25px;',
			width: 480,
			height: 25,
			items:
			[
				{
					xtype: 'splitbutton',
					text:'Действия',
					menu: [
				{
					text:'Найти в списке',
				},
				'-',
				{
					text:'Перечитать',
				},
				{
					text:'Скопировать',
				},
				{
					text:'Записать',
				},
				{
					text:'Записать и закрыть',
				},
				'-',
				{
					text:'Закрыть',
				},
					]
				},
				'-',
				{
					text:'Найти в списке',
				},
				{
					text:'Перечитать',
				},
				{
					text:'Скопировать',
				},
				'-',
				{
					text:'Заполнить',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:218px;top:60px;width:198px;height:19px;',
			height: 19,width: 198,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'КПП',
			width: 92,
			height: 19,
			style: 'position:absolute;left:106px;top:0px;width:92px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Кра��коеНаименование',
			width: 328,
			height: 19,
			style: 'position:absolute;left:144px;top:109px;width:328px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПредставитель',
			text: 'Представитель:',
			style: 'position:absolute;left:14px;top:187px;width:84px;height:19px;',
		},
		{
			xtype: 'label',
			text: 'Наименование налогового органа',
			style: 'position:absolute;left:8px;top:86px;width:464px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			name: 'НадписьПолноеНаименование',
			text: 'Полное:',
			style: 'position:absolute;left:14px;top:137px;width:125px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКраткоеНаименование',
			text: 'Краткое:',
			style: 'position:absolute;left:14px;top:109px;width:125px;height:19px;',
		},
		{
			xtype: 'label',
			text: 'Сведения о представителе',
			style: 'position:absolute;left:8px;top:164px;width:464px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:14px;top:210px;width:458px;height:115px;',
			height: 115,width: 458,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьДокументПредставителя',
			text: 'Документ, подтверждающий полномочия представителя:',
			style: 'position:absolute;left:0px;top:33px;width:128px;height:82px;text-align:left;',
		},
		{
			xtype: 'textarea',
			hideLabel: true,
			disabled: false,
			name: 'ДокументПредставителя',
			style: 'position:absolute;left:130px;top:33px;width:328px;height:82px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'УполномоченноеЛицоПредставителя',
			width: 328,
			height: 19,
			style: 'position:absolute;left:130px;top:5px;width:328px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьФИОУполномоченногоФизлица',
			text: 'ФИО уполномоченного лица представителя:',
			style: 'position:absolute;left:0px;top:0px;width:128px;height:27px;',
		},
		{
			xtype: 'label',
			text: '',
			style: 'position:absolute;left:0px;top:28px;width:458px;height:3px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьДокументПредставителя1',
			text: 'Документ, подтверждающий полномочия представителя:',
			style: 'position:absolute;left:0px;top:9px;width:128px;height:106px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ДокументПредставителя1',
			width: 328,
			height: 106,
			style: 'position:absolute;left:130px;top:9px;width:328px;height:106px;',
		},
		{
			xtype: 'label',
			text: '',
			style: 'position:absolute;left:0px;top:2px;width:458px;height:3px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
					]
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Представитель',
			width: 328,
			height: 19,
			style: 'position:absolute;left:144px;top:187px;width:328px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Владелец.Представление',
			width: 328,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:144px;top:33px;width:328px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.РегистрацияВИФНС.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.РегистрацияВИФНС.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.РегистрацияВИФНС.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.РегистрацияВИФНС.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:33px;width:131px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДоверенность',
			text: 'Доверенность:',
			style: 'position:absolute;left:14px;top:330px;width:125px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'Доверенность.Представление',
			width: 328,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:144px;top:330px;width:328px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.РегистрацияВИФНС.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.РегистрацияВИФНС.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.РегистрацияВИФНС.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.РегистрацияВИФНС.ФормаЭлементаСобытия");
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
			style: 'position:absolute;left:0px;top:357px;width:480px;height:25px;',
			width: 480,
			height: 25,
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
					text:'Записать',
				},
				'-',
				{
					text:'Закрыть',
					handler: function () {this.up('window').close();},
				},
			]
		},
	]
	});
});