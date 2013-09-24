Ext.require(['Данные.Документы.ПринятиеКУчетуНМА'], function () 
{
	Ext.define('Документы.ПринятиеКУчетуНМА.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:644px;height:412px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Принятие к учету НМА',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:644px;height:25px;',
			width: 644,
			height: 25,
			items:
			[
				'-',
				{
					xtype: 'splitbutton',
					text:'Перейти',
					menu: [
				{
					text:'Движения документа по регистрам',
					tooltip:'',
				},
				{
					text:'Структура подчиненности документа',
					tooltip:'',
				},
				'-',
					]
				},
				{
					text:'',
					tooltip:'Открыть свойства',
				},
				{
					text:'',
					tooltip:'Открыть категории',
				},
				'-',
				{
					text:'Дт/кт',
					tooltip:'Проводки БУ',
				},
				{
					text:'Дт/кт',
					tooltip:'Проводки НУ',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:387px;width:644px;height:25px;',
			width: 644,
			height: 25,
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Печать',
					tooltip:'Печать',
				},
				'-',
				{
					text:'OK',
					tooltip:'Записать объект и закрыть форму',
					iconCls:'x-WriteAndClose',
				},
				'-',
				{
					text:'Записать',
					tooltip:'Записать объект',
					iconCls:'x-SaveFile',
				},
				'-',
				{
					text:'Закрыть',
					tooltip:'Закрыть',
					iconCls:'x-Close',
					handler: function () {this.up('window').close();},
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Номер',
			width: 80,
			height: 19,
			style: 'position:absolute;left:90px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:172px;top:33px;width:16px;height:19px;text-align:center;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'Дата',
			width: 120,
			height: 19,
			style: 'position:absolute;left:190px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтражатьВ',
			text: 'Отражать в:',
			style: 'position:absolute;left:330px;top:33px;width:84px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:56px;width:80px;height:19px;text-align:left;',
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
			style: 'position:absolute;left:90px;top:56px;width:220px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ПринятиеКУчетуНМА.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПринятиеКУчетуНМА.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ПринятиеКУчетуНМА.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПринятиеКУчетуНМА.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'checkbox',
			boxLabel: 'бух. учете',
			style: 'position:absolute;left:416px;top:33px;width:72px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:360px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			width: 546,
			height: 19,
			style: 'position:absolute;left:90px;top:360px;width:546px;height:19px;',
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:83px;width:628px;height:271px;',
			height: 271,width: 628,
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьСпособОтраженияРасходов',
			text: 'Способ отражения расходов по амортизации:',
			style: 'position:absolute;left:12px;top:124px;width:236px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'СпособОтраженияРасходов.Представление',
			width: 369,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:251px;top:124px;width:369px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ПринятиеКУчетуНМА.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПринятиеКУчетуНМА.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ПринятиеКУчетуНМА.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПринятиеКУчетуНМА.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'СчетУчетаБУВнеоборотногоАктива.Представление',
			width: 80,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:251px;top:52px;width:80px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ПринятиеКУчетуНМА.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПринятиеКУчетуНМА.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ПринятиеКУчетуНМА.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПринятиеКУчетуНМА.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'СчетУчетаНУВнеоборотногоАктива.Представление',
			width: 80,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:251px;top:76px;width:80px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ПринятиеКУчетуНМА.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПринятиеКУчетуНМА.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ПринятиеКУчетуНМА.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПринятиеКУчетуНМА.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'НематериальныйАктив.Представление',
			width: 369,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:251px;top:28px;width:369px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ПринятиеКУчетуНМА.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПринятиеКУчетуНМА.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ПринятиеКУчетуНМА.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПринятиеКУчетуНМА.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			text: 'Вложения во внеоборотные активы',
			style: 'position:absolute;left:6px;top:6px;width:614px;height:17px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			text: 'Способ отражения расходов по амортизации',
			style: 'position:absolute;left:6px;top:103px;width:614px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			name: 'ИнфоНадписьРасходыНаНИОКР',
			text: 'ИнфоНадписьРасходыНаНИОКР',
			style: 'position:absolute;left:30px;top:148px;width:590px;height:56px;',
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			text: 'Общие сведения ',
			style: 'position:absolute;left:6px;top:6px;width:614px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			name: 'НадписьСпособПоступления',
			text: 'Способ поступления в организацию:',
			style: 'position:absolute;left:14px;top:75px;width:196px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'СпособПоступления.Представление',
			width: 234,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:212px;top:75px;width:234px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ПринятиеКУчетуНМА.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПринятиеКУчетуНМА.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ПринятиеКУчетуНМА.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПринятиеКУчетуНМА.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СрокПолезногоИспользованияБУ',
			style: 'position:absolute;left:212px;top:123px;width:80px;height:19px;',
			width: 80,
			height: 19,
		},
		{
			xtype: 'label',
			text: 'Параметры амортизации ',
			style: 'position:absolute;left:6px;top:102px;width:614px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Начислять амортизацию',
			style: 'position:absolute;left:298px;top:27px;width:148px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-trigger-square',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'СпособНачисленияАмортизацииБУ.Представление',
			width: 234,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:212px;top:147px;width:234px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ПринятиеКУчетуНМА.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПринятиеКУчетуНМА.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ПринятиеКУчетуНМА.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПринятиеКУчетуНМА.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'СчетУчетаБУ.Представление',
			width: 80,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:212px;top:27px;width:80px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ПринятиеКУчетуНМА.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПринятиеКУчетуНМА.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ПринятиеКУчетуНМА.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПринятиеКУчетуНМА.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'СчетНачисленияАмортизацииБУ.Представление',
			width: 80,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:212px;top:195px;width:80px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ПринятиеКУчетуНМА.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПринятиеКУчетуНМА.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ПринятиеКУчетуНМА.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПринятиеКУчетуНМА.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьСчетУчетаНУ',
			text: 'Счет налогового учета:',
			style: 'position:absolute;left:14px;top:27px;width:194px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СтоимостьБУ',
			style: 'position:absolute;left:212px;top:51px;width:80px;height:19px;',
			width: 80,
			height: 19,
		},
		{
			xtype: 'button',
			name: 'КнопкаРассчитатьБух',
			text: 'Рассчитать стоимость',
			style: 'position:absolute;left:298px;top:51px;width:148px;height:19px;',
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:6px;top:171px;width:426px;height:24px;',
			height: 24,width: 426,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьПредполагаемыйОбъемРаботБУ',
			text: 'Предполагаемый объем выработки:',
			style: 'position:absolute;left:6px;top:0px;width:188px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПредполагаемыйОбъемПродукцииБУ',
			style: 'position:absolute;left:206px;top:0px;width:80px;height:19px;',
			width: 80,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Коэффициент:',
			style: 'position:absolute;left:8px;top:0px;width:187px;height:19px;',
		},
					]
				},
				{
				},
				{
					items:
					[
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'КоэффициентБУ',
			style: 'position:absolute;left:206px;top:0px;width:80px;height:19px;',
			width: 80,
			height: 19,
		},
					]
				},
			]
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьСчетУчета',
			text: 'Счет бухгалтерского учета:',
			style: 'position:absolute;left:14px;top:27px;width:196px;height:19px;text-align:left;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Начислять амортизацию',
			style: 'position:absolute;left:212px;top:125px;width:148px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'СчетУчетаНУ.Представление',
			width: 80,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:212px;top:27px;width:80px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ПринятиеКУчетуНМА.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПринятиеКУчетуНМА.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ПринятиеКУчетуНМА.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПринятиеКУчетуНМА.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьСчетУчетаБУВнеоборотногоАктива',
			text: 'Счет бухгалтерского учета:',
			style: 'position:absolute;left:12px;top:52px;width:236px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			text: 'Общие сведения',
			style: 'position:absolute;left:6px;top:6px;width:614px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СтоимостьНУ',
			style: 'position:absolute;left:212px;top:51px;width:80px;height:19px;',
			width: 80,
			height: 19,
		},
		{
			xtype: 'button',
			name: 'КнопкаРассчитатьНал',
			text: 'Рассчитать стоимость',
			style: 'position:absolute;left:298px;top:51px;width:148px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтоимостьПР',
			text: 'Первоначальная стоимость (ПР):',
			style: 'position:absolute;left:14px;top:75px;width:170px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СтоимостьПР',
			style: 'position:absolute;left:212px;top:75px;width:80px;height:19px;',
			width: 80,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'НадписьСтоимостьВР',
			text: 'Первоначальная стоимость (ВР):',
			style: 'position:absolute;left:14px;top:99px;width:170px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СтоимостьВР',
			style: 'position:absolute;left:212px;top:100px;width:80px;height:19px;',
			width: 80,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'НадписьНачислятьАмортизациюНУ',
			text: 'Начислять амортизацию:',
			style: 'position:absolute;left:14px;top:125px;width:170px;height:19px;text-align:left;',
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:6px;top:145px;width:614px;height:99px;',
			height: 99,width: 614,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьСчетНачисленияАмортизацииНУ',
			text: 'Счет начисления амортизации:',
			style: 'position:absolute;left:298px;top:25px;width:167px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'СчетНачисленияАмортизацииНУ.Представление',
			width: 80,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:471px;top:25px;width:80px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ПринятиеКУчетуНМА.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПринятиеКУчетуНМА.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ПринятиеКУчетуНМА.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПринятиеКУчетуНМА.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьСрокПолезногоИспользованияНУ',
			text: 'Срок использования, мес.:',
			style: 'position:absolute;left:12px;top:25px;width:172px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СрокПолезногоИспользованияНУ',
			style: 'position:absolute;left:207px;top:25px;width:80px;height:19px;',
			width: 80,
			height: 19,
		},
		{
			xtype: 'label',
			text: 'Параметры амортизации ',
			style: 'position:absolute;left:6px;top:6px;width:602px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:6px;top:47px;width:458px;height:24px;',
			height: 24,width: 458,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьСпособНачисленияАмортизацииНУ',
			text: 'Метод начисления амортизации (до 2009 г.):',
			style: 'position:absolute;left:6px;top:0px;width:227px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'СпособНачисленияАмортизацииНУ.Представление',
			width: 220,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:238px;top:0px;width:220px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ПринятиеКУчетуНМА.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПринятиеКУчетуНМА.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ПринятиеКУчетуНМА.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПринятиеКУчетуНМА.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьСпециальныйКоэффициентНУ',
			text: 'Понижающий коэффициент:',
			style: 'position:absolute;left:12px;top:74px;width:172px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СпециальныйКоэффициентНУ',
			style: 'position:absolute;left:207px;top:74px;width:80px;height:19px;',
			width: 80,
			height: 19,
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			name: 'ИнфоНадписьРавномерноеСписание',
			text: 'ИнфоНадписьРавномерноеСписание',
			style: 'position:absolute;left:24px;top:55px;width:584px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСрокСписания',
			text: 'Срок списания, мес.:',
			style: 'position:absolute;left:6px;top:25px;width:169px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СрокПолезногоИспользованияНУНИОКР',
			style: 'position:absolute;left:212px;top:25px;width:80px;height:19px;',
			width: 80,
			height: 19,
		},
		{
			xtype: 'label',
			text: 'Параметры списания расходов',
			style: 'position:absolute;left:6px;top:6px;width:602px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
					]
				},
				{
				},
			]
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'ПорядокСписанияНИОКРНаРасходыНУ.Представление',
			width: 234,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:212px;top:125px;width:234px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ПринятиеКУчетуНМА.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПринятиеКУчетуНМА.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ПринятиеКУчетуНМА.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПринятиеКУчетуНМА.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьСрокПолезногоИспользованияБУ',
			text: 'Срок полезного использования, мес.:',
			style: 'position:absolute;left:14px;top:123px;width:196px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаПриобретения',
			text: 'Дата приобретения:',
			style: 'position:absolute;left:345px;top:27px;width:106px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаПриобретения',
			width: 71,
			height: 19,
			style: 'position:absolute;left:547px;top:27px;width:71px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтоимостьУСН',
			text: 'Стоимость (сумма расходов УСН):',
			style: 'position:absolute;left:6px;top:27px;width:222px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СтоимостьУСН',
			style: 'position:absolute;left:244px;top:27px;width:71px;height:19px;',
			width: 71,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'НадписьСрокПолезногоИспользованияУСН',
			text: 'Срок полезного использ. (УСН), мес.:',
			style: 'position:absolute;left:345px;top:51px;width:187px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СрокПолезногоИспользованияУСН',
			style: 'position:absolute;left:547px;top:51px;width:71px;height:19px;',
			width: 71,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'НадписьСуммаНачисленнойАмортизацииУСН',
			text: 'Сумма начисленной амортизации (УСН):',
			style: 'position:absolute;left:6px;top:51px;width:222px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СуммаНачисленнойАмортизацииУСН',
			style: 'position:absolute;left:244px;top:51px;width:71px;height:19px;',
			width: 71,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'НадписьПорядокВключенияСтоимостиВСоставРасходовУСН',
			text: 'Порядок включения стоимости в состав расходов (УСН):',
			style: 'position:absolute;left:6px;top:75px;width:222px;height:31px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'ПорядокВключенияСтоимостиВСоставРасходовУСН.Представление',
			width: 374,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:244px;top:75px;width:374px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ПринятиеКУчетуНМА.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПринятиеКУчетуНМА.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ПринятиеКУчетуНМА.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПринятиеКУчетуНМА.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			text: 'Общие сведения',
			style: 'position:absolute;left:6px;top:6px;width:612px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			id: 'ОплатаНМА',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:152px;width:612px;height:87px;',
			height: 87,width: 612,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Дата оплаты',
					width:'100',
					dataIndex:'ДатаОплаты',
					flex:1,
				},
				{
					text:'Сумма оплаты',
					width:'100',
					dataIndex:'СуммаОплаты',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПринятиеКУчетуНМА/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'ДатаОплаты',
					},
					{
						name:'СуммаОплаты',
					},
				]
			},
			listeners:
			{
				dblclick:
				{
					element: 'body',
					fn: function ()
					{
						var грид = Ext.getCmp('ОплатаНМА');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ПринятиеКУчетуНМА.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ПринятиеКУчетуНМА.ФормаДокументаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			text: 'Оплаты нематериального актива',
			style: 'position:absolute;left:6px;top:109px;width:612px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:127px;width:612px;height:24px;',
			width: 612,
			height: 24,
			items:
			[
			]
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:330px;top:56px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'Ответственный.Представление',
			width: 220,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:416px;top:56px;width:220px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ПринятиеКУчетуНМА.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПринятиеКУчетуНМА.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ПринятиеКУчетуНМА.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПринятиеКУчетуНМА.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'checkbox',
			boxLabel: 'налог. учете',
			style: 'position:absolute;left:494px;top:33px;width:80px;height:19px;',
		},
		],
	}],
	dockedItems:
	[
	]
	});
});