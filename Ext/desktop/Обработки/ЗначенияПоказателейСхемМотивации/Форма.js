Ext.require(['Данные.Обработки.ЗначенияПоказателейСхемМотивации'], function () 
{
	Ext.define('Обработки.ЗначенияПоказателейСхемМотивации.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:692px;height:361px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Показатели расчета заработной платы',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:692px;height:25px;',
			width: 692,
			height: 25,
			items:
			[
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'Справочник показателей',
				},
				'-',
				{
					text:'Плановые начисления',
				},
				{
					text:'Плановые удержания',
				},
				'-',
				{
					text:'Справка',
				},
				'-',
				{
					text:'Закрыть',
				},
					]
				},
				'-',
				{
					text:'Справочник показателей',
				},
				'-',
				{
					text:'Плановые начисления',
				},
				'-',
				{
					text:'Плановые удержания',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:29px;width:676px;height:324px;',
			height: 324,width: 676,
			items:
			[
				{
					items:
					[
		{
			id: 'ЕжемесячныеПоказатели',
			xtype: 'grid',
			style: 'position:absolute;left:246px;top:111px;width:422px;height:185px;',
			height: 185,width: 422,
			columns:
			[
				{
					text:'Показатель',
					width:'100',
					dataIndex:'Показатель',
					flex:1,
				},
				{
					text:'Подразделение',
					width:'100',
					dataIndex:'Подразделение',
					flex:1,
				},
				{
					text:'Организация',
					width:'100',
					dataIndex:'Организация',
					flex:1,
				},
				{
					text:'Сотрудник',
					width:'100',
					dataIndex:'Сотрудник',
					flex:1,
				},
				{
					text:'Табельный №',
					width:'80',
					dataIndex:'ТабельныйНомер',
					flex:1,
				},
				{
					text:'Значение',
					width:'80',
					dataIndex:'Значение',
					flex:1,
				},
				{
					text:'Валюта',
					width:'45',
					dataIndex:'Валюта',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ЗначенияПоказателейСхемМотивации/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Показатель',
					},
					{
						name:'Подразделение',
					},
					{
						name:'Организация',
					},
					{
						name:'Сотрудник',
					},
					{
						name:'ТабельныйНомер',
					},
					{
						name:'Значение',
					},
					{
						name:'Валюта',
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
						var грид = Ext.getCmp('ЕжемесячныеПоказатели');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ЗначенияПоказателейСхемМотивации.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ЗначенияПоказателейСхемМотивации.ФормаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:6px;top:6px;width:662px;height:73px;',
			height: 73,width: 662,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			text: 'Что вводим',
			style: 'position:absolute;left:6px;top:6px;width:242px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			text: 'Режим ввода',
			style: 'position:absolute;left:320px;top:6px;width:126px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			text: 'Период',
			style: 'position:absolute;left:504px;top:6px;width:133px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПериодДействия',
			width: 133,
			height: 19,
			style: 'position:absolute;left:504px;top:27px;width:133px;height:19px;',
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Данные по сотрудникам',
			style: 'position:absolute;left:6px;top:27px;width:242px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Данные по организациям и подразделениям',
			style: 'position:absolute;left:6px;top:51px;width:259px;height:16px;',
		},
			]
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'По показателям',
			style: 'position:absolute;left:320px;top:27px;width:126px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: '',
			style: 'position:absolute;left:320px;top:51px;width:126px;height:16px;',
		},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:6px;top:87px;width:234px;height:209px;',
			height: 209,width: 234,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			id: 'Сотрудники',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:24px;width:234px;height:185px;',
			height: 185,width: 234,
			columns:
			[
				{
					text:'Сотрудник',
					width:'100',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Код',
					width:'65',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Подразделение',
					width:'50',
					dataIndex:'ТекущееПодразделениеОрганизации',
					flex:1,
				},
				{
					text:'Подразделение',
					width:'50',
					dataIndex:'ТекущееПодразделениеКомпании',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ЗначенияПоказателейСхемМотивации/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Наименование',
					},
					{
						name:'Код',
					},
					{
						name:'ТекущееПодразделениеОрганизации',
					},
					{
						name:'ТекущееПодразделениеКомпании',
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
						var грид = Ext.getCmp('Сотрудники');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ЗначенияПоказателейСхемМотивации.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ЗначенияПоказателейСхемМотивации.ФормаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:0px;top:0px;width:234px;height:19px;',
			height: 19,width: 234,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:0px;top:0px;width:70px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'ОрганизацияСотрудников.Представление',
			width: 159,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:75px;top:0px;width:159px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.ЗначенияПоказателейСхемМотивации.ФормаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ЗначенияПоказателейСхемМотивации.ФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.ЗначенияПоказателейСхемМотивации.ФормаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ЗначенияПоказателейСхемМотивации.ФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
					]
				},
			]
		},
					]
				},
				{
					items:
					[
		{
			id: 'ТабличноеПолеПодразделенияОрганизацийЕжемесячные',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:0px;width:234px;height:208px;',
			height: 208,width: 234,
			columns:
			[
				{
					text:'Организация',
					width:'350',
					dataIndex:'Организация',
					flex:1,
				},
				{
					text:'Наименование',
					width:'350',
					dataIndex:'Наименование',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ЗначенияПоказателейСхемМотивации/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Организация',
					},
					{
						name:'Наименование',
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
						var грид = Ext.getCmp('ТабличноеПолеПодразделенияОрганизацийЕжемесячные');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ЗначенияПоказателейСхемМотивации.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ЗначенияПоказателейСхемМотивации.ФормаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
					]
				},
				{
					items:
					[
		{
			id: 'Показатели',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:0px;width:234px;height:209px;',
			height: 209,width: 234,
			columns:
			[
				{
					text:'',
					width:'24',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Наименование',
					width:'350',
					dataIndex:'Наименование',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ЗначенияПоказателейСхемМотивации/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Картинка',
					},
					{
						name:'Наименование',
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
						var грид = Ext.getCmp('Показатели');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ЗначенияПоказателейСхемМотивации.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ЗначенияПоказателейСхемМотивации.ФормаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
					]
				},
				{
					items:
					[
		{
			id: 'ТабличноеПолеПодразделенияПоЦФОЕжемесячные',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:0px;width:234px;height:209px;',
			height: 209,width: 234,
			columns:
			[
				{
					text:'Подразделение',
					width:'353',
					dataIndex:'Наименование',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ЗначенияПоказателейСхемМотивации/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Наименование',
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
						var грид = Ext.getCmp('ТабличноеПолеПодразделенияПоЦФОЕжемесячные');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ЗначенияПоказателейСхемМотивации.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ЗначенияПоказателейСхемМотивации.ФормаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
					]
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:246px;top:87px;width:422px;height:24px;',
			width: 422,
			height: 24,
			items:
			[
				{
					text:'&Добавить',
				},
				{
					text:'Изменить',
				},
				{
					text:'Удалить',
				},
				'-',
				{
					text:'Заполнить по плановым начислениям (удержаниям)',
				},
				'-',
				{
					text:'Вывести список...',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:401px;top:192px;width:267px;height:24px;',
			width: 267,
			height: 24,
			items:
			[
				{
					text:'&Добавить',
				},
				{
					text:'Изменить',
				},
				{
					text:'Удалить',
				},
				'-',
				{
					text:'Заполнить по плановым начислениям (удержаниям)',
				},
				'-',
				{
					text:'Вывести список...',
				},
			]
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'panel',
			style: 'position:absolute;left:6px;top:6px;width:662px;height:73px;',
			height: 73,width: 662,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			text: 'Что вводим',
			style: 'position:absolute;left:6px;top:6px;width:384px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'ОрганизацияПериодические.Представление',
			width: 226,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:164px;top:26px;width:226px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.ЗначенияПоказателейСхемМотивации.ФормаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ЗначенияПоказателейСхемМотивации.ФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.ЗначенияПоказателейСхемМотивации.ФормаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ЗначенияПоказателейСхемМотивации.ФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Данные по организации:',
			style: 'position:absolute;left:6px;top:27px;width:155px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Общие данные',
			style: 'position:absolute;left:6px;top:51px;width:148px;height:16px;',
		},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:6px;top:85px;width:662px;height:211px;',
			height: 211,width: 662,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			id: 'ПлановыеЗначенияПоказателейСхемМотивации',
			xtype: 'grid',
			style: 'position:absolute;left:240px;top:26px;width:422px;height:185px;',
			height: 185,width: 422,
			columns:
			[
				{
					text:'Показатель',
					width:'90',
					dataIndex:'Показатель',
					flex:1,
				},
				{
					text:'Значение',
					width:'90',
					dataIndex:'Значение',
					flex:1,
				},
				{
					text:'Валюта',
					width:'45',
					dataIndex:'Валюта',
					flex:1,
				},
				{
					text:'Действует с:',
					width:'93',
					dataIndex:'Период',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ЗначенияПоказателейСхемМотивации/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Показатель',
					},
					{
						name:'Значение',
					},
					{
						name:'Валюта',
					},
					{
						name:'Период',
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
						var грид = Ext.getCmp('ПлановыеЗначенияПоказателейСхемМотивации');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ЗначенияПоказателейСхемМотивации.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ЗначенияПоказателейСхемМотивации.ФормаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:240px;top:1px;width:422px;height:24px;',
			width: 422,
			height: 24,
			items:
			[
				{
					text:'&Добавить',
				},
				{
					text:'Изменить',
				},
				{
					text:'Удалить',
				},
				'-',
				{
					text:'Вывести список...',
				},
			]
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:0px;top:0px;width:233px;height:211px;',
			height: 211,width: 233,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			id: 'ПодразделенияОрганизацииПлановые',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:0px;width:233px;height:211px;',
			height: 211,width: 233,
			columns:
			[
				{
					text:'Наименование',
					width:'350',
					dataIndex:'Наименование',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ЗначенияПоказателейСхемМотивации/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Наименование',
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
						var грид = Ext.getCmp('ПодразделенияОрганизацииПлановые');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ЗначенияПоказателейСхемМотивации.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ЗначенияПоказателейСхемМотивации.ФормаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
					]
				},
				{
					items:
					[
		{
			id: 'ПодразделенияПлановые',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:0px;width:233px;height:211px;',
			height: 211,width: 233,
			columns:
			[
				{
					text:'Наименование',
					width:'350',
					dataIndex:'Наименование',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ЗначенияПоказателейСхемМотивации/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Наименование',
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
						var грид = Ext.getCmp('ПодразделенияПлановые');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ЗначенияПоказателейСхемМотивации.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ЗначенияПоказателейСхемМотивации.ФормаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
					]
				},
			]
		},
					]
				},
				{
					items:
					[
		{
			id: 'ПлановыеЗначенияПоказателейСхемМотивацииОбщие',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:24px;width:662px;height:187px;',
			height: 187,width: 662,
			columns:
			[
				{
					text:'Показатель',
					width:'336',
					dataIndex:'Показатель',
					flex:1,
				},
				{
					text:'Значение',
					width:'94',
					dataIndex:'Значение',
					flex:1,
				},
				{
					text:'Валюта',
					width:'70',
					dataIndex:'Валюта',
					flex:1,
				},
				{
					text:'Действует с:',
					width:'91',
					dataIndex:'Период',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ЗначенияПоказателейСхемМотивации/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Показатель',
					},
					{
						name:'Значение',
					},
					{
						name:'Валюта',
					},
					{
						name:'Период',
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
						var грид = Ext.getCmp('ПлановыеЗначенияПоказателейСхемМотивацииОбщие');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ЗначенияПоказателейСхемМотивации.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ЗначенияПоказателейСхемМотивации.ФормаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:662px;height:24px;',
			width: 662,
			height: 24,
			items:
			[
				{
					text:'&Добавить',
				},
				{
					text:'Изменить',
				},
				{
					text:'Удалить',
				},
				'-',
				{
					text:'Вывести список...',
				},
			]
		},
					]
				},
			]
		},
					]
				},
			]
		},
		],
	}],
	dockedItems:
	[
	]
	});
});