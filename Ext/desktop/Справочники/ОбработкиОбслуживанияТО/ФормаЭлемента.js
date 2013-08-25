Ext.require(['Данные.Справочники.ОбработкиОбслуживанияТО'], function () 
{
	Ext.define('Справочники.ОбработкиОбслуживанияТО.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:473px;height:501px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Обработка обслуживания ТО',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:473px;height:25px;',
			width: 473,
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
				'-',
				{
					text:'Редактировать код',
				},
					]
				},
				'-',
				{
					text:'НайтиВСписке',
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
					text:'Экспорт в файл',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:33px;width:100px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Наименование',
			width: 244,
			height: 19,
			style: 'position:absolute;left:113px;top:33px;width:244px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКод',
			text: 'Код:',
			style: 'position:absolute;left:362px;top:33px;width:22px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Код',
			width: 80,
			height: 19,
			style: 'position:absolute;left:385px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			text: 'Параметры обработки обслуживания',
			style: 'position:absolute;left:8px;top:57px;width:457px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			name: 'НадписьОбработка',
			text: 'Обработка:',
			style: 'position:absolute;left:8px;top:78px;width:100px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Обработка',
			width: 302,
			height: 19,
			style: 'position:absolute;left:113px;top:78px;width:302px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВид',
			text: 'Вид:',
			style: 'position:absolute;left:8px;top:102px;width:100px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			name: 'Вид.Представление',
			width: 352,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:113px;top:102px;width:352px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.ОбработкиОбслуживанияТО.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.ОбработкиОбслуживанияТО.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.ОбработкиОбслуживанияТО.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.ОбработкиОбслуживанияТО.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьОписание',
			text: 'Описание:',
			style: 'position:absolute;left:8px;top:126px;width:100px;height:19px;text-align:left;',
		},
		{
			xtype: 'textarea',
			hideLabel: true,
			disabled: false,
			name: 'Описание',
			style: 'position:absolute;left:113px;top:126px;width:352px;height:46px;',
		},
		{
			xtype: 'label',
			text: 'Список моделей поддерживаемого оборудования',
			style: 'position:absolute;left:8px;top:253px;width:457px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			id: 'Модели',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:276px;width:457px;height:192px;',
			height: 192,width: 457,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Модель торгового оборудования',
					width:'250',
					dataIndex:'Модель',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.ОбработкиОбслуживанияТО").data,
					fields: ['Ссылка','НомерСтроки','Модель',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ОбработкиОбслуживанияТО/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'Модель',
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
						var грид = Ext.getCmp('Модели');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ОбработкиОбслуживанияТО.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ОбработкиОбслуживанияТО.ФормаЭлементаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			name: 'НадписьВерсия',
			text: 'Версия обработки:',
			style: 'position:absolute;left:8px;top:201px;width:100px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'Версия',
			style: 'position:absolute;left:113px;top:201px;width:352px;height:19px;',
			width: 352,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'НадписьИдентификатор',
			text: 'ID:',
			style: 'position:absolute;left:8px;top:225px;width:100px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Идентификатор',
			width: 352,
			height: 19,
			style: 'position:absolute;left:113px;top:225px;width:352px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВерсияAPI',
			text: 'Версия API:',
			style: 'position:absolute;left:8px;top:177px;width:100px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ВерсияAPI',
			style: 'position:absolute;left:113px;top:177px;width:352px;height:19px;',
			width: 352,
			height: 19,
		},
		{
			xtype: 'button',
			name: 'ЗагрузкаОбновлениеОбработкиССайта',
			text: '',
			style: 'position:absolute;left:445px;top:78px;width:20px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'ЗагрузкаОбновлениеОбработкиИзКаталога',
			text: '',
			style: 'position:absolute;left:420px;top:78px;width:20px;height:19px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:476px;width:473px;height:25px;',
			width: 473,
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