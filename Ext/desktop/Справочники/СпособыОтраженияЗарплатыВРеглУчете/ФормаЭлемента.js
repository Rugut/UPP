Ext.require(['Данные.Справочники.СпособыОтраженияЗарплатыВРеглУчете'], function () 
{
	Ext.define('Справочники.СпособыОтраженияЗарплатыВРеглУчете.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:585px;height:408px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Способы отражения зарплаты в регламентированном учете',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:33px;width:86px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Наименование',
			width: 481,
			height: 19,
			style: 'position:absolute;left:96px;top:33px;width:481px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРодитель',
			text: 'Группа:',
			style: 'position:absolute;left:8px;top:56px;width:86px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'Родитель.Представление',
			width: 481,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:96px;top:56px;width:481px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.СпособыОтраженияЗарплатыВРеглУчете.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СпособыОтраженияЗарплатыВРеглУчете.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.СпособыОтраженияЗарплатыВРеглУчете.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СпособыОтраженияЗарплатыВРеглУчете.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:585px;height:25px;',
			width: 585,
			height: 25,
			items:
			[
			]
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:79px;width:569px;height:296px;',
			height: 296,width: 569,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'СчетДт.Представление',
			width: 80,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:98px;top:27px;width:80px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.СпособыОтраженияЗарплатыВРеглУчете.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СпособыОтраженияЗарплатыВРеглУчете.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.СпособыОтраженияЗарплатыВРеглУчете.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СпособыОтраженияЗарплатыВРеглУчете.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоДт1',
			text: 'Субконто 1:',
			style: 'position:absolute;left:6px;top:50px;width:90px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'СубконтоДт1.Представление',
			width: 180,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:98px;top:50px;width:180px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.СпособыОтраженияЗарплатыВРеглУчете.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СпособыОтраженияЗарплатыВРеглУчете.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.СпособыОтраженияЗарплатыВРеглУчете.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СпособыОтраженияЗарплатыВРеглУчете.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоДт2',
			text: 'Субконто 2:',
			style: 'position:absolute;left:6px;top:73px;width:90px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'СубконтоДт2.Представление',
			width: 180,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:98px;top:73px;width:180px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.СпособыОтраженияЗарплатыВРеглУчете.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СпособыОтраженияЗарплатыВРеглУчете.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.СпособыОтраженияЗарплатыВРеглУчете.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СпособыОтраженияЗарплатыВРеглУчете.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоДт3',
			text: 'Субконто 3:',
			style: 'position:absolute;left:6px;top:96px;width:90px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'СубконтоДт3.Представление',
			width: 180,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:98px;top:96px;width:180px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.СпособыОтраженияЗарплатыВРеглУчете.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СпособыОтраженияЗарплатыВРеглУчете.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.СпособыОтраженияЗарплатыВРеглУчете.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СпособыОтраженияЗарплатыВРеглУчете.ФормаЭлементаСобытия");
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
			name: 'СчетКт.Представление',
			width: 80,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:389px;top:27px;width:80px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.СпособыОтраженияЗарплатыВРеглУчете.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СпособыОтраженияЗарплатыВРеглУчете.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.СпособыОтраженияЗарплатыВРеглУчете.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СпособыОтраженияЗарплатыВРеглУчете.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоКт1',
			text: 'Субконто 1:',
			style: 'position:absolute;left:297px;top:50px;width:90px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'СубконтоКт1.Представление',
			width: 180,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:389px;top:50px;width:180px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.СпособыОтраженияЗарплатыВРеглУчете.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СпособыОтраженияЗарплатыВРеглУчете.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.СпособыОтраженияЗарплатыВРеглУчете.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СпособыОтраженияЗарплатыВРеглУчете.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоКт2',
			text: 'Субконто 2:',
			style: 'position:absolute;left:297px;top:73px;width:90px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'СубконтоКт2.Представление',
			width: 180,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:389px;top:73px;width:180px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.СпособыОтраженияЗарплатыВРеглУчете.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СпособыОтраженияЗарплатыВРеглУчете.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.СпособыОтраженияЗарплатыВРеглУчете.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СпособыОтраженияЗарплатыВРеглУчете.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоКт3',
			text: 'Субконто 3:',
			style: 'position:absolute;left:297px;top:96px;width:90px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'СубконтоКт3.Представление',
			width: 180,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:389px;top:96px;width:180px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.СпособыОтраженияЗарплатыВРеглУчете.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СпособыОтраженияЗарплатыВРеглУчете.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.СпособыОтраженияЗарплатыВРеглУчете.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СпособыОтраженияЗарплатыВРеглУчете.ФормаЭлементаСобытия");
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
			name: 'СчетДтНУ.Представление',
			width: 80,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:98px;top:162px;width:80px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.СпособыОтраженияЗарплатыВРеглУчете.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СпособыОтраженияЗарплатыВРеглУчете.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.СпособыОтраженияЗарплатыВРеглУчете.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СпособыОтраженияЗарплатыВРеглУчете.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоДтНУ1',
			text: 'Субконто 1:',
			style: 'position:absolute;left:6px;top:185px;width:90px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'СубконтоДтНУ1.Представление',
			width: 180,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:98px;top:185px;width:180px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.СпособыОтраженияЗарплатыВРеглУчете.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СпособыОтраженияЗарплатыВРеглУчете.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.СпособыОтраженияЗарплатыВРеглУчете.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СпособыОтраженияЗарплатыВРеглУчете.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоДтНУ2',
			text: 'Субконто 2:',
			style: 'position:absolute;left:6px;top:208px;width:90px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'СубконтоДтНУ2.Представление',
			width: 180,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:98px;top:208px;width:180px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.СпособыОтраженияЗарплатыВРеглУчете.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СпособыОтраженияЗарплатыВРеглУчете.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.СпособыОтраженияЗарплатыВРеглУчете.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СпособыОтраженияЗарплатыВРеглУчете.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоДтНУ3',
			text: 'Субконто 3:',
			style: 'position:absolute;left:6px;top:231px;width:90px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'СубконтоДтНУ3.Представление',
			width: 180,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:98px;top:231px;width:180px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.СпособыОтраженияЗарплатыВРеглУчете.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СпособыОтраженияЗарплатыВРеглУчете.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.СпособыОтраженияЗарплатыВРеглУчете.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СпособыОтраженияЗарплатыВРеглУчете.ФормаЭлементаСобытия");
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
			name: 'СчетКтНУ.Представление',
			width: 80,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:389px;top:162px;width:80px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.СпособыОтраженияЗарплатыВРеглУчете.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СпособыОтраженияЗарплатыВРеглУчете.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.СпособыОтраженияЗарплатыВРеглУчете.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СпособыОтраженияЗарплатыВРеглУчете.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоКтНУ1',
			text: 'Субконто 1:',
			style: 'position:absolute;left:297px;top:185px;width:90px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'СубконтоКтНУ1.Представление',
			width: 180,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:389px;top:185px;width:180px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.СпособыОтраженияЗарплатыВРеглУчете.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СпособыОтраженияЗарплатыВРеглУчете.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.СпособыОтраженияЗарплатыВРеглУчете.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СпособыОтраженияЗарплатыВРеглУчете.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоКтНУ2',
			text: 'Субконто 2:',
			style: 'position:absolute;left:297px;top:208px;width:90px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'СубконтоКтНУ2.Представление',
			width: 180,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:389px;top:208px;width:180px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.СпособыОтраженияЗарплатыВРеглУчете.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СпособыОтраженияЗарплатыВРеглУчете.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.СпособыОтраженияЗарплатыВРеглУчете.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СпособыОтраженияЗарплатыВРеглУчете.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоКтНУ3',
			text: 'Субконто 3:',
			style: 'position:absolute;left:297px;top:231px;width:90px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'СубконтоКтНУ3.Представление',
			width: 180,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:389px;top:231px;width:180px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.СпособыОтраженияЗарплатыВРеглУчете.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СпособыОтраженияЗарплатыВРеглУчете.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.СпособыОтраженияЗарплатыВРеглУчете.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СпособыОтраженияЗарплатыВРеглУчете.ФормаЭлементаСобытия");
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
			name: 'ОтражениеВУСН.Представление',
			width: 471,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:98px;top:277px;width:471px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.СпособыОтраженияЗарплатыВРеглУчете.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СпособыОтраженияЗарплатыВРеглУчете.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.СпособыОтраженияЗарплатыВРеглУчете.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СпособыОтраженияЗарплатыВРеглУчете.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			text: 'Бухгалтерский учет',
			style: 'position:absolute;left:0px;top:7px;width:569px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			text: 'Налоговый учет',
			style: 'position:absolute;left:0px;top:142px;width:569px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			text: 'Налоговый учет УСН',
			style: 'position:absolute;left:0px;top:257px;width:569px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			name: 'НадписьСчетДтНУ',
			text: 'Счет дебета:',
			style: 'position:absolute;left:6px;top:162px;width:90px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьСчетДт',
			text: 'Счет дебета:',
			style: 'position:absolute;left:6px;top:27px;width:90px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьСчетКт',
			text: 'Счет кредита:',
			style: 'position:absolute;left:297px;top:27px;width:90px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьСчетКтНУ',
			text: 'Счет кредита:',
			style: 'position:absolute;left:297px;top:162px;width:90px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьНеОтражатьВБухучете1',
			text: 'Начисления сотрудников организации, которым задан этот способ отражения, будут отражаться в бухгалтерском и налоговом учете, как отражены в учете начисления входящие в расчетную базу',
			style: 'position:absolute;left:0px;top:0px;width:569px;height:67px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'СубконтоКт1Строка',
			width: 180,
			height: 19,
			style: 'position:absolute;left:389px;top:50px;width:180px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'СубконтоКтНУ1Строка',
			width: 180,
			height: 19,
			style: 'position:absolute;left:389px;top:185px;width:180px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'СубконтоКт2Строка',
			width: 180,
			height: 19,
			style: 'position:absolute;left:389px;top:73px;width:180px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'СубконтоКт3Строка',
			width: 180,
			height: 19,
			style: 'position:absolute;left:389px;top:96px;width:180px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'СубконтоКтНУ2Строка',
			width: 180,
			height: 19,
			style: 'position:absolute;left:389px;top:208px;width:180px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'СубконтоКтНУ3Строка',
			width: 180,
			height: 19,
			style: 'position:absolute;left:389px;top:231px;width:180px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'СубконтоДтНУ1Строка',
			width: 180,
			height: 19,
			style: 'position:absolute;left:98px;top:185px;width:180px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'СубконтоДтНУ2Строка',
			width: 180,
			height: 19,
			style: 'position:absolute;left:98px;top:208px;width:180px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'СубконтоДтНУ3Строка',
			width: 180,
			height: 19,
			style: 'position:absolute;left:98px;top:231px;width:180px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'СубконтоДт1Строка',
			width: 180,
			height: 19,
			style: 'position:absolute;left:98px;top:50px;width:180px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'СубконтоДт2Строка',
			width: 180,
			height: 19,
			style: 'position:absolute;left:98px;top:73px;width:180px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'СубконтоДт3Строка',
			width: 180,
			height: 19,
			style: 'position:absolute;left:98px;top:96px;width:180px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРасходыУСН',
			text: 'Отражение в УСН:',
			style: 'position:absolute;left:0px;top:277px;width:96px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'СпособРаспределенияЗатрат.Представление',
			width: 180,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:98px;top:119px;width:180px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.СпособыОтраженияЗарплатыВРеглУчете.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СпособыОтраженияЗарплатыВРеглУчете.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.СпособыОтраженияЗарплатыВРеглУчете.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СпособыОтраженияЗарплатыВРеглУчете.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьСпособРаспределенияЗатрат',
			text: 'Способ распределения затрат:',
			style: 'position:absolute;left:6px;top:119px;width:90px;height:19px;text-align:left;',
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьНеОтражатьВБухучете',
			text: 'Начисления сотрудников организации, которым задан этот способ отражения, не будут отражаться в бухгалтерском и налоговом учете',
			style: 'position:absolute;left:1px;top:0px;width:568px;height:67px;',
		},
					]
				},
				{
				},
			]
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:383px;width:585px;height:25px;',
			width: 585,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
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
	]
	});
});