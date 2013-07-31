Ext.require(['Данные.Обработки.ЗагрузкаПочтовыхСообщений'], function () 
{
	Ext.define('Обработки.ЗагрузкаПочтовыхСообщений.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:643px;height:416px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Обработка  Загрузка почтовых сообщений',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'ЭлектронныеПисьма',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:81px;width:627px;height:302px;',
			height: 302,width: 627,
			columns:
			[
				{
					text:'',
					width:'21',
					dataIndex:'Использование',
					flex:1,
				},
				{
					text:'',
					width:'21',
					dataIndex:'Вложения',
					flex:1,
				},
				{
					text:'Дата получения',
					width:'100',
					dataIndex:'ДатаПолучения',
					flex:1,
				},
				{
					text:'Копии',
					width:'117',
					dataIndex:'Копии',
					flex:1,
				},
				{
					text:'Отправитель',
					width:'110',
					dataIndex:'ОтправительПредставление',
					flex:1,
				},
				{
					text:'Получатели',
					width:'106',
					dataIndex:'Кому',
					flex:1,
				},
				{
					text:'Тема',
					width:'145',
					dataIndex:'Тема',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ЗагрузкаПочтовыхСообщений/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Использование',
					},
					{
						name:'Вложения',
					},
					{
						name:'ДатаПолучения',
					},
					{
						name:'Копии',
					},
					{
						name:'ОтправительПредставление',
					},
					{
						name:'Кому',
					},
					{
						name:'Тема',
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
						var грид = Ext.getCmp('ЭлектронныеПисьма');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.ЗагрузкаПочтовыхСообщений.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ЗагрузкаПочтовыхСообщений.ФормаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Учетная запись:',
			style: 'position:absolute;left:8px;top:33px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'УчетнаяЗапись.Представление',
			width: 385,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:98px;top:33px;width:385px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.ЗагрузкаПочтовыхСообщений.ФормаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ЗагрузкаПочтовыхСообщений.ФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.ЗагрузкаПочтовыхСообщений.ФормаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ЗагрузкаПочтовыхСообщений.ФормаСобытия");
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
			style: 'position:absolute;left:0px;top:0px;width:643px;height:25px;',
			dock: 'top',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:391px;width:643px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Выполнить',
				},
				'-',
				{
					text:'Закрыть',
					handler: function () {this.up('window').close();},
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:57px;width:627px;height:24px;',
			dock: 'top',
			items:
			[
				'-',
				{
					text:'Установить флажки',
				},
				{
					text:'Снять флажки',
				},
				'-',
				{
					text:'Заполнить',
				},
			]
		},
	]
	});
});