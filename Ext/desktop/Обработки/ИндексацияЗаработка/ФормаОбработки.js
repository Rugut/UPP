Ext.require(['Данные.Обработки.ИндексацияЗаработка'], function () 
{
	Ext.define('Обработки.ИндексацияЗаработка.ФормаОбработки',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:675px;height:420px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Помощник повышения зарплаты',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'button',
			name: 'Закрыть',
			text: 'Закрыть',
			style: 'position:absolute;left:567px;top:390px;width:100px;height:22px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаДалее',
			text: 'Далее',
			style: 'position:absolute;left:482px;top:390px;width:80px;height:22px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНазад',
			text: 'Назад',
			style: 'position:absolute;left:397px;top:390px;width:80px;height:22px;',
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:39px;width:659px;height:342px;',
			height: 342,width: 659,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьПерваяСтраница',
			text: 'Помощник используется для регистрации повышения должностных окладов, тарифных разрядов. Можно отменить последнее повышение.  ',
			style: 'position:absolute;left:22px;top:0px;width:589px;height:29px;',
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:0px;top:34px;width:659px;height:143px;',
			height: 143,width: 659,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Выберите действие, которое необходимо выполнить и нажмите кнопку «Далее»',
			style: 'position:absolute;left:20px;top:6px;width:448px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Выберите действие, которое необходимо выполнить и нажмите кнопку «Далее»',
			style: 'position:absolute;left:20px;top:6px;width:448px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Повышение должностных окладов',
			style: 'position:absolute;left:40px;top:28px;width:347px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Повышение тарифных разрядов (окладов по тарифным сеткам)',
			style: 'position:absolute;left:40px;top:50px;width:347px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Просмотр истории, отмена последнего повышения',
			style: 'position:absolute;left:40px;top:72px;width:347px;height:19px;',
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Повышение должностных окладов сотрудников доп. категории',
			style: 'position:absolute;left:40px;top:28px;width:347px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Повышение окладов сотрудников доп. категории',
			style: 'position:absolute;left:40px;top:50px;width:347px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Повышение окладов сотрудникам по трудовым договорам',
			style: 'position:absolute;left:40px;top:72px;width:347px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Повышение тарифных разрядов (окладов по тарифным сеткам)',
			style: 'position:absolute;left:40px;top:94px;width:347px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Просмотр истории, отмена последнего повышения',
			style: 'position:absolute;left:40px;top:116px;width:284px;height:19px;',
		},
			]
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Выберите действие, которое необходимо выполнить и нажмите кнопку «Далее»',
			style: 'position:absolute;left:20px;top:6px;width:448px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Повышение должностных окладов муниципальных служащих',
			style: 'position:absolute;left:40px;top:28px;width:347px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Просмотр истории, отмена последнего повышения',
			style: 'position:absolute;left:40px;top:94px;width:347px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Повышение окладов сотрудникам по трудовым договорам',
			style: 'position:absolute;left:40px;top:50px;width:347px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Повышение тарифных разрядов (окладов по тарифным сеткам)',
			style: 'position:absolute;left:40px;top:72px;width:347px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:0px;top:177px;width:653px;height:164px;',
			height: 164,width: 653,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			id: 'ТаблицаИстории',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:32px;width:191px;height:126px;',
			height: 126,width: 191,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Дата повышения',
					width:'100',
					dataIndex:'ДатаПовышения',
					flex:1,
				},
				{
					text:'Должностные оклады',
					width:'100',
					dataIndex:'ДолжностныеОклады',
					flex:1,
				},
				{
					text:'Штатное расписание',
					width:'100',
					dataIndex:'ШтатноеРасписание',
					flex:1,
				},
				{
					text:'Тарифные разряды',
					width:'100',
					dataIndex:'ТарифныеРазряды',
					flex:1,
				},
				{
					text:'Доп тарифные разряды',
					width:'100',
					dataIndex:'ДопТарифныеРазряды',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ИндексацияЗаработка/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'ДатаПовышения',
					},
					{
						name:'ДолжностныеОклады',
					},
					{
						name:'ШтатноеРасписание',
					},
					{
						name:'ТарифныеРазряды',
					},
					{
						name:'ДопТарифныеРазряды',
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
						var грид = Ext.getCmp('ТаблицаИстории');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ИндексацияЗаработка.ФормаОбработкиСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ИндексацияЗаработка.ФормаОбработкиСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			name: 'НадписьОписаниеИсторииИндексации',
			text: 'Надпись описание истории индексации',
			style: 'position:absolute;left:211px;top:32px;width:442px;height:81px;',
		},
		{
			xtype: 'label',
			text: 'История повышения окладов',
			style: 'position:absolute;left:6px;top:6px;width:647px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
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
			xtype: 'panel',
			style: 'position:absolute;left:0px;top:34px;width:659px;height:115px;',
			height: 115,width: 659,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьОрганизация1',
			text: 'Организация:',
			style: 'position:absolute;left:20px;top:6px;width:92px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'Организация1.Представление',
			width: 351,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:114px;top:6px;width:351px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.ИндексацияЗаработка.ФормаОбработкиСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ИндексацияЗаработка.ФормаОбработкиСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.ИндексацияЗаработка.ФормаОбработкиСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ИндексацияЗаработка.ФормаОбработкиСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьОтменаПовышенияОкладов',
			text: 'Надпись отмена повышения окладов',
			style: 'position:absolute;left:37px;top:29px;width:516px;height:33px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьДолжностныеОкладыЗаголовок1',
			text: 'История повышения окладов. Можно отменить последнее повышение.',
			style: 'position:absolute;left:22px;top:0px;width:589px;height:16px;',
		},
		{
			id: 'ТаблицаИстории1',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:182px;width:205px;height:148px;',
			height: 148,width: 205,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Дата повышения',
					width:'100',
					dataIndex:'ДатаПовышения',
					flex:1,
				},
				{
					text:'Должностные оклады',
					width:'100',
					dataIndex:'ДолжностныеОклады',
					flex:1,
				},
				{
					text:'Штатное расписание',
					width:'100',
					dataIndex:'ШтатноеРасписание',
					flex:1,
				},
				{
					text:'Тарифные разряды',
					width:'100',
					dataIndex:'ТарифныеРазряды',
					flex:1,
				},
				{
					text:'Доп тарифные разряды',
					width:'100',
					dataIndex:'ДопТарифныеРазряды',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ИндексацияЗаработка/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'ДатаПовышения',
					},
					{
						name:'ДолжностныеОклады',
					},
					{
						name:'ШтатноеРасписание',
					},
					{
						name:'ТарифныеРазряды',
					},
					{
						name:'ДопТарифныеРазряды',
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
						var грид = Ext.getCmp('ТаблицаИстории1');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ИндексацияЗаработка.ФормаОбработкиСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ИндексацияЗаработка.ФормаОбработкиСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			name: 'НадписьОписаниеИсторииИндексации1',
			text: 'Надпись описание истории индексации',
			style: 'position:absolute;left:228px;top:182px;width:431px;height:112px;',
		},
		{
			xtype: 'label',
			text: 'История повышения окладов',
			style: 'position:absolute;left:0px;top:160px;width:659px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'panel',
			style: 'position:absolute;left:0px;top:34px;width:659px;height:155px;',
			height: 155,width: 659,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Окладов сотрудников',
			style: 'position:absolute;left:114px;top:76px;width:140px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:20px;top:6px;width:92px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'Организация.Представление',
			width: 351,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:114px;top:6px;width:351px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.ИндексацияЗаработка.ФормаОбработкиСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ИндексацияЗаработка.ФормаОбработкиСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.ИндексацияЗаработка.ФормаОбработкиСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ИндексацияЗаработка.ФормаОбработкиСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьДатаПовышения',
			text: 'Дата повышения:',
			style: 'position:absolute;left:20px;top:30px;width:92px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаПовышения',
			width: 80,
			height: 19,
			style: 'position:absolute;left:114px;top:30px;width:80px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Окладов штатного расписания',
			style: 'position:absolute;left:114px;top:95px;width:183px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКоэффициентПовышения',
			text: 'Коэффициент повышения:',
			style: 'position:absolute;left:243px;top:30px;width:140px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'КоэффициентПовышения',
			style: 'position:absolute;left:385px;top:30px;width:80px;height:19px;',
			width: 80,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'НадписьЧтоИндексировать',
			text: 'Выполнить повышение (индексацию)',
			style: 'position:absolute;left:20px;top:54px;width:203px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНеобходимостьИндексацииШтатногоРасписания',
			text: 'В организации не включен контроль штатного расписания. При повышении окладов сотрудников можно не регистрировать повышение окладов в штатном расписании.',
			style: 'position:absolute;left:130px;top:118px;width:475px;height:29px;',
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьДатаПовышения1',
			text: 'Дата повышения:',
			style: 'position:absolute;left:22px;top:14px;width:92px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаПовышения1',
			width: 80,
			height: 19,
			style: 'position:absolute;left:116px;top:14px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКоэффициентПовышения1',
			text: 'Коэффициент повышения:',
			style: 'position:absolute;left:245px;top:14px;width:140px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'КоэффициентПовышения1',
			style: 'position:absolute;left:387px;top:14px;width:80px;height:19px;',
			width: 80,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'НадписьОкладыПоРазрядам',
			text: 'Повышение окладов по тарифным разрядам можно зарегистрировать только на первое число месяца.',
			style: 'position:absolute;left:32px;top:38px;width:317px;height:33px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьОкладыЗаголовок',
			text: 'Помощник используется для регистрации повышения должностных окладов, тарифных разрядов. Можно отменить последнее повышение.  ',
			style: 'position:absolute;left:28px;top:0px;width:589px;height:29px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПорядокОкругления',
			text: 'При расчете новые оклады округлять:',
			style: 'position:absolute;left:12px;top:199px;width:204px;height:16px;',
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'до рубля',
			style: 'position:absolute;left:216px;top:199px;width:71px;height:16px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'не округлять новые оклады',
			style: 'position:absolute;left:216px;top:262px;width:173px;height:17px;',
		},
			]
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'в сторону увеличения',
			style: 'position:absolute;left:235px;top:218px;width:160px;height:15px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'по правилам математики',
			style: 'position:absolute;left:235px;top:235px;width:160px;height:15px;',
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
			style: 'position:absolute;left:0px;top:26px;width:653px;height:286px;',
			height: 286,width: 653,
			items:
			[
				{
					items:
					[
		{
			id: 'ДолжностныеОклады',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:639px;height:229px;',
			height: 229,width: 639,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Сотрудник',
					width:'180',
					dataIndex:'Сотрудник',
					flex:1,
				},
				{
					text:'Вид расчета',
					width:'180',
					dataIndex:'ВидРасчета',
					flex:1,
				},
				{
					text:'Старый оклад',
					width:'100',
					dataIndex:'СтарыйОклад',
					flex:1,
				},
				{
					text:'Новый оклад',
					width:'100',
					dataIndex:'НовыйОклад',
					flex:1,
				},
				{
					text:'Подразделение организация',
					width:'100',
					dataIndex:'ПодразделениеОрганизация',
					flex:1,
				},
				{
					text:'Должность',
					width:'100',
					dataIndex:'Должность',
					flex:1,
				},
				{
					text:'Номер показателя оклада',
					width:'100',
					dataIndex:'НомерПоказателяОклада',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ИндексацияЗаработка/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'Сотрудник',
					},
					{
						name:'ВидРасчета',
					},
					{
						name:'СтарыйОклад',
					},
					{
						name:'НовыйОклад',
					},
					{
						name:'ПодразделениеОрганизация',
					},
					{
						name:'Должность',
					},
					{
						name:'НомерПоказателяОклада',
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
						var грид = Ext.getCmp('ДолжностныеОклады');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ИндексацияЗаработка.ФормаОбработкиСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ИндексацияЗаработка.ФормаОбработкиСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:46px;top:109px;width:402px;height:24px;',
			width: 402,
			height: 24,
			items:
			[
				{
					text:'Конструктор настроек...',
				},
				{
					text:'',
				},
				{
					text:'Вывести список...',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:639px;height:24px;',
			width: 639,
			height: 24,
			items:
			[
				{
					text:'Обновить',
				},
				'-',
				{
					text:'Проверить по штатному расписанию',
				},
				'-',
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
			id: 'ШтатноеРасписание',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:639px;height:230px;',
			height: 230,width: 639,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Подразделение организация',
					width:'100',
					dataIndex:'ПодразделениеОрганизация',
					flex:1,
				},
				{
					text:'Должность',
					width:'100',
					dataIndex:'Должность',
					flex:1,
				},
				{
					text:'Месячная ставка1',
					width:'100',
					dataIndex:'МесячнаяСтавка1',
					flex:1,
				},
				{
					text:'Новая месячная ставка1',
					width:'100',
					dataIndex:'НоваяМесячнаяСтавка1',
					flex:1,
				},
				{
					text:'Месячная ставка2',
					width:'100',
					dataIndex:'МесячнаяСтавка2',
					flex:1,
				},
				{
					text:'Новая месячная ставка2',
					width:'100',
					dataIndex:'НоваяМесячнаяСтавка2',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ИндексацияЗаработка/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'ПодразделениеОрганизация',
					},
					{
						name:'Должность',
					},
					{
						name:'МесячнаяСтавка1',
					},
					{
						name:'НоваяМесячнаяСтавка1',
					},
					{
						name:'МесячнаяСтавка2',
					},
					{
						name:'НоваяМесячнаяСтавка2',
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
						var грид = Ext.getCmp('ШтатноеРасписание');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ИндексацияЗаработка.ФормаОбработкиСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ИндексацияЗаработка.ФормаОбработкиСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:639px;height:24px;',
			width: 639,
			height: 24,
			items:
			[
				{
					text:'',
				},
				'-',
				{
					text:'Конструктор настроек...',
				},
				{
					text:'',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:121px;top:101px;width:385px;height:26px;',
			width: 385,
			height: 26,
			items:
			[
				{
					text:'Конструктор настроек...',
				},
				{
					text:'',
				},
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
			id: 'ТарифныеРазряды',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:639px;height:230px;',
			height: 230,width: 639,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Тарифный разряд',
					width:'100',
					dataIndex:'ТарифныйРазряд',
					flex:1,
				},
				{
					text:'Старый оклад',
					width:'100',
					dataIndex:'Размер',
					flex:1,
				},
				{
					text:'Новый оклад',
					width:'100',
					dataIndex:'НовыйРазмер',
					flex:1,
				},
				{
					text:'Валюта',
					width:'100',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ИндексацияЗаработка/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'ТарифныйРазряд',
					},
					{
						name:'Размер',
					},
					{
						name:'НовыйРазмер',
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
						var грид = Ext.getCmp('ТарифныеРазряды');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ИндексацияЗаработка.ФормаОбработкиСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ИндексацияЗаработка.ФормаОбработкиСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:565px;height:24px;',
			width: 565,
			height: 24,
			items:
			[
				{
					text:'',
				},
				'-',
				{
					text:'Конструктор настроек...',
				},
				{
					text:'',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:113px;top:122px;width:267px;height:24px;',
			width: 267,
			height: 24,
			items:
			[
				{
					text:'Конструктор настроек...',
				},
				{
					text:'',
				},
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
			id: 'ДопТарифныеРазряды',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:639px;height:230px;',
			height: 230,width: 639,
			columns:
			[
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ИндексацияЗаработка/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
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
						var грид = Ext.getCmp('ДопТарифныеРазряды');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ИндексацияЗаработка.ФормаОбработкиСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ИндексацияЗаработка.ФормаОбработкиСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:639px;height:24px;',
			width: 639,
			height: 24,
			items:
			[
				{
					text:'',
				},
				'-',
				{
					text:'Конструктор настроек...',
				},
				{
					text:'',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:114px;top:94px;width:222px;height:26px;',
			width: 222,
			height: 26,
			items:
			[
				{
					text:'Конструктор настроек...',
				},
				{
					text:'',
				},
				{
					text:'Вывести список...',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьРезультатИндексацииЗаголовок',
			text: 'Дата повышения 01.08.2011, Коэффициент повышения = 1.2',
			style: 'position:absolute;left:22px;top:0px;width:589px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВыполнитьИндексациюЗаголовок',
			text: 'Для записи результатов индексации нажмите кнопку "Готово"',
			style: 'position:absolute;left:30px;top:320px;width:451px;height:16px;',
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьЧтоСделано',
			text: 'Выполнена отмена повышения на дату',
			style: 'position:absolute;left:59px;top:21px;width:546px;height:135px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьЗаголовокФормы',
			text: 'Помощник повышения зарплаты',
			style: 'position:absolute;left:8px;top:8px;width:659px;height:28px;',
		},
		],
	}],
	dockedItems:
	[
	]
	});
});