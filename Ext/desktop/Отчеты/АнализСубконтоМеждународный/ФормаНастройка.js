Ext.require(['Данные.Отчеты.АнализСубконтоМеждународный'], function () 
{
	Ext.define('Отчеты.АнализСубконтоМеждународный.ФормаНастройка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:432px;height:261px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Настройка',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:8px;width:416px;height:220px;',
			height: 220,width: 416,
			items:
			[
				{
					title:'Общие',
					items:
					[
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаНач',
			width: 80,
			height: 19,
			style: 'position:absolute;left:88px;top:7px;width:80px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаКон',
			width: 80,
			height: 19,
			style: 'position:absolute;left:188px;top:7px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:270px;top:7px;width:19px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'Организация.Представление',
			width: 200,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:88px;top:31px;width:200px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Отчеты.АнализСубконтоМеждународный.ФормаНастройкаСобытия'], function ()
					{
						var объект = Ext.create("Отчеты.АнализСубконтоМеждународный.ФормаНастройкаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Отчеты.АнализСубконтоМеждународный.ФормаНастройкаСобытия'], function ()
					{
						var объект = Ext.create("Отчеты.АнализСубконтоМеждународный.ФормаНастройкаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Данные по валютам',
			style: 'position:absolute;left:266px;top:121px;width:142px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Данные по количеству',
			style: 'position:absolute;left:266px;top:141px;width:142px;height:15px;',
		},
		{
			xtype: 'fieldset',
			title: 'Выводить данные',
			style: 'position:absolute;left:260px;top:100px;width:148px;height:16px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'По субсчетам',
			style: 'position:absolute;left:266px;top:76px;width:142px;height:15px;',
		},
		{
			xtype: 'fieldset',
			title: 'Показывать обороты',
			style: 'position:absolute;left:260px;top:56px;width:148px;height:16px;',
		},
		{
			id: 'Субконто',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:96px;width:242px;height:96px;',
			height: 96,width: 242,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Вид субконто',
					width:'190',
					dataIndex:'ВидСубконто',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/АнализСубконтоМеждународный/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'ВидСубконто',
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
						var грид = Ext.getCmp('Субконто');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.АнализСубконтоМеждународный.ФормаНастройкаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.АнализСубконтоМеждународный.ФормаНастройкаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'fieldset',
			title: 'Виды субконто',
			style: 'position:absolute;left:8px;top:56px;width:240px;height:16px;',
		},
					]
				},
				{
					title:'Отбор',
					items:
					[
		{
			id: 'Отбор',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:32px;width:402px;height:162px;',
			height: 162,width: 402,
			columns:
			[
				{
					text:'',
					width:'20',
					dataIndex:'Использование',
					flex:1,
				},
				{
					text:'Поле',
					width:'100',
					dataIndex:'Имя',
					flex:1,
				},
				{
					text:'Тип сравнения',
					width:'60',
					dataIndex:'ВидСравнения',
					flex:1,
				},
				{
					text:'Значение',
					width:'100',
					dataIndex:'Значение',
					flex:1,
				},
				{
					text:'С',
					width:'100',
					dataIndex:'ЗначениеС',
					flex:1,
				},
				{
					text:'По',
					width:'100',
					dataIndex:'ЗначениеПо',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/АнализСубконтоМеждународный/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Использование',
					},
					{
						name:'Имя',
					},
					{
						name:'ВидСравнения',
					},
					{
						name:'Значение',
					},
					{
						name:'ЗначениеС',
					},
					{
						name:'ЗначениеПо',
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
						var грид = Ext.getCmp('Отбор');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.АнализСубконтоМеждународный.ФормаНастройкаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.АнализСубконтоМеждународный.ФормаНастройкаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
					]
				},
				{
					title:'Сортировка',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьДатаНач',
			text: 'Период с:',
			style: 'position:absolute;left:6px;top:7px;width:80px;height:19px;text-align:left;',
		},
		{
			id: 'Порядок',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:48px;width:182px;height:146px;',
			height: 146,width: 182,
			columns:
			[
				{
					text:'Направление',
					width:'107',
					dataIndex:'Направление',
					flex:1,
				},
				{
					text:'Поле',
					width:'63',
					dataIndex:'Имя',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/АнализСубконтоМеждународный/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Направление',
					},
					{
						name:'Имя',
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
						var грид = Ext.getCmp('Порядок');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.АнализСубконтоМеждународный.ФормаНастройкаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.АнализСубконтоМеждународный.ФормаНастройкаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			id: 'ДоступныеПоля',
			xtype: 'grid',
			style: 'position:absolute;left:220px;top:48px;width:188px;height:146px;',
			height: 146,width: 188,
			columns:
			[
				{
					text:'Поле',
					width:'100',
					dataIndex:'Поле',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/АнализСубконтоМеждународный/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Поле',
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
						var грид = Ext.getCmp('ДоступныеПоля');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.АнализСубконтоМеждународный.ФормаНастройкаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.АнализСубконтоМеждународный.ФормаНастройкаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Сортировать по:',
			style: 'position:absolute;left:6px;top:6px;width:90px;height:18px;',
		},
		{
			xtype: 'button',
			name: 'ДобавитьСортировку',
			text: '',
			style: 'position:absolute;left:192px;top:68px;width:24px;height:24px;',
		},
		{
			xtype: 'button',
			name: 'УдалитьСортировку',
			text: '',
			style: 'position:absolute;left:192px;top:96px;width:24px;height:24px;',
		},
					]
				},
			]
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:236px;width:432px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'ОК',
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