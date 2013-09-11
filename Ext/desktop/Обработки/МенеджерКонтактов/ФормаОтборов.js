Ext.require(['Данные.Обработки.МенеджерКонтактов'], function () 
{
	Ext.define('Обработки.МенеджерКонтактов.ФормаОтборов',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:562px;height:277px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Отбор',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'checkbox',
			boxLabel: 'Контрагент:',
			style: 'position:absolute;left:8px;top:32px;width:115px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-trigger-square',
			name: 'ВидСравненияКонтрагент.Представление',
			width: 180,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:126px;top:32px;width:180px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.МенеджерКонтактов.ФормаОтборовСобытия'], function ()
					{
						var объект = Ext.create("Обработки.МенеджерКонтактов.ФормаОтборовСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.МенеджерКонтактов.ФормаОтборовСобытия'], function ()
					{
						var объект = Ext.create("Обработки.МенеджерКонтактов.ФормаОтборовСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ЗначениеОтбораКонтрагент',
			width: 246,
			height: 19,
			style: 'position:absolute;left:308px;top:32px;width:246px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Ответственный:',
			style: 'position:absolute;left:8px;top:81px;width:104px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: true,
			trigger1Cls: 'x-form-trigger-square',
			name: 'ВидСравненияПользователь.Представление',
			width: 180,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:126px;top:81px;width:180px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.МенеджерКонтактов.ФормаОтборовСобытия'], function ()
					{
						var объект = Ext.create("Обработки.МенеджерКонтактов.ФормаОтборовСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.МенеджерКонтактов.ФормаОтборовСобытия'], function ()
					{
						var объект = Ext.create("Обработки.МенеджерКонтактов.ФормаОтборовСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: true,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'ЗначениеОтбораПользователь.Представление',
			width: 246,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:308px;top:81px;width:246px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.МенеджерКонтактов.ФормаОтборовСобытия'], function ()
					{
						var объект = Ext.create("Обработки.МенеджерКонтактов.ФормаОтборовСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.МенеджерКонтактов.ФормаОтборовСобытия'], function ()
					{
						var объект = Ext.create("Обработки.МенеджерКонтактов.ФормаОтборовСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Важность:',
			style: 'position:absolute;left:8px;top:105px;width:76px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-trigger-square',
			name: 'ВидСравненияВажность.Представление',
			width: 180,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:126px;top:105px;width:180px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.МенеджерКонтактов.ФормаОтборовСобытия'], function ()
					{
						var объект = Ext.create("Обработки.МенеджерКонтактов.ФормаОтборовСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.МенеджерКонтактов.ФормаОтборовСобытия'], function ()
					{
						var объект = Ext.create("Обработки.МенеджерКонтактов.ФормаОтборовСобытия");
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
			name: 'ЗначениеОтбораВажность.Представление',
			width: 246,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:308px;top:105px;width:246px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.МенеджерКонтактов.ФормаОтборовСобытия'], function ()
					{
						var объект = Ext.create("Обработки.МенеджерКонтактов.ФормаОтборовСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.МенеджерКонтактов.ФормаОтборовСобытия'], function ()
					{
						var объект = Ext.create("Обработки.МенеджерКонтактов.ФормаОтборовСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Тип (вход., исход.):',
			style: 'position:absolute;left:8px;top:129px;width:116px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-trigger-square',
			name: 'ВидСравненияТип.Представление',
			width: 180,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:126px;top:129px;width:180px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.МенеджерКонтактов.ФормаОтборовСобытия'], function ()
					{
						var объект = Ext.create("Обработки.МенеджерКонтактов.ФормаОтборовСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.МенеджерКонтактов.ФормаОтборовСобытия'], function ()
					{
						var объект = Ext.create("Обработки.МенеджерКонтактов.ФормаОтборовСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ЗначениеОтбораТип',
			width: 246,
			height: 19,
			style: 'position:absolute;left:308px;top:129px;width:246px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Дата:',
			style: 'position:absolute;left:8px;top:8px;width:52px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-trigger-square',
			name: 'ВидСравненияДата.Представление',
			width: 180,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:126px;top:8px;width:180px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.МенеджерКонтактов.ФормаОтборовСобытия'], function ()
					{
						var объект = Ext.create("Обработки.МенеджерКонтактов.ФормаОтборовСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.МенеджерКонтактов.ФормаОтборовСобытия'], function ()
					{
						var объект = Ext.create("Обработки.МенеджерКонтактов.ФормаОтборовСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ЗначениеОтбораДата',
			width: 246,
			height: 19,
			style: 'position:absolute;left:308px;top:8px;width:246px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ЗначениеОтбораДатаНач',
			width: 120,
			height: 19,
			style: 'position:absolute;left:308px;top:8px;width:120px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ЗначениеОтбораДатаКон',
			width: 120,
			height: 19,
			style: 'position:absolute;left:434px;top:8px;width:120px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Номер:',
			style: 'position:absolute;left:8px;top:177px;width:56px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-trigger-square',
			name: 'ВидСравненияНомер.Представление',
			width: 180,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:126px;top:177px;width:180px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.МенеджерКонтактов.ФормаОтборовСобытия'], function ()
					{
						var объект = Ext.create("Обработки.МенеджерКонтактов.ФормаОтборовСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.МенеджерКонтактов.ФормаОтборовСобытия'], function ()
					{
						var объект = Ext.create("Обработки.МенеджерКонтактов.ФормаОтборовСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ЗначениеОтбораНомер',
			width: 246,
			height: 19,
			style: 'position:absolute;left:308px;top:177px;width:246px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Вид документа:',
			style: 'position:absolute;left:8px;top:153px;width:99px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-trigger-square',
			name: 'ВидСравненияТипДокумента.Представление',
			width: 180,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:126px;top:153px;width:180px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.МенеджерКонтактов.ФормаОтборовСобытия'], function ()
					{
						var объект = Ext.create("Обработки.МенеджерКонтактов.ФормаОтборовСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.МенеджерКонтактов.ФормаОтборовСобытия'], function ()
					{
						var объект = Ext.create("Обработки.МенеджерКонтактов.ФормаОтборовСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ЗначениеОтбораТипДокумента',
			width: 246,
			height: 19,
			style: 'position:absolute;left:308px;top:153px;width:246px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Вид операции:',
			style: 'position:absolute;left:8px;top:201px;width:92px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-trigger-square',
			name: 'ВидСравненияВидОперации.Представление',
			width: 180,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:126px;top:201px;width:180px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.МенеджерКонтактов.ФормаОтборовСобытия'], function ()
					{
						var объект = Ext.create("Обработки.МенеджерКонтактов.ФормаОтборовСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.МенеджерКонтактов.ФормаОтборовСобытия'], function ()
					{
						var объект = Ext.create("Обработки.МенеджерКонтактов.ФормаОтборовСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ЗначениеОтбораВидОперации',
			width: 246,
			height: 19,
			style: 'position:absolute;left:308px;top:201px;width:246px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Дата события:',
			style: 'position:absolute;left:8px;top:225px;width:96px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-trigger-square',
			name: 'ВидСравненияДатаСобытия.Представление',
			width: 180,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:126px;top:225px;width:180px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.МенеджерКонтактов.ФормаОтборовСобытия'], function ()
					{
						var объект = Ext.create("Обработки.МенеджерКонтактов.ФормаОтборовСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.МенеджерКонтактов.ФормаОтборовСобытия'], function ()
					{
						var объект = Ext.create("Обработки.МенеджерКонтактов.ФормаОтборовСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ЗначениеОтбораДатаСобытия',
			width: 246,
			height: 19,
			style: 'position:absolute;left:308px;top:225px;width:246px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ЗначениеОтбораДатаСобытияНач',
			width: 120,
			height: 19,
			style: 'position:absolute;left:308px;top:225px;width:120px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ЗначениеОтбораДатаСобытияКон',
			width: 120,
			height: 19,
			style: 'position:absolute;left:434px;top:225px;width:120px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Контактное лицо:',
			style: 'position:absolute;left:8px;top:57px;width:115px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-trigger-square',
			name: 'ВидСравненияКонтактноеЛицо.Представление',
			width: 180,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:126px;top:57px;width:180px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.МенеджерКонтактов.ФормаОтборовСобытия'], function ()
					{
						var объект = Ext.create("Обработки.МенеджерКонтактов.ФормаОтборовСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.МенеджерКонтактов.ФормаОтборовСобытия'], function ()
					{
						var объект = Ext.create("Обработки.МенеджерКонтактов.ФормаОтборовСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ЗначениеОтбораКонтактноеЛицо',
			width: 246,
			height: 19,
			style: 'position:absolute;left:308px;top:57px;width:246px;height:19px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:252px;width:562px;height:25px;',
			width: 562,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'ОК',
					tooltip:'ОК',
				},
				'-',
				{
					text:'Отмена',
					tooltip:'Закрыть',
				},
				'-',
				{
					text:'Справка',
					tooltip:'Открыть справку',
				},
			]
		},
	]
	});
});