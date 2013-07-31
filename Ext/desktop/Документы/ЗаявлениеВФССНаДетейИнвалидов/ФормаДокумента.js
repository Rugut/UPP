Ext.require(['Данные.Документы.ЗаявлениеВФССНаДетейИнвалидов'], function () 
{
	Ext.define('Документы.ЗаявлениеВФССНаДетейИнвалидов.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:900px;height:580px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Заявление в ФСС о возмещении выплат родителям детей-инвалидов',
	
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
			style: 'position:absolute;left:419px;top:33px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Номер',
			width: 80,
			height: 19,
			style: 'position:absolute;left:507px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от',
			style: 'position:absolute;left:599px;top:33px;width:26px;height:19px;text-align:left;',
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
			style: 'position:absolute;left:641px;top:33px;width:120px;height:19px;',
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
			width: 296,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:96px;top:33px;width:296px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ЗаявлениеВФССНаДетейИнвалидов.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ЗаявлениеВФССНаДетейИнвалидов.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ЗаявлениеВФССНаДетейИнвалидов.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ЗаявлениеВФССНаДетейИнвалидов.ФормаДокументаСобытия");
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
			width: 296,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:96px;top:57px;width:296px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ЗаявлениеВФССНаДетейИнвалидов.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ЗаявлениеВФССНаДетейИнвалидов.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ЗаявлениеВФССНаДетейИнвалидов.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ЗаявлениеВФССНаДетейИнвалидов.ФормаДокументаСобытия");
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
			width: 796,
			height: 19,
			style: 'position:absolute;left:96px;top:528px;width:796px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:107px;width:884px;height:414px;',
			height: 414,width: 884,
			items:
			[
				{
					title:'Сотрудники',
					items:
					[
		{
			id: 'РаботникиОрганизации',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:35px;width:870px;height:352px;',
			height: 352,width: 870,
			columns:
			[
				{
					text:'№',
					width:'25',
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
					text:'Статус',
					width:'120',
					dataIndex:'Статус',
					flex:1,
				},
				{
					text:'Среднедневной заработок',
					width:'150',
					dataIndex:'СреднедневнойЗаработок',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ЗаявлениеВФССНаДетейИнвалидов/ВыбратьПоСсылке/100', timeout: 200},
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
						name:'Статус',
					},
					{
						name:'СреднедневнойЗаработок',
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
						Ext.require(['Справочники.ЗаявлениеВФССНаДетейИнвалидов.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ЗаявлениеВФССНаДетейИнвалидов.ФормаДокументаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
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
			style: 'position:absolute;left:12px;top:276px;width:106px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'Руководитель.Представление',
			width: 320,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:119px;top:276px;width:320px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ЗаявлениеВФССНаДетейИнвалидов.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ЗаявлениеВФССНаДетейИнвалидов.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ЗаявлениеВФССНаДетейИнвалидов.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ЗаявлениеВФССНаДетейИнвалидов.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьДолжностьРуководителя',
			text: 'Должность:',
			style: 'position:absolute;left:444px;top:276px;width:106px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'ДолжностьРуководителя.Представление',
			width: 320,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:554px;top:276px;width:320px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ЗаявлениеВФССНаДетейИнвалидов.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ЗаявлениеВФССНаДетейИнвалидов.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ЗаявлениеВФССНаДетейИнвалидов.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ЗаявлениеВФССНаДетейИнвалидов.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьРегистрационныйНомерФСС',
			text: 'Регистрационный номер:',
			style: 'position:absolute;left:14px;top:53px;width:134px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'РегистрационныйНомерФСС',
			width: 110,
			height: 19,
			style: 'position:absolute;left:146px;top:53px;width:110px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДополнительныйКодФСС',
			text: 'Дополнительный код:',
			style: 'position:absolute;left:261px;top:53px;width:116px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ДополнительныйКодФСС',
			width: 110,
			height: 19,
			style: 'position:absolute;left:379px;top:53px;width:110px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКодПодчиненностиФСС',
			text: 'Код подчиненности:',
			style: 'position:absolute;left:494px;top:53px;width:102px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'КодПодчиненностиФСС',
			width: 60,
			height: 19,
			style: 'position:absolute;left:599px;top:53px;width:60px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименованиеТерриториальногоОрганаФСС',
			text: 'Наименование территориального органа ФСС:',
			style: 'position:absolute;left:15px;top:27px;width:241px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НаименованиеТерриториальногоОрганаФСС',
			width: 618,
			height: 19,
			style: 'position:absolute;left:258px;top:27px;width:618px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Регистрация в ФСС',
			style: 'position:absolute;left:6px;top:6px;width:870px;height:16px;',
		},
		{
			xtype: 'fieldset',
			title: 'Подписи',
			style: 'position:absolute;left:6px;top:255px;width:868px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьАдрес1',
			text: 'Адрес:',
			style: 'position:absolute;left:14px;top:79px;width:44px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Адрес',
			width: 817,
			height: 19,
			style: 'position:absolute;left:59px;top:79px;width:817px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'ОбновитьДанныеСтрахователя',
			text: 'Обновить',
			style: 'position:absolute;left:6px;top:366px;width:82px;height:21px;',
		},
		{
			xtype: 'fieldset',
			title: 'Банковские реквизиты',
			style: 'position:absolute;left:8px;top:112px;width:868px;height:16px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Банк.Представление',
			width: 611,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:59px;top:133px;width:611px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ЗаявлениеВФССНаДетейИнвалидов.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ЗаявлениеВФССНаДетейИнвалидов.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ЗаявлениеВФССНаДетейИнвалидов.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ЗаявлениеВФССНаДетейИнвалидов.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьНомерСчета',
			text: '№ счета:',
			style: 'position:absolute;left:683px;top:133px;width:45px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НомерСчета',
			width: 136,
			height: 19,
			style: 'position:absolute;left:740px;top:133px;width:136px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименованиеБанка',
			text: 'Наименование:',
			style: 'position:absolute;left:22px;top:159px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НаименованиеБанка',
			width: 430,
			height: 19,
			style: 'position:absolute;left:113px;top:159px;width:430px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьБИКБанка',
			text: 'БИК:',
			style: 'position:absolute;left:550px;top:159px;width:29px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'БИКБанка',
			width: 88,
			height: 19,
			style: 'position:absolute;left:582px;top:159px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКоррСчет',
			text: 'Корр. счет:',
			style: 'position:absolute;left:683px;top:159px;width:57px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'КоррСчет',
			width: 136,
			height: 19,
			style: 'position:absolute;left:740px;top:159px;width:136px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименованиеБанка1',
			text: 'Банк:',
			style: 'position:absolute;left:14px;top:133px;width:44px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомерЛицевогоСчета1',
			text: '№ лицевого счета:',
			style: 'position:absolute;left:14px;top:185px;width:96px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НомерЛицевогоСчета',
			width: 150,
			height: 19,
			style: 'position:absolute;left:113px;top:185px;width:150px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьСуммаПособий',
			text: 'Сумма пособий:',
			style: 'position:absolute;left:226px;top:81px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СуммаПособий',
			style: 'position:absolute;left:312px;top:81px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКоличествоСтраниц',
			text: 'Количество страниц:',
			style: 'position:absolute;left:8px;top:81px;width:124px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'КоличествоСтраниц',
			style: 'position:absolute;left:138px;top:81px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьТелефон',
			text: 'Контактный телефон:',
			style: 'position:absolute;left:419px;top:57px;width:115px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Телефон',
			width: 120,
			height: 19,
			style: 'position:absolute;left:535px;top:57px;width:120px;height:19px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:900px;height:25px;',
			dock: 'top',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:555px;width:900px;height:25px;',
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