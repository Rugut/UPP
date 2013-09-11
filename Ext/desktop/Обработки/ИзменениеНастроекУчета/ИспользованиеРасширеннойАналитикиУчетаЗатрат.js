Ext.require(['Данные.Обработки.ИзменениеНастроекУчета'], function () 
{
	Ext.define('Обработки.ИзменениеНастроекУчета.ИспользованиеРасширеннойАналитикиУчетаЗатрат',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:498px;height:442px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Установка параметра учета ""Использовать расширенную аналитику учета затрат""',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'panel',
			style: 'position:absolute;left:0px;top:1px;width:498px;height:416px;',
			height: 416,width: 498,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьПояснениеВыборРежима',
			text: 'Выберите вариант заполнения регистров, необходимых для использования расширенной аналитики учета затрат.\r\nПосле этого нажмите кнопку "Далее".',
			style: 'position:absolute;left:6px;top:7px;width:487px;height:43px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПолныйВыборРежима',
			text: 'Заполнение регистров расширенной аналитики и включение признака  использования расширенной аналитики произойдет за один этап. Может занять длительное время.',
			style: 'position:absolute;left:129px;top:70px;width:364px;height:43px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВыборочныйВыборРежима',
			text: 'Процесс заполнения можно разбить на несколько этапов. Возможен выбор, по каким данным выполнять заполнение регистров расширенной аналитики. ',
			style: 'position:absolute;left:129px;top:118px;width:364px;height:44px;',
		},
		{
			xtype: 'label',
			text: 'Вариант заполнения регистров',
			style: 'position:absolute;left:6px;top:49px;width:487px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			name: 'НадписьВниманиеВыборРежима',
			text: 'Внимание! При включении режима будут сформированы только входящие остатки по регистрам расширенной аналитики на дату начала использования.\r\nДля формирования движений потребуется перепроведение документов информационной базы после установки параметра учета.',
			style: 'position:absolute;left:47px;top:197px;width:446px;height:69px;',
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Полный',
			style: 'position:absolute;left:6px;top:70px;width:117px;height:34px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Выборочный',
			style: 'position:absolute;left:6px;top:118px;width:117px;height:34px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Управленческий и регламентированный учет',
			style: 'position:absolute;left:24px;top:150px;width:468px;height:15px;',
		},
			]
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПредставлениеПериодаРегистрации',
			width: 137,
			height: 19,
			style: 'position:absolute;left:304px;top:6px;width:137px;height:19px;',
		},
		{
			id: 'ТаблицаНастройки',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:118px;width:486px;height:109px;',
			height: 109,width: 486,
			columns:
			[
				{
					text:'Раздел учета',
					width:'260',
					dataIndex:'РазделУчета',
					flex:1,
				},
				{
					text:'Упр. учет',
					width:'78',
					dataIndex:'УУ',
					flex:1,
				},
				{
					text:'Бух. учет',
					width:'71',
					dataIndex:'БУ',
					flex:1,
				},
				{
					text:'Налог. учет',
					width:'67',
					dataIndex:'НУ',
					flex:1,
				},
				{
					text:'Раздел учета имя',
					width:'28',
					dataIndex:'РазделУчетаИмя',
					flex:1,
				},
				{
					text:'Рассчитан УУ',
					width:'30',
					dataIndex:'РассчитанУУ',
					flex:1,
				},
				{
					text:'Рассчитан БУ',
					width:'26',
					dataIndex:'РассчитанБУ',
					flex:1,
				},
				{
					text:'Рассчитан НУ',
					width:'29',
					dataIndex:'РассчитанНУ',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ИзменениеНастроекУчета/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'РазделУчета',
					},
					{
						name:'УУ',
					},
					{
						name:'БУ',
					},
					{
						name:'НУ',
					},
					{
						name:'РазделУчетаИмя',
					},
					{
						name:'РассчитанУУ',
					},
					{
						name:'РассчитанБУ',
					},
					{
						name:'РассчитанНУ',
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
						var грид = Ext.getCmp('ТаблицаНастройки');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ИзменениеНастроекУчета.ИспользованиеРасширеннойАналитикиУчетаЗатратСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ИзменениеНастроекУчета.ИспользованиеРасширеннойАналитикиУчетаЗатратСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			text: 'Данные для заполнения регистров',
			style: 'position:absolute;left:6px;top:73px;width:486px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:93px;width:370px;height:24px;',
			width: 370,
			height: 24,
			items:
			[
				{
					text:'Установить флажки',
					tooltip:'',
				},
				{
					text:'Снять флажки',
					tooltip:'',
				},
				'-',
				{
					text:'Рассчитать',
					tooltip:'dd879fc-c1d8-47b1-bffc-a6f07c894cd',
				},
				'-',
				{
					text:'Обновить статусы',
					tooltip:'Обновить статусы',
				},
			]
		},
		{
			xtype: 'label',
			text: 'Сформированные остатки',
			style: 'position:absolute;left:6px;top:247px;width:486px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			id: 'ТаблицаОтображаемыхДокументов',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:293px;width:486px;height:117px;',
			height: 117,width: 486,
			columns:
			[
				{
					text:'',
					width:'52',
					dataIndex:'Пометка',
					flex:1,
				},
				{
					text:'Ввод остатков по регистру',
					width:'150',
					dataIndex:'РегистрЗатрат',
					flex:1,
				},
				{
					text:'На основании данных регистра',
					width:'180',
					dataIndex:'РазделУчетаПредставление',
					flex:1,
				},
				{
					text:'Ссылка',
					width:'27',
					dataIndex:'Ссылка',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ИзменениеНастроекУчета/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Пометка',
					},
					{
						name:'РегистрЗатрат',
					},
					{
						name:'РазделУчетаПредставление',
					},
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
						var грид = Ext.getCmp('ТаблицаОтображаемыхДокументов');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ИзменениеНастроекУчета.ИспользованиеРасширеннойАналитикиУчетаЗатратСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ИзменениеНастроекУчета.ИспользованиеРасширеннойАналитикиУчетаЗатратСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:266px;width:486px;height:24px;',
			width: 486,
			height: 24,
			items:
			[
				{
					text:'Установить флажки',
					tooltip:'',
				},
				{
					text:'Снять флажки',
					tooltip:'',
				},
				'-',
				{
					text:'Установить пометку удаления',
					tooltip:'Пометить на удаление выбранные документы ввода остатков',
				},
				'-',
				{
					text:'Отбор по разделу учета',
					tooltip:'Включить / отключить отбор по текущему разделу учета',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьИспользоватьРасширеннуюАналитикуВыборочныйРежим',
			text: 'Использовать расширенную аналитику учета затрат с:',
			style: 'position:absolute;left:6px;top:6px;width:291px;height:19px;',
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Использовать расширенную аналитику учета затрат с:',
			style: 'position:absolute;left:6px;top:30px;width:354px;height:16px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПредставлениеПериодаРегистрацииПолныйРежим',
			width: 137,
			height: 19,
			style: 'position:absolute;left:355px;top:30px;width:137px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПолныйРежимИнформация',
			text: 'Измените значение режима использования расширенной аналитики.',
			style: 'position:absolute;left:6px;top:6px;width:488px;height:19px;',
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:6px;top:53px;width:488px;height:89px;',
			height: 89,width: 488,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьПриОтключенииНастройки',
			text: 'Внимание! При отключении использования расширенной аналитики учета затрат необходимо перепровести документы, которые проводились в период использования режима расширенной аналитики.',
			style: 'position:absolute;left:47px;top:6px;width:433px;height:68px;',
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьРасчетНеОкончен',
			text: 'Внимание! Расчет выполнен не для всех исходных данных.\r\nОстатки в регистрах расширенной аналитики сформированы не полностью. \r\nИспользование режима расширенной аналитики может привести к некорректным результатам.\r\nЧтобы вернуться к расчету, используйте кнопку "Назад"',
			style: 'position:absolute;left:47px;top:8px;width:433px;height:68px;',
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
			xtype: 'radio',
			boxLabel: 'Регламентированный учет',
			style: 'position:absolute;left:24px;top:26px;width:468px;height:15px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Регламентированный учет с дополнительной аналитикой',
			style: 'position:absolute;left:24px;top:89px;width:468px;height:15px;',
		},
		{
			xtype: 'label',
			text: 'Режим использования расширенной аналитики:',
			style: 'position:absolute;left:6px;top:6px;width:486px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			name: 'Надпись27',
			text: 'Управленческий и регламентированный учеты совпадают, детализация учета затрат соответствует аналитике проводок бухгалтерского учета.',
			style: 'position:absolute;left:32px;top:45px;width:460px;height:28px;',
		},
		{
			xtype: 'label',
			name: 'Надпись28',
			text: 'Управленческий и регламентированный учеты совпадают, детализация учета затрат - выше аналитики проводок бухгалтерского учета.',
			style: 'position:absolute;left:32px;top:108px;width:460px;height:28px;',
		},
		{
			xtype: 'label',
			name: 'Надпись29',
			text: 'Управленческий и регламентированный учеты различаются: есть документы, которые отражаются только в одном из учетов. Детализация учета затрат - любая.',
			style: 'position:absolute;left:32px;top:170px;width:460px;height:28px;',
		},
					]
				},
				{
					items:
					[
		{
			id: 'НастройкиАналитикиУчета',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:486px;height:386px;',
			height: 386,width: 486,
			columns:
			[
				{
					text:'Наименование',
					width:'362',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Упр',
					width:'44',
					dataIndex:'УправленческийУчет',
					flex:1,
				},
				{
					text:'Регл',
					width:'43',
					dataIndex:'РегламентированныйУчет',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ИзменениеНастроекУчета/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Наименование',
					},
					{
						name:'УправленческийУчет',
					},
					{
						name:'РегламентированныйУчет',
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
						var грид = Ext.getCmp('НастройкиАналитикиУчета');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ИзменениеНастроекУчета.ИспользованиеРасширеннойАналитикиУчетаЗатратСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ИзменениеНастроекУчета.ИспользованиеРасширеннойАналитикиУчетаЗатратСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			text: 'Детализация затрат:',
			style: 'position:absolute;left:6px;top:6px;width:486px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
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
			style: 'position:absolute;left:0px;top:417px;width:498px;height:25px;',
			width: 498,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Изменить настройку',
					tooltip:'Изменить настройку учета',
				},
				{
					text:'Назад',
					tooltip:'17e1914-12cf-4be6-a10e-f44d00692ef',
				},
				{
					text:'Далее',
					tooltip:'dd879fc-c1d8-47b1-bffc-a6f07c894cd',
				},
				'-',
				{
					text:'Закрыть',
					tooltip:'Закрыть',
					handler: function () {this.up('window').close();},
				},
				'-',
				{
					text:'Справка',
					tooltip:'Открыть справку',
				},
			]
		},
	]
	});
});