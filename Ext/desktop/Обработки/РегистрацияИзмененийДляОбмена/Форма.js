Ext.require(['Данные.Обработки.РегистрацияИзмененийДляОбмена'], function () 
{
	Ext.define('Обработки.РегистрацияИзмененийДляОбмена.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:702px;height:445px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Регистрация изменений для обмена',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'НадписьУзелОбмена',
			text: 'Узел обмена:',
			style: 'position:absolute;left:8px;top:4px;width:74px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'УзелОбмена.Представление',
			width: 609,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:85px;top:4px;width:609px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.РегистрацияИзмененийДляОбмена.ФормаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.РегистрацияИзмененийДляОбмена.ФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.РегистрацияИзмененийДляОбмена.ФормаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.РегистрацияИзмененийДляОбмена.ФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			id: 'ДеревоОбмена',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:128px;width:686px;height:284px;',
			height: 284,width: 686,
			columns:
			[
				{
					text:'Имя',
					width:'341',
					dataIndex:'Имя',
					flex:1,
				},
				{
					text:'Авто регистрация',
					width:'100',
					dataIndex:'РежимАвтоРегистрации',
					flex:1,
				},
				{
					text:'Удален',
					width:'100',
					dataIndex:'Удален',
					flex:1,
				},
				{
					text:'Количество зарегистрированных',
					width:'100',
					dataIndex:'КоличествоЗарегистрированных',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/РегистрацияИзмененийДляОбмена/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Имя',
					},
					{
						name:'РежимАвтоРегистрации',
					},
					{
						name:'Удален',
					},
					{
						name:'КоличествоЗарегистрированных',
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
						var грид = Ext.getCmp('ДеревоОбмена');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.РегистрацияИзмененийДляОбмена.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.РегистрацияИзмененийДляОбмена.ФормаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:100px;width:686px;height:24px;',
			items:
			[
				{
					text:'Развернуть дерево',
				},
				{
					text:'Свернуть дерево',
				},
				'-',
				{
					text:'Отменить регистрацию',
				},
				{
					text:'Добавить регистрацию',
				},
				{
					text:'Показать зарегистрированные изменения данного типа',
				},
				'-',
				{
					text:'Результат стандартной выгрузки',
				},
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Отображать объекты, для которых зарегистрированы изменения',
			style: 'position:absolute;left:8px;top:52px;width:419px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Отображать количество объектов, для которых зарегистрированы изменения',
			style: 'position:absolute;left:8px;top:28px;width:451px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'УдалитьРегистрациюДляВсехОбъектов',
			text: 'Удалить всю регистрацию ...',
			style: 'position:absolute;left:328px;top:76px;width:167px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'ЗарегистрироватьИзмененияДляВсехОбъектов',
			text: 'Зарегистрировать все ...',
			style: 'position:absolute;left:8px;top:76px;width:137px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'ЗарегистрироватьИзмененияПоОдномуОбъекту',
			text: 'Зарегистрировать по одному ...',
			style: 'position:absolute;left:151px;top:76px;width:171px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаИзменитьНомера',
			text: 'Изменить номера сообщений...',
			style: 'position:absolute;left:500px;top:76px;width:167px;height:19px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:420px;width:702px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Справка',
				},
				'-',
				{
					text:'Восстановить значения...',
				},
				{
					text:'Сохранить значения...',
				},
				'-',
				{
					text:'Показать изменения',
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