Ext.require(['Данные.Документы.АнкетаЗастрахованногоЛица'], function () 
{
	Ext.define('Документы.АнкетаЗастрахованногоЛица.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:645px;height:470px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Анкета застрахованного лица (АДВ-1)',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:645px;height:25px;',
			width: 645,
			height: 25,
			items:
			[
			]
		},
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:418px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			width: 543,
			height: 19,
			style: 'position:absolute;left:94px;top:418px;width:543px;height:19px;',
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:74px;width:629px;height:48px;',
			height: 48,width: 629,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:0px;top:0px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Номер',
			width: 80,
			height: 19,
			style: 'position:absolute;left:86px;top:0px;width:80px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'Дата',
			width: 120,
			height: 19,
			style: 'position:absolute;left:186px;top:0px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:0px;top:24px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Организация.Представление',
			width: 220,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:86px;top:24px;width:220px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.АнкетаЗастрахованногоЛица.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.АнкетаЗастрахованногоЛица.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.АнкетаЗастрахованногоЛица.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.АнкетаЗастрахованногоЛица.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:168px;top:0px;width:16px;height:19px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:324px;top:24px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Исполнитель.Представление',
			width: 220,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:409px;top:24px;width:220px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.АнкетаЗастрахованногоЛица.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.АнкетаЗастрахованногоЛица.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.АнкетаЗастрахованногоЛица.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.АнкетаЗастрахованногоЛица.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьНомерПачки',
			text: 'Номер пачки:',
			style: 'position:absolute;left:324px;top:0px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НомерПачки',
			width: 80,
			height: 19,
			style: 'position:absolute;left:409px;top:0px;width:80px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:122px;width:629px;height:269px;',
			height: 269,width: 629,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:16px;width:629px;height:24px;',
			width: 629,
			height: 24,
			items:
			[
				{
					text:'Сотрудниками без страховых номеров',
					tooltip:'Заполнить список сотрудников',
				},
			]
		},
		{
			id: 'РаботникиОрганизации',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:40px;width:629px;height:229px;',
			height: 229,width: 629,
			columns:
			[
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Сотрудник',
					width:'220',
					dataIndex:'ФизЛицо',
					flex:1,
				},
				{
					text:'Пол',
					width:'120',
					dataIndex:'Пол',
					flex:1,
				},
				{
					text:'Дата рождения',
					width:'100',
					dataIndex:'ДатаРождения',
					flex:1,
				},
				{
					text:'Фамилия',
					width:'160',
					dataIndex:'Фамилия',
					flex:1,
				},
				{
					text:'Имя',
					width:'80',
					dataIndex:'Имя',
					flex:1,
				},
				{
					text:'Отчество',
					width:'80',
					dataIndex:'Отчество',
					flex:1,
				},
				{
					text:'Место рождения',
					width:'160',
					dataIndex:'МестоРождения',
					flex:1,
				},
				{
					text:'Адрес регистрации',
					width:'80',
					dataIndex:'АдресРегистрации',
					flex:1,
				},
				{
					text:'Адрес фактический',
					width:'80',
					dataIndex:'АдресФактический',
					flex:1,
				},
				{
					text:'Гражданство',
					width:'80',
					dataIndex:'Гражданство',
					flex:1,
				},
				{
					text:'Телефоны',
					width:'80',
					dataIndex:'Телефоны',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/АнкетаЗастрахованногоЛица/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'ФизЛицо',
					},
					{
						name:'Пол',
					},
					{
						name:'ДатаРождения',
					},
					{
						name:'Фамилия',
					},
					{
						name:'Имя',
					},
					{
						name:'Отчество',
					},
					{
						name:'МестоРождения',
					},
					{
						name:'АдресРегистрации',
					},
					{
						name:'АдресФактический',
					},
					{
						name:'Гражданство',
					},
					{
						name:'Телефоны',
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
						var грид = Ext.getCmp('РаботникиОрганизации');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.АнкетаЗастрахованногоЛица.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.АнкетаЗастрахованногоЛица.ФормаДокументаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			text: 'Сотрудники',
			style: 'position:absolute;left:0px;top:0px;width:629px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
					]
				},
			]
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:33px;width:629px;height:41px;',
			height: 41,width: 629,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'panel',
			style: 'position:absolute;left:0px;top:0px;width:629px;height:35px;',
			height: 35,width: 629,
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
					]
				},
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Заменять букву "ё"',
			style: 'position:absolute;left:8px;top:396px;width:629px;height:15px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:445px;width:645px;height:25px;',
			width: 645,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				'-',
				{
					text:'Показать файл',
					tooltip:'Сформировать и показать файл',
				},
				'-',
				{
					text:'Записать файл на диск',
					tooltip:'Записать файл на диск или дискетку',
				},
				'-',
				{
					text:'OK',
					tooltip:'Записать объект и закрыть форму',
					iconCls:'x-WriteAndClose',
				},
				'-',
				{
					text:'Записать документ',
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