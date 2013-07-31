Ext.require(['Данные.Документы.РеестрСведенийВФССОЕжемесячныхПособияхПоУходу'], function () 
{
	Ext.define('Документы.РеестрСведенийВФССОЕжемесячныхПособияхПоУходу.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:991px;height:580px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Реестр сведений в ФСС о ежемесячных пособиях по уходу',
	
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
			style: 'position:absolute;left:366px;top:33px;width:47px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Номер',
			width: 80,
			height: 19,
			style: 'position:absolute;left:413px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:497px;top:33px;width:18px;height:19px;text-align:left;',
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
			style: 'position:absolute;left:520px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:33px;width:82px;height:19px;text-align:left;',
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
			style: 'position:absolute;left:96px;top:33px;width:220px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.РеестрСведенийВФССОЕжемесячныхПособияхПоУходу.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.РеестрСведенийВФССОЕжемесячныхПособияхПоУходу.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.РеестрСведенийВФССОЕжемесячныхПособияхПоУходу.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.РеестрСведенийВФССОЕжемесячныхПособияхПоУходу.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:8px;top:57px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'Ответственный.Представление',
			width: 220,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:96px;top:57px;width:220px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.РеестрСведенийВФССОЕжемесячныхПособияхПоУходу.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.РеестрСведенийВФССОЕжемесячныхПособияхПоУходу.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.РеестрСведенийВФССОЕжемесячныхПособияхПоУходу.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.РеестрСведенийВФССОЕжемесячныхПособияхПоУходу.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:528px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			width: 887,
			height: 19,
			style: 'position:absolute;left:96px;top:528px;width:887px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:81px;width:975px;height:441px;',
			height: 441,width: 975,
			items:
			[
				{
					title:'Пособия',
					items:
					[
		{
			id: 'РаботникиОрганизации',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:33px;width:376px;height:380px;',
			height: 380,width: 376,
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
					width:'120',
					dataIndex:'Сотрудник',
					flex:1,
				},
				{
					text:'Приказ',
					width:'80',
					dataIndex:'ПриказНаОтпускПоУходуЗаРебенком',
					flex:1,
				},
				{
					text:'Дата начала',
					width:'80',
					dataIndex:'ДатаНачала',
					flex:1,
				},
				{
					text:'Дата окончания',
					width:'80',
					dataIndex:'ДатаОкончания',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/РеестрСведенийВФССОЕжемесячныхПособияхПоУходу/ВыбратьПоСсылке/100', timeout: 200},
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
						name:'ПриказНаОтпускПоУходуЗаРебенком',
					},
					{
						name:'ДатаНачала',
					},
					{
						name:'ДатаОкончания',
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
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.РеестрСведенийВФССОЕжемесячныхПособияхПоУходу.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.РеестрСведенийВФССОЕжемесячныхПособияхПоУходу.ФормаДокументаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:388px;top:33px;width:579px;height:380px;',
			height: 380,width: 579,
			items:
			[
				{
					title:'Застрахованное лицо',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьФамилия',
			text: 'Фамилия:',
			style: 'position:absolute;left:6px;top:6px;width:55px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Фамилия',
			width: 150,
			height: 19,
			style: 'position:absolute;left:61px;top:6px;width:150px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИмя',
			text: 'Имя:',
			style: 'position:absolute;left:215px;top:6px;width:27px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Имя',
			width: 150,
			height: 19,
			style: 'position:absolute;left:245px;top:6px;width:150px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтчество',
			text: 'Отчество:',
			style: 'position:absolute;left:402px;top:6px;width:51px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Отчество',
			width: 115,
			height: 19,
			style: 'position:absolute;left:456px;top:6px;width:115px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтраховойНомерПФР',
			text: 'СНИЛС:',
			style: 'position:absolute;left:6px;top:30px;width:55px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'СтраховойНомерПФР',
			width: 150,
			height: 19,
			style: 'position:absolute;left:61px;top:30px;width:150px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьАдрес',
			text: 'Адрес по регистрации:',
			style: 'position:absolute;left:6px;top:210px;width:120px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'АдресРегистрацииВФорме',
			width: 425,
			height: 19,
			style: 'position:absolute;left:146px;top:210px;width:425px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'ОбновитьДанныеЗЛ',
			text: 'Обновить',
			style: 'position:absolute;left:6px;top:333px;width:82px;height:21px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИНН',
			text: 'ИНН:',
			style: 'position:absolute;left:6px;top:78px;width:32px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ИНН',
			width: 150,
			height: 19,
			style: 'position:absolute;left:61px;top:78px;width:150px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаРождения',
			text: 'Дата рождения:',
			style: 'position:absolute;left:215px;top:30px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаРождения',
			width: 88,
			height: 19,
			style: 'position:absolute;left:307px;top:30px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПол',
			text: 'Пол:',
			style: 'position:absolute;left:402px;top:30px;width:28px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'Пол.Представление',
			width: 115,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:456px;top:30px;width:115px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.РеестрСведенийВФССОЕжемесячныхПособияхПоУходу.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.РеестрСведенийВФССОЕжемесячныхПособияхПоУходу.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.РеестрСведенийВФССОЕжемесячныхПособияхПоУходу.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.РеестрСведенийВФССОЕжемесячныхПособияхПоУходу.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьСтатусНалогоплательщика',
			text: 'Статус налогоплательщика:',
			style: 'position:absolute;left:215px;top:78px;width:148px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'СтатусНалогоплательщика.Представление',
			width: 206,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:365px;top:78px;width:206px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.РеестрСведенийВФССОЕжемесячныхПособияхПоУходу.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.РеестрСведенийВФССОЕжемесячныхПособияхПоУходу.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.РеестрСведенийВФССОЕжемесячныхПособияхПоУходу.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.РеестрСведенийВФССОЕжемесячныхПособияхПоУходу.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьСерияДокумента',
			text: 'Серия:',
			style: 'position:absolute;left:294px;top:162px;width:37px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'СерияДокумента',
			width: 88,
			height: 19,
			style: 'position:absolute;left:338px;top:162px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомерДокумента1',
			text: 'Номер:',
			style: 'position:absolute;left:441px;top:162px;width:40px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НомерДокумента',
			width: 88,
			height: 19,
			style: 'position:absolute;left:483px;top:162px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись15',
			text: 'Паспортные данные',
			style: 'position:absolute;left:6px;top:138px;width:129px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаВыдачиДокумента',
			width: 88,
			height: 19,
			style: 'position:absolute;left:47px;top:186px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаВыдачиДокумента',
			text: 'Выдан:',
			style: 'position:absolute;left:6px;top:186px;width:38px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьВидДокумента1',
			text: 'Вид документа:',
			style: 'position:absolute;left:6px;top:162px;width:79px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'ВидДокумента.Представление',
			width: 197,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:90px;top:162px;width:197px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.РеестрСведенийВФССОЕжемесячныхПособияхПоУходу.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.РеестрСведенийВФССОЕжемесячныхПособияхПоУходу.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.РеестрСведенийВФССОЕжемесячныхПособияхПоУходу.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.РеестрСведенийВФССОЕжемесячныхПособияхПоУходу.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьКемВыданДокумент',
			text: 'Кем выдан:',
			style: 'position:absolute;left:138px;top:186px;width:60px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'КемВыданДокумент',
			width: 371,
			height: 19,
			style: 'position:absolute;left:200px;top:186px;width:371px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Совместительство',
			style: 'position:absolute;left:247px;top:102px;width:115px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВидДокумента2',
			text: 'Вид занятости:',
			style: 'position:absolute;left:6px;top:102px;width:81px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Статус',
			width: 150,
			height: 19,
			style: 'position:absolute;left:245px;top:54px;width:150px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтатус',
			text: 'Статус получателя (родственные отношения):',
			style: 'position:absolute;left:6px;top:54px;width:234px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьВидДокумента3',
			text: 'Для иностранных граждан:',
			style: 'position:absolute;left:6px;top:234px;width:139px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ОписаниеДокументаНаПроживание',
			width: 425,
			height: 19,
			style: 'position:absolute;left:146px;top:234px;width:425px;height:19px;',
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Основное место работы',
			style: 'position:absolute;left:96px;top:102px;width:144px;height:19px;',
		},
			]
		},
					]
				},
				{
					title:'Выплата пособия',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'АдресПочтовыйВФорме',
			width: 155,
			height: 19,
			style: 'position:absolute;left:197px;top:112px;width:155px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Банк.Представление',
			width: 185,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:197px;top:64px;width:185px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.РеестрСведенийВФССОЕжемесячныхПособияхПоУходу.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.РеестрСведенийВФССОЕжемесячныхПособияхПоУходу.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.РеестрСведенийВФССОЕжемесячныхПособияхПоУходу.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.РеестрСведенийВФССОЕжемесячныхПособияхПоУходу.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьНомерЛицевогоСчета',
			text: '№ счета:',
			style: 'position:absolute;left:387px;top:64px;width:47px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НомерЛицевогоСчета',
			width: 136,
			height: 19,
			style: 'position:absolute;left:435px;top:64px;width:136px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименованиеБанка',
			text: 'Наименование банка:',
			style: 'position:absolute;left:14px;top:88px;width:114px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НаименованиеБанка',
			width: 114,
			height: 19,
			style: 'position:absolute;left:129px;top:88px;width:114px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьБИКБанка',
			text: 'БИК:',
			style: 'position:absolute;left:450px;top:88px;width:29px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'БИКБанка',
			width: 88,
			height: 19,
			style: 'position:absolute;left:483px;top:88px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись46',
			text: 'Выплатить',
			style: 'position:absolute;left:6px;top:40px;width:129px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись20',
			text: 'Льготы при выплате пособия',
			style: 'position:absolute;left:6px;top:148px;width:230px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Применять при начислении пособия льготы для зон с льготным статусом:',
			style: 'position:absolute;left:14px;top:172px;width:404px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ВидДокументаНаЛьготы',
			width: 215,
			height: 19,
			style: 'position:absolute;left:90px;top:244px;width:215px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВидДокумента',
			text: 'Вид документа:',
			style: 'position:absolute;left:6px;top:244px;width:79px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомерДокумента',
			text: 'Номер:',
			style: 'position:absolute;left:439px;top:244px;width:40px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НомерДокументаНаЛьготы',
			width: 88,
			height: 19,
			style: 'position:absolute;left:483px;top:244px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаВыдачиБольничного',
			text: 'Дата:',
			style: 'position:absolute;left:310px;top:244px;width:33px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаДокументаНаЛьготы',
			width: 88,
			height: 19,
			style: 'position:absolute;left:348px;top:244px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаПредставленияПакетаДокументов',
			text: 'Дата представления пакета документов:',
			style: 'position:absolute;left:6px;top:6px;width:213px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаПредставленияПакетаДокументов',
			width: 88,
			height: 19,
			style: 'position:absolute;left:220px;top:6px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКоррСчет',
			text: 'Корр. счет:',
			style: 'position:absolute;left:247px;top:88px;width:58px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'КоррСчет',
			width: 136,
			height: 19,
			style: 'position:absolute;left:311px;top:88px;width:136px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьАдресПочтовыйКодПоКЛАДР',
			text: 'Код по КЛАДР:',
			style: 'position:absolute;left:354px;top:112px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'АдресПочтовыйКодПоКЛАДР',
			width: 136,
			height: 19,
			style: 'position:absolute;left:435px;top:112px;width:136px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'ВыплатаЗаСчетФедеральногоБюджета.Представление',
			width: 149,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:422px;top:172px;width:149px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.РеестрСведенийВФССОЕжемесячныхПособияхПоУходу.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.РеестрСведенийВФССОЕжемесячныхПособияхПоУходу.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.РеестрСведенийВФССОЕжемесячныхПособияхПоУходу.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.РеестрСведенийВФССОЕжемесячныхПособияхПоУходу.ФормаДокументаСобытия");
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
			boxLabel: 'Перечислением на счет в банке:',
			style: 'position:absolute;left:14px;top:64px;width:183px;height:19px;',
		},
			]
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Почтовым переводом по адресу:',
			style: 'position:absolute;left:14px;top:112px;width:183px;height:19px;',
		},
			]
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Постоянное проживание',
			style: 'position:absolute;left:14px;top:196px;width:144px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Работа',
			style: 'position:absolute;left:197px;top:196px;width:119px;height:19px;',
		},
			]
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'В зоне с правом на отселение',
			style: 'position:absolute;left:14px;top:220px;width:174px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'В зоне отселения',
			style: 'position:absolute;left:197px;top:220px;width:108px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'В зоне с льготным социально-экон. статусом',
			style: 'position:absolute;left:310px;top:220px;width:261px;height:19px;',
		},
			]
		},
					]
				},
				{
					title:'Документы',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьДатаСправкиОНеполученииПособияОтОтца',
			text: 'отцом от:',
			style: 'position:absolute;left:14px;top:285px;width:156px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаСправкиОНеполученииПособияОтОтца',
			width: 80,
			height: 19,
			style: 'position:absolute;left:175px;top:285px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НомерСправкиОНеполученииПособияОтОтца',
			width: 80,
			height: 19,
			style: 'position:absolute;left:292px;top:285px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаСправкиОНеполученииПособияОтМатери',
			text: 'матерью от:',
			style: 'position:absolute;left:14px;top:310px;width:156px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаСправкиОНеполученииПособияОтМатери',
			width: 80,
			height: 19,
			style: 'position:absolute;left:175px;top:310px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НомерСправкиОНеполученииПособияОтМатери',
			width: 80,
			height: 19,
			style: 'position:absolute;left:292px;top:310px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомерСправкиОтДругогоРодителя',
			text: '№',
			style: 'position:absolute;left:263px;top:285px;width:25px;height:19px;text-align:right;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомерСправкиОтДругогоРодителя1',
			text: '№',
			style: 'position:absolute;left:263px;top:310px;width:25px;height:19px;text-align:right;',
		},
		{
			xtype: 'label',
			name: 'Надпись22',
			text: 'Справки о неполучении пособия',
			style: 'position:absolute;left:6px;top:262px;width:201px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаСправкиПоДругимМестамРаботы',
			text: 'по другим местам работы от:',
			style: 'position:absolute;left:14px;top:335px;width:156px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаСправкиПоДругимМестамРаботы',
			width: 80,
			height: 19,
			style: 'position:absolute;left:175px;top:335px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НомерСправкиПоДругимМестамРаботы',
			width: 80,
			height: 19,
			style: 'position:absolute;left:292px;top:335px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомерСправкиОтДругогоРодителя2',
			text: '№',
			style: 'position:absolute;left:263px;top:335px;width:25px;height:19px;text-align:right;',
		},
		{
			id: 'ДанныеОДетях',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:124px;width:565px;height:133px;',
			height: 133,width: 565,
			columns:
			[
				{
					text:'Очередность',
					width:'77',
					dataIndex:'Очередность',
					flex:1,
				},
				{
					text:'Фамилия',
					width:'60',
					dataIndex:'Фамилия',
					flex:1,
				},
				{
					text:'Имя',
					width:'60',
					dataIndex:'Имя',
					flex:1,
				},
				{
					text:'Отчество',
					width:'60',
					dataIndex:'Отчество',
					flex:1,
				},
				{
					text:'Дата рождения',
					width:'80',
					dataIndex:'ДатаРожденияРебенка',
					flex:1,
				},
				{
					text:'Выплачивается пособие',
					width:'90',
					dataIndex:'НаРебенкаВыплачиваетсяПособие',
					flex:1,
				},
				{
					text:'Подтверждающий документ',
					width:'380',
					dataIndex:'КолонкаПодтверждающийДокумент',
					flex:1,
				},
				{
					text:'Вид документа',
					width:'100',
					dataIndex:'ВидПодтверждающегоДокумента',
					flex:1,
				},
				{
					text:'Дата',
					width:'80',
					dataIndex:'ДатаДокумента',
					flex:1,
				},
				{
					text:'Серия',
					width:'60',
					dataIndex:'СерияДокумента',
					flex:1,
				},
				{
					text:'Номер',
					width:'60',
					dataIndex:'НомерДокумента',
					flex:1,
				},
				{
					text:'Полное наименование документа',
					width:'80',
					dataIndex:'НаименованиеПодтверждающегоДокумента',
					flex:1,
				},
				{
					text:'Решение суда о лишении прав',
					width:'100',
					dataIndex:'НаличиеРешенияСудаОЛишенииПрав',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/РеестрСведенийВФССОЕжемесячныхПособияхПоУходу/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Очередность',
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
						name:'ДатаРожденияРебенка',
					},
					{
						name:'НаРебенкаВыплачиваетсяПособие',
					},
					{
						name:'КолонкаПодтверждающийДокумент',
					},
					{
						name:'ВидПодтверждающегоДокумента',
					},
					{
						name:'ДатаДокумента',
					},
					{
						name:'СерияДокумента',
					},
					{
						name:'НомерДокумента',
					},
					{
						name:'НаименованиеПодтверждающегоДокумента',
					},
					{
						name:'НаличиеРешенияСудаОЛишенииПрав',
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
						var грид = Ext.getCmp('ДанныеОДетях');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.РеестрСведенийВФССОЕжемесячныхПособияхПоУходу.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.РеестрСведенийВФССОЕжемесячныхПособияхПоУходу.ФормаДокументаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			name: 'Надпись21',
			text: 'Документы на всех детей',
			style: 'position:absolute;left:6px;top:76px;width:160px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись48',
			text: 'Приказы ',
			style: 'position:absolute;left:6px;top:6px;width:79px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НомерПриказаНаОтпускПоУходуЗаРебенком',
			width: 88,
			height: 19,
			style: 'position:absolute;left:452px;top:29px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомерПриказаНаОтпускПоУходуЗаРебенком',
			text: 'Номер:',
			style: 'position:absolute;left:408px;top:29px;width:39px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаПриказаНаОтпускПоУходуЗаРебенком',
			text: 'На отпуск по уходу за ребенком от:',
			style: 'position:absolute;left:14px;top:29px;width:185px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаПриказаНаОтпускПоУходуЗаРебенком',
			width: 88,
			height: 19,
			style: 'position:absolute;left:308px;top:29px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НомерПриказаОЗаменеПослеродовогоОтпуска',
			width: 88,
			height: 19,
			style: 'position:absolute;left:452px;top:53px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомерПриказаОЗаменеПослеродовогоОтпуска',
			text: 'Номер:',
			style: 'position:absolute;left:408px;top:53px;width:39px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаПриказаОЗаменеПослеродовогоОтпуска',
			width: 88,
			height: 19,
			style: 'position:absolute;left:308px;top:53px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаПриказаОЗаменеПослеродовогоОтпуска',
			text: 'О замене послеродового отпуска на отпуск по уходу от:',
			style: 'position:absolute;left:14px;top:53px;width:290px;height:19px;text-align:left;',
		},
					]
				},
				{
					title:'Расчет пособия',
					items:
					[
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ПериодРасчетаСреднегоЗаработкаНачало',
			width: 88,
			height: 19,
			style: 'position:absolute;left:340px;top:125px;width:88px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ПериодРасчетаСреднегоЗаработкаОкончание',
			width: 88,
			height: 19,
			style: 'position:absolute;left:455px;top:125px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПериодРасчетаСреднегоЗаработкаОкончание',
			text: 'по',
			style: 'position:absolute;left:434px;top:125px;width:16px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПервыйГодРасчета',
			style: 'position:absolute;left:32px;top:54px;width:40px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИ',
			text: ' и ',
			style: 'position:absolute;left:339px;top:54px;width:20px;height:19px;text-align:center;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ВторойГодРасчета',
			style: 'position:absolute;left:32px;top:77px;width:40px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись28',
			text: 'Заявление о замене расчетного года от:',
			style: 'position:absolute;left:32px;top:101px;width:210px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ТарифнаяСтавкаОклад',
			style: 'position:absolute;left:340px;top:173px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись30',
			text: 'Заработок за период:',
			style: 'position:absolute;left:32px;top:149px;width:127px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ЗаработокЗаПериодРасчета',
			style: 'position:absolute;left:162px;top:149px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись31',
			text: 'Календарных дней периода:',
			style: 'position:absolute;left:256px;top:149px;width:149px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'КалендарныхДнейРасчетногоПериода',
			style: 'position:absolute;left:407px;top:149px;width:40px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись32',
			text: 'Порядок расчета cреднего заработка',
			style: 'position:absolute;left:6px;top:6px;width:242px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаЗаявленияОЗаменеРасчетногоГода',
			width: 88,
			height: 19,
			style: 'position:absolute;left:246px;top:101px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСуммаПервыйГодРасчета',
			text: ') заработок:',
			style: 'position:absolute;left:175px;top:54px;width:64px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ЗаработокПервыйГодРасчета',
			style: 'position:absolute;left:246px;top:54px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСреднийДневнойЗаработок',
			text: 'Средний дневной заработок:',
			style: 'position:absolute;left:6px;top:234px;width:157px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СреднийМесячныйЗаработок',
			style: 'position:absolute;left:171px;top:234px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись40',
			text: '( заменил',
			style: 'position:absolute;left:77px;top:54px;width:55px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ЗамененныйПервыйГодРасчета',
			style: 'position:absolute;left:132px;top:54px;width:40px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВторойГодРасчета',
			text: '( заменил',
			style: 'position:absolute;left:77px;top:77px;width:55px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ЗамененныйВторойГодРасчета',
			style: 'position:absolute;left:132px;top:77px;width:40px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСуммаВторойГодРасчета',
			text: ') заработок:',
			style: 'position:absolute;left:175px;top:77px;width:64px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ЗаработокПервыйГодРасчета',
			style: 'position:absolute;left:246px;top:77px;width:88px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'МРОТ1',
			style: 'position:absolute;left:340px;top:197px;width:88px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ДоляВремени',
			style: 'position:absolute;left:258px;top:272px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДоляВремени',
			text: 'Доля времени при неполном рабочем времени:',
			style: 'position:absolute;left:6px;top:272px;width:246px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'РайонныйКоэффициент',
			style: 'position:absolute;left:103px;top:296px;width:40px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРК',
			text: 'Районный коэф-т:',
			style: 'position:absolute;left:6px;top:296px;width:94px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИ1',
			text: ' № ',
			style: 'position:absolute;left:339px;top:101px;width:20px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НомерЗаявленияОЗаменеРасчетногоГода',
			width: 88,
			height: 19,
			style: 'position:absolute;left:360px;top:101px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Район',
			width: 194,
			height: 19,
			style: 'position:absolute;left:188px;top:296px;width:194px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись43',
			text: 'Район:',
			style: 'position:absolute;left:151px;top:296px;width:37px;height:19px;',
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Заработок рассчитан по правилам 2011 года за расчетные годы:',
			style: 'position:absolute;left:14px;top:30px;width:351px;height:19px;',
		},
			]
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Заработок по правилам 2010 года за расчетный период с:',
			style: 'position:absolute;left:14px;top:125px;width:321px;height:19px;',
		},
			]
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Пособие рассчитывается из оклада (тарифной ставки):',
			style: 'position:absolute;left:14px;top:173px;width:321px;height:19px;',
		},
			]
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Пособие определяется исходя из МРОТ:',
			style: 'position:absolute;left:14px;top:197px;width:321px;height:19px;',
		},
			]
		},
					]
				},
				{
					title:'Прочее',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьИнаяПолезнаяИнформация',
			text: 'Иная информация, имеющая значение:',
			style: 'position:absolute;left:6px;top:178px;width:290px;height:19px;text-align:left;',
		},
		{
			xtype: 'textarea',
			hideLabel: true,
			disabled: false,
			name: 'ИнаяПолезнаяИнформация',
			style: 'position:absolute;left:6px;top:199px;width:565px;height:130px;',
		},
		{
			xtype: 'label',
			name: 'НадписьМРОТ1',
			text: 'Количество страниц представленных документов:',
			style: 'position:absolute;left:6px;top:6px;width:256px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'КоличествоСтраниц',
			style: 'position:absolute;left:264px;top:6px;width:45px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДокументыОснования',
			text: 'Наименование и реквизиты представленных документов:',
			style: 'position:absolute;left:6px;top:40px;width:316px;height:19px;text-align:left;',
		},
		{
			xtype: 'textarea',
			hideLabel: true,
			disabled: false,
			name: 'ДокументыОснования',
			style: 'position:absolute;left:6px;top:64px;width:565px;height:106px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаЗаполнитьСписокПредставленныхДокументов',
			text: 'Заполнить по введенным сведениям о документах',
			style: 'position:absolute;left:6px;top:335px;width:316px;height:19px;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'Данные страхователя',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьРуководитель',
			text: 'Руководитель:',
			style: 'position:absolute;left:14px;top:162px;width:106px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'Руководитель.Представление',
			width: 220,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:121px;top:162px;width:220px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.РеестрСведенийВФССОЕжемесячныхПособияхПоУходу.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.РеестрСведенийВФССОЕжемесячныхПособияхПоУходу.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.РеестрСведенийВФССОЕжемесячныхПособияхПоУходу.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.РеестрСведенийВФССОЕжемесячныхПособияхПоУходу.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьДолжностьРуководителя',
			text: 'Должность:',
			style: 'position:absolute;left:358px;top:162px;width:81px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'ДолжностьРуководителя.Представление',
			width: 220,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:439px;top:162px;width:220px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.РеестрСведенийВФССОЕжемесячныхПособияхПоУходу.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.РеестрСведенийВФССОЕжемесячныхПособияхПоУходу.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.РеестрСведенийВФССОЕжемесячныхПособияхПоУходу.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.РеестрСведенийВФССОЕжемесячныхПособияхПоУходу.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьРегистрационныйНомерФСС',
			text: 'Регистрационный номер:',
			style: 'position:absolute;left:14px;top:108px;width:134px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'РегистрационныйНомерФСС',
			width: 110,
			height: 19,
			style: 'position:absolute;left:149px;top:108px;width:110px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДополнительныйКодФСС',
			text: 'Дополнительный код:',
			style: 'position:absolute;left:264px;top:108px;width:116px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ДополнительныйКодФСС',
			width: 110,
			height: 19,
			style: 'position:absolute;left:382px;top:108px;width:110px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКодПодчиненностиФСС',
			text: 'Код подчиненности:',
			style: 'position:absolute;left:497px;top:108px;width:102px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'КодПодчиненностиФСС',
			width: 60,
			height: 19,
			style: 'position:absolute;left:602px;top:108px;width:60px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименованиеТерриториальногоОрганаФСС',
			text: 'Наименование территориального органа ФСС:',
			style: 'position:absolute;left:14px;top:84px;width:241px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НаименованиеТерриториальногоОрганаФСС',
			width: 709,
			height: 19,
			style: 'position:absolute;left:258px;top:84px;width:709px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись23',
			text: 'Регистрация в ФСС',
			style: 'position:absolute;left:6px;top:60px;width:129px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись24',
			text: 'Подписи',
			style: 'position:absolute;left:6px;top:138px;width:129px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'ОбновитьДанныеСтрахователя',
			text: 'Обновить',
			style: 'position:absolute;left:6px;top:394px;width:82px;height:21px;',
		},
		{
			xtype: 'label',
			name: 'Надпись47',
			text: 'Основные',
			style: 'position:absolute;left:6px;top:6px;width:129px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИНН1',
			text: 'ИНН:',
			style: 'position:absolute;left:14px;top:30px;width:31px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ИНН1',
			width: 120,
			height: 19,
			style: 'position:absolute;left:58px;top:30px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКПП',
			text: 'КПП:',
			style: 'position:absolute;left:186px;top:30px;width:32px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'КПП',
			width: 120,
			height: 19,
			style: 'position:absolute;left:224px;top:30px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ОГРН',
			width: 88,
			height: 19,
			style: 'position:absolute;left:391px;top:30px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОГРН',
			text: 'ОГРН:',
			style: 'position:absolute;left:350px;top:30px;width:35px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьГлавныйБухгалтер',
			text: 'Главный бухгалтер:',
			style: 'position:absolute;left:14px;top:186px;width:106px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'ГлавныйБухгалтер.Представление',
			width: 220,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:121px;top:186px;width:220px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.РеестрСведенийВФССОЕжемесячныхПособияхПоУходу.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.РеестрСведенийВФССОЕжемесячныхПособияхПоУходу.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.РеестрСведенийВФССОЕжемесячныхПособияхПоУходу.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.РеестрСведенийВФССОЕжемесячныхПособияхПоУходу.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Выводить подписи в реестр пособий',
			style: 'position:absolute;left:14px;top:214px;width:327px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьРеестрСоставил',
			text: 'Реестр составил:',
			style: 'position:absolute;left:366px;top:57px;width:94px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьТелефон',
			text: 'Телефон:',
			style: 'position:absolute;left:650px;top:57px;width:52px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Телефон',
			width: 84,
			height: 19,
			style: 'position:absolute;left:704px;top:57px;width:84px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьАдресЭлектроннойПочтыСоставителя',
			text: 'Адрес э.п.:',
			style: 'position:absolute;left:800px;top:57px;width:59px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'АдресЭлектроннойПочтыСоставителя',
			width: 84,
			height: 19,
			style: 'position:absolute;left:864px;top:57px;width:84px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'РеестрСоставил.Представление',
			width: 176,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:464px;top:57px;width:176px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.РеестрСведенийВФССОЕжемесячныхПособияхПоУходу.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.РеестрСведенийВФССОЕжемесячныхПособияхПоУходу.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.РеестрСведенийВФССОЕжемесячныхПособияхПоУходу.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.РеестрСведенийВФССОЕжемесячныхПособияхПоУходу.ФормаДокументаСобытия");
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
			style: 'position:absolute;left:0px;top:0px;width:991px;height:25px;',
			dock: 'top',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:555px;width:991px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Показать файл',
				},
				'-',
				{
					text:'Записать файл на диск',
				},
				'-',
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