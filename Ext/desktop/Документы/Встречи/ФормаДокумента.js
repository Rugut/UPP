Ext.require(['Данные.Документы.Встречи'], function () 
{
	Ext.define('Документы.Встречи.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:675px;height:446px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Встреча',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:257px;top:394px;width:43px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Номер',
			width: 80,
			height: 19,
			style: 'position:absolute;left:300px;top:394px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'Дата регистрации:',
			style: 'position:absolute;left:8px;top:394px;width:107px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'Дата',
			width: 128,
			height: 19,
			style: 'position:absolute;left:116px;top:394px;width:128px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Зарегистрировал:',
			style: 'position:absolute;left:395px;top:394px;width:100px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'Ответственный.Представление',
			width: 172,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:495px;top:394px;width:172px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.Встречи.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.Встречи.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.Встречи.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.Встречи.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'fieldset',
			title: 'Прочее',
			style: 'position:absolute;left:8px;top:373px;width:659px;height:16px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:102px;width:659px;height:226px;',
			height: 226,width: 659,
			items:
			[
				{
					title:'Встреча',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			width: 645,
			height: 194,
			style: 'position:absolute;left:6px;top:6px;width:645px;height:194px;',
		},
					]
				},
				{
					title:'Планирование',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьДатаПланирования',
			text: '12 октября 2007 г',
			style: 'position:absolute;left:379px;top:6px;width:130px;height:24px;text-align:center;',
		},
		{
			id: 'Участники',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:56px;width:222px;height:144px;',
			height: 144,width: 222,
			columns:
			[
				{
					text:'Физлицо',
					width:'100',
					dataIndex:'Физлицо',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/Встречи/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Физлицо',
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
						var грид = Ext.getCmp('Участники');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.Встречи.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.Встречи.ФормаДокументаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'fieldset',
			title: 'Участники ',
			style: 'position:absolute;left:6px;top:6px;width:222px;height:16px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьПомещение',
			text: 'Место:',
			style: 'position:absolute;left:8px;top:63px;width:50px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'Помещение.Представление',
			width: 186,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:58px;top:63px;width:186px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.Встречи.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.Встречи.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.Встречи.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.Встречи.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьЧасов1',
			text: 'Продолж-ть:',
			style: 'position:absolute;left:257px;top:33px;width:74px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'Продолжительность',
			width: 49,
			height: 19,
			style: 'position:absolute;left:331px;top:33px;width:49px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаРезервирования1',
			text: 'Дата:',
			style: 'position:absolute;left:8px;top:33px;width:50px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаРезервирования',
			width: 76,
			height: 19,
			style: 'position:absolute;left:58px;top:33px;width:76px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаРезервирования2',
			text: 'Начало:',
			style: 'position:absolute;left:147px;top:33px;width:45px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ВремяНачала',
			width: 52,
			height: 19,
			style: 'position:absolute;left:192px;top:33px;width:52px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПредупреждение',
			text: 'Встреча назначена на 12 часов в помещении 2204',
			style: 'position:absolute;left:39px;top:336px;width:628px;height:35px;text-align:left;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Это - встреча с кандидатом',
			style: 'position:absolute;left:495px;top:33px;width:172px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'ЗаявкаКандидата.Представление',
			width: 172,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:495px;top:57px;width:172px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.Встречи.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.Встречи.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.Встречи.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.Встречи.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'button',
			name: 'КнопкаПодобратьСвободноеПомещение',
			text: 'Подобрать свободное помещение',
			style: 'position:absolute;left:257px;top:63px;width:123px;height:36px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:675px;height:25px;',
			dock: 'top',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:421px;width:675px;height:25px;',
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