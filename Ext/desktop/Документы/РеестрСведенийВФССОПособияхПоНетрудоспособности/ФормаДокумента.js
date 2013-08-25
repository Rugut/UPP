Ext.require(['Данные.Документы.РеестрСведенийВФССОПособияхПоНетрудоспособности'], function () 
{
	Ext.define('Документы.РеестрСведенийВФССОПособияхПоНетрудоспособности.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:1000px;height:600px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Реестр сведений в ФСС о пособиях по нетрудоспособности',
	
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
					Ext.require(['Документы.РеестрСведенийВФССОПособияхПоНетрудоспособности.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.РеестрСведенийВФССОПособияхПоНетрудоспособности.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.РеестрСведенийВФССОПособияхПоНетрудоспособности.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.РеестрСведенийВФССОПособияхПоНетрудоспособности.ФормаДокументаСобытия");
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
					Ext.require(['Документы.РеестрСведенийВФССОПособияхПоНетрудоспособности.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.РеестрСведенийВФССОПособияхПоНетрудоспособности.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.РеестрСведенийВФССОПособияхПоНетрудоспособности.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.РеестрСведенийВФССОПособияхПоНетрудоспособности.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:548px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			width: 896,
			height: 19,
			style: 'position:absolute;left:96px;top:548px;width:896px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:1000px;height:25px;',
			width: 1000,
			height: 25,
			items:
			[
			]
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:81px;width:984px;height:463px;',
			height: 463,width: 984,
			items:
			[
				{
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:970px;height:24px;',
			width: 970,
			height: 24,
			items:
			[
				{
					text:'Заполнить по листкам нетрудоспособности',
				},
			]
		},
		{
			id: 'РаботникиОрганизации',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:33px;width:292px;height:404px;',
			height: 404,width: 292,
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
					text:'Листок нетрудоспособности',
					width:'120',
					dataIndex:'ЛистокНетрудоспособности',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/РеестрСведенийВФССОПособияхПоНетрудоспособности/ВыбратьПоСсылке/100', timeout: 200},
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
						name:'ЛистокНетрудоспособности',
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
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.РеестрСведенийВФССОПособияхПоНетрудоспособности.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.РеестрСведенийВФССОПособияхПоНетрудоспособности.ФормаДокументаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:303px;top:33px;width:673px;height:404px;',
			height: 404,width: 673,
			items:
			[
				{
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
			width: 170,
			height: 19,
			style: 'position:absolute;left:61px;top:6px;width:170px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИмя',
			text: 'Имя:',
			style: 'position:absolute;left:243px;top:6px;width:27px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Имя',
			width: 170,
			height: 19,
			style: 'position:absolute;left:272px;top:6px;width:170px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтчество',
			text: 'Отчество:',
			style: 'position:absolute;left:453px;top:6px;width:51px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Отчество',
			width: 160,
			height: 19,
			style: 'position:absolute;left:505px;top:6px;width:160px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСерияДокумента',
			text: 'Серия:',
			style: 'position:absolute;left:399px;top:99px;width:37px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'СерияДокумента',
			width: 88,
			height: 19,
			style: 'position:absolute;left:438px;top:99px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомерДокумента',
			text: 'Номер:',
			style: 'position:absolute;left:535px;top:99px;width:40px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НомерДокумента',
			width: 88,
			height: 19,
			style: 'position:absolute;left:577px;top:99px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись15',
			text: 'Паспортные данные',
			style: 'position:absolute;left:6px;top:76px;width:129px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'АдресПочтовыйВФорме',
			width: 245,
			height: 19,
			style: 'position:absolute;left:197px;top:330px;width:245px;height:19px;',
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
			style: 'position:absolute;left:61px;top:122px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаВыдачиДокумента',
			text: 'Выдан:',
			style: 'position:absolute;left:14px;top:122px;width:38px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Банк.Представление',
			width: 277,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:197px;top:284px;width:277px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.РеестрСведенийВФССОПособияхПоНетрудоспособности.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.РеестрСведенийВФССОПособияхПоНетрудоспособности.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.РеестрСведенийВФССОПособияхПоНетрудоспособности.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.РеестрСведенийВФССОПособияхПоНетрудоспособности.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьНомерЛицевогоСчета',
			text: '№ счета:',
			style: 'position:absolute;left:479px;top:284px;width:47px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НомерЛицевогоСчета',
			width: 136,
			height: 19,
			style: 'position:absolute;left:529px;top:284px;width:136px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименованиеБанка',
			text: 'Наименование банка:',
			style: 'position:absolute;left:14px;top:307px;width:114px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НаименованиеБанка',
			width: 205,
			height: 19,
			style: 'position:absolute;left:129px;top:307px;width:205px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьБИКБанка',
			text: 'БИК:',
			style: 'position:absolute;left:544px;top:307px;width:29px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'БИКБанка',
			width: 88,
			height: 19,
			style: 'position:absolute;left:577px;top:307px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись16',
			text: 'Пособие',
			style: 'position:absolute;left:6px;top:191px;width:129px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтраховойНомерПФР',
			text: 'СНИЛС:',
			style: 'position:absolute;left:6px;top:52px;width:41px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'СтраховойНомерПФР',
			width: 100,
			height: 19,
			style: 'position:absolute;left:61px;top:52px;width:100px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИНН',
			text: 'ИНН:',
			style: 'position:absolute;left:6px;top:29px;width:49px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ИНН',
			width: 100,
			height: 19,
			style: 'position:absolute;left:61px;top:29px;width:100px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьАдрес',
			text: 'Адрес по регистрации:',
			style: 'position:absolute;left:14px;top:145px;width:121px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'АдресРегистрацииВФорме',
			width: 289,
			height: 19,
			style: 'position:absolute;left:153px;top:145px;width:289px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВидДокумента',
			text: 'Вид документа:',
			style: 'position:absolute;left:14px;top:99px;width:79px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'ВидДокумента.Представление',
			width: 296,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:94px;top:99px;width:296px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.РеестрСведенийВФССОПособияхПоНетрудоспособности.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.РеестрСведенийВФССОПособияхПоНетрудоспособности.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.РеестрСведенийВФССОПособияхПоНетрудоспособности.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.РеестрСведенийВФССОПособияхПоНетрудоспособности.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьКемВыданДокумент',
			text: 'Кем выдан:',
			style: 'position:absolute;left:153px;top:122px;width:60px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'КемВыданДокумент',
			width: 450,
			height: 19,
			style: 'position:absolute;left:215px;top:122px;width:450px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаРождения',
			text: 'Дата рождения:',
			style: 'position:absolute;left:367px;top:29px;width:84px;height:19px;text-align:left;',
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
			style: 'position:absolute;left:453px;top:29px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПол',
			text: 'Пол:',
			style: 'position:absolute;left:547px;top:29px;width:28px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'Пол.Представление',
			width: 88,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:577px;top:29px;width:88px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.РеестрСведенийВФССОПособияхПоНетрудоспособности.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.РеестрСведенийВФССОПособияхПоНетрудоспособности.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.РеестрСведенийВФССОПособияхПоНетрудоспособности.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.РеестрСведенийВФССОПособияхПоНетрудоспособности.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьДатаПредставленияПакетаДокументов',
			text: 'Дата представления пакета документов:',
			style: 'position:absolute;left:362px;top:214px;width:213px;height:19px;text-align:left;',
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
			style: 'position:absolute;left:577px;top:214px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВидПособия',
			text: 'Вид пособия:',
			style: 'position:absolute;left:14px;top:214px;width:73px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'ВидПособия.Представление',
			width: 262,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:94px;top:214px;width:262px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.РеестрСведенийВФССОПособияхПоНетрудоспособности.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.РеестрСведенийВФССОПособияхПоНетрудоспособности.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.РеестрСведенийВФССОПособияхПоНетрудоспособности.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.РеестрСведенийВФССОПособияхПоНетрудоспособности.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'Надпись46',
			text: 'Выплатить',
			style: 'position:absolute;left:6px;top:261px;width:129px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВидДокумента',
			text: 'Вид занятости:',
			style: 'position:absolute;left:167px;top:52px;width:81px;height:19px;text-align:left;',
		},
		{
			xtype: 'button',
			name: 'ОбновитьДанныеЗЛ',
			text: 'Обновить',
			style: 'position:absolute;left:6px;top:357px;width:82px;height:21px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтатусНалогоплательщика',
			text: 'Статус:',
			style: 'position:absolute;left:167px;top:29px;width:43px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'СтатусНалогоплательщика.Представление',
			width: 150,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:211px;top:29px;width:150px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.РеестрСведенийВФССОПособияхПоНетрудоспособности.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.РеестрСведенийВФССОПособияхПоНетрудоспособности.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.РеестрСведенийВФССОПособияхПоНетрудоспособности.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.РеестрСведенийВФССОПособияхПоНетрудоспособности.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьКоррСчет',
			text: 'Корр. счет:',
			style: 'position:absolute;left:339px;top:307px;width:58px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'КоррСчет',
			width: 136,
			height: 19,
			style: 'position:absolute;left:401px;top:307px;width:136px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВидДокумента1',
			text: 'Для иностранных граждан:',
			style: 'position:absolute;left:14px;top:168px;width:139px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ОписаниеДокументаНаПроживание',
			width: 512,
			height: 19,
			style: 'position:absolute;left:153px;top:168px;width:512px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьАдресПочтовыйКодПоКЛАДР',
			text: 'Код по КЛАДР:',
			style: 'position:absolute;left:446px;top:330px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'АдресПочтовыйКодПоКЛАДР',
			width: 136,
			height: 19,
			style: 'position:absolute;left:529px;top:330px;width:136px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьАдресРегистрацииКодПоКЛАДР',
			text: 'Код по КЛАДР:',
			style: 'position:absolute;left:446px;top:145px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'АдресРегистрацииКодПоКЛАДР',
			width: 136,
			height: 19,
			style: 'position:absolute;left:529px;top:145px;width:136px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКодПричиныПерерасчета',
			text: 'Код причины перерасчета:',
			style: 'position:absolute;left:256px;top:237px;width:141px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'КодПричиныПерерасчета',
			width: 40,
			height: 19,
			style: 'position:absolute;left:398px;top:237px;width:40px;height:19px;',
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Основное место работы',
			style: 'position:absolute;left:253px;top:52px;width:144px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Совместительство',
			style: 'position:absolute;left:404px;top:52px;width:115px;height:19px;',
		},
			]
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Первичная информация',
			style: 'position:absolute;left:14px;top:237px;width:147px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Перерасчет',
			style: 'position:absolute;left:166px;top:237px;width:82px;height:19px;',
		},
			]
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Перечислением на счет в банке:',
			style: 'position:absolute;left:14px;top:284px;width:183px;height:19px;',
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
			style: 'position:absolute;left:14px;top:330px;width:183px;height:19px;',
		},
			]
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Поставлена на учет в ранние сроки беременности, дата справки:',
			style: 'position:absolute;left:6px;top:328px;width:352px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаСправкиБеременной',
			width: 88,
			height: 19,
			style: 'position:absolute;left:360px;top:328px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаВыдачиБольничного',
			text: 'Дата выдачи:',
			style: 'position:absolute;left:6px;top:30px;width:186px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаВыдачиБольничного',
			width: 88,
			height: 19,
			style: 'position:absolute;left:194px;top:30px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'КодПричиныНетрудоспособности',
			width: 40,
			height: 19,
			style: 'position:absolute;left:188px;top:138px;width:40px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ДополнительныйКодПричиныНетрудоспособности',
			width: 40,
			height: 19,
			style: 'position:absolute;left:286px;top:138px;width:40px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ВторойКодПричиныНетрудоспособности',
			width: 40,
			height: 19,
			style: 'position:absolute;left:385px;top:138px;width:40px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаИзмененияКодаПричиныНетрудоспособности',
			width: 88,
			height: 19,
			style: 'position:absolute;left:49px;top:186px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись18',
			text: 'Причина нетрудоспособности: код',
			style: 'position:absolute;left:6px;top:138px;width:179px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись19',
			text: 'доп. код',
			style: 'position:absolute;left:234px;top:138px;width:43px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись20',
			text: 'код изм.',
			style: 'position:absolute;left:334px;top:138px;width:47px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НомерВходящего',
			width: 88,
			height: 19,
			style: 'position:absolute;left:194px;top:6px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВходящийНомер',
			text: 'Номер листка нетрудоспособности:',
			style: 'position:absolute;left:6px;top:6px;width:186px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВходящийНомер1',
			text: 'Номер предыдущего листка:',
			style: 'position:absolute;left:298px;top:6px;width:152px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НомерПервичногоБольничного',
			width: 88,
			height: 19,
			style: 'position:absolute;left:458px;top:6px;width:88px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Дубликат',
			style: 'position:absolute;left:298px;top:30px;width:72px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьАдресЛПУ',
			text: 'Адрес:',
			style: 'position:absolute;left:14px;top:108px;width:37px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'АдресЛПУВФорме',
			width: 387,
			height: 19,
			style: 'position:absolute;left:57px;top:108px;width:387px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименованиеЛПУ',
			text: 'Наименование:',
			style: 'position:absolute;left:14px;top:84px;width:81px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НаименованиеЛПУ',
			width: 427,
			height: 19,
			style: 'position:absolute;left:101px;top:84px;width:427px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОГРН_ЛПУ',
			text: 'ОГРН:',
			style: 'position:absolute;left:534px;top:84px;width:35px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ОГРН_ЛПУ',
			width: 88,
			height: 19,
			style: 'position:absolute;left:577px;top:84px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись21',
			text: 'Дата 1:',
			style: 'position:absolute;left:6px;top:186px;width:42px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомерЛисткаПоОсновномуМестуРаботы',
			text: 'Номер б/л, выданного для основного места работы:',
			style: 'position:absolute;left:6px;top:162px;width:271px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НомерЛисткаПоОсновномуМестуРаботы',
			width: 139,
			height: 19,
			style: 'position:absolute;left:286px;top:162px;width:139px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись35',
			text: 'Дата 2:',
			style: 'position:absolute;left:143px;top:186px;width:42px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаОкончанияПутевки',
			width: 88,
			height: 19,
			style: 'position:absolute;left:187px;top:186px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомерПутевки',
			text: 'Номер путевки:',
			style: 'position:absolute;left:283px;top:186px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НомерПутевки',
			width: 79,
			height: 19,
			style: 'position:absolute;left:369px;top:186px;width:79px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОГРН_Санатория',
			text: 'ОГРН санатория:',
			style: 'position:absolute;left:452px;top:186px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ОГРН_Санатория',
			width: 101,
			height: 19,
			style: 'position:absolute;left:544px;top:186px;width:101px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьУходЗаБольнымЧленомСемьи',
			text: 'Уход за первым родственником',
			style: 'position:absolute;left:6px;top:216px;width:205px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтажЛет4',
			text: 'Возраст:',
			style: 'position:absolute;left:14px;top:240px;width:50px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись38',
			text: 'месяцев',
			style: 'position:absolute;left:142px;top:240px;width:47px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'УходЗаРодственникомМесяцев1',
			style: 'position:absolute;left:115px;top:240px;width:24px;height:19px;',
			width: 24,
			height: 19,
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'УходЗаРодственникомЛет1',
			style: 'position:absolute;left:65px;top:240px;width:24px;height:19px;',
			width: 24,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'НадписьСтажЛет5',
			text: 'лет',
			style: 'position:absolute;left:92px;top:240px;width:21px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьРодственнаяСвязь',
			text: 'Родств. связь:',
			style: 'position:absolute;left:191px;top:240px;width:76px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'УходЗаРодственникомРодственнаяСвязь1',
			width: 40,
			height: 19,
			style: 'position:absolute;left:268px;top:240px;width:40px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'УходЗаРодственникомФИО1',
			width: 186,
			height: 19,
			style: 'position:absolute;left:341px;top:240px;width:186px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьФИО1',
			text: 'ФИО:',
			style: 'position:absolute;left:310px;top:240px;width:31px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьУходЗаБольнымЧленомСемьи1',
			text: 'Уход за вторым родственником',
			style: 'position:absolute;left:6px;top:270px;width:205px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтажЛет6',
			text: 'Возраст:',
			style: 'position:absolute;left:14px;top:294px;width:50px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись39',
			text: 'месяцев',
			style: 'position:absolute;left:142px;top:294px;width:47px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'УходЗаРодственникомМесяцев2',
			style: 'position:absolute;left:115px;top:294px;width:24px;height:19px;',
			width: 24,
			height: 19,
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'УходЗаРодственникомЛет2',
			style: 'position:absolute;left:65px;top:294px;width:24px;height:19px;',
			width: 24,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'НадписьСтажЛет7',
			text: 'лет',
			style: 'position:absolute;left:92px;top:294px;width:21px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьРодственнаяСвязь1',
			text: 'Родств. связь:',
			style: 'position:absolute;left:191px;top:294px;width:76px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'УходЗаРодственникомРодственнаяСвязь2',
			width: 40,
			height: 19,
			style: 'position:absolute;left:268px;top:294px;width:40px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'УходЗаРодственникомФИО2',
			width: 186,
			height: 19,
			style: 'position:absolute;left:341px;top:294px;width:186px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьФИО2',
			text: 'ФИО:',
			style: 'position:absolute;left:310px;top:294px;width:30px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'УходЗаРодственникомИспользованоДней1',
			style: 'position:absolute;left:641px;top:240px;width:24px;height:19px;',
			width: 24,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'НадписьИспользованоДней1',
			text: 'Использовано дней:',
			style: 'position:absolute;left:535px;top:240px;width:105px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'УходЗаРодственникомИспользованоДней2',
			style: 'position:absolute;left:641px;top:294px;width:24px;height:19px;',
			width: 24,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'НадписьИспользованоДней2',
			text: 'Использовано дней:',
			style: 'position:absolute;left:535px;top:294px;width:105px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НомерСправкиБеременной',
			width: 101,
			height: 19,
			style: 'position:absolute;left:503px;top:328px;width:101px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомерДокумента1',
			text: 'Номер:',
			style: 'position:absolute;left:458px;top:328px;width:40px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьАдресЛПУКодПоКЛАДР',
			text: 'Код по КЛАДР:',
			style: 'position:absolute;left:448px;top:108px;width:79px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'АдресЛПУКодПоКЛАДР',
			width: 136,
			height: 19,
			style: 'position:absolute;left:529px;top:108px;width:136px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись49',
			text: 'Медицинская организация, выдавшая листок:',
			style: 'position:absolute;left:6px;top:60px;width:240px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'ЛПУ.Представление',
			width: 220,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:250px;top:60px;width:220px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.РеестрСведенийВФССОПособияхПоНетрудоспособности.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.РеестрСведенийВФССОПособияхПоНетрудоспособности.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.РеестрСведенийВФССОПособияхПоНетрудоспособности.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.РеестрСведенийВФССОПособияхПоНетрудоспособности.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьПериодНахожденияВСтационареСРебенкомС',
			text: 'Находился(ась) в стационаре с ребенком: с',
			style: 'position:absolute;left:6px;top:54px;width:228px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ПериодНахожденияВСтационареСРебенкомС',
			width: 88,
			height: 19,
			style: 'position:absolute;left:235px;top:54px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись22',
			text: 'по',
			style: 'position:absolute;left:334px;top:54px;width:17px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ПериодНахожденияВСтационареСРебенкомПо',
			width: 88,
			height: 19,
			style: 'position:absolute;left:360px;top:54px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКодНарушенияРежима',
			text: 'Отметка о нарушении режима: код',
			style: 'position:absolute;left:6px;top:6px;width:180px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'КодНарушенияРежима',
			width: 40,
			height: 19,
			style: 'position:absolute;left:188px;top:6px;width:40px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Установлена/изменена группа инвалидности:',
			style: 'position:absolute;left:278px;top:132px;width:253px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаРегистрацииДокументовМСЭ',
			text: 'Дата регистрации документов:',
			style: 'position:absolute;left:278px;top:108px;width:159px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаРегистрацииДокументовМСЭ',
			width: 88,
			height: 19,
			style: 'position:absolute;left:438px;top:108px;width:88px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаВыходаНаРаботу',
			width: 88,
			height: 19,
			style: 'position:absolute;left:129px;top:335px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаНарушенияРежима',
			text: 'Дата:',
			style: 'position:absolute;left:243px;top:6px;width:32px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаНарушенияРежима',
			width: 88,
			height: 19,
			style: 'position:absolute;left:283px;top:6px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКодНарушенияРежима1',
			text: 'Уважительная причина нарушения режима:',
			style: 'position:absolute;left:6px;top:30px;width:228px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'УважительнаяПричинаНарушенияРежима',
			width: 430,
			height: 19,
			style: 'position:absolute;left:235px;top:30px;width:430px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись36',
			text: 'Экпертиза инвалидности (МСЭ)',
			style: 'position:absolute;left:6px;top:84px;width:197px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаНаправленияВБюроМСЭ',
			text: 'Дата направления в бюро МСЭ:',
			style: 'position:absolute;left:14px;top:108px;width:164px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаНаправленияВБюроМСЭ',
			width: 88,
			height: 19,
			style: 'position:absolute;left:180px;top:108px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаОсвидетельствованияМСЭ',
			text: 'Освидетельствован(а):',
			style: 'position:absolute;left:14px;top:132px;width:164px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаОсвидетельствованияМСЭ',
			width: 88,
			height: 19,
			style: 'position:absolute;left:180px;top:132px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись37',
			text: 'Освобождение от работы',
			style: 'position:absolute;left:6px;top:162px;width:197px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаВыходаНаРаботу',
			text: 'Приступить к работе с:',
			style: 'position:absolute;left:6px;top:335px;width:122px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомерЛисткаПродолжения',
			text: '№ б/л-продолжения:',
			style: 'position:absolute;left:449px;top:335px;width:107px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НомерЛисткаПродолжения',
			width: 88,
			height: 19,
			style: 'position:absolute;left:557px;top:335px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНовыйСтатусНетрудопособного',
			text: 'Иное: код',
			style: 'position:absolute;left:222px;top:335px;width:53px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НовыйСтатусНетрудопособного',
			width: 40,
			height: 19,
			style: 'position:absolute;left:277px;top:335px;width:40px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаНовыйСтатусНетрудопособного',
			text: 'дата',
			style: 'position:absolute;left:325px;top:335px;width:28px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаНовыйСтатусНетрудопособного',
			width: 88,
			height: 19,
			style: 'position:absolute;left:355px;top:335px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПериодНахожденияВСтационареСРебенкомС1',
			text: 'C',
			style: 'position:absolute;left:14px;top:186px;width:12px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ОсвобождениеС1',
			width: 88,
			height: 19,
			style: 'position:absolute;left:26px;top:186px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись42',
			text: 'по',
			style: 'position:absolute;left:119px;top:186px;width:17px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ОсвобождениеПо1',
			width: 88,
			height: 19,
			style: 'position:absolute;left:138px;top:186px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДолжностьВрача',
			text: 'Врач: должность',
			style: 'position:absolute;left:230px;top:186px;width:86px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ДолжностьВрача1',
			width: 82,
			height: 19,
			style: 'position:absolute;left:317px;top:186px;width:82px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ФИОВрача1',
			width: 112,
			height: 19,
			style: 'position:absolute;left:435px;top:186px;width:112px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьФИО3',
			text: 'ФИО:',
			style: 'position:absolute;left:402px;top:186px;width:32px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьПериодНахожденияВСтационареСРебенкомС2',
			text: 'C',
			style: 'position:absolute;left:14px;top:234px;width:12px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ОсвобождениеС2',
			width: 88,
			height: 19,
			style: 'position:absolute;left:26px;top:234px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись44',
			text: 'по',
			style: 'position:absolute;left:119px;top:234px;width:17px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ОсвобождениеПо2',
			width: 88,
			height: 19,
			style: 'position:absolute;left:138px;top:234px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДолжностьВрача1',
			text: 'Врач: должность',
			style: 'position:absolute;left:230px;top:234px;width:86px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ДолжностьВрача2',
			width: 82,
			height: 19,
			style: 'position:absolute;left:317px;top:234px;width:82px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ФИОВрача2',
			width: 112,
			height: 19,
			style: 'position:absolute;left:435px;top:234px;width:112px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьФИО4',
			text: 'ФИО:',
			style: 'position:absolute;left:402px;top:234px;width:32px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьПериодНахожденияВСтационареСРебенкомС3',
			text: 'C',
			style: 'position:absolute;left:14px;top:282px;width:12px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ОсвобождениеС3',
			width: 88,
			height: 19,
			style: 'position:absolute;left:26px;top:282px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись45',
			text: 'по',
			style: 'position:absolute;left:119px;top:282px;width:17px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ОсвобождениеПо3',
			width: 88,
			height: 19,
			style: 'position:absolute;left:138px;top:282px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДолжностьВрача2',
			text: 'Врач: должность',
			style: 'position:absolute;left:230px;top:282px;width:86px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ДолжностьВрача3',
			width: 82,
			height: 19,
			style: 'position:absolute;left:317px;top:282px;width:82px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ФИОВрача3',
			width: 112,
			height: 19,
			style: 'position:absolute;left:435px;top:282px;width:112px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьФИО5',
			text: 'ФИО:',
			style: 'position:absolute;left:402px;top:282px;width:32px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ГруппаИнвалидности',
			width: 40,
			height: 19,
			style: 'position:absolute;left:532px;top:132px;width:40px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИдентификационныйНомерВрача1',
			text: 'Ид. номер:',
			style: 'position:absolute;left:549px;top:186px;width:56px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ИдентификационныйНомерВрача1',
			width: 60,
			height: 19,
			style: 'position:absolute;left:605px;top:186px;width:60px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ФИОВрачаПредседателяВК1',
			width: 150,
			height: 19,
			style: 'position:absolute;left:354px;top:210px;width:150px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьФИО6',
			text: 'Врач-председатель ВК: должность',
			style: 'position:absolute;left:14px;top:210px;width:179px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьИдентификационныйНомерВрача2',
			text: 'Ид. номер:',
			style: 'position:absolute;left:549px;top:234px;width:56px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ИдентификационныйНомерВрача2',
			width: 60,
			height: 19,
			style: 'position:absolute;left:605px;top:234px;width:60px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ФИОВрачаПредседателяВК2',
			width: 150,
			height: 19,
			style: 'position:absolute;left:354px;top:258px;width:150px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьФИО7',
			text: 'ФИО:',
			style: 'position:absolute;left:320px;top:258px;width:32px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьИдентификационныйНомерВрача3',
			text: 'Ид. номер:',
			style: 'position:absolute;left:549px;top:282px;width:56px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ИдентификационныйНомерВрача3',
			width: 60,
			height: 19,
			style: 'position:absolute;left:605px;top:282px;width:60px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ФИОВрачаПредседателяВК3',
			width: 150,
			height: 19,
			style: 'position:absolute;left:354px;top:306px;width:150px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьФИО8',
			text: 'ФИО:',
			style: 'position:absolute;left:320px;top:306px;width:32px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьИдентификационныйНомерВрача4',
			text: 'Ид. номер:',
			style: 'position:absolute;left:510px;top:210px;width:56px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьФИО9',
			text: 'ФИО:',
			style: 'position:absolute;left:320px;top:210px;width:32px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьФИО10',
			text: 'Врач-председатель ВК: должность',
			style: 'position:absolute;left:14px;top:258px;width:179px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьИдентификационныйНомерВрача5',
			text: 'Ид. номер:',
			style: 'position:absolute;left:510px;top:258px;width:56px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИдентификационныйНомерВрача6',
			text: 'Ид. номер:',
			style: 'position:absolute;left:510px;top:306px;width:56px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ДолжностьВрача4',
			width: 119,
			height: 19,
			style: 'position:absolute;left:197px;top:210px;width:119px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьФИО11',
			text: 'Врач-председатель ВК: должность',
			style: 'position:absolute;left:14px;top:306px;width:179px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ИдентификационныйНомерВрача4',
			width: 60,
			height: 19,
			style: 'position:absolute;left:568px;top:210px;width:60px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ДолжностьВрача5',
			width: 119,
			height: 19,
			style: 'position:absolute;left:197px;top:258px;width:119px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ДолжностьВрача6',
			width: 119,
			height: 19,
			style: 'position:absolute;left:197px;top:306px;width:119px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ИдентификационныйНомерВрача5',
			width: 60,
			height: 19,
			style: 'position:absolute;left:569px;top:258px;width:60px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ИдентификационныйНомерВрача6',
			width: 60,
			height: 19,
			style: 'position:absolute;left:568px;top:306px;width:60px;height:19px;',
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьПериодПростояС',
			text: 'Период простоя с:',
			style: 'position:absolute;left:6px;top:6px;width:100px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ПериодПростояС',
			width: 88,
			height: 19,
			style: 'position:absolute;left:108px;top:6px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПериодПростояПо',
			text: 'по:',
			style: 'position:absolute;left:203px;top:6px;width:21px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ПериодПростояПо',
			width: 88,
			height: 19,
			style: 'position:absolute;left:226px;top:6px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтажЛет',
			text: 'Страховой стаж:',
			style: 'position:absolute;left:6px;top:60px;width:108px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись25',
			text: 'месяцев',
			style: 'position:absolute;left:199px;top:60px;width:47px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СтажМесяцев',
			style: 'position:absolute;left:171px;top:60px;width:24px;height:19px;',
			width: 24,
			height: 19,
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СтажЛет',
			style: 'position:absolute;left:121px;top:60px;width:24px;height:19px;',
			width: 24,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'НадписьСтажЛет1',
			text: 'В т.ч. стаж без нестраховых периодов:',
			style: 'position:absolute;left:250px;top:60px;width:199px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СтажБезНестраховыхПериодовЛет',
			style: 'position:absolute;left:451px;top:60px;width:24px;height:19px;',
			width: 24,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'Надпись26',
			text: 'месяцев',
			style: 'position:absolute;left:532px;top:60px;width:47px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СтажБезНестраховыхПериодовСтажМесяцев',
			style: 'position:absolute;left:503px;top:60px;width:24px;height:19px;',
			width: 24,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'НадписьСтажЛет2',
			text: 'лет',
			style: 'position:absolute;left:478px;top:60px;width:21px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись27',
			text: 'Условия исчисления:',
			style: 'position:absolute;left:6px;top:84px;width:112px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'УсловияИсчисленияКод1',
			width: 40,
			height: 19,
			style: 'position:absolute;left:121px;top:84px;width:40px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'УсловияИсчисленияКод2',
			width: 40,
			height: 19,
			style: 'position:absolute;left:171px;top:84px;width:40px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'УсловияИсчисленияКод3',
			width: 40,
			height: 19,
			style: 'position:absolute;left:218px;top:84px;width:40px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаНачалаОплаты',
			width: 88,
			height: 19,
			style: 'position:absolute;left:256px;top:30px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Причитается пособие за счет ФСС за период: с',
			style: 'position:absolute;left:6px;top:30px;width:248px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаОкончания1',
			text: 'по:',
			style: 'position:absolute;left:352px;top:30px;width:16px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаОкончанияОплаты',
			width: 88,
			height: 19,
			style: 'position:absolute;left:376px;top:30px;width:88px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ПериодРасчетаСреднегоЗаработкаНачало',
			width: 88,
			height: 19,
			style: 'position:absolute;left:154px;top:258px;width:88px;height:19px;',
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
			style: 'position:absolute;left:268px;top:258px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПериодРасчетаСреднегоЗаработкаОкончание',
			text: 'по',
			style: 'position:absolute;left:248px;top:258px;width:16px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПервыйГодРасчета',
			style: 'position:absolute;left:24px;top:186px;width:40px;height:19px;',
			width: 40,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'НадписьИ',
			text: ' и ',
			style: 'position:absolute;left:326px;top:186px;width:20px;height:19px;text-align:center;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ВторойГодРасчета',
			style: 'position:absolute;left:351px;top:186px;width:40px;height:19px;',
			width: 40,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'Надпись28',
			text: 'Дата заявления о замене расчетного года:',
			style: 'position:absolute;left:24px;top:210px;width:223px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтажЛет3',
			text: 'лет',
			style: 'position:absolute;left:148px;top:60px;width:21px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись29',
			text: 'За расчетный период с:',
			style: 'position:absolute;left:24px;top:258px;width:127px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ТарифнаяСтавкаОклад',
			style: 'position:absolute;left:451px;top:359px;width:88px;height:19px;',
			width: 88,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'Надпись30',
			text: 'Заработок за период:',
			style: 'position:absolute;left:24px;top:282px;width:127px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ЗаработокЗаПериодРасчета',
			style: 'position:absolute;left:154px;top:282px;width:88px;height:19px;',
			width: 88,
			height: 19,
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'РайонныйКоэффициент',
			style: 'position:absolute;left:103px;top:108px;width:40px;height:19px;',
			width: 40,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'Надпись31',
			text: 'Календарных дней периода:',
			style: 'position:absolute;left:248px;top:282px;width:149px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'КалендарныхДнейРасчетногоПериода',
			style: 'position:absolute;left:398px;top:282px;width:40px;height:19px;',
			width: 40,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'Надпись32',
			text: 'Порядок расчета cреднего заработка',
			style: 'position:absolute;left:6px;top:138px;width:242px;height:19px;',
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
			style: 'position:absolute;left:250px;top:210px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРК',
			text: 'Районный коэф-т:',
			style: 'position:absolute;left:6px;top:108px;width:94px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Район',
			width: 194,
			height: 19,
			style: 'position:absolute;left:189px;top:108px;width:194px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСуммаПервыйГодРасчета',
			text: ') заработок:',
			style: 'position:absolute;left:167px;top:186px;width:64px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ЗаработокПервыйГодРасчета',
			style: 'position:absolute;left:233px;top:186px;width:88px;height:19px;',
			width: 88,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'НадписьСреднийДневнойЗаработок',
			text: 'Средний дневной заработок:',
			style: 'position:absolute;left:6px;top:359px;width:148px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СреднийДневнойЗаработок',
			style: 'position:absolute;left:154px;top:359px;width:88px;height:19px;',
			width: 88,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'Надпись40',
			text: '( заменил',
			style: 'position:absolute;left:69px;top:186px;width:55px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ЗамененныйПервыйГодРасчета',
			style: 'position:absolute;left:124px;top:186px;width:40px;height:19px;',
			width: 40,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'НадписьВторойГодРасчета',
			text: '( заменил',
			style: 'position:absolute;left:394px;top:186px;width:55px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ЗамененныйВторойГодРасчета',
			style: 'position:absolute;left:450px;top:186px;width:40px;height:19px;',
			width: 40,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'Надпись43',
			text: 'Район:',
			style: 'position:absolute;left:150px;top:108px;width:37px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСуммаВторойГодРасчета',
			text: ') заработок:',
			style: 'position:absolute;left:492px;top:186px;width:64px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ЗаработокПервыйГодРасчета',
			style: 'position:absolute;left:557px;top:186px;width:88px;height:19px;',
			width: 88,
			height: 19,
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'МРОТ1',
			style: 'position:absolute;left:373px;top:330px;width:88px;height:19px;',
			width: 88,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'Надпись48',
			text: 'Со средним заработком:',
			style: 'position:absolute;left:319px;top:6px;width:130px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СреднийЗаработокНаПериодПростоя',
			style: 'position:absolute;left:451px;top:6px;width:88px;height:19px;',
			width: 88,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'НадписьТарифнаяСтавкаОклад',
			text: 'Должностной оклад (тарифная ставка):',
			style: 'position:absolute;left:247px;top:359px;width:204px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'ВыплатаЗаСчетФедеральногоБюджета.Представление',
			width: 200,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:465px;top:84px;width:200px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.РеестрСведенийВФССОПособияхПоНетрудоспособности.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.РеестрСведенийВФССОПособияхПоНетрудоспособности.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.РеестрСведенийВФССОПособияхПоНетрудоспособности.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.РеестрСведенийВФССОПособияхПоНетрудоспособности.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьВыплатаЗаСчетФедеральногоБюджета',
			text: 'Причина радиационного воздействия:',
			style: 'position:absolute;left:268px;top:84px;width:196px;height:19px;',
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Заработок рассчитан по правилам 2011 года за расчетные годы:',
			style: 'position:absolute;left:6px;top:162px;width:351px;height:19px;',
		},
			]
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Заработок для пособия по беременности и родам рассчитан по правилам 2010 года',
			style: 'position:absolute;left:6px;top:234px;width:451px;height:19px;',
		},
			]
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Пособие по беременности и родам рассчитывается из оклада (тарифной ставки)',
			style: 'position:absolute;left:6px;top:306px;width:439px;height:19px;',
		},
			]
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Пособие по беременности и родам определяется исходя из МРОТ:',
			style: 'position:absolute;left:6px;top:330px;width:363px;height:19px;',
		},
			]
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'МРОТ',
			style: 'position:absolute;left:255px;top:78px;width:88px;height:19px;',
			width: 88,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'НадписьМРОТ',
			text: 'МРОТ на начало нетрудоспособности:',
			style: 'position:absolute;left:6px;top:78px;width:228px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ДоляВремени',
			style: 'position:absolute;left:255px;top:6px;width:88px;height:19px;',
			width: 88,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'НадписьДоляВремени',
			text: 'Доля времени при неполном рабочем времени:',
			style: 'position:absolute;left:6px;top:6px;width:246px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'СрочныйДоговорС',
			width: 88,
			height: 19,
			style: 'position:absolute;left:319px;top:30px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСрочныйДоговорС',
			text: 'Срочный договор продолжительностью менее 6 месяцев: с',
			style: 'position:absolute;left:6px;top:30px;width:308px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСрочныйДоговорПо',
			text: 'по:',
			style: 'position:absolute;left:412px;top:30px;width:16px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'СрочныйДоговорПо',
			width: 88,
			height: 19,
			style: 'position:absolute;left:434px;top:30px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИнаяПолезнаяИнформация',
			text: 'Иная информация, имеющая значение:',
			style: 'position:absolute;left:6px;top:107px;width:290px;height:19px;text-align:left;',
		},
		{
			xtype: 'textarea',
			hideLabel: true,
			disabled: false,
			name: 'ИнаяПолезнаяИнформация',
			style: 'position:absolute;left:6px;top:128px;width:659px;height:90px;',
		},
		{
			xtype: 'label',
			name: 'НадписьМРОТ1',
			text: 'Количество страниц представленных документов:',
			style: 'position:absolute;left:6px;top:226px;width:256px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'КоличествоСтраниц',
			style: 'position:absolute;left:264px;top:226px;width:24px;height:19px;',
			width: 24,
			height: 19,
		},
		{
			xtype: 'button',
			name: 'КнопкаЗаполнитьИнаяПолезнаяИнформацияВозможно',
			text: 'Заполнить по введенным сведениям',
			style: 'position:absolute;left:349px;top:107px;width:316px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаНачалаСобытия',
			width: 88,
			height: 19,
			style: 'position:absolute;left:255px;top:54px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаНачалаСобытия',
			text: 'Начало нетрудоспособности:',
			style: 'position:absolute;left:6px;top:54px;width:228px;height:19px;',
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
					Ext.require(['Документы.РеестрСведенийВФССОПособияхПоНетрудоспособности.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.РеестрСведенийВФССОПособияхПоНетрудоспособности.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.РеестрСведенийВФССОПособияхПоНетрудоспособности.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.РеестрСведенийВФССОПособияхПоНетрудоспособности.ФормаДокументаСобытия");
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
					Ext.require(['Документы.РеестрСведенийВФССОПособияхПоНетрудоспособности.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.РеестрСведенийВФССОПособияхПоНетрудоспособности.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.РеестрСведенийВФССОПособияхПоНетрудоспособности.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.РеестрСведенийВФССОПособияхПоНетрудоспособности.ФормаДокументаСобытия");
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
			width: 404,
			height: 19,
			style: 'position:absolute;left:258px;top:84px;width:404px;height:19px;',
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
			style: 'position:absolute;left:6px;top:416px;width:82px;height:21px;',
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
					Ext.require(['Документы.РеестрСведенийВФССОПособияхПоНетрудоспособности.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.РеестрСведенийВФССОПособияхПоНетрудоспособности.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.РеестрСведенийВФССОПособияхПоНетрудоспособности.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.РеестрСведенийВФССОПособияхПоНетрудоспособности.ФормаДокументаСобытия");
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
					Ext.require(['Документы.РеестрСведенийВФССОПособияхПоНетрудоспособности.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.РеестрСведенийВФССОПособияхПоНетрудоспособности.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.РеестрСведенийВФССОПособияхПоНетрудоспособности.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.РеестрСведенийВФССОПособияхПоНетрудоспособности.ФормаДокументаСобытия");
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
			style: 'position:absolute;left:0px;top:575px;width:1000px;height:25px;',
			width: 1000,
			height: 25,
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