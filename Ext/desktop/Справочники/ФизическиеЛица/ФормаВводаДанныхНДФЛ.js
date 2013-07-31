Ext.require(['Данные.Справочники.ФизическиеЛица'], function () 
{
	Ext.define('Справочники.ФизическиеЛица.ФормаВводаДанныхНДФЛ',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:692px;height:373px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Физические лица',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:8px;width:676px;height:332px;',
			height: 332,width: 676,
			items:
			[
				{
					title:'Вычеты',
					items:
					[
		{
			xtype: 'fieldset',
			title: 'Право на личный стандартный вычет',
			style: 'position:absolute;left:6px;top:6px;width:285px;height:16px;',
		},
		{
			xtype: 'fieldset',
			title: 'Применение вычетов',
			style: 'position:absolute;left:6px;top:182px;width:662px;height:16px;',
		},
		{
			id: 'ПрименениеВычетов',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:222px;width:662px;height:82px;',
			height: 82,width: 662,
			columns:
			[
				{
					text:'',
					width:'24',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Дата',
					width:'80',
					dataIndex:'Период',
					flex:1,
				},
				{
					text:'Применять вычеты в организации',
					width:'320',
					dataIndex:'ПрименятьВычетыТекст',
					flex:1,
				},
				{
					text:'Применение',
					width:'30',
					dataIndex:'ВычетыПрименение',
					flex:1,
				},
				{
					text:'Организация',
					width:'100',
					dataIndex:'Организация',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.ФизическиеЛица").data,
					fields: ['Картинка','Период','ПрименятьВычетыТекст','ВычетыПрименение','Организация',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ФизическиеЛица/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Картинка',
					},
					{
						name:'Период',
					},
					{
						name:'ПрименятьВычетыТекст',
					},
					{
						name:'ВычетыПрименение',
					},
					{
						name:'Организация',
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
						var грид = Ext.getCmp('ПрименениеВычетов');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.ФизическиеЛица.ФормаВводаДанныхНДФЛСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ФизическиеЛица.ФормаВводаДанныхНДФЛСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:198px;width:662px;height:24px;',
			items:
			[
				{
					text:'&Добавить',
				},
				{
					text:'',
				},
				{
					text:'Изменить',
				},
				{
					text:'Удалить',
				},
			]
		},
		{
			id: 'СтандартныеВычеты',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:46px;width:285px;height:129px;',
			height: 129,width: 285,
			columns:
			[
				{
					text:'',
					width:'24',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Дата',
					width:'70',
					dataIndex:'Период',
					flex:1,
				},
				{
					text:'Код',
					width:'103',
					dataIndex:'ВычетыЛичныеТекст',
					flex:1,
				},
				{
					text:'Применение',
					width:'80',
					dataIndex:'ВычетыЛичныеПрименение',
					flex:1,
				},
				{
					text:'Вычет личный',
					width:'50',
					dataIndex:'КодВычетаЛичный',
					flex:1,
				},
				{
					text:'Основание',
					width:'100',
					dataIndex:'Основание',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.ФизическиеЛица").data,
					fields: ['Картинка','Период','ВычетыЛичныеТекст','ВычетыЛичныеПрименение','КодВычетаЛичный','Основание',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ФизическиеЛица/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Картинка',
					},
					{
						name:'Период',
					},
					{
						name:'ВычетыЛичныеТекст',
					},
					{
						name:'ВычетыЛичныеПрименение',
					},
					{
						name:'КодВычетаЛичный',
					},
					{
						name:'Основание',
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
						var грид = Ext.getCmp('СтандартныеВычеты');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.ФизическиеЛица.ФормаВводаДанныхНДФЛСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ФизическиеЛица.ФормаВводаДанныхНДФЛСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'fieldset',
			title: 'Право на стандартные вычеты на детей',
			style: 'position:absolute;left:297px;top:6px;width:371px;height:16px;',
		},
		{
			id: 'СтандартныеВычетыНаДетей',
			xtype: 'grid',
			style: 'position:absolute;left:297px;top:46px;width:371px;height:129px;',
			height: 129,width: 371,
			columns:
			[
				{
					text:'',
					width:'24',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Период (с ... по)',
					width:'140',
					dataIndex:'КолонкаПериод',
					flex:1,
				},
				{
					text:'С',
					width:'70',
					dataIndex:'Период',
					flex:1,
				},
				{
					text:'по',
					width:'70',
					dataIndex:'ПериодЗавершения',
					flex:1,
				},
				{
					text:'Код и количество детей',
					width:'83',
					dataIndex:'ВычетыНаДетейТекст',
					flex:1,
				},
				{
					text:'Применение',
					width:'70',
					dataIndex:'ВычетыНаДетейПрименение',
					flex:1,
				},
				{
					text:'Вычет на детей',
					width:'60',
					dataIndex:'КодВычетаНаДетей',
					flex:1,
				},
				{
					text:'Количество детей',
					width:'24',
					dataIndex:'КоличествоДетей',
					flex:1,
				},
				{
					text:'Основание',
					width:'100',
					dataIndex:'Основание',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.ФизическиеЛица").data,
					fields: ['Картинка','КолонкаПериод','Период','ПериодЗавершения','ВычетыНаДетейТекст','ВычетыНаДетейПрименение','КодВычетаНаДетей','КоличествоДетей','Основание',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ФизическиеЛица/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Картинка',
					},
					{
						name:'КолонкаПериод',
					},
					{
						name:'Период',
					},
					{
						name:'ПериодЗавершения',
					},
					{
						name:'ВычетыНаДетейТекст',
					},
					{
						name:'ВычетыНаДетейПрименение',
					},
					{
						name:'КодВычетаНаДетей',
					},
					{
						name:'КоличествоДетей',
					},
					{
						name:'Основание',
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
						var грид = Ext.getCmp('СтандартныеВычетыНаДетей');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.ФизическиеЛица.ФормаВводаДанныхНДФЛСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ФизическиеЛица.ФормаВводаДанныхНДФЛСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
					]
				},
				{
					title:'Статус налогоплательщика',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьНДФЛ',
			text: 'Физическое лицо постоянно находится на территории РФ (за прошедшие 12 месяцев - более 183 дней). При исчислении НДФЛ с оплаты труда будет применяться ставка 13%',
			style: 'position:absolute;left:29px;top:200px;width:553px;height:51px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Применяется с:',
			style: 'position:absolute;left:19px;top:51px;width:83px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьИстория',
			text: 'История изменения ...',
			style: 'position:absolute;left:332px;top:51px;width:114px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОкончаниеДействияСтатусаНДФЛ',
			text: 'НадписьОкончаниеДействияСтатусаНДФЛ',
			style: 'position:absolute;left:226px;top:51px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПериодСтатусаНалогоплательщикаПоНДФЛ',
			width: 120,
			height: 19,
			style: 'position:absolute;left:104px;top:51px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Статус налогоплательщика по НДФЛ задается с точностью до месяца и определяет порядок представления налоговых вычетов и ставку налога.',
			style: 'position:absolute;left:6px;top:6px;width:662px;height:31px;',
		},
		{
			xtype: 'fieldset',
			title: '',
			style: 'position:absolute;left:6px;top:37px;width:662px;height:5px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:29px;top:172px;width:553px;height:28px;',
			height: 28,width: 553,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Член экипажа судна, плавающего под Государственным флагом РФ',
			style: 'position:absolute;left:0px;top:0px;width:374px;height:19px;',
		},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Резидент',
			style: 'position:absolute;left:29px;top:76px;width:86px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Нерезидент',
			style: 'position:absolute;left:29px;top:100px;width:86px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Высококвалифицированный иностранный специалист',
			style: 'position:absolute;left:29px;top:124px;width:302px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Участник программы по переселению соотечественников',
			style: 'position:absolute;left:29px;top:148px;width:319px;height:19px;',
		},
			]
		},
					]
				},
				{
					title:'Доходы на предыдущих местах работы',
					items:
					[
		{
			id: 'ДоходыПредыдущие',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:44px;width:661px;height:261px;',
			height: 261,width: 661,
			columns:
			[
				{
					text:'Месяц',
					width:'160',
					dataIndex:'МесяцНалоговогоПериода',
					flex:1,
				},
				{
					text:'Сумма дохода',
					width:'120',
					dataIndex:'Размер',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.ФизическиеЛица").data,
					fields: ['МесяцНалоговогоПериода','Размер',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ФизическиеЛица/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'МесяцНалоговогоПериода',
					},
					{
						name:'Размер',
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
						var грид = Ext.getCmp('ДоходыПредыдущие');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.ФизическиеЛица.ФормаВводаДанныхНДФЛСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ФизическиеЛица.ФормаВводаДанныхНДФЛСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'Год',
			style: 'position:absolute;left:404px;top:6px;width:60px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьГод',
			text: 'Год:',
			style: 'position:absolute;left:362px;top:6px;width:40px;height:19px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Данные по организации:',
			style: 'position:absolute;left:6px;top:6px;width:132px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'Организация.Представление',
			width: 220,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:140px;top:6px;width:220px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.ФизическиеЛица.ФормаВводаДанныхНДФЛСобытия'], function ()
					{
						var объект = Ext.create("Справочники.ФизическиеЛица.ФормаВводаДанныхНДФЛСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.ФизическиеЛица.ФормаВводаДанныхНДФЛСобытия'], function ()
					{
						var объект = Ext.create("Справочники.ФизическиеЛица.ФормаВводаДанныхНДФЛСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
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
			style: 'position:absolute;left:0px;top:348px;width:692px;height:25px;',
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