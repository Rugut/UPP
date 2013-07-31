Ext.require(['Данные.Справочники.КомпетенцииРаботников'], function () 
{
	Ext.define('Справочники.КомпетенцииРаботников.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:406px;height:428px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Компетенция сотрудника',
	
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
			style: 'position:absolute;left:8px;top:33px;width:109px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Наименование',
			width: 281,
			height: 19,
			style: 'position:absolute;left:117px;top:33px;width:281px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:82px;width:390px;height:313px;',
			height: 313,width: 390,
			items:
			[
				{
					title:'Описание компетенции',
					items:
					[
		{
			xtype: 'textarea',
			hideLabel: true,
			disabled: false,
			name: 'ОписаниеКомпетенции',
			style: 'position:absolute;left:6px;top:6px;width:376px;height:281px;',
		},
					]
				},
				{
					title:'Оценка компетенции',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьШкалаОценок',
			text: 'Шкала оценок:',
			style: 'position:absolute;left:6px;top:6px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'ШкалаОценок.Представление',
			width: 286,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:96px;top:6px;width:286px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.КомпетенцииРаботников.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.КомпетенцииРаботников.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.КомпетенцииРаботников.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.КомпетенцииРаботников.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьТиповаяАнкета',
			text: 'Типовая анкета:',
			style: 'position:absolute;left:6px;top:30px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'ТиповаяАнкета.Представление',
			width: 286,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:96px;top:30px;width:286px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.КомпетенцииРаботников.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.КомпетенцииРаботников.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.КомпетенцииРаботников.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.КомпетенцииРаботников.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			id: 'ОписаниеОценок',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:84px;width:376px;height:203px;',
			height: 203,width: 376,
			columns:
			[
				{
					text:'Оценка',
					width:'140',
					dataIndex:'Оценка',
					flex:1,
				},
				{
					text:'Приоритет',
					width:'60',
					dataIndex:'ПриоритетОценки',
					flex:1,
				},
				{
					text:'Ожидаемая доля оценки,  %',
					width:'80',
					dataIndex:'ВесОценки',
					flex:1,
				},
				{
					text:'Описание оценки',
					width:'249',
					dataIndex:'ОписаниеОценки',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.КомпетенцииРаботников").data,
					fields: ['Оценка','ПриоритетОценки','ВесОценки','ОписаниеОценки',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/КомпетенцииРаботников/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Оценка',
					},
					{
						name:'ПриоритетОценки',
					},
					{
						name:'ВесОценки',
					},
					{
						name:'ОписаниеОценки',
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
						var грид = Ext.getCmp('ОписаниеОценок');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.КомпетенцииРаботников.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.КомпетенцииРаботников.ФормаЭлементаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'fieldset',
			title: 'Система оценок',
			style: 'position:absolute;left:6px;top:68px;width:376px;height:14px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьРодитель',
			text: 'Группа компетенций:',
			style: 'position:absolute;left:8px;top:58px;width:109px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'Родитель.Представление',
			width: 281,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:117px;top:58px;width:281px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.КомпетенцииРаботников.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.КомпетенцииРаботников.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.КомпетенцииРаботников.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.КомпетенцииРаботников.ФормаЭлементаСобытия");
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
			style: 'position:absolute;left:0px;top:0px;width:406px;height:25px;',
			dock: 'top',
			items:
			[
				'-',
				{
					xtype: 'splitbutton',
					text:'',
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
				'-',
				{
					text:'Перечитать',
				},
				{
					text:'Скопировать',
				},
				'-',
				{
					text:'Файлы',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:403px;width:406px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Печать',
				},
				'-',
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