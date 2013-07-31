Ext.require(['Данные.Обработки.ДокументооборотСКонтролирующимиОрганами'], function () 
{
	Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.Документ_ЗаявлениеАбонентаСпецоператораСвязи_ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:860px;height:533px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Заявление на подключение',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:140px;width:844px;height:360px;',
			height: 360,width: 844,
			items:
			[
				{
					title:'Сведения об организации',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьНаименованиеПолное',
			text: 'Полное наименование:',
			style: 'position:absolute;left:8px;top:61px;width:128px;height:15px;text-align:left;',
		},
		{
			xtype: 'textarea',
			hideLabel: true,
			disabled: false,
			name: 'НаименованиеПолное',
			style: 'position:absolute;left:136px;top:61px;width:700px;height:38px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'КраткоеНаименование',
			width: 700,
			height: 19,
			style: 'position:absolute;left:136px;top:33px;width:700px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ИНН',
			width: 110,
			height: 19,
			style: 'position:absolute;left:136px;top:108px;width:110px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'КПП',
			width: 110,
			height: 19,
			style: 'position:absolute;left:136px;top:136px;width:110px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'РегистрационныйНомерПФР',
			width: 110,
			height: 19,
			style: 'position:absolute;left:432px;top:108px;width:110px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'РегистрационныйНомерФСС',
			width: 110,
			height: 19,
			style: 'position:absolute;left:432px;top:136px;width:110px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ЮрАдрес',
			width: 700,
			height: 19,
			style: 'position:absolute;left:136px;top:228px;width:700px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ФактАдрес',
			width: 700,
			height: 19,
			style: 'position:absolute;left:136px;top:256px;width:700px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ЭлектАдрес',
			width: 408,
			height: 19,
			style: 'position:absolute;left:136px;top:312px;width:408px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Телефон',
			width: 110,
			height: 19,
			style: 'position:absolute;left:136px;top:284px;width:110px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ТелефонМобильный',
			width: 110,
			height: 19,
			style: 'position:absolute;left:432px;top:284px;width:110px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Крупнейшим налогоплательщиком',
			style: 'position:absolute;left:136px;top:164px;width:200px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: ' Обособленным подразделением',
			style: 'position:absolute;left:136px;top:184px;width:193px;height:15px;',
		},
		{
			xtype: 'fieldset',
			title: 'Основные сведения',
			style: 'position:absolute;left:8px;top:8px;width:828px;height:16px;',
		},
		{
			xtype: 'fieldset',
			title: 'Контактная информация',
			style: 'position:absolute;left:8px;top:204px;width:828px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДополнительныйКодФСС',
			text: 'Дополнительный номер ФСС:',
			style: 'position:absolute;left:552px;top:136px;width:164px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ДополнительныйКодФСС',
			width: 110,
			height: 19,
			style: 'position:absolute;left:726px;top:136px;width:110px;height:19px;',
		},
					]
				},
				{
					title:'Владелец ЭЦП',
					items:
					[
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'ДокументВидСотрудника.Представление',
			width: 708,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:124px;top:211px;width:708px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.ДокументооборотСКонтролирующимиОрганами.Документ_ЗаявлениеАбонентаСпецоператораСвязи_ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ДокументооборотСКонтролирующимиОрганами.Документ_ЗаявлениеАбонентаСпецоператораСвязи_ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.ДокументооборотСКонтролирующимиОрганами.Документ_ЗаявлениеАбонентаСпецоператораСвязи_ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ДокументооборотСКонтролирующимиОрганами.Документ_ЗаявлениеАбонентаСпецоператораСвязи_ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ДокументСерияСотрудника',
			width: 144,
			height: 19,
			style: 'position:absolute;left:124px;top:237px;width:144px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ДокументНомерСотрудника',
			width: 144,
			height: 19,
			style: 'position:absolute;left:392px;top:236px;width:144px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДокументДатаВыдачиСотрудника',
			width: 144,
			height: 19,
			style: 'position:absolute;left:688px;top:236px;width:144px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ДокументКемВыданСотрудника',
			width: 408,
			height: 19,
			style: 'position:absolute;left:124px;top:268px;width:408px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Кадровые данные',
			style: 'position:absolute;left:8px;top:132px;width:824px;height:16px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПодразделениеСотрудника',
			width: 144,
			height: 19,
			style: 'position:absolute;left:392px;top:155px;width:144px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ДолжностьСотрудника',
			width: 144,
			height: 19,
			style: 'position:absolute;left:124px;top:155px;width:144px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Документ, удостоверяющий личность',
			style: 'position:absolute;left:8px;top:188px;width:824px;height:16px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Фамилия',
			width: 144,
			height: 19,
			style: 'position:absolute;left:124px;top:100px;width:144px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Имя',
			width: 144,
			height: 19,
			style: 'position:absolute;left:392px;top:101px;width:144px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Отчество',
			width: 136,
			height: 19,
			style: 'position:absolute;left:608px;top:101px;width:136px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Сотрудник',
			width: 544,
			height: 19,
			style: 'position:absolute;left:288px;top:50px;width:544px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДолжность6',
			text: 'Сотрудник:',
			style: 'position:absolute;left:8px;top:8px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'fieldset',
			title: '',
			style: 'position:absolute;left:8px;top:84px;width:824px;height:4px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаВызоваДанныхФИО',
			text: 'Подробнее...',
			style: 'position:absolute;left:756px;top:101px;width:76px;height:19px;',
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Руководитель',
			style: 'position:absolute;left:124px;top:8px;width:120px;height:15px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Главный бухгалтер',
			style: 'position:absolute;left:124px;top:30px;width:120px;height:15px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Другой сотрудник:',
			style: 'position:absolute;left:124px;top:52px;width:124px;height:15px;',
		},
			]
		},
					]
				},
				{
					title:'Контролирующие органы',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьКраткоеНаименование',
			text: 'Краткое наименование:',
			style: 'position:absolute;left:8px;top:33px;width:128px;height:15px;text-align:left;',
		},
		{
			id: 'Направления',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:32px;width:828px;height:300px;',
			height: 300,width: 828,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Тип органа',
					width:'102',
					dataIndex:'ТипПолучателя',
					flex:1,
				},
				{
					text:'Код органа',
					width:'98',
					dataIndex:'КодПолучателя',
					flex:1,
				},
				{
					text:'КПП (только для ФНС)',
					width:'143',
					dataIndex:'КПП',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ДокументооборотСКонтролирующимиОрганами/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'ТипПолучателя',
					},
					{
						name:'КодПолучателя',
					},
					{
						name:'КПП',
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
						var грид = Ext.getCmp('Направления');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.ДокументооборотСКонтролирующимиОрганами.Документ_ЗаявлениеАбонентаСпецоператораСвязи_ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ДокументооборотСКонтролирующимиОрганами.Документ_ЗаявлениеАбонентаСпецоператораСвязи_ФормаДокументаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
					]
				},
				{
					title:'Удостоверяющий центр',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись46',
			text: 'Удостоверяющий центр:',
			style: 'position:absolute;left:8px;top:8px;width:128px;height:20px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'СпецоператорИУЦ',
			width: 700,
			height: 19,
			style: 'position:absolute;left:136px;top:8px;width:700px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'ВывестиСоглашениеНапечать',
			text: 'Печать',
			style: 'position:absolute;left:756px;top:312px;width:80px;height:21px;',
		},
		{
			xtype: 'label',
			name: 'ОткрытьСтраницуУЦ',
			text: 'Подробнее об услугах на сайте удостоверяющего центра...',
			style: 'position:absolute;left:136px;top:32px;width:316px;height:16px;',
		},
		{
			xtype: 'fieldset',
			title: 'Соглашение о предоставлении услуг удостоверяющего центра',
			style: 'position:absolute;left:8px;top:64px;width:828px;height:16px;',
		},
					]
				},
				{
					title:'Криптопровайдер',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьИНН',
			text: 'ИНН:',
			style: 'position:absolute;left:8px;top:108px;width:54px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'СкачатьVipNetCSP1',
			text: 'Сайт ОАО «ИнфоТеКС», разработчика криптопровайдера VipNet CSP',
			style: 'position:absolute;left:148px;top:32px;width:656px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'СкачатьCryptoProCSP1',
			text: 'Сайт компании  КРИПТО-ПРО, разработчика криптопровайдера  CryptoPro CSP',
			style: 'position:absolute;left:148px;top:88px;width:656px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'Надпись55',
			text: 'Криптопровайдер:',
			style: 'position:absolute;left:12px;top:8px;width:100px;height:19px;text-align:left;',
		},
		{
			xtype: 'radio',
			boxLabel: 'VipNet CSP',
			style: 'position:absolute;left:136px;top:8px;width:704px;height:16px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'CryptoPro CSP',
			style: 'position:absolute;left:136px;top:64px;width:704px;height:16px;',
		},
					]
				},
				{
					title:'Служебная информация',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьИНН1',
			text: 'Путь к контейнеру закрытого ключа:',
			style: 'position:absolute;left:8px;top:8px;width:192px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПутьКонтейнерЗакрытогоКлюча',
			width: 628,
			height: 19,
			style: 'position:absolute;left:208px;top:8px;width:628px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИНН2',
			text: 'Идентификатор заявления:',
			style: 'position:absolute;left:8px;top:36px;width:192px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ИдентификаторДокументооборота',
			width: 628,
			height: 19,
			style: 'position:absolute;left:208px;top:36px;width:628px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИНН3',
			text: 'Учетная запись - результат:',
			style: 'position:absolute;left:8px;top:64px;width:192px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-search-trigger',
			name: 'УчетнаяЗапись.Представление',
			width: 628,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:208px;top:64px;width:628px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.ДокументооборотСКонтролирующимиОрганами.Документ_ЗаявлениеАбонентаСпецоператораСвязи_ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ДокументооборотСКонтролирующимиОрганами.Документ_ЗаявлениеАбонентаСпецоператораСвязи_ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.ДокументооборотСКонтролирующимиОрганами.Документ_ЗаявлениеАбонентаСпецоператораСвязи_ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ДокументооборотСКонтролирующимиОрганами.Документ_ЗаявлениеАбонентаСпецоператораСвязи_ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
					]
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:508px;width:860px;height:25px;',
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
					text:'Записать',
				},
				'-',
				{
					text:'Закрыть',
					handler: function () {this.up('window').close();},
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:844px;height:40px;',
			height: 40,width: 844,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:80px;width:92px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:196px;top:80px;width:20px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Номер',
			width: 88,
			height: 19,
			style: 'position:absolute;left:108px;top:80px;width:88px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'Дата',
			width: 130,
			height: 19,
			style: 'position:absolute;left:219px;top:80px;width:130px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:107px;width:89px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'Организация.Представление',
			width: 744,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:108px;top:107px;width:744px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.ДокументооборотСКонтролирующимиОрганами.Документ_ЗаявлениеАбонентаСпецоператораСвязи_ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ДокументооборотСКонтролирующимиОрганами.Документ_ЗаявлениеАбонентаСпецоператораСвязи_ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.ДокументооборотСКонтролирующимиОрганами.Документ_ЗаявлениеАбонентаСпецоператораСвязи_ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ДокументооборотСКонтролирующимиОрганами.Документ_ЗаявлениеАбонентаСпецоператораСвязи_ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НомерОсновнойПоставки1с',
			width: 196,
			height: 19,
			style: 'position:absolute;left:656px;top:80px;width:196px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомерОсновнойПоставки1с',
			text: 'Номер основной поставки 1с:',
			style: 'position:absolute;left:472px;top:80px;width:172px;height:19px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:860px;height:25px;',
			dock: 'top',
			items:
			[
				{
					text:'Заявление  на подключение',
				},
				{
					text:'Соглашение об оказании услуг',
				},
				{
					text:'Лицензия на использование ПО',
				},
				{
					text:'Сертификат пользователя',
				},
				'-',
				{
					text:'Пакет документов',
				},
			]
		},
	]
	});
});