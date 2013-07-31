Ext.require(['Данные.Справочники.ПодразделенияОрганизаций'], function () 
{
	Ext.define('Справочники.ПодразделенияОрганизаций.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:526px;height:351px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Подразделение',
	
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
			style: 'position:absolute;left:404px;top:33px;width:32px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Код',
			width: 80,
			height: 19,
			style: 'position:absolute;left:438px;top:33px;width:80px;height:19px;',
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
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:135px;width:510px;height:183px;',
			height: 183,width: 510,
			items:
			[
				{
					title:'Обособленное подразделение',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьКодПоОКАТО',
			text: 'Код по ОКАТО:',
			style: 'position:absolute;left:22px;top:39px;width:78px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'КодПоОКАТО',
			width: 100,
			height: 19,
			style: 'position:absolute;left:102px;top:39px;width:100px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКПП',
			text: 'КПП:',
			style: 'position:absolute;left:219px;top:39px;width:27px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'КПП',
			width: 80,
			height: 19,
			style: 'position:absolute;left:248px;top:39px;width:80px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'РайонныйКоэффициент',
			style: 'position:absolute;left:248px;top:89px;width:80px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'РайонныйКоэффициентРФ',
			style: 'position:absolute;left:248px;top:113px;width:80px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'ТерриториальныеУсловияПФР.Представление',
			width: 80,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:248px;top:137px;width:80px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.ПодразделенияОрганизаций.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.ПодразделенияОрганизаций.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.ПодразделенияОрганизаций.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.ПодразделенияОрганизаций.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьРайонныйКоэффициент2',
			text: 'Районный коэффициент (местный):',
			style: 'position:absolute;left:38px;top:89px;width:209px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьРайонныйКоэффициентРФ2',
			text: 'Районный коэффициент (федеральный):',
			style: 'position:absolute;left:38px;top:113px;width:209px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьТерриториальныеУсловияПФР2',
			text: 'Территориальные условия ПФР:',
			style: 'position:absolute;left:38px;top:137px;width:209px;height:19px;text-align:left;',
		},
		{
			xtype: 'fieldset',
			title: 'Территориальные особенности',
			style: 'position:absolute;left:22px;top:69px;width:306px;height:16px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Подразделение зарегистрировано в ИФНС как обособленное с присвоением кода по ОКАТО и КПП, но не имеет выделенного баланса',
			style: 'position:absolute;left:6px;top:6px;width:496px;height:28px;',
		},
					]
				},
				{
					title:'Бухучет зарплаты',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьСвойства',
			text: 'Свойства',
			style: 'position:absolute;left:6px;top:6px;width:245px;height:17px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИнформацияОтраженияВУчете',
			text: 'Бухучет зарплаты сотрудников подразделения следует задавать в том случае, если он отличается от бухучета зарплаты сотрудников предприятия в целом.',
			style: 'position:absolute;left:34px;top:6px;width:468px;height:29px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтражениеВБухучетеИзменить',
			text: 'Задать бухучет зарплаты сотрудников подразделения',
			style: 'position:absolute;left:34px;top:124px;width:468px;height:33px;',
		},
					]
				},
				{
					title:'Страховые взносы',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:6px;width:496px;height:81px;',
			height: 81,width: 496,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Соответствует судам, зарегистрированным в Российском международном реестре судов',
			style: 'position:absolute;left:0px;top:0px;width:478px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьМоряков',
			text: 'Надпись моряков',
			style: 'position:absolute;left:16px;top:25px;width:480px;height:56px;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'Дополнительно',
					items:
					[
		{
			id: 'Категории',
			xtype: 'grid',
			style: 'position:absolute;left:257px;top:23px;width:245px;height:132px;',
			height: 132,width: 245,
			columns:
			[
				{
					text:'',
					width:'28',
					dataIndex:'ПометкаУдаления',
					flex:1,
				},
				{
					text:'Принадлежность',
					width:'27',
					dataIndex:'Принадлежность',
					flex:1,
				},
				{
					text:'Категория',
					width:'165',
					dataIndex:'Категория',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.ПодразделенияОрганизаций").data,
					fields: ['ПометкаУдаления','Принадлежность','Категория',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПодразделенияОрганизаций/ВыбратьПоСсылке/100', timeout: 200},
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
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.ПодразделенияОрганизаций.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ПодразделенияОрганизаций.ФормаЭлементаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			id: 'СвойстваИЗначения',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:23px;width:245px;height:132px;',
			height: 132,width: 245,
			columns:
			[
				{
					text:'Свойство',
					width:'116',
					dataIndex:'Свойство',
					flex:1,
				},
				{
					text:'Значение',
					width:'94',
					dataIndex:'Значение',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.ПодразделенияОрганизаций").data,
					fields: ['Свойство','Значение',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПодразделенияОрганизаций/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
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
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.ПодразделенияОрганизаций.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ПодразделенияОрганизаций.ФормаЭлементаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			name: 'НадписьКатегории',
			text: 'Категории',
			style: 'position:absolute;left:257px;top:6px;width:245px;height:17px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтражениеВБухучете',
			text: 'НадписьОтражениеВБухучете',
			style: 'position:absolute;left:34px;top:45px;width:466px;height:79px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:61px;width:245px;height:24px;',
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
			name: 'НадписьРуководитель',
			text: 'Руководитель:',
			style: 'position:absolute;left:8px;top:59px;width:81px;height:15px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьРуководительТекст',
			text: 'НадписьРуководительТекст',
			style: 'position:absolute;left:91px;top:59px;width:427px;height:33px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'ВидПодразделения.Представление',
			width: 300,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:91px;top:96px;width:300px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.ПодразделенияОрганизаций.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.ПодразделенияОрганизаций.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.ПодразделенияОрганизаций.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.ПодразделенияОрганизаций.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьВидПодразделения',
			text: 'Вид :',
			style: 'position:absolute;left:8px;top:96px;width:81px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:115px;width:510px;height:16px;',
			height: 16,width: 510,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
				},
			]
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:526px;height:25px;',
			dock: 'top',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'Действия',
					menu: [
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
					text:'Настройка доступа',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:326px;width:526px;height:25px;',
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