Ext.require(['Данные.Справочники.Номенклатура'], function () 
{
	Ext.define('Справочники.Номенклатура.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:616px;height:475px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Элемент Номенклатура',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'НадписьКод',
			text: 'Код:',
			style: 'position:absolute;left:526px;top:56px;width:24px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Код',
			width: 55,
			height: 19,
			style: 'position:absolute;left:553px;top:56px;width:55px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Наименование:',
			style: 'position:absolute;left:139px;top:56px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Наименование',
			width: 297,
			height: 19,
			style: 'position:absolute;left:226px;top:56px;width:297px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименованиеПолное',
			text: 'Полное наименование:',
			style: 'position:absolute;left:8px;top:196px;width:124px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НаименованиеПолное',
			width: 469,
			height: 19,
			style: 'position:absolute;left:139px;top:196px;width:469px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьАртикул',
			text: 'Артикул:',
			style: 'position:absolute;left:139px;top:79px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Артикул',
			width: 115,
			height: 19,
			style: 'position:absolute;left:226px;top:79px;width:115px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:424px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			width: 518,
			height: 19,
			style: 'position:absolute;left:90px;top:424px;width:518px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Вести учет по доп.  характеристикам',
			style: 'position:absolute;left:305px;top:102px;width:206px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:616px;height:25px;',
			width: 616,
			height: 25,
			items:
			[
				{
					xtype: 'splitbutton',
					text:'Действия',
					menu: [
				{
					text:'Найти в списке',
					tooltip:'Найти в списке',
					iconCls:'x-FindInList',
				},
				'-',
				{
					text:'Перечитать',
					tooltip:'Перечитать данные объекта',
					iconCls:'x-Reread',
				},
				{
					text:'Скопировать',
					tooltip:'Создать новый копированием',
					iconCls:'x-CloneObject',
				},
				{
					text:'Записать',
					tooltip:'Записать объект',
					iconCls:'x-SaveFile',
				},
				{
					text:'Записать и закрыть',
					tooltip:'Записать объект и закрыть форму',
					iconCls:'x-WriteAndClose',
				},
				'-',
				{
					xtype: 'splitbutton',
					text:'Перейти',
					menu: [
					]
				},
				'-',
				{
					text:'Файлы',
					tooltip:'Файлы',
				},
				'-',
				{
					text:'Закрыть',
					tooltip:'Закрыть',
					iconCls:'x-Close',
				},
					]
				},
				'-',
				{
					text:'Найти в списке',
					tooltip:'Найти в списке',
					iconCls:'x-FindInList',
				},
				'-',
				{
					text:'Перечитать',
					tooltip:'Перечитать данные объекта',
					iconCls:'x-Reread',
				},
				{
					text:'Скопировать',
					tooltip:'Создать новый копированием',
					iconCls:'x-CloneObject',
				},
				'-',
				{
					xtype: 'splitbutton',
					text:'Перейти',
					menu: [
				{
					text:'',
					tooltip:'',
				},
				{
					text:'',
					tooltip:'',
				},
				{
					text:'',
					tooltip:'',
				},
					]
				},
				'-',
				{
					text:'Файлы',
					tooltip:'Файлы',
				},
				'-',
				{
					text:'Изображение',
					tooltip:'',
				},
				'-',
				{
					text:'Справка',
					tooltip:'Открыть справку',
				},
				'-',
				{
					text:'Настройка...',
					tooltip:'Дополнительная настройка',
				},
				'-',
			]
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'Родитель.Представление',
			width: 382,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:226px;top:33px;width:382px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.Номенклатура.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.Номенклатура.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.Номенклатура.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.Номенклатура.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьРодитель',
			text: 'Группа:',
			style: 'position:absolute;left:139px;top:33px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьБазоваяЕдиницаИзмерения',
			text: 'Базовая ед.:',
			style: 'position:absolute;left:139px;top:102px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'БазоваяЕдиницаИзмерения.Представление',
			width: 73,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:226px;top:102px;width:73px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.Номенклатура.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.Номенклатура.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.Номенклатура.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.Номенклатура.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:218px;width:600px;height:201px;',
			height: 201,width: 600,
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьНомерГТД',
			text: 'Номер ГТД:',
			style: 'position:absolute;left:302px;top:30px;width:125px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'НомерГТД.Представление',
			width: 165,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:427px;top:30px;width:165px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.Номенклатура.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.Номенклатура.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.Номенклатура.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.Номенклатура.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьСтранаПроисхождения',
			text: 'Страна :',
			style: 'position:absolute;left:6px;top:30px;width:125px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'СтранаПроисхождения.Представление',
			width: 165,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:131px;top:30px;width:165px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.Номенклатура.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.Номенклатура.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.Номенклатура.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.Номенклатура.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьСтавкаНДС',
			text: 'НДС:',
			style: 'position:absolute;left:6px;top:6px;width:125px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'СтавкаНДС.Представление',
			width: 165,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:131px;top:6px;width:165px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.Номенклатура.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.Номенклатура.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.Номенклатура.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.Номенклатура.ФормаЭлементаСобытия");
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
			name: 'СтатьяЗатрат.Представление',
			width: 165,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:131px;top:74px;width:165px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.Номенклатура.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.Номенклатура.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.Номенклатура.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.Номенклатура.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьСтатьяЗатрат',
			text: 'Статья затрат:',
			style: 'position:absolute;left:6px;top:74px;width:125px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНоменклатурнаяГруппаЗатрат',
			text: 'Номенклатурная группа затрат:',
			style: 'position:absolute;left:299px;top:70px;width:125px;height:27px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'НоменклатурнаяГруппаЗатрат.Представление',
			width: 165,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:427px;top:74px;width:165px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.Номенклатура.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.Номенклатура.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.Номенклатура.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.Номенклатура.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			text: 'Аналитика затрат',
			style: 'position:absolute;left:6px;top:51px;width:586px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			name: 'НадписьНазначениеИспользования',
			text: 'Назначение использования:',
			style: 'position:absolute;left:6px;top:146px;width:124px;height:27px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'НазначениеИспользования.Представление',
			width: 461,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:131px;top:151px;width:461px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.Номенклатура.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.Номенклатура.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.Номенклатура.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.Номенклатура.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьНаправлениеВыпуска',
			text: 'Направление выпуска:',
			style: 'position:absolute;left:6px;top:98px;width:125px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-trigger-square',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'НаправлениеВыпуска.Представление',
			width: 165,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:131px;top:98px;width:165px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.Номенклатура.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.Номенклатура.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.Номенклатура.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.Номенклатура.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьНаправлениеСписанияВыпущеннойПродукции',
			text: 'Направление списания выпущенной продукции:',
			style: 'position:absolute;left:299px;top:97px;width:126px;height:29px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'НаправлениеСписанияВыпущеннойПродукции.Представление',
			width: 165,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:427px;top:98px;width:165px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.Номенклатура.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.Номенклатура.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.Номенклатура.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.Номенклатура.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			text: 'Спецодежда, спецоснастка и инвентарь',
			style: 'position:absolute;left:6px;top:129px;width:586px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			name: 'НадписьИмпортер',
			text: 'Импортер:',
			style: 'position:absolute;left:302px;top:6px;width:125px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'Импортер.Представление',
			width: 165,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:427px;top:6px;width:165px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.Номенклатура.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.Номенклатура.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.Номенклатура.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.Номенклатура.ФормаЭлементаСобытия");
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
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'НоменклатурнаяГруппа.Представление',
			width: 220,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:156px;top:154px;width:220px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.Номенклатура.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.Номенклатура.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.Номенклатура.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.Номенклатура.ФормаЭлементаСобытия");
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
			name: 'ВесовойКоэффициентВхождения',
			style: 'position:absolute;left:512px;top:154px;width:80px;height:19px;',
			width: 80,
			height: 19,
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'ВидВоспроизводства.Представление',
			width: 436,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:156px;top:6px;width:436px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.Номенклатура.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.Номенклатура.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.Номенклатура.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.Номенклатура.ФормаЭлементаСобытия");
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
			name: 'ОтветственныйМенеджерЗаПокупки.Представление',
			width: 436,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:156px;top:30px;width:436px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.Номенклатура.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.Номенклатура.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.Номенклатура.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.Номенклатура.ФормаЭлементаСобытия");
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
			name: 'ОсновнойПоставщик.Представление',
			width: 436,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:156px;top:55px;width:436px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.Номенклатура.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.Номенклатура.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.Номенклатура.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.Номенклатура.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьНоменклатурнаяГруппа',
			text: 'Номенклатурная группа:',
			style: 'position:absolute;left:6px;top:154px;width:150px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВесовойКоэффициентВхождения',
			text: 'Вес вхождения в группу:',
			style: 'position:absolute;left:378px;top:154px;width:132px;height:19px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьВидВоспроизводства',
			text: 'Вид воспроизводства:',
			style: 'position:absolute;left:6px;top:6px;width:148px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственныйМенеджерЗаПокупки',
			text: 'Ответственный за покупки:',
			style: 'position:absolute;left:6px;top:30px;width:148px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОсновнойПоставщик',
			text: 'Основной поставщик:',
			style: 'position:absolute;left:6px;top:55px;width:114px;height:19px;',
		},
		{
			xtype: 'label',
			text: 'Номенклатурная группа',
			style: 'position:absolute;left:6px;top:133px;width:586px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			name: 'НадписьЦеноваяГруппа',
			text: 'Ценовая группа:',
			style: 'position:absolute;left:6px;top:80px;width:150px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'ЦеноваяГруппа.Представление',
			width: 436,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:156px;top:80px;width:436px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.Номенклатура.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.Номенклатура.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.Номенклатура.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.Номенклатура.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьОКП',
			text: 'ОКП:',
			style: 'position:absolute;left:6px;top:104px;width:150px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'ОКП.Представление',
			width: 436,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:156px;top:104px;width:436px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.Номенклатура.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.Номенклатура.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.Номенклатура.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.Номенклатура.ФормаЭлементаСобытия");
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
			xtype: 'checkbox',
			boxLabel: 'Вести оперативный учет остатков незавершенного производства',
			style: 'position:absolute;left:6px;top:26px;width:354px;height:15px;',
		},
		{
			xtype: 'label',
			text: 'Сертификация',
			style: 'position:absolute;left:6px;top:137px;width:586px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Требуется внутренняя сертификация',
			style: 'position:absolute;left:6px;top:157px;width:208px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Требуется внешняя сертификация',
			style: 'position:absolute;left:258px;top:157px;width:217px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Вести учет по сериям в незавершенном производстве',
			style: 'position:absolute;left:6px;top:45px;width:354px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Вести серийные номера',
			style: 'position:absolute;left:6px;top:91px;width:209px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПорядокПрисвоенияСерийногоНомера',
			text: 'Порядок присвоения серийного номера:',
			style: 'position:absolute;left:6px;top:109px;width:209px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'ПорядокПрисвоенияСерийногоНомера.Представление',
			width: 374,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:218px;top:109px;width:374px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.Номенклатура.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.Номенклатура.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.Номенклатура.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.Номенклатура.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			text: 'Серийные номера',
			style: 'position:absolute;left:6px;top:71px;width:586px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			text: 'Учет в незавершенном производстве',
			style: 'position:absolute;left:6px;top:6px;width:586px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
					]
				},
				{
					items:
					[
		{
			id: 'ЕдиницыИзмерения',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:586px;height:143px;',
			height: 143,width: 586,
			columns:
			[
				{
					text:'',
					width:'32',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Код',
					width:'70',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'По классификатору',
					width:'120',
					dataIndex:'ЕдиницаПоКлассификатору',
					flex:1,
				},
				{
					text:'Наименование',
					width:'120',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'К.',
					width:'44',
					dataIndex:'Коэффициент',
					flex:1,
				},
				{
					text:'Вес',
					width:'57',
					dataIndex:'Вес',
					flex:1,
				},
				{
					text:'Объем',
					width:'63',
					dataIndex:'Объем',
					flex:1,
				},
				{
					text:'Порог округления',
					width:'70',
					dataIndex:'ПорогОкругления',
					flex:1,
				},
				{
					text:'Предупреждать',
					width:'70',
					dataIndex:'ПредупреждатьОНецелыхМестах',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.Номенклатура").data,
					fields: ['Ссылка','Родитель.Представление','Картинка','Код','ЕдиницаПоКлассификатору','Наименование','Коэффициент','Вес','Объем','ПорогОкругления','ПредупреждатьОНецелыхМестах',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/Номенклатура/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Картинка',
					},
					{
						name:'Код',
					},
					{
						name:'ЕдиницаПоКлассификатору',
					},
					{
						name:'Наименование',
					},
					{
						name:'Коэффициент',
					},
					{
						name:'Вес',
					},
					{
						name:'Объем',
					},
					{
						name:'ПорогОкругления',
					},
					{
						name:'ПредупреждатьОНецелыхМестах',
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
						var грид = Ext.getCmp('ЕдиницыИзмерения');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.Номенклатура.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.Номенклатура.ФормаЭлементаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:586px;height:24px;',
			width: 586,
			height: 24,
			items:
			[
				{
					xtype: 'splitbutton',
					text:'Действия',
					menu: [
				{
					text:'&Добавить',
					tooltip:'Добавить',
					iconCls:'x-copy',
				},
				{
					text:'&Скопировать',
					tooltip:'',
				},
				{
					text:'&Изменить',
					tooltip:'Изменить текущий элемент',
					iconCls:'x-Change',
				},
				{
					text:'Установить пометку удаления',
					tooltip:'Установить пометку удаления',
				},
				{
					text:'Редактировать в диалоге',
					tooltip:'',
				},
				'-',
				{
					text:'Просмотр по владельцу',
					tooltip:'',
				},
				'-',
				{
					text:'Установить отбор и сортировку списка...',
					tooltip:'Отбор и сортировка',
					iconCls:'x-FilterAndSort',
				},
				{
					text:'Отбор по значению в текущей колонке',
					tooltip:'Отбор по значению в текущей колонке',
					iconCls:'x-FilterByCurrentValue',
				},
				{
					xtype: 'splitbutton',
					text:'История отборов',
					menu: [
				{
					text:'(Список отборов)',
					tooltip:'',
				},
				'-',
				{
					text:'(История отборов)',
					tooltip:'',
					iconCls:'x-FilterHistory',
				},
				'-',
					]
				},
				{
					text:'Отключить отбор',
					tooltip:'Отключить отбор',
					iconCls:'x-ClearFilter',
				},
				{
					xtype: 'splitbutton',
					text:'Сортировка',
					menu: [
				{
					text:'(Поля сортировки)',
					tooltip:'',
				},
					]
				},
				'-',
				{
					text:'Вывести список...',
					tooltip:'Вывести список',
					iconCls:'x-OutputList',
				},
				{
					text:'Настройка списка...',
					tooltip:'Настройка списка',
					iconCls:'x-ListSettings',
				},
				'-',
				{
					text:'Обновить',
					tooltip:'Обновить текущий список',
					iconCls:'x-Refresh',
				},
					]
				},
				'-',
				{
					text:'&Добавить',
					tooltip:'Добавить',
					iconCls:'x-copy',
				},
				{
					text:'&Скопировать',
					tooltip:'',
				},
				{
					text:'&Изменить',
					tooltip:'Изменить текущий элемент',
					iconCls:'x-Change',
				},
				{
					text:'Установить пометку удаления',
					tooltip:'Установить пометку удаления',
				},
				{
					text:'Редактировать в диалоге',
					tooltip:'',
				},
				'-',
				{
					text:'Просмотр по владельцу',
					tooltip:'',
				},
				'-',
				{
					text:'Установить отбор и сортировку списка...',
					tooltip:'Отбор и сортировка',
					iconCls:'x-FilterAndSort',
				},
				{
					text:'Отбор по значению в текущей колонке',
					tooltip:'Отбор по значению в текущей колонке',
					iconCls:'x-FilterByCurrentValue',
				},
				{
					xtype: 'splitbutton',
					text:'История отборов',
					menu: [
					]
				},
				{
					text:'Отключить отбор',
					tooltip:'Отключить отбор',
					iconCls:'x-ClearFilter',
				},
				'-',
				{
					text:'Обновить',
					tooltip:'Обновить текущий список',
					iconCls:'x-Refresh',
				},
			]
		},
					]
				},
				{
					items:
					[
		{
			id: 'Характеристики',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:586px;height:143px;',
			height: 143,width: 586,
			columns:
			[
				{
					text:'',
					width:'24',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Наименование',
					width:'350',
					dataIndex:'Наименование',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.Номенклатура").data,
					fields: ['Ссылка','Родитель.Представление','Картинка','Наименование',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/Номенклатура/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Картинка',
					},
					{
						name:'Наименование',
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
						var грид = Ext.getCmp('Характеристики');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.Номенклатура.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.Номенклатура.ФормаЭлементаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:586px;height:24px;',
			width: 586,
			height: 24,
			items:
			[
			]
		},
					]
				},
				{
					items:
					[
		{
			id: 'Серии',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:586px;height:143px;',
			height: 143,width: 586,
			columns:
			[
				{
					text:'',
					width:'24',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Код',
					width:'35',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Наименование',
					width:'350',
					dataIndex:'Наименование',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.Номенклатура").data,
					fields: ['Ссылка','Родитель.Представление','Картинка','Код','Наименование',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/Номенклатура/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Картинка',
					},
					{
						name:'Код',
					},
					{
						name:'Наименование',
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
						var грид = Ext.getCmp('Серии');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.Номенклатура.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.Номенклатура.ФормаЭлементаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:586px;height:24px;',
			width: 586,
			height: 24,
			items:
			[
			]
		},
					]
				},
				{
					items:
					[
		{
			id: 'Проекты',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:586px;height:143px;',
			height: 143,width: 586,
			columns:
			[
				{
					text:'',
					width:'24',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Период',
					width:'116',
					dataIndex:'Период',
					flex:1,
				},
				{
					text:'Номенклатура',
					width:'212',
					dataIndex:'Номенклатура',
					flex:1,
				},
				{
					text:'Проект',
					width:'233',
					dataIndex:'Проект',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.Номенклатура").data,
					fields: ['Ссылка','Родитель.Представление','Картинка','Период','Номенклатура','Проект',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/Номенклатура/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Картинка',
					},
					{
						name:'Период',
					},
					{
						name:'Номенклатура',
					},
					{
						name:'Проект',
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
						var грид = Ext.getCmp('Проекты');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.Номенклатура.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.Номенклатура.ФормаЭлементаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:586px;height:24px;',
			width: 586,
			height: 24,
			items:
			[
			]
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:586px;height:24px;',
			width: 586,
			height: 24,
			items:
			[
			]
		},
		{
			id: 'СвойстваИЗначения',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:586px;height:143px;',
			height: 143,width: 586,
			columns:
			[
				{
					text:'',
					width:'20',
					dataIndex:'ПометкаУдаления',
					flex:1,
				},
				{
					text:'Свойство',
					width:'119',
					dataIndex:'Свойство',
					flex:1,
				},
				{
					text:'Значение',
					width:'220',
					dataIndex:'Значение',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.Номенклатура").data,
					fields: ['Ссылка','Родитель.Представление','ПометкаУдаления','Свойство','Значение',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/Номенклатура/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'ПометкаУдаления',
					},
					{
						name:'Свойство',
					},
					{
						name:'Значение',
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
						var грид = Ext.getCmp('СвойстваИЗначения');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.Номенклатура.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.Номенклатура.ФормаЭлементаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
					]
				},
				{
					items:
					[
		{
			id: 'Категории',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:586px;height:143px;',
			height: 143,width: 586,
			columns:
			[
				{
					text:'',
					width:'20',
					dataIndex:'ПометкаУдаления',
					flex:1,
				},
				{
					text:'',
					width:'20',
					dataIndex:'Принадлежность',
					flex:1,
				},
				{
					text:'Категория',
					width:'220',
					dataIndex:'Категория',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.Номенклатура").data,
					fields: ['Ссылка','Родитель.Представление','ПометкаУдаления','Принадлежность','Категория',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/Номенклатура/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'ПометкаУдаления',
					},
					{
						name:'Принадлежность',
					},
					{
						name:'Категория',
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
						var грид = Ext.getCmp('Категории');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.Номенклатура.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.Номенклатура.ФормаЭлементаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:586px;height:24px;',
			width: 586,
			height: 24,
			items:
			[
				{
					text:'&Добавить',
					tooltip:'Добавить',
					iconCls:'x-copy',
				},
				{
					text:'&Изменить',
					tooltip:'Изменить текущий элемент',
					iconCls:'x-Change',
				},
				{
					text:'&Удалить',
					tooltip:'Удалить текущий',
				},
				{
					text:'Закончить редактирование',
					tooltip:'',
				},
			]
		},
					]
				},
				{
					items:
					[
		{
			id: 'Комплектующие',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:586px;height:143px;',
			height: 143,width: 586,
			columns:
			[
				{
					text:'Комплектующая номенклатуры',
					width:'220',
					dataIndex:'Комплектующая',
					flex:1,
				},
				{
					text:'Характеристика комплектующей',
					width:'220',
					dataIndex:'ХарактеристикаКомплектующей',
					flex:1,
				},
				{
					text:'Количество',
					width:'64',
					dataIndex:'Количество',
					flex:1,
				},
				{
					text:'Единица',
					width:'54',
					dataIndex:'ЕдиницаИзмерения',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.Номенклатура").data,
					fields: ['Ссылка','Родитель.Представление','Комплектующая','ХарактеристикаКомплектующей','Количество','ЕдиницаИзмерения',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/Номенклатура/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Комплектующая',
					},
					{
						name:'ХарактеристикаКомплектующей',
					},
					{
						name:'Количество',
					},
					{
						name:'ЕдиницаИзмерения',
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
						var грид = Ext.getCmp('Комплектующие');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.Номенклатура.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.Номенклатура.ФормаЭлементаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:586px;height:24px;',
			width: 586,
			height: 24,
			items:
			[
				{
					xtype: 'splitbutton',
					text:'Действия',
					menu: [
				{
					text:'&Добавить',
					tooltip:'Добавить',
					iconCls:'x-copy',
				},
				{
					text:'&Скопировать',
					tooltip:'',
				},
				{
					text:'&Изменить',
					tooltip:'Изменить текущий элемент',
					iconCls:'x-Change',
				},
				{
					text:'&Удалить',
					tooltip:'Удалить текущий',
				},
				{
					text:'Закончить редактирование',
					tooltip:'',
				},
				'-',
				{
					text:'Установить отбор и сортировку списка...',
					tooltip:'Отбор и сортировка',
					iconCls:'x-FilterAndSort',
				},
				{
					text:'Отбор по значению в текущей колонке',
					tooltip:'Отбор по значению в текущей колонке',
					iconCls:'x-FilterByCurrentValue',
				},
				{
					xtype: 'splitbutton',
					text:'История отборов',
					menu: [
					]
				},
				{
					text:'Отключить отбор',
					tooltip:'Отключить отбор',
					iconCls:'x-ClearFilter',
				},
				{
					xtype: 'splitbutton',
					text:'Сортировка',
					menu: [
				{
					text:'(Поля сортировки)',
					tooltip:'',
				},
					]
				},
				'-',
				{
					text:'Вывести список...',
					tooltip:'Вывести список',
					iconCls:'x-OutputList',
				},
				{
					text:'Настройка списка...',
					tooltip:'Настройка списка',
					iconCls:'x-ListSettings',
				},
				'-',
				{
					text:'Обновить',
					tooltip:'Обновить текущий список',
					iconCls:'x-Refresh',
				},
					]
				},
				'-',
				{
					text:'&Добавить',
					tooltip:'Добавить',
					iconCls:'x-copy',
				},
				{
					text:'&Скопировать',
					tooltip:'',
				},
				{
					text:'&Изменить',
					tooltip:'Изменить текущий элемент',
					iconCls:'x-Change',
				},
				{
					text:'&Удалить',
					tooltip:'Удалить текущий',
				},
				{
					text:'Закончить редактирование',
					tooltip:'',
				},
				'-',
				{
					text:'Установить отбор и сортировку списка...',
					tooltip:'Отбор и сортировка',
					iconCls:'x-FilterAndSort',
				},
				{
					text:'Отбор по значению в текущей колонке',
					tooltip:'Отбор по значению в текущей колонке',
					iconCls:'x-FilterByCurrentValue',
				},
				{
					xtype: 'splitbutton',
					text:'История отборов',
					menu: [
				{
					text:'(Список отборов)',
					tooltip:'',
				},
				'-',
				{
					text:'(История отборов)',
					tooltip:'',
					iconCls:'x-FilterHistory',
				},
				'-',
					]
				},
				{
					text:'Отключить отбор',
					tooltip:'Отключить отбор',
					iconCls:'x-ClearFilter',
				},
				'-',
				{
					text:'Обновить',
					tooltip:'Обновить текущий список',
					iconCls:'x-Refresh',
				},
				'-',
				{
					text:'Подбор',
					tooltip:'Вызов списка номенклатуры в режиме подбора для заполнения комплектующих',
				},
			]
		},
					]
				},
				{
					items:
					[
		{
			id: 'Штрихкоды',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:586px;height:143px;',
			height: 143,width: 586,
			columns:
			[
				{
					text:'',
					width:'24',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Тип штрихкода',
					width:'100',
					dataIndex:'ТипШтрихкода',
					flex:1,
				},
				{
					text:'Штрихкод',
					width:'100',
					dataIndex:'Штрихкод',
					flex:1,
				},
				{
					text:'Единица',
					width:'56',
					dataIndex:'ЕдиницаИзмерения',
					flex:1,
				},
				{
					text:'Характеристика',
					width:'144',
					dataIndex:'ХарактеристикаНоменклатуры',
					flex:1,
				},
				{
					text:'Серия',
					width:'122',
					dataIndex:'СерияНоменклатуры',
					flex:1,
				},
				{
					text:'Качество',
					width:'95',
					dataIndex:'Качество',
					flex:1,
				},
				{
					text:'Владелец',
					width:'123',
					dataIndex:'Владелец',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.Номенклатура").data,
					fields: ['Ссылка','Родитель.Представление','Картинка','ТипШтрихкода','Штрихкод','ЕдиницаИзмерения','ХарактеристикаНоменклатуры','СерияНоменклатуры','Качество','Владелец',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/Номенклатура/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Картинка',
					},
					{
						name:'ТипШтрихкода',
					},
					{
						name:'Штрихкод',
					},
					{
						name:'ЕдиницаИзмерения',
					},
					{
						name:'ХарактеристикаНоменклатуры',
					},
					{
						name:'СерияНоменклатуры',
					},
					{
						name:'Качество',
					},
					{
						name:'Владелец',
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
						var грид = Ext.getCmp('Штрихкоды');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.Номенклатура.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.Номенклатура.ФормаЭлементаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:586px;height:24px;',
			width: 586,
			height: 24,
			items:
			[
				{
					xtype: 'splitbutton',
					text:'Действия',
					menu: [
				{
					text:'&Добавить',
					tooltip:'Добавить',
					iconCls:'x-copy',
				},
				{
					text:'&Скопировать',
					tooltip:'',
				},
				{
					text:'&Изменить',
					tooltip:'Изменить текущий элемент',
					iconCls:'x-Change',
				},
				{
					text:'&Удалить',
					tooltip:'Удалить текущий',
				},
				{
					text:'Установить пометку удаления',
					tooltip:'Установить пометку удаления',
				},
				{
					text:'Редактировать в диалоге',
					tooltip:'',
				},
				'-',
				{
					text:'Просмотр по владельцу',
					tooltip:'',
				},
				'-',
				{
					text:'Установить отбор и сортировку списка...',
					tooltip:'Отбор и сортировка',
					iconCls:'x-FilterAndSort',
				},
				{
					text:'Отбор по значению в текущей колонке',
					tooltip:'Отбор по значению в текущей колонке',
					iconCls:'x-FilterByCurrentValue',
				},
				{
					xtype: 'splitbutton',
					text:'История отборов',
					menu: [
				{
					text:'(Список отборов)',
					tooltip:'',
				},
				'-',
				{
					text:'(История отборов)',
					tooltip:'',
					iconCls:'x-FilterHistory',
				},
				'-',
					]
				},
				{
					text:'Отключить отбор',
					tooltip:'Отключить отбор',
					iconCls:'x-ClearFilter',
				},
				{
					xtype: 'splitbutton',
					text:'Сортировка',
					menu: [
				{
					text:'(Поля сортировки)',
					tooltip:'',
				},
					]
				},
				'-',
				{
					text:'Вывести список...',
					tooltip:'Вывести список',
					iconCls:'x-OutputList',
				},
				{
					text:'Настройка списка...',
					tooltip:'Настройка списка',
					iconCls:'x-ListSettings',
				},
				'-',
				{
					text:'Обновить',
					tooltip:'Обновить текущий список',
					iconCls:'x-Refresh',
				},
					]
				},
				'-',
				{
					text:'&Добавить',
					tooltip:'Добавить',
					iconCls:'x-copy',
				},
				{
					text:'&Скопировать',
					tooltip:'',
				},
				{
					text:'&Изменить',
					tooltip:'Изменить текущий элемент',
					iconCls:'x-Change',
				},
				{
					text:'&Удалить',
					tooltip:'Удалить текущий',
				},
				'-',
				{
					text:'Новый штрихкод',
					tooltip:'Новый штрихкод для текущей строки',
				},
				'-',
				{
					text:'Установить отбор и сортировку списка...',
					tooltip:'Отбор и сортировка',
					iconCls:'x-FilterAndSort',
				},
				{
					text:'Отбор по значению в текущей колонке',
					tooltip:'Отбор по значению в текущей колонке',
					iconCls:'x-FilterByCurrentValue',
				},
				{
					xtype: 'splitbutton',
					text:'История отборов',
					menu: [
					]
				},
				{
					text:'Отключить отбор',
					tooltip:'Отключить отбор',
					iconCls:'x-ClearFilter',
				},
				'-',
				{
					text:'Обновить',
					tooltip:'Обновить текущий список',
					iconCls:'x-Refresh',
				},
			]
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:586px;height:24px;',
			width: 586,
			height: 24,
			items:
			[
			]
		},
		{
			id: 'КодыВесовогоТовара',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:586px;height:143px;',
			height: 143,width: 586,
			columns:
			[
				{
					text:'',
					width:'24',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Код',
					width:'70',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Характеристика номенклатуры',
					width:'202',
					dataIndex:'ХарактеристикаНоменклатуры',
					flex:1,
				},
				{
					text:'Серия номенклатуры',
					width:'100',
					dataIndex:'СерияНоменклатуры',
					flex:1,
				},
				{
					text:'Качество',
					width:'114',
					dataIndex:'Качество',
					flex:1,
				},
				{
					text:'Номенклатура',
					width:'112',
					dataIndex:'Номенклатура',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.Номенклатура").data,
					fields: ['Ссылка','Родитель.Представление','Картинка','Код','ХарактеристикаНоменклатуры','СерияНоменклатуры','Качество','Номенклатура',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/Номенклатура/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Картинка',
					},
					{
						name:'Код',
					},
					{
						name:'ХарактеристикаНоменклатуры',
					},
					{
						name:'СерияНоменклатуры',
					},
					{
						name:'Качество',
					},
					{
						name:'Номенклатура',
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
						var грид = Ext.getCmp('КодыВесовогоТовара');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.Номенклатура.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.Номенклатура.ФормаЭлементаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
					]
				},
				{
					items:
					[
		{
			id: 'МестаХранения',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:586px;height:145px;',
			height: 145,width: 586,
			columns:
			[
				{
					text:'',
					width:'24',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Склад',
					width:'256',
					dataIndex:'Склад',
					flex:1,
				},
				{
					text:'Приоритет',
					width:'60',
					dataIndex:'Приоритет',
					flex:1,
				},
				{
					text:'Место хранения',
					width:'241',
					dataIndex:'МестоХранения',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.Номенклатура").data,
					fields: ['Ссылка','Родитель.Представление','Картинка','Склад','Приоритет','МестоХранения',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/Номенклатура/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Картинка',
					},
					{
						name:'Склад',
					},
					{
						name:'Приоритет',
					},
					{
						name:'МестоХранения',
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
						var грид = Ext.getCmp('МестаХранения');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.Номенклатура.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.Номенклатура.ФормаЭлементаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:586px;height:24px;',
			width: 586,
			height: 24,
			items:
			[
			]
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:586px;height:24px;',
			width: 586,
			height: 24,
			items:
			[
				{
					xtype: 'splitbutton',
					text:'Перейти',
					menu: [
				{
					text:'Версии спецификации',
					tooltip:'',
				},
					]
				},
				'-',
				{
					text:'Создать версию',
					tooltip:'',
				},
			]
		},
		{
			id: 'СпецификацииНоменклатуры',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:586px;height:143px;',
			height: 143,width: 586,
			columns:
			[
				{
					text:'',
					width:'39',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Код',
					width:'40',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Версия',
					width:'40',
					dataIndex:'КодВерсии',
					flex:1,
				},
				{
					text:'Наименование',
					width:'181',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Активная',
					width:'21',
					dataIndex:'Активная',
					flex:1,
				},
				{
					text:'Состояние',
					width:'80',
					dataIndex:'Состояние',
					flex:1,
				},
				{
					text:'Дата утверждения',
					width:'100',
					dataIndex:'ДатаУтверждения',
					flex:1,
				},
				{
					text:'Ответственный',
					width:'100',
					dataIndex:'Ответственный',
					flex:1,
				},
				{
					text:'Комментарий',
					width:'100',
					dataIndex:'Комментарий',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.Номенклатура").data,
					fields: ['Ссылка','Родитель.Представление','Картинка','Код','КодВерсии','Наименование','Активная','Состояние','ДатаУтверждения','Ответственный','Комментарий',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/Номенклатура/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Картинка',
					},
					{
						name:'Код',
					},
					{
						name:'КодВерсии',
					},
					{
						name:'Наименование',
					},
					{
						name:'Активная',
					},
					{
						name:'Состояние',
					},
					{
						name:'ДатаУтверждения',
					},
					{
						name:'Ответственный',
					},
					{
						name:'Комментарий',
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
						var грид = Ext.getCmp('СпецификацииНоменклатуры');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.Номенклатура.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.Номенклатура.ФормаЭлементаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:102px;width:586px;height:24px;',
			width: 586,
			height: 24,
			items:
			[
				'-',
				{
					text:'Рассчитать',
					tooltip:'',
				},
			]
		},
		{
			id: 'ПлановаяСебестоимостьНоменклатуры',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:125px;width:586px;height:48px;',
			height: 48,width: 586,
			columns:
			[
				{
					text:'',
					width:'24',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Номенклатура',
					width:'100',
					dataIndex:'Номенклатура',
					flex:1,
				},
				{
					text:'Характеристика',
					width:'120',
					dataIndex:'ХарактеристикаНоменклатуры',
					flex:1,
				},
				{
					text:'Ед.',
					width:'57',
					dataIndex:'ЕдиницаИзмерения',
					flex:1,
				},
				{
					text:'Статья затрат',
					width:'100',
					dataIndex:'СтатьяЗатрат.Представление',
					flex:1,
				},
				{
					text:'Сумма',
					width:'80',
					dataIndex:'Сумма',
					flex:1,
				},
				{
					text:'Валюта',
					width:'60',
					dataIndex:'Валюта',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.Номенклатура").data,
					fields: ['Ссылка','Родитель.Представление','Картинка','Номенклатура','ХарактеристикаНоменклатуры','ЕдиницаИзмерения','СтатьяЗатрат.Представление','Сумма','Валюта',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/Номенклатура/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Картинка',
					},
					{
						name:'Номенклатура',
					},
					{
						name:'ХарактеристикаНоменклатуры',
					},
					{
						name:'ЕдиницаИзмерения',
					},
					{
						name:'СтатьяЗатрат',
					},
					{
						name:'Сумма',
					},
					{
						name:'Валюта',
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
						var грид = Ext.getCmp('ПлановаяСебестоимостьНоменклатуры');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.Номенклатура.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.Номенклатура.ФормаЭлементаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			id: 'ЦеныНоменклатурыСебестоимость',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:586px;height:48px;',
			height: 48,width: 586,
			columns:
			[
				{
					text:'',
					width:'24',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Регистратор',
					width:'100',
					dataIndex:'Регистратор',
					flex:1,
				},
				{
					text:'Тип цен',
					width:'127',
					dataIndex:'ТипЦен',
					flex:1,
				},
				{
					text:'Номенклатура',
					width:'100',
					dataIndex:'Номенклатура',
					flex:1,
				},
				{
					text:'Характеристика',
					width:'120',
					dataIndex:'ХарактеристикаНоменклатуры',
					flex:1,
				},
				{
					text:'Валюта',
					width:'70',
					dataIndex:'Валюта',
					flex:1,
				},
				{
					text:'Цена',
					width:'80',
					dataIndex:'Цена',
					flex:1,
				},
				{
					text:'Единица',
					width:'54',
					dataIndex:'ЕдиницаИзмерения',
					flex:1,
				},
				{
					text:'Процент скидки или наценки',
					width:'56',
					dataIndex:'ПроцентСкидкиНаценки',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.Номенклатура").data,
					fields: ['Ссылка','Родитель.Представление','Картинка','Регистратор','ТипЦен','Номенклатура','ХарактеристикаНоменклатуры','Валюта','Цена','ЕдиницаИзмерения','ПроцентСкидкиНаценки',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/Номенклатура/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Картинка',
					},
					{
						name:'Регистратор',
					},
					{
						name:'ТипЦен',
					},
					{
						name:'Номенклатура',
					},
					{
						name:'ХарактеристикаНоменклатуры',
					},
					{
						name:'Валюта',
					},
					{
						name:'Цена',
					},
					{
						name:'ЕдиницаИзмерения',
					},
					{
						name:'ПроцентСкидкиНаценки',
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
						var грид = Ext.getCmp('ЦеныНоменклатурыСебестоимость');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.Номенклатура.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.Номенклатура.ФормаЭлементаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			text: 'Плановая себестоимость номенклатуры',
			style: 'position:absolute;left:6px;top:86px;width:586px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:586px;height:24px;',
			width: 586,
			height: 24,
			items:
			[
			]
		},
					]
				},
				{
					items:
					[
		{
			id: 'ЦеныПоставщика',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:125px;width:586px;height:48px;',
			height: 48,width: 586,
			columns:
			[
				{
					text:'',
					width:'21',
					dataIndex:'Записать',
					flex:1,
				},
				{
					text:'Тип цен',
					width:'197',
					dataIndex:'ТипЦен',
					flex:1,
				},
				{
					text:'Цена',
					width:'77',
					dataIndex:'Цена',
					flex:1,
				},
				{
					text:'Валюта',
					width:'71',
					dataIndex:'Валюта',
					flex:1,
				},
				{
					text:'Ед.',
					width:'54',
					dataIndex:'ЕдиницаИзмерения',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.Номенклатура").data,
					fields: ['Ссылка','Родитель.Представление','Записать','ТипЦен','Цена','Валюта','ЕдиницаИзмерения',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/Номенклатура/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Записать',
					},
					{
						name:'ТипЦен',
					},
					{
						name:'Цена',
					},
					{
						name:'Валюта',
					},
					{
						name:'ЕдиницаИзмерения',
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
						var грид = Ext.getCmp('ЦеныПоставщика');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.Номенклатура.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.Номенклатура.ФормаЭлементаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			name: 'НадписьДокументУстановкаЦенКонтрагента',
			text: 'Документ установки цен контрагента:',
			style: 'position:absolute;left:6px;top:82px;width:197px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'ДокументУстановкаЦенКонтрагента.Представление',
			width: 385,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:207px;top:82px;width:385px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.Номенклатура.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.Номенклатура.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.Номенклатура.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.Номенклатура.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:101px;width:586px;height:24px;',
			width: 586,
			height: 24,
			items:
			[
				'-',
				{
					text:'Перечитать текущие цены',
					tooltip:'',
				},
				'-',
				{
					text:'Записать цены',
					tooltip:'Записать цены поставщика',
				},
			]
		},
		{
			id: 'НоменклатураКонтрагентов',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:586px;height:48px;',
			height: 48,width: 586,
			columns:
			[
				{
					text:'',
					width:'24',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Характеристика номенклатуры',
					width:'172',
					dataIndex:'ХарактеристикаНоменклатуры',
					flex:1,
				},
				{
					text:'Код',
					width:'69',
					dataIndex:'КодНоменклатурыКонтрагента',
					flex:1,
				},
				{
					text:'Артикул',
					width:'97',
					dataIndex:'АртикулНоменклатурыКонтрагента',
					flex:1,
				},
				{
					text:'Наименование',
					width:'193',
					dataIndex:'НаименованиеНоменклатурыКонтрагента',
					flex:1,
				},
				{
					text:'Штрихкод',
					width:'108',
					dataIndex:'ШтрихКодНоменклатурыКонтрагента',
					flex:1,
				},
				{
					text:'Ед. изм.',
					width:'53',
					dataIndex:'ЕдиницаНоменклатурыКонтрагента',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.Номенклатура").data,
					fields: ['Ссылка','Родитель.Представление','Картинка','ХарактеристикаНоменклатуры','КодНоменклатурыКонтрагента','АртикулНоменклатурыКонтрагента','НаименованиеНоменклатурыКонтрагента','ШтрихКодНоменклатурыКонтрагента','ЕдиницаНоменклатурыКонтрагента',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/Номенклатура/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Картинка',
					},
					{
						name:'ХарактеристикаНоменклатуры',
					},
					{
						name:'КодНоменклатурыКонтрагента',
					},
					{
						name:'АртикулНоменклатурыКонтрагента',
					},
					{
						name:'НаименованиеНоменклатурыКонтрагента',
					},
					{
						name:'ШтрихКодНоменклатурыКонтрагента',
					},
					{
						name:'ЕдиницаНоменклатурыКонтрагента',
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
						var грид = Ext.getCmp('НоменклатураКонтрагентов');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.Номенклатура.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.Номенклатура.ФормаЭлементаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:586px;height:24px;',
			width: 586,
			height: 24,
			items:
			[
			]
		},
					]
				},
				{
					items:
					[
		{
			id: 'ЦеныНоменклатуры',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:53px;width:586px;height:96px;',
			height: 96,width: 586,
			columns:
			[
				{
					text:'',
					width:'21',
					dataIndex:'Записать',
					flex:1,
				},
				{
					text:'Тип цен',
					width:'142',
					dataIndex:'ТипЦен',
					flex:1,
				},
				{
					text:'Цена',
					width:'60',
					dataIndex:'Цена',
					flex:1,
				},
				{
					text:'Способ расчета',
					width:'123',
					dataIndex:'СпособРасчетаЦены',
					flex:1,
				},
				{
					text:'Валюта',
					width:'46',
					dataIndex:'Валюта',
					flex:1,
				},
				{
					text:'Ед.',
					width:'54',
					dataIndex:'ЕдиницаИзмерения',
					flex:1,
				},
				{
					text:'% скидки (наценки)',
					width:'71',
					dataIndex:'ПроцентСкидкиНаценки',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.Номенклатура").data,
					fields: ['Ссылка','Родитель.Представление','Записать','ТипЦен','Цена','СпособРасчетаЦены','Валюта','ЕдиницаИзмерения','ПроцентСкидкиНаценки',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/Номенклатура/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Записать',
					},
					{
						name:'ТипЦен',
					},
					{
						name:'Цена',
					},
					{
						name:'СпособРасчетаЦены',
					},
					{
						name:'Валюта',
					},
					{
						name:'ЕдиницаИзмерения',
					},
					{
						name:'ПроцентСкидкиНаценки',
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
						var грид = Ext.getCmp('ЦеныНоменклатуры');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.Номенклатура.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.Номенклатура.ФормаЭлементаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:29px;width:586px;height:24px;',
			width: 586,
			height: 24,
			items:
			[
				{
					text:'Рассчитать по базовым ценам',
					tooltip:'',
				},
				'-',
				{
					text:'Рассчитать цены комплекта',
					tooltip:'Рассчитать цены комплекта',
				},
				'-',
				{
					text:'Перечитать текущие цены',
					tooltip:'',
				},
				'-',
				{
					text:'Записать цены',
					tooltip:'Записать цены номенклатуры и цены поставщика',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьДокументУстановкаЦен',
			text: 'Документ установки цен:',
			style: 'position:absolute;left:6px;top:6px;width:131px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'ДокументУстановкаЦен.Представление',
			width: 450,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:142px;top:6px;width:450px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.Номенклатура.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.Номенклатура.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.Номенклатура.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.Номенклатура.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Подставлять валюту из диапазона',
			style: 'position:absolute;left:6px;top:153px;width:586px;height:20px;',
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'textarea',
			hideLabel: true,
			disabled: false,
			name: 'ПолеДополнительноеОписаниеНоменклатуры',
			style: 'position:absolute;left:6px;top:34px;width:586px;height:141px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПроизводитель',
			text: 'Производитель:',
			style: 'position:absolute;left:6px;top:6px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Производитель.Представление',
			width: 194,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:94px;top:6px;width:194px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.Номенклатура.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.Номенклатура.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.Номенклатура.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.Номенклатура.ФормаЭлементаСобытия");
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
			xtype: 'checkbox',
			boxLabel: 'Вести учет по сериям',
			style: 'position:absolute;left:305px;top:125px;width:127px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'ВидНоменклатуры.Представление',
			width: 157,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:451px;top:79px;width:157px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.Номенклатура.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.Номенклатура.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.Номенклатура.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.Номенклатура.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьВидНоменклатуры',
			text: 'Вид номенклатуры:',
			style: 'position:absolute;left:346px;top:79px;width:100px;height:19px;',
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:33px;width:131px;height:131px;',
			height: 131,width: 131,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
					]
				},
			]
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'ЕдиницаХраненияОстатков.Представление',
			width: 73,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:226px;top:125px;width:73px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.Номенклатура.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.Номенклатура.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.Номенклатура.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.Номенклатура.ФормаЭлементаСобытия");
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
			name: 'ЕдиницаДляОтчетов.Представление',
			width: 73,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:226px;top:148px;width:73px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.Номенклатура.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.Номенклатура.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.Номенклатура.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.Номенклатура.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьЕдиницаХраненияОстатков',
			text: 'Ед. хран. ост.:',
			style: 'position:absolute;left:139px;top:127px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьЕдиницаДляОтчетов',
			text: 'Ед. для отчетов:',
			style: 'position:absolute;left:139px;top:148px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Весовой товар',
			style: 'position:absolute;left:305px;top:172px;width:92px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Вести партионный учет по сериям',
			style: 'position:absolute;left:305px;top:148px;width:191px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьЕдиницаИзмеренияМест',
			text: ' Ед. мест:',
			style: 'position:absolute;left:137px;top:172px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'ЕдиницаИзмеренияМест.Представление',
			width: 73,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:226px;top:172px;width:73px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.Номенклатура.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.Номенклатура.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.Номенклатура.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.Номенклатура.ФормаЭлементаСобытия");
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
			style: 'position:absolute;left:0px;top:450px;width:616px;height:25px;',
			width: 616,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'<< Назад',
					tooltip:'Предыдущая закладка',
				},
				{
					text:'Далее >>',
					tooltip:'Следующая закладка',
				},
				'-',
				{
					text:'ОК',
					tooltip:'ОК',
					iconCls:'x-WriteAndClose',
				},
				'-',
				{
					text:'Записать',
					tooltip:'Записать',
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
	]
	});
});