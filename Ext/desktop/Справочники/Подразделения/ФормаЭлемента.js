Ext.require(['Данные.Справочники.Подразделения'], function () 
{
	Ext.define('Справочники.Подразделения.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:538px;height:472px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Подразделения',
	
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
			style: 'position:absolute;left:404px;top:33px;width:24px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Код',
			width: 88,
			height: 19,
			style: 'position:absolute;left:430px;top:33px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:33px;width:81px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Наименование',
			width: 300,
			height: 19,
			style: 'position:absolute;left:91px;top:33px;width:300px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:538px;height:25px;',
			width: 538,
			height: 25,
			items:
			[
				{
					xtype: 'splitbutton',
					text:'Действия',
					menu: [
				'-',
				{
					text:'Редактировать код',
					tooltip:'Включить возможность редактирования кода',
				},
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
					text:'Настройка доступа',
					tooltip:'Открыть форму настройки прав доступа',
				},
				'-',
				{
					text:'Справка',
					tooltip:'Открыть справку',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьРуководитель',
			text: 'Руководитель:',
			style: 'position:absolute;left:8px;top:57px;width:81px;height:15px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьРуководительТекст',
			text: 'НадписьРуководительТекст',
			style: 'position:absolute;left:91px;top:57px;width:427px;height:34px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьВидПодразделения',
			text: 'Вид:',
			style: 'position:absolute;left:8px;top:93px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'ВидПодразделения.Представление',
			width: 295,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:93px;top:93px;width:295px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.Подразделения.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.Подразделения.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.Подразделения.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.Подразделения.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьВидЦФО',
			text: 'Вид ЦФО:',
			style: 'position:absolute;left:8px;top:120px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'ВидЦФО.Представление',
			width: 295,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:93px;top:120px;width:295px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.Подразделения.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.Подразделения.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.Подразделения.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.Подразделения.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьОсновнойПроект',
			text: 'Основной проект:',
			style: 'position:absolute;left:8px;top:143px;width:84px;height:27px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ОсновнойПроект',
			width: 295,
			height: 19,
			style: 'position:absolute;left:93px;top:143px;width:295px;height:19px;',
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:186px;width:522px;height:253px;',
			height: 253,width: 522,
			items:
			[
				{
					items:
					[
		{
			id: 'СоответствиеПодразделениямОрганизаций',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:23px;width:510px;height:206px;',
			height: 206,width: 510,
			columns:
			[
				{
					text:'Организация',
					width:'120',
					dataIndex:'Организация',
					flex:1,
				},
				{
					text:'Подразделение организации',
					width:'120',
					dataIndex:'ПодразделениеОрганизации',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.Подразделения").data,
					fields: ['Ссылка','Родитель.Представление','Организация','ПодразделениеОрганизации',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/Подразделения/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Организация',
					},
					{
						name:'ПодразделениеОрганизации',
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
						var грид = Ext.getCmp('СоответствиеПодразделениямОрганизаций');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.Подразделения.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.Подразделения.ФормаЭлементаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			name: 'НадписьСоответствиеПодразделений',
			text: 'Соответствие подразделениям организаций',
			style: 'position:absolute;left:6px;top:6px;width:510px;height:15px;',
		},
					]
				},
				{
					items:
					[
		{
			id: 'Категории',
			xtype: 'grid',
			style: 'position:absolute;left:257px;top:26px;width:257px;height:201px;',
			height: 201,width: 257,
			columns:
			[
				{
					text:'',
					width:'32',
					dataIndex:'ПометкаУдаления',
					flex:1,
				},
				{
					text:'Принадлежность',
					width:'25',
					dataIndex:'Принадлежность',
					flex:1,
				},
				{
					text:'Категория',
					width:'120',
					dataIndex:'Категория',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.Подразделения").data,
					fields: ['Ссылка','Родитель.Представление','ПометкаУдаления','Принадлежность','Категория',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/Подразделения/ВыбратьПоСсылке/100', timeout: 200},
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
						Ext.require(['Справочники.Подразделения.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.Подразделения.ФормаЭлементаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			id: 'СвойстваИЗначения',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:26px;width:247px;height:201px;',
			height: 201,width: 247,
			columns:
			[
				{
					text:'',
					width:'32',
					dataIndex:'ПометкаУдаления',
					flex:1,
				},
				{
					text:'Свойство',
					width:'120',
					dataIndex:'Свойство',
					flex:1,
				},
				{
					text:'Значение',
					width:'120',
					dataIndex:'Значение',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.Подразделения").data,
					fields: ['Ссылка','Родитель.Представление','ПометкаУдаления','Свойство','Значение',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/Подразделения/ВыбратьПоСсылке/100', timeout: 200},
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
						Ext.require(['Справочники.Подразделения.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.Подразделения.ФормаЭлементаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:63px;width:247px;height:24px;',
			width: 247,
			height: 24,
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:257px;top:63px;width:247px;height:24px;',
			width: 247,
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
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:170px;width:522px;height:16px;',
			height: 16,width: 522,
			tabBar:{hidden:true},
			items:
			[
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
			style: 'position:absolute;left:0px;top:447px;width:538px;height:25px;',
			width: 538,
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