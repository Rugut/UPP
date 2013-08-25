Ext.require(['Данные.Документы.ТабельУчетаРабочегоВремениОрганизации'], function () 
{
	Ext.define('Документы.ТабельУчетаРабочегоВремениОрганизации.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:726px;height:550px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Табель учета рабочего времени',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:676px;height:25px;',
			width: 676,
			height: 25,
			items:
			[
			]
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:33px;width:502px;height:482px;',
			height: 482,width: 502,
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
			style: 'position:absolute;left:243px;top:0px;width:44px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Номер',
			width: 78,
			height: 19,
			style: 'position:absolute;left:291px;top:0px;width:78px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:0px;top:1px;width:83px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Организация.Представление',
			width: 144,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:85px;top:1px;width:144px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ТабельУчетаРабочегоВремениОрганизации.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ТабельУчетаРабочегоВремениОрганизации.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ТабельУчетаРабочегоВремениОрганизации.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ТабельУчетаРабочегоВремениОрганизации.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьПодразделение',
			text: 'Подразделение:',
			style: 'position:absolute;left:0px;top:25px;width:83px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'ПодразделениеОрганизации.Представление',
			width: 144,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:85px;top:25px;width:144px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ТабельУчетаРабочегоВремениОрганизации.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ТабельУчетаРабочегоВремениОрганизации.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ТабельУчетаРабочегоВремениОрганизации.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ТабельУчетаРабочегоВремениОрганизации.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'Ответственный.Представление',
			width: 174,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:328px;top:25px;width:174px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ТабельУчетаРабочегоВремениОрганизации.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ТабельУчетаРабочегоВремениОрганизации.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ТабельУчетаРабочегоВремениОрганизации.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ТабельУчетаРабочегоВремениОрганизации.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:0px;top:463px;width:86px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			width: 415,
			height: 19,
			style: 'position:absolute;left:87px;top:463px;width:415px;height:19px;',
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:0px;top:210px;width:502px;height:245px;',
			height: 245,width: 502,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			id: 'ОтработанноеВремя',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:25px;width:502px;height:218px;',
			height: 218,width: 502,
			columns:
			[
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Таб. №',
					width:'68',
					dataIndex:'ТабельныйНомерСтрока',
					flex:1,
				},
				{
					text:'Сотрудник',
					width:'100',
					dataIndex:'Сотрудник',
					flex:1,
				},
				{
					text:'Итого',
					width:'80',
					dataIndex:'Итого',
					flex:1,
				},
				{
					text:'1',
					width:'30',
					dataIndex:'День1',
					flex:1,
				},
				{
					text:'2',
					width:'30',
					dataIndex:'День2',
					flex:1,
				},
				{
					text:'3',
					width:'30',
					dataIndex:'День3',
					flex:1,
				},
				{
					text:'4',
					width:'30',
					dataIndex:'День4',
					flex:1,
				},
				{
					text:'5',
					width:'30',
					dataIndex:'День5',
					flex:1,
				},
				{
					text:'6',
					width:'30',
					dataIndex:'День6',
					flex:1,
				},
				{
					text:'7',
					width:'30',
					dataIndex:'День7',
					flex:1,
				},
				{
					text:'8',
					width:'30',
					dataIndex:'День8',
					flex:1,
				},
				{
					text:'9',
					width:'30',
					dataIndex:'День9',
					flex:1,
				},
				{
					text:'10',
					width:'30',
					dataIndex:'День10',
					flex:1,
				},
				{
					text:'11',
					width:'30',
					dataIndex:'День11',
					flex:1,
				},
				{
					text:'12',
					width:'30',
					dataIndex:'День12',
					flex:1,
				},
				{
					text:'13',
					width:'30',
					dataIndex:'День13',
					flex:1,
				},
				{
					text:'14',
					width:'30',
					dataIndex:'День14',
					flex:1,
				},
				{
					text:'15',
					width:'30',
					dataIndex:'День15',
					flex:1,
				},
				{
					text:'16',
					width:'30',
					dataIndex:'День16',
					flex:1,
				},
				{
					text:'17',
					width:'30',
					dataIndex:'День17',
					flex:1,
				},
				{
					text:'18',
					width:'30',
					dataIndex:'День18',
					flex:1,
				},
				{
					text:'19',
					width:'30',
					dataIndex:'День19',
					flex:1,
				},
				{
					text:'20',
					width:'30',
					dataIndex:'День20',
					flex:1,
				},
				{
					text:'21',
					width:'30',
					dataIndex:'День21',
					flex:1,
				},
				{
					text:'22',
					width:'30',
					dataIndex:'День22',
					flex:1,
				},
				{
					text:'23',
					width:'30',
					dataIndex:'День23',
					flex:1,
				},
				{
					text:'24',
					width:'30',
					dataIndex:'День24',
					flex:1,
				},
				{
					text:'25',
					width:'30',
					dataIndex:'День25',
					flex:1,
				},
				{
					text:'26',
					width:'30',
					dataIndex:'День26',
					flex:1,
				},
				{
					text:'27',
					width:'30',
					dataIndex:'День27',
					flex:1,
				},
				{
					text:'28',
					width:'30',
					dataIndex:'День28',
					flex:1,
				},
				{
					text:'29',
					width:'30',
					dataIndex:'День29',
					flex:1,
				},
				{
					text:'30',
					width:'30',
					dataIndex:'День30',
					flex:1,
				},
				{
					text:'31',
					width:'30',
					dataIndex:'День31',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ТабельУчетаРабочегоВремениОрганизации/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'ТабельныйНомерСтрока',
					},
					{
						name:'Сотрудник',
					},
					{
						name:'Итого',
					},
					{
						name:'День1',
					},
					{
						name:'День2',
					},
					{
						name:'День3',
					},
					{
						name:'День4',
					},
					{
						name:'День5',
					},
					{
						name:'День6',
					},
					{
						name:'День7',
					},
					{
						name:'День8',
					},
					{
						name:'День9',
					},
					{
						name:'День10',
					},
					{
						name:'День11',
					},
					{
						name:'День12',
					},
					{
						name:'День13',
					},
					{
						name:'День14',
					},
					{
						name:'День15',
					},
					{
						name:'День16',
					},
					{
						name:'День17',
					},
					{
						name:'День18',
					},
					{
						name:'День19',
					},
					{
						name:'День20',
					},
					{
						name:'День21',
					},
					{
						name:'День22',
					},
					{
						name:'День23',
					},
					{
						name:'День24',
					},
					{
						name:'День25',
					},
					{
						name:'День26',
					},
					{
						name:'День27',
					},
					{
						name:'День28',
					},
					{
						name:'День29',
					},
					{
						name:'День30',
					},
					{
						name:'День31',
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
						var грид = Ext.getCmp('ОтработанноеВремя');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ТабельУчетаРабочегоВремениОрганизации.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ТабельУчетаРабочегоВремениОрганизации.ФормаДокументаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:502px;height:24px;',
			width: 502,
			height: 24,
			items:
			[
				{
					text:'Подбор',
				},
				'-',
				'-',
				{
					text:'&Добавить',
				},
				'-',
				{
					text:'',
				},
				{
					text:'Удалить',
				},
				{
					text:'',
				},
				{
					text:'',
				},
				{
					text:'Конструктор настроек...',
				},
				{
					text:'',
				},
			]
		},
					]
				},
				{
					items:
					[
		{
			id: 'ОтработанноеВремяВЦеломЗаПериод',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:24px;width:502px;height:219px;',
			height: 219,width: 502,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Таб. №',
					width:'68',
					dataIndex:'ТабельныйНомерСтрока',
					flex:1,
				},
				{
					text:'Сотрудник',
					width:'100',
					dataIndex:'Сотрудник',
					flex:1,
				},
				{
					text:'Вид времени',
					width:'100',
					dataIndex:'ВидВремени1',
					flex:1,
				},
				{
					text:'Дней',
					width:'50',
					dataIndex:'Дней1',
					flex:1,
				},
				{
					text:'Часов',
					width:'50',
					dataIndex:'Часов1',
					flex:1,
				},
				{
					text:'Вид времени',
					width:'100',
					dataIndex:'ВидВремени2',
					flex:1,
				},
				{
					text:'Дней',
					width:'50',
					dataIndex:'Дней2',
					flex:1,
				},
				{
					text:'Часов',
					width:'50',
					dataIndex:'Часов2',
					flex:1,
				},
				{
					text:'Вид времени',
					width:'100',
					dataIndex:'ВидВремени3',
					flex:1,
				},
				{
					text:'Дней',
					width:'50',
					dataIndex:'Дней3',
					flex:1,
				},
				{
					text:'Часов',
					width:'50',
					dataIndex:'Часов3',
					flex:1,
				},
				{
					text:'Вид времени',
					width:'100',
					dataIndex:'ВидВремени4',
					flex:1,
				},
				{
					text:'Дней',
					width:'50',
					dataIndex:'Дней4',
					flex:1,
				},
				{
					text:'Часов',
					width:'50',
					dataIndex:'Часов4',
					flex:1,
				},
				{
					text:'Вид времени',
					width:'100',
					dataIndex:'ВидВремени5',
					flex:1,
				},
				{
					text:'Дней',
					width:'50',
					dataIndex:'Дней5',
					flex:1,
				},
				{
					text:'Часов',
					width:'50',
					dataIndex:'Часов5',
					flex:1,
				},
				{
					text:'Вид времени',
					width:'100',
					dataIndex:'ВидВремени6',
					flex:1,
				},
				{
					text:'Дней',
					width:'50',
					dataIndex:'Дней6',
					flex:1,
				},
				{
					text:'Часов',
					width:'50',
					dataIndex:'Часов6',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ТабельУчетаРабочегоВремениОрганизации/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'ТабельныйНомерСтрока',
					},
					{
						name:'Сотрудник',
					},
					{
						name:'ВидВремени1',
					},
					{
						name:'Дней1',
					},
					{
						name:'Часов1',
					},
					{
						name:'ВидВремени2',
					},
					{
						name:'Дней2',
					},
					{
						name:'Часов2',
					},
					{
						name:'ВидВремени3',
					},
					{
						name:'Дней3',
					},
					{
						name:'Часов3',
					},
					{
						name:'ВидВремени4',
					},
					{
						name:'Дней4',
					},
					{
						name:'Часов4',
					},
					{
						name:'ВидВремени5',
					},
					{
						name:'Дней5',
					},
					{
						name:'Часов5',
					},
					{
						name:'ВидВремени6',
					},
					{
						name:'Дней6',
					},
					{
						name:'Часов6',
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
						var грид = Ext.getCmp('ОтработанноеВремяВЦеломЗаПериод');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ТабельУчетаРабочегоВремениОрганизации.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ТабельУчетаРабочегоВремениОрганизации.ФормаДокументаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:300px;height:24px;',
			width: 300,
			height: 24,
			items:
			[
				{
					text:'По всем сотрудникам',
				},
				'-',
				{
					text:'По списку сотрудников',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:316px;top:0px;width:186px;height:24px;',
			width: 186,
			height: 24,
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Изменить состав колонок',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'Дата',
			width: 106,
			height: 19,
			style: 'position:absolute;left:396px;top:0px;width:106px;height:19px;',
		},
		{
			xtype: 'label',
			text: 'Сотрудники организации',
			style: 'position:absolute;left:0px;top:194px;width:502px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:0px;top:60px;width:502px;height:128px;',
			height: 128,width: 502,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПериодРегистрации',
			width: 183,
			height: 19,
			style: 'position:absolute;left:46px;top:8px;width:183px;height:19px;',
		},
		{
			xtype: 'label',
			text: 'Способ ввода времени',
			style: 'position:absolute;left:255px;top:11px;width:236px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаНачалаПериода',
			width: 80,
			height: 19,
			style: 'position:absolute;left:46px;top:98px;width:80px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаОкончанияПериода',
			width: 80,
			height: 19,
			style: 'position:absolute;left:149px;top:98px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'по:',
			style: 'position:absolute;left:130px;top:98px;width:15px;height:19px;',
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Весь месяц (Май 2007 г)',
			style: 'position:absolute;left:8px;top:35px;width:221px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Первая половина месяца (1-15 мая)',
			style: 'position:absolute;left:8px;top:56px;width:221px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Вторая половина месяца (16-31 мая)',
			style: 'position:absolute;left:8px;top:77px;width:221px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'с:',
			style: 'position:absolute;left:8px;top:98px;width:29px;height:19px;',
		},
			]
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'По дням периода',
			style: 'position:absolute;left:255px;top:35px;width:236px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Сводно, в целом за период',
			style: 'position:absolute;left:255px;top:56px;width:236px;height:19px;',
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
		{
			xtype: 'panel',
			style: 'position:absolute;left:516px;top:33px;width:202px;height:482px;',
			height: 482,width: 202,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьЗакрытьСправкуФормы',
			text: 'Скрыть эту информацию о Табеле',
			style: 'position:absolute;left:0px;top:445px;width:200px;height:35px;text-align:right;',
		},
					]
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:676px;top:0px;width:50px;height:25px;',
			width: 50,
			height: 25,
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'',
				},
			]
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:525px;width:726px;height:25px;',
			width: 726,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
			]
		},
	]
	});
});