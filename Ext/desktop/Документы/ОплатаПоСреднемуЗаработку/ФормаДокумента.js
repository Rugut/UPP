Ext.require(['Данные.Документы.ОплатаПоСреднемуЗаработку'], function () 
{
	Ext.define('Документы.ОплатаПоСреднемуЗаработку.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:686px;height:580px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Оплата по среднему заработку',
	
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
			style: 'position:absolute;left:334px;top:33px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Номер',
			width: 80,
			height: 19,
			style: 'position:absolute;left:422px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОт',
			text: 'от:',
			style: 'position:absolute;left:502px;top:33px;width:20px;height:19px;text-align:center;',
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
			style: 'position:absolute;left:522px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:33px;width:104px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Организация.Представление',
			width: 203,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:113px;top:33px;width:203px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ОплатаПоСреднемуЗаработку.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ОплатаПоСреднемуЗаработку.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ОплатаПоСреднемуЗаработку.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ОплатаПоСреднемуЗаработку.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:334px;top:57px;width:88px;height:19px;text-align:left;',
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
			style: 'position:absolute;left:422px;top:57px;width:220px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ОплатаПоСреднемуЗаработку.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ОплатаПоСреднемуЗаработку.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ОплатаПоСреднемуЗаработку.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ОплатаПоСреднемуЗаработку.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:686px;height:25px;',
			width: 686,
			height: 25,
			items:
			[
			]
		},
		{
			xtype: 'label',
			name: 'НадписьПериод',
			text: 'Месяц начисления:',
			style: 'position:absolute;left:8px;top:57px;width:104px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПериодРегистрации',
			width: 203,
			height: 19,
			style: 'position:absolute;left:113px;top:57px;width:203px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:528px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			width: 584,
			height: 19,
			style: 'position:absolute;left:94px;top:528px;width:584px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРаботник',
			text: 'Сотрудник:',
			style: 'position:absolute;left:8px;top:81px;width:104px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Сотрудник.Представление',
			width: 203,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:113px;top:81px;width:203px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ОплатаПоСреднемуЗаработку.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ОплатаПоСреднемуЗаработку.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ОплатаПоСреднемуЗаработку.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ОплатаПоСреднемуЗаработку.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:107px;width:670px;height:380px;',
			height: 380,width: 670,
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьВидРасчета',
			text: 'Вид расчета:',
			style: 'position:absolute;left:26px;top:141px;width:65px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'ВидРасчета.Представление',
			width: 220,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:98px;top:141px;width:220px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ОплатаПоСреднемуЗаработку.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ОплатаПоСреднемуЗаработку.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ОплатаПоСреднемуЗаработку.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ОплатаПоСреднемуЗаработку.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьПроцент',
			text: 'Процент среднего заработка:',
			style: 'position:absolute;left:26px;top:167px;width:157px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПроцентОплаты',
			style: 'position:absolute;left:187px;top:167px;width:60px;height:19px;',
			width: 60,
			height: 19,
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаНачала',
			width: 100,
			height: 19,
			style: 'position:absolute;left:210px;top:61px;width:100px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'по:',
			style: 'position:absolute;left:324px;top:61px;width:16px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаОкончания',
			width: 100,
			height: 19,
			style: 'position:absolute;left:354px;top:61px;width:100px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСпособВводаВремени',
			text: 'Период оплачиваемого времени',
			style: 'position:absolute;left:6px;top:37px;width:207px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаНачалаВнутрисменная',
			width: 100,
			height: 19,
			style: 'position:absolute;left:210px;top:87px;width:100px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОплачиватьЧасов',
			text: 'часы:',
			style: 'position:absolute;left:319px;top:87px;width:30px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ОплачиватьЧасов',
			style: 'position:absolute;left:354px;top:87px;width:60px;height:19px;',
			width: 60,
			height: 19,
		},
		{
			xtype: 'button',
			name: 'КнопкаРассчитатьВсе',
			text: '',
			style: 'position:absolute;left:6px;top:271px;width:82px;height:71px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРазмер',
			text: 'Начислено:',
			style: 'position:absolute;left:98px;top:271px;width:181px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'ЗначениеРазмер',
			text: 'ЗначениеРазмер',
			style: 'position:absolute;left:98px;top:286px;width:181px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'ИнформационнаяНадписьРазмер',
			text: 'ИнформационнаяНадписьРазмер',
			style: 'position:absolute;left:98px;top:302px;width:181px;height:52px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСреднийЗаработок',
			text: 'Средний дневной заработок:',
			style: 'position:absolute;left:288px;top:271px;width:181px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'ЗначениеСреднийЗаработок',
			text: 'ЗначениеСреднийЗаработок',
			style: 'position:absolute;left:288px;top:286px;width:181px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'ИнформационнаяНадписьСреднийЗаработок',
			text: 'ИнформационнаяНадписьСреднийЗаработок',
			style: 'position:absolute;left:288px;top:302px;width:181px;height:52px;',
		},
		{
			xtype: 'label',
			name: 'ЗаголовокДополнительнойИнформационнойНадписи',
			text: 'Заголовок:',
			style: 'position:absolute;left:480px;top:271px;width:172px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'ДополнительнаяИнформационнаяНадпись',
			text: 'ДополнительнаяИнформационнаяНадпись',
			style: 'position:absolute;left:480px;top:286px;width:172px;height:68px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаНачала',
			text: 'Дата начала периода сохранения среднего заработка:',
			style: 'position:absolute;left:6px;top:6px;width:286px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаНачалаСобытия',
			width: 80,
			height: 19,
			style: 'position:absolute;left:300px;top:6px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВидРасчетаЗаголовок',
			text: 'Начислить',
			style: 'position:absolute;left:6px;top:117px;width:131px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаНачалаВнутрисменная',
			text: 'Дата:',
			style: 'position:absolute;left:175px;top:87px;width:32px;height:19px;',
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Целодневный (целосменный) с:',
			style: 'position:absolute;left:26px;top:61px;width:181px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Внутрисменный',
			style: 'position:absolute;left:26px;top:87px;width:111px;height:19px;',
		},
			]
		},
					]
				},
				{
					items:
					[
		{
			id: 'Начисления',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:656px;height:288px;',
			height: 288,width: 656,
			columns:
			[
				{
					text:'Картинка',
					width:'28',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
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
				{
					text:'Начисление',
					width:'80',
					dataIndex:'ВидРасчета',
					flex:1,
				},
				{
					text:'Показатели для расчета',
					width:'133',
					dataIndex:'Показатели',
					flex:1,
				},
				{
					text:'Показатель',
					width:'83',
					dataIndex:'НаименованиеПоказатель1',
					flex:1,
				},
				{
					text:'Размер',
					width:'50',
					dataIndex:'Показатель1',
					flex:1,
				},
				{
					text:'Показатель',
					width:'83',
					dataIndex:'НаименованиеПоказатель2',
					flex:1,
				},
				{
					text:'Размер 2',
					width:'50',
					dataIndex:'Показатель2',
					flex:1,
				},
				{
					text:'Показатель',
					width:'83',
					dataIndex:'НаименованиеПоказатель3',
					flex:1,
				},
				{
					text:'Размер 3',
					width:'50',
					dataIndex:'Показатель3',
					flex:1,
				},
				{
					text:'Показатель',
					width:'83',
					dataIndex:'НаименованиеПоказатель4',
					flex:1,
				},
				{
					text:'Размер 4',
					width:'50',
					dataIndex:'Показатель4',
					flex:1,
				},
				{
					text:'Показатель',
					width:'83',
					dataIndex:'НаименованиеПоказатель5',
					flex:1,
				},
				{
					text:'Размер 5',
					width:'50',
					dataIndex:'Показатель5',
					flex:1,
				},
				{
					text:'Показатель',
					width:'83',
					dataIndex:'НаименованиеПоказатель6',
					flex:1,
				},
				{
					text:'Размер 6',
					width:'50',
					dataIndex:'Показатель6',
					flex:1,
				},
				{
					text:'Результат',
					width:'65',
					dataIndex:'Результат',
					flex:1,
				},
				{
					text:'Оплачено дней/часов',
					width:'80',
					dataIndex:'ОплаченоДнейЧасов',
					flex:1,
				},
				{
					text:'Дней отработано',
					width:'55',
					dataIndex:'ОтработаноДней',
					flex:1,
				},
				{
					text:'Часов отработано',
					width:'55',
					dataIndex:'ОтработаноЧасов',
					flex:1,
				},
				{
					text:'Зачесть в норму дней',
					width:'80',
					dataIndex:'НормаДней',
					flex:1,
				},
				{
					text:'Зачесть в норму часов',
					width:'80',
					dataIndex:'НормаЧасов',
					flex:1,
				},
				{
					text:'Подразделение организации',
					width:'73',
					dataIndex:'ПодразделениеОрганизации',
					flex:1,
				},
				{
					text:'Сторно',
					width:'44',
					dataIndex:'Сторно',
					flex:1,
				},
				{
					text:'Норма по пятидневке',
					width:'96',
					dataIndex:'НормаДнейПоПятидневке',
					flex:1,
				},
				{
					text:'Отработано по пятидневке',
					width:'96',
					dataIndex:'ОтработаноДнейПоПятидневке',
					flex:1,
				},
				{
					text:'Норма часов по пятидневке',
					width:'100',
					dataIndex:'НормаЧасовПоПятидневке',
					flex:1,
				},
				{
					text:'Отработано часов по пятидневке',
					width:'100',
					dataIndex:'ОтработаноЧасовПоПятидневке',
					flex:1,
				},
				{
					text:'Начало расчетного периода',
					width:'83',
					dataIndex:'Колонка1',
					flex:1,
				},
				{
					text:'Окончание расчетного периода',
					width:'83',
					dataIndex:'ПериодРасчетаСреднегоЗаработкаОкончание',
					flex:1,
				},
				{
					text:'Дата начала события',
					width:'100',
					dataIndex:'ДатаНачалаСобытия',
					flex:1,
				},
				{
					text:'Сторнируемый документ',
					width:'100',
					dataIndex:'СторнируемыйДокумент',
					flex:1,
				},
				{
					text:'Число месяцев',
					width:'100',
					dataIndex:'ЧислоМесяцев',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ОплатаПоСреднемуЗаработку/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Картинка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'ДатаНачала',
					},
					{
						name:'ДатаОкончания',
					},
					{
						name:'ВидРасчета',
					},
					{
						name:'Показатели',
					},
					{
						name:'НаименованиеПоказатель1',
					},
					{
						name:'Показатель1',
					},
					{
						name:'НаименованиеПоказатель2',
					},
					{
						name:'Показатель2',
					},
					{
						name:'НаименованиеПоказатель3',
					},
					{
						name:'Показатель3',
					},
					{
						name:'НаименованиеПоказатель4',
					},
					{
						name:'Показатель4',
					},
					{
						name:'НаименованиеПоказатель5',
					},
					{
						name:'Показатель5',
					},
					{
						name:'НаименованиеПоказатель6',
					},
					{
						name:'Показатель6',
					},
					{
						name:'Результат',
					},
					{
						name:'ОплаченоДнейЧасов',
					},
					{
						name:'ОтработаноДней',
					},
					{
						name:'ОтработаноЧасов',
					},
					{
						name:'НормаДней',
					},
					{
						name:'НормаЧасов',
					},
					{
						name:'ПодразделениеОрганизации',
					},
					{
						name:'Сторно',
					},
					{
						name:'НормаДнейПоПятидневке',
					},
					{
						name:'ОтработаноДнейПоПятидневке',
					},
					{
						name:'НормаЧасовПоПятидневке',
					},
					{
						name:'ОтработаноЧасовПоПятидневке',
					},
					{
						name:'Колонка1',
					},
					{
						name:'ПериодРасчетаСреднегоЗаработкаОкончание',
					},
					{
						name:'ДатаНачалаСобытия',
					},
					{
						name:'СторнируемыйДокумент',
					},
					{
						name:'ЧислоМесяцев',
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
						var грид = Ext.getCmp('Начисления');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ОплатаПоСреднемуЗаработку.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ОплатаПоСреднемуЗаработку.ФормаДокументаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:656px;height:24px;',
			width: 656,
			height: 24,
			items:
			[
				{
					text:'&Добавить',
					tooltip:'Добавить',
					iconCls:'x-copy',
				},
				'-',
				{
					text:'',
					tooltip:'',
				},
				{
					text:'Изменить',
					tooltip:'Изменить текущий элемент',
					iconCls:'x-Change',
				},
				{
					text:'Удалить',
					tooltip:'Удалить текущий',
				},
				'-',
				{
					text:'',
					tooltip:'',
				},
				{
					text:'',
					tooltip:'',
				},
				{
					text:'Конструктор настроек...',
					tooltip:'Открыть конструктор настроек',
				},
				{
					text:'',
					tooltip:'',
				},
				'-',
				{
					text:'',
					tooltip:'',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:72px;width:656px;height:24px;',
			width: 656,
			height: 24,
			items:
			[
				{
					text:'&Добавить',
					tooltip:'Добавить',
					iconCls:'x-copy',
				},
				{
					text:'',
					tooltip:'',
				},
				{
					text:'Изменить',
					tooltip:'Изменить текущий элемент',
					iconCls:'x-Change',
				},
				{
					text:'Удалить',
					tooltip:'Удалить текущий',
				},
				{
					text:'',
					tooltip:'',
				},
				{
					text:'',
					tooltip:'',
				},
				{
					text:'',
					tooltip:'',
				},
				{
					text:'Конструктор настроек...',
					tooltip:'Открыть конструктор настроек',
				},
				{
					text:'',
					tooltip:'',
				},
				'-',
				{
					text:'Установить отбор и сортировку списка...',
					tooltip:'Отбор и сортировка',
					iconCls:'x-FilterAndSort',
				},
				{
					text:'Отбор по значению в текущей колонке',
					tooltip:'Отбор по значению в текущей колонке',
					iconCls:'x-FilterByCurrentValue',
				},
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
					]
				},
				{
					text:'Отключить отбор',
					tooltip:'Отключить отбор',
					iconCls:'x-ClearFilter',
				},
				'-',
				{
					text:'Вывести список...',
					tooltip:'Вывести список',
					iconCls:'x-OutputList',
				},
				{
					text:'Настройка списка...',
					tooltip:'Настройка списка',
					iconCls:'x-ListSettings',
				},
			]
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:73px;width:656px;height:24px;',
			width: 656,
			height: 24,
			items:
			[
				{
					text:'&Добавить',
					tooltip:'Добавить',
					iconCls:'x-copy',
				},
				'-',
				{
					text:'',
					tooltip:'',
				},
				{
					text:'Изменить',
					tooltip:'Изменить текущий элемент',
					iconCls:'x-Change',
				},
				{
					text:'Удалить',
					tooltip:'Удалить текущий',
				},
				{
					text:'',
					tooltip:'',
				},
				{
					text:'',
					tooltip:'',
				},
				{
					text:'',
					tooltip:'',
				},
				{
					text:'Конструктор настроек...',
					tooltip:'Открыть конструктор настроек',
				},
				{
					text:'',
					tooltip:'',
				},
				'-',
				{
					text:'',
					tooltip:'',
				},
			]
		},
		{
			id: 'РасчетСреднего',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:97px;width:656px;height:212px;',
			height: 212,width: 656,
			columns:
			[
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Вид заработка',
					width:'120',
					dataIndex:'ВидРасчета',
					flex:1,
				},
				{
					text:'Сумма',
					width:'80',
					dataIndex:'Результат',
					flex:1,
				},
				{
					text:'Дней отработано',
					width:'100',
					dataIndex:'ОтработаноДней',
					flex:1,
				},
				{
					text:'Часов отработано',
					width:'100',
					dataIndex:'ОтработаноЧасов',
					flex:1,
				},
				{
					text:'Отработано за расчетный период',
					width:'100',
					dataIndex:'ОтработаноПоПятидневке',
					flex:1,
				},
				{
					text:'Норма за расчетный период',
					width:'100',
					dataIndex:'НормаПоПятидневке',
					flex:1,
				},
				{
					text:'Дата начала',
					width:'90',
					dataIndex:'БазовыйПериодНачало',
					flex:1,
				},
				{
					text:'Дата окончания',
					width:'84',
					dataIndex:'БазовыйПериодКонец',
					flex:1,
				},
				{
					text:'Коэффициент индексации',
					width:'46',
					dataIndex:'КоэффициентИндексации',
					flex:1,
				},
				{
					text:'Число месяцев',
					width:'86',
					dataIndex:'ЧислоМесяцев',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ОплатаПоСреднемуЗаработку/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'ВидРасчета',
					},
					{
						name:'Результат',
					},
					{
						name:'ОтработаноДней',
					},
					{
						name:'ОтработаноЧасов',
					},
					{
						name:'ОтработаноПоПятидневке',
					},
					{
						name:'НормаПоПятидневке',
					},
					{
						name:'БазовыйПериодНачало',
					},
					{
						name:'БазовыйПериодКонец',
					},
					{
						name:'КоэффициентИндексации',
					},
					{
						name:'ЧислоМесяцев',
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
						var грид = Ext.getCmp('РасчетСреднего');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ОплатаПоСреднемуЗаработку.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ОплатаПоСреднемуЗаработку.ФормаДокументаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			name: 'НадписьРасчетСреднегоЗаработка',
			text: 'НадписьРасчетСреднегоЗаработка',
			style: 'position:absolute;left:143px;top:317px;width:519px;height:36px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаРассчитатьНачисления',
			text: 'Рассчитать начисления',
			style: 'position:absolute;left:6px;top:317px;width:130px;height:36px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ПериодРасчетаСреднегоЗаработкаНачало',
			width: 90,
			height: 19,
			style: 'position:absolute;left:42px;top:24px;width:90px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ПериодРасчетаСреднегоЗаработкаОкончание',
			width: 90,
			height: 19,
			style: 'position:absolute;left:160px;top:24px;width:90px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПериодРасчетаСреднегоЗаработкаНачало',
			text: 'С:',
			style: 'position:absolute;left:26px;top:24px;width:15px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПериодРасчетаСреднегоЗаработкаОкончание',
			text: 'по:',
			style: 'position:absolute;left:137px;top:24px;width:16px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаВыбораПериода',
			text: '...',
			style: 'position:absolute;left:255px;top:24px;width:20px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПериодРасчетаСреднегоЗаработка',
			text: 'Расчетный период',
			style: 'position:absolute;left:6px;top:5px;width:215px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПериодРасчетаСреднегоЗаработкаЗаработок',
			text: 'Заработок за расчетный период',
			style: 'position:absolute;left:6px;top:52px;width:215px;height:15px;',
		},
					]
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:555px;width:233px;height:25px;',
			width: 233,
			height: 25,
			items:
			[
				{
					text:'Исправить',
					tooltip:'Исправить документ',
				},
				{
					text:'Отменить исправление',
					tooltip:'Исправить документ',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьПредупреждение',
			text: 'НадписьПредупреждение',
			style: 'position:absolute;left:31px;top:491px;width:435px;height:33px;text-align:left;',
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:466px;top:491px;width:83px;height:33px;',
			height: 33,width: 83,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьОткрытьИсправление',
			text: 'Открыть исправление',
			style: 'position:absolute;left:0px;top:0px;width:71px;height:33px;',
		},
					]
				},
			]
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:549px;top:491px;width:129px;height:33px;',
			height: 33,width: 129,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьОткрытьИсходный',
			text: 'Открыть исправленный документ',
			style: 'position:absolute;left:0px;top:0px;width:129px;height:33px;',
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
			style: 'position:absolute;left:0px;top:555px;width:686px;height:25px;',
			width: 686,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'OK',
					tooltip:'Записать объект и закрыть форму',
					iconCls:'x-WriteAndClose',
				},
				'-',
				{
					text:'Записать',
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