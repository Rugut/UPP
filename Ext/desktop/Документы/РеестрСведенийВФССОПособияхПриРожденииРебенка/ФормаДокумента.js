Ext.require(['Данные.Документы.РеестрСведенийВФССОПособияхПриРожденииРебенка'], function () 
{
	Ext.define('Документы.РеестрСведенийВФССОПособияхПриРожденииРебенка.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:900px;height:576px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Реестр сведений в ФСС о пособиях при рождении ребенка',
	
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
			style: 'position:absolute;left:327px;top:33px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Номер',
			width: 80,
			height: 19,
			style: 'position:absolute;left:424px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от',
			style: 'position:absolute;left:512px;top:33px;width:26px;height:19px;text-align:left;',
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
			style: 'position:absolute;left:544px;top:33px;width:120px;height:19px;',
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
					Ext.require(['Документы.РеестрСведенийВФССОПособияхПриРожденииРебенка.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.РеестрСведенийВФССОПособияхПриРожденииРебенка.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.РеестрСведенийВФССОПособияхПриРожденииРебенка.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.РеестрСведенийВФССОПособияхПриРожденииРебенка.ФормаДокументаСобытия");
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
					Ext.require(['Документы.РеестрСведенийВФССОПособияхПриРожденииРебенка.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.РеестрСведенийВФССОПособияхПриРожденииРебенка.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.РеестрСведенийВФССОПособияхПриРожденииРебенка.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.РеестрСведенийВФССОПособияхПриРожденииРебенка.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:524px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			width: 796,
			height: 19,
			style: 'position:absolute;left:96px;top:524px;width:796px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:900px;height:25px;',
			width: 900,
			height: 25,
			items:
			[
			]
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:81px;width:884px;height:437px;',
			height: 437,width: 884,
			items:
			[
				{
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:870px;height:24px;',
			width: 870,
			height: 24,
			items:
			[
				{
					text:'Заполнить детьми',
					tooltip:'Заполнить список детьми рожденными за последний год',
				},
			]
		},
		{
			id: 'РаботникиОрганизации',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:35px;width:214px;height:376px;',
			height: 376,width: 214,
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
					width:'108',
					dataIndex:'Сотрудник',
					flex:1,
				},
				{
					text:'Ребенок (ФИО)',
					width:'108',
					dataIndex:'Ребенок',
					flex:1,
				},
				{
					text:'Фамилия',
					width:'35',
					dataIndex:'ФамилияРебенка',
					flex:1,
				},
				{
					text:'Имя',
					width:'35',
					dataIndex:'ИмяРебенка',
					flex:1,
				},
				{
					text:'Отчество ребенка',
					width:'35',
					dataIndex:'ОтчествоРебенка',
					flex:1,
				},
				{
					text:'Статус',
					width:'73',
					dataIndex:'Статус',
					flex:1,
				},
				{
					text:'Д. рождения',
					width:'73',
					dataIndex:'ДатаРождения',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/РеестрСведенийВФССОПособияхПриРожденииРебенка/ВыбратьПоСсылке/100', timeout: 200},
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
						name:'Ребенок',
					},
					{
						name:'ФамилияРебенка',
					},
					{
						name:'ИмяРебенка',
					},
					{
						name:'ОтчествоРебенка',
					},
					{
						name:'Статус',
					},
					{
						name:'ДатаРождения',
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
						Ext.require(['Справочники.РеестрСведенийВФССОПособияхПриРожденииРебенка.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.РеестрСведенийВФССОПособияхПриРожденииРебенка.ФормаДокументаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:225px;top:35px;width:651px;height:376px;',
			height: 376,width: 651,
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
			width: 160,
			height: 19,
			style: 'position:absolute;left:65px;top:6px;width:160px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Имя',
			width: 160,
			height: 19,
			style: 'position:absolute;left:261px;top:6px;width:160px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Отчество',
			width: 160,
			height: 19,
			style: 'position:absolute;left:483px;top:6px;width:160px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПаспортныеДанные',
			text: 'Паспортные данные',
			style: 'position:absolute;left:6px;top:106px;width:184px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВидДокументаУдостоверяющегоЛичность',
			text: 'Вид документа:',
			style: 'position:absolute;left:6px;top:130px;width:85px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'ВидДокументаУдостоверяющегоЛичность.Представление',
			width: 273,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:96px;top:130px;width:273px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.РеестрСведенийВФССОПособияхПриРожденииРебенка.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.РеестрСведенийВФССОПособияхПриРожденииРебенка.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.РеестрСведенийВФССОПособияхПриРожденииРебенка.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.РеестрСведенийВФССОПособияхПриРожденииРебенка.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьСерияДокументаУдостоверяющегоЛичность',
			text: 'Серия:',
			style: 'position:absolute;left:372px;top:130px;width:39px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'СерияДокументаУдостоверяющегоЛичность',
			width: 88,
			height: 19,
			style: 'position:absolute;left:416px;top:130px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомерДокументаУдостоверяющегоЛичность',
			text: 'Номер:',
			style: 'position:absolute;left:509px;top:130px;width:40px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НомерДокументаУдостоверяющегоЛичность',
			width: 90,
			height: 19,
			style: 'position:absolute;left:553px;top:130px;width:90px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаВыдачиДокументаУдостоверяющегоЛичность',
			text: 'Выдан:',
			style: 'position:absolute;left:6px;top:154px;width:40px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаВыдачиДокументаУдостоверяющегоЛичность',
			width: 88,
			height: 19,
			style: 'position:absolute;left:50px;top:154px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСрокДействияДокументаУдостоверяющегоЛичность',
			text: 'Действует до:',
			style: 'position:absolute;left:473px;top:154px;width:76px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'СрокДействияДокументаУдостоверяющегоЛичность',
			width: 88,
			height: 19,
			style: 'position:absolute;left:555px;top:154px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьАдресРегистрации',
			text: 'Адрес по регистрации:',
			style: 'position:absolute;left:6px;top:178px;width:139px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'АдресРегистрацииВФорме',
			width: 342,
			height: 19,
			style: 'position:absolute;left:150px;top:178px;width:342px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПособиеВыплатить',
			text: 'Пособие выплатить',
			style: 'position:absolute;left:6px;top:232px;width:124px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Банк.Представление',
			width: 255,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:194px;top:256px;width:255px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.РеестрСведенийВФССОПособияхПриРожденииРебенка.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.РеестрСведенийВФССОПособияхПриРожденииРебенка.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.РеестрСведенийВФССОПособияхПриРожденииРебенка.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.РеестрСведенийВФССОПособияхПриРожденииРебенка.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьНомерЛицевогоСчета',
			text: '№ счета:',
			style: 'position:absolute;left:455px;top:256px;width:49px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НомерЛицевогоСчета',
			width: 136,
			height: 19,
			style: 'position:absolute;left:507px;top:256px;width:136px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименованиеБанка',
			text: 'Наименование банка:',
			style: 'position:absolute;left:6px;top:280px;width:114px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НаименованиеБанка',
			width: 187,
			height: 19,
			style: 'position:absolute;left:124px;top:280px;width:187px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьБИК',
			text: 'БИК:',
			style: 'position:absolute;left:522px;top:280px;width:29px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'БИК',
			width: 88,
			height: 19,
			style: 'position:absolute;left:555px;top:280px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'АдресПочтовыйВФорме',
			width: 227,
			height: 19,
			style: 'position:absolute;left:194px;top:303px;width:227px;height:19px;',
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
			width: 160,
			height: 19,
			style: 'position:absolute;left:65px;top:30px;width:160px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИННСотрудника',
			text: 'ИНН:',
			style: 'position:absolute;left:6px;top:54px;width:55px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ИННСотрудника',
			width: 160,
			height: 19,
			style: 'position:absolute;left:65px;top:54px;width:160px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИмя',
			text: 'Имя:',
			style: 'position:absolute;left:229px;top:6px;width:28px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтчество',
			text: 'Отчество:',
			style: 'position:absolute;left:426px;top:6px;width:53px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаРождения',
			text: 'Дата рождения:',
			style: 'position:absolute;left:229px;top:30px;width:86px;height:19px;text-align:left;',
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
			style: 'position:absolute;left:323px;top:30px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПол',
			text: 'Пол:',
			style: 'position:absolute;left:426px;top:30px;width:31px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'Пол.Представление',
			width: 160,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:483px;top:30px;width:160px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.РеестрСведенийВФССОПособияхПриРожденииРебенка.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.РеестрСведенийВФССОПособияхПриРожденииРебенка.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.РеестрСведенийВФССОПособияхПриРожденииРебенка.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.РеестрСведенийВФССОПособияхПриРожденииРебенка.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'button',
			name: 'ОбновитьДанныеСотрудника',
			text: 'Обновить',
			style: 'position:absolute;left:6px;top:328px;width:82px;height:21px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВидЗанятости',
			text: 'Вид занятости:',
			style: 'position:absolute;left:6px;top:78px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтатусНалогоплательщика',
			text: 'Статус налогоплательщика:',
			style: 'position:absolute;left:229px;top:54px;width:143px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'СтатусНалогоплательщика.Представление',
			width: 267,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:376px;top:54px;width:267px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.РеестрСведенийВФССОПособияхПриРожденииРебенка.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.РеестрСведенийВФССОПособияхПриРожденииРебенка.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.РеестрСведенийВФССОПособияхПриРожденииРебенка.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.РеестрСведенийВФССОПособияхПриРожденииРебенка.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьКемВыданДокумент',
			text: 'Кем выдан:',
			style: 'position:absolute;left:144px;top:154px;width:60px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'КемВыданДокумент',
			width: 257,
			height: 19,
			style: 'position:absolute;left:208px;top:154px;width:257px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКоррСчет',
			text: 'Корр. счет:',
			style: 'position:absolute;left:316px;top:280px;width:58px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'КоррСчет',
			width: 136,
			height: 19,
			style: 'position:absolute;left:376px;top:280px;width:136px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВидДокумента1',
			text: 'Для иностранных граждан:',
			style: 'position:absolute;left:6px;top:202px;width:139px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ОписаниеДокументаНаПроживание',
			width: 493,
			height: 19,
			style: 'position:absolute;left:150px;top:202px;width:493px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьТелефон1',
			text: 'Телефон:',
			style: 'position:absolute;left:497px;top:178px;width:52px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ТелефонПолучателя',
			width: 88,
			height: 19,
			style: 'position:absolute;left:555px;top:178px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьАдресПочтовыйКодПоКЛАДР',
			text: 'Код по КЛАДР:',
			style: 'position:absolute;left:424px;top:303px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'АдресПочтовыйКодПоКЛАДР',
			width: 136,
			height: 19,
			style: 'position:absolute;left:507px;top:303px;width:136px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'РайонныйКоэффициент',
			style: 'position:absolute;left:472px;top:78px;width:40px;height:19px;',
			width: 40,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'НадписьРК',
			text: 'Районный коэф-т:',
			style: 'position:absolute;left:375px;top:78px;width:94px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Район',
			width: 90,
			height: 19,
			style: 'position:absolute;left:553px;top:78px;width:90px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись43',
			text: 'Район:',
			style: 'position:absolute;left:515px;top:78px;width:37px;height:19px;',
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Основное место работы',
			style: 'position:absolute;left:96px;top:78px;width:142px;height:19px;',
		},
			]
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Совместительство',
			style: 'position:absolute;left:245px;top:78px;width:116px;height:19px;',
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
			style: 'position:absolute;left:6px;top:256px;width:184px;height:19px;',
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
			style: 'position:absolute;left:6px;top:303px;width:184px;height:19px;',
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
			name: 'НадписьДатСправки',
			text: 'Справка о рождении, ',
			style: 'position:absolute;left:6px;top:25px;width:111px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаСправки',
			width: 80,
			height: 19,
			style: 'position:absolute;left:381px;top:25px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаСвидетельстваОРождении',
			text: 'Или свидетельство о рождении, выданное консульским учр-м РФ, от:',
			style: 'position:absolute;left:14px;top:49px;width:365px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаСвидетельстваОРождении',
			width: 80,
			height: 19,
			style: 'position:absolute;left:381px;top:49px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаИногоПодтвержденияРождения',
			text: 'Или документ иностранного государства, подтв. рождение ребенка, от:',
			style: 'position:absolute;left:14px;top:73px;width:367px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаИногоПодтвержденияРождения',
			width: 80,
			height: 19,
			style: 'position:absolute;left:381px;top:73px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаСправкиОтДругогоРодителя',
			text: 'Справка от другого родителя о неполучении пособия от:',
			style: 'position:absolute;left:6px;top:116px;width:345px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаСправкиОтДругогоРодителя',
			width: 80,
			height: 19,
			style: 'position:absolute;left:381px;top:116px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаРешенияОбОпеке',
			text: 'Решение об установлении опеки от:',
			style: 'position:absolute;left:6px;top:140px;width:345px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаРешенияОбОпеке',
			width: 80,
			height: 19,
			style: 'position:absolute;left:381px;top:140px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаРешенияОбУсыновлении',
			text: 'Или решение об усыновлении от:',
			style: 'position:absolute;left:14px;top:164px;width:345px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаРешенияОбУсыновлении',
			width: 80,
			height: 19,
			style: 'position:absolute;left:381px;top:164px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаДоговораОПередачеНаВоспитание',
			text: 'Или договор о передаче ребенка на воспитание в приемную семью от:',
			style: 'position:absolute;left:14px;top:188px;width:365px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаДоговораОПередачеНаВоспитание',
			width: 80,
			height: 19,
			style: 'position:absolute;left:381px;top:188px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДокументыОснования',
			text: 'Наименование и реквизиты представленных документов:',
			style: 'position:absolute;left:6px;top:256px;width:316px;height:19px;text-align:left;',
		},
		{
			xtype: 'textarea',
			hideLabel: true,
			disabled: false,
			name: 'ДокументыОснования',
			style: 'position:absolute;left:6px;top:277px;width:316px;height:51px;',
		},
		{
			xtype: 'textarea',
			hideLabel: true,
			disabled: false,
			name: 'ИнаяПолезнаяИнформация',
			style: 'position:absolute;left:327px;top:277px;width:316px;height:73px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСведенияОРождении',
			text: 'Сведения о документах, подтверждающих рождение ребенка',
			style: 'position:absolute;left:6px;top:6px;width:437px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПрочиеДокументы',
			text: 'Прочие справки и документы',
			style: 'position:absolute;left:6px;top:97px;width:345px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Прочее',
			text: 'Общие сведения о прилагаемых документах',
			style: 'position:absolute;left:6px;top:212px;width:345px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКоличествоСтраниц',
			text: 'Количество страниц:',
			style: 'position:absolute;left:6px;top:231px;width:112px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'КоличествоСтраниц',
			style: 'position:absolute;left:120px;top:231px;width:80px;height:19px;',
			width: 80,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'НадписьНомерСправки',
			text: '№',
			style: 'position:absolute;left:465px;top:25px;width:13px;height:19px;text-align:right;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НомерСправки',
			width: 159,
			height: 19,
			style: 'position:absolute;left:484px;top:25px;width:159px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомерСвидетельстваОРождении',
			text: '№',
			style: 'position:absolute;left:561px;top:49px;width:13px;height:19px;text-align:right;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НомерСвидетельстваОРождении',
			width: 68,
			height: 19,
			style: 'position:absolute;left:575px;top:49px;width:68px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомерИногоПодтвержденияРождения',
			text: '№',
			style: 'position:absolute;left:561px;top:73px;width:13px;height:19px;text-align:right;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НомерИногоПодтвержденияРождения',
			width: 68,
			height: 19,
			style: 'position:absolute;left:575px;top:73px;width:68px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомерСправкиОтДругогоРодителя',
			text: '№',
			style: 'position:absolute;left:465px;top:116px;width:13px;height:19px;text-align:right;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НомерСправкиОтДругогоРодителя',
			width: 159,
			height: 19,
			style: 'position:absolute;left:484px;top:116px;width:159px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомерРешенияОбОпеке',
			text: '№',
			style: 'position:absolute;left:465px;top:140px;width:13px;height:19px;text-align:right;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НомерРешенияОбОпеке',
			width: 159,
			height: 19,
			style: 'position:absolute;left:484px;top:140px;width:159px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомерРешенияОбУсыновлении',
			text: '№',
			style: 'position:absolute;left:465px;top:164px;width:13px;height:19px;text-align:right;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НомерРешенияОбУсыновлении',
			width: 159,
			height: 19,
			style: 'position:absolute;left:484px;top:164px;width:159px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомерДоговораОПередачеНаВоспитание',
			text: '№',
			style: 'position:absolute;left:465px;top:188px;width:13px;height:19px;text-align:right;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НомерДоговораОПередачеНаВоспитание',
			width: 159,
			height: 19,
			style: 'position:absolute;left:484px;top:188px;width:159px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаЗаполнитьСписокПредставленныхДокументов',
			text: 'Заполнить по введенным сведениям о документах',
			style: 'position:absolute;left:6px;top:331px;width:316px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаПредставленияПакетаДокументов',
			text: 'Дата представления пакета документов:',
			style: 'position:absolute;left:215px;top:231px;width:213px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаПредставленияПакетаДокументов',
			width: 80,
			height: 19,
			style: 'position:absolute;left:432px;top:231px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСерияСвидетельстваОРождении',
			text: 'Серия:',
			style: 'position:absolute;left:465px;top:49px;width:34px;height:19px;text-align:right;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'СерияСвидетельстваОРождении',
			width: 60,
			height: 19,
			style: 'position:absolute;left:499px;top:49px;width:60px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСерияИногоПодтвержденияРождения',
			text: 'Серия:',
			style: 'position:absolute;left:465px;top:73px;width:34px;height:19px;text-align:right;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'СерияИногоПодтвержденияРождения',
			width: 60,
			height: 19,
			style: 'position:absolute;left:499px;top:73px;width:60px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатСправки1',
			text: ', от:',
			style: 'position:absolute;left:205px;top:25px;width:23px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'ВидСправкиОРожденииРебенка.Представление',
			width: 84,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:118px;top:25px;width:84px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.РеестрСведенийВФССОПособияхПриРожденииРебенка.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.РеестрСведенийВФССОПособияхПриРожденииРебенка.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.РеестрСведенийВФССОПособияхПриРожденииРебенка.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.РеестрСведенийВФССОПособияхПриРожденииРебенка.ФормаДокументаСобытия");
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
			xtype: 'label',
			name: 'НадписьРуководитель',
			text: 'Руководитель:',
			style: 'position:absolute;left:14px;top:140px;width:106px;height:19px;text-align:left;',
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
			style: 'position:absolute;left:121px;top:140px;width:320px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.РеестрСведенийВФССОПособияхПриРожденииРебенка.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.РеестрСведенийВФССОПособияхПриРожденииРебенка.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.РеестрСведенийВФССОПособияхПриРожденииРебенка.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.РеестрСведенийВФССОПособияхПриРожденииРебенка.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьДолжностьРуководителя',
			text: 'Должность:',
			style: 'position:absolute;left:445px;top:140px;width:106px;height:19px;text-align:left;',
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
			style: 'position:absolute;left:555px;top:140px;width:320px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.РеестрСведенийВФССОПособияхПриРожденииРебенка.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.РеестрСведенийВФССОПособияхПриРожденииРебенка.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.РеестрСведенийВФССОПособияхПриРожденииРебенка.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.РеестрСведенийВФССОПособияхПриРожденииРебенка.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьРегистрационныйНомерФСС',
			text: 'Регистрационный номер:',
			style: 'position:absolute;left:14px;top:96px;width:134px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'РегистрационныйНомерФСС',
			width: 110,
			height: 19,
			style: 'position:absolute;left:146px;top:96px;width:110px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДополнительныйКодФСС',
			text: 'Дополнительный код:',
			style: 'position:absolute;left:261px;top:96px;width:116px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ДополнительныйКодФСС',
			width: 110,
			height: 19,
			style: 'position:absolute;left:379px;top:96px;width:110px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКодПодчиненностиФСС',
			text: 'Код подчиненности:',
			style: 'position:absolute;left:494px;top:96px;width:102px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'КодПодчиненностиФСС',
			width: 60,
			height: 19,
			style: 'position:absolute;left:599px;top:96px;width:60px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименованиеТерриториальногоОрганаФСС',
			text: 'Наименование территориального органа ФСС:',
			style: 'position:absolute;left:15px;top:70px;width:241px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НаименованиеТерриториальногоОрганаФСС',
			width: 617,
			height: 19,
			style: 'position:absolute;left:258px;top:70px;width:617px;height:19px;',
		},
		{
			xtype: 'label',
			text: 'Регистрация в ФСС',
			style: 'position:absolute;left:6px;top:49px;width:869px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			text: 'Подписи',
			style: 'position:absolute;left:8px;top:119px;width:867px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'button',
			name: 'ОбновитьДанныеСтрахователя',
			text: 'Обновить',
			style: 'position:absolute;left:6px;top:390px;width:82px;height:21px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИНН',
			text: 'ИНН:',
			style: 'position:absolute;left:14px;top:26px;width:44px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ИНН',
			width: 120,
			height: 19,
			style: 'position:absolute;left:58px;top:26px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКПП',
			text: 'КПП:',
			style: 'position:absolute;left:182px;top:26px;width:32px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'КПП',
			width: 120,
			height: 19,
			style: 'position:absolute;left:215px;top:26px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			text: 'Основные',
			style: 'position:absolute;left:6px;top:6px;width:869px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ОГРН',
			width: 88,
			height: 19,
			style: 'position:absolute;left:384px;top:26px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОГРН',
			text: 'ОГРН:',
			style: 'position:absolute;left:344px;top:26px;width:35px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьГлавныйБухгалтер',
			text: 'Главный бухгалтер:',
			style: 'position:absolute;left:14px;top:166px;width:106px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'ГлавныйБухгалтер.Представление',
			width: 320,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:121px;top:166px;width:320px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.РеестрСведенийВФССОПособияхПриРожденииРебенка.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.РеестрСведенийВФССОПособияхПриРожденииРебенка.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.РеестрСведенийВФССОПособияхПриРожденииРебенка.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.РеестрСведенийВФССОПособияхПриРожденииРебенка.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Выводить подписи в реестр пособий',
			style: 'position:absolute;left:14px;top:198px;width:327px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьРеестрСоставил',
			text: 'Реестр составил:',
			style: 'position:absolute;left:327px;top:57px;width:94px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'РеестрСоставил.Представление',
			width: 172,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:424px;top:57px;width:172px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.РеестрСведенийВФССОПособияхПриРожденииРебенка.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.РеестрСведенийВФССОПособияхПриРожденииРебенка.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.РеестрСведенийВФССОПособияхПриРожденииРебенка.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.РеестрСведенийВФССОПособияхПриРожденииРебенка.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьТелефон',
			text: 'Телефон:',
			style: 'position:absolute;left:603px;top:57px;width:52px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Телефон',
			width: 84,
			height: 19,
			style: 'position:absolute;left:657px;top:57px;width:84px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьАдресЭлектроннойПочтыСоставителя',
			text: 'Адрес э.п.:',
			style: 'position:absolute;left:744px;top:57px;width:59px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'АдресЭлектроннойПочтыСоставителя',
			width: 84,
			height: 19,
			style: 'position:absolute;left:808px;top:57px;width:84px;height:19px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:551px;width:900px;height:25px;',
			width: 900,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Показать файл',
					tooltip:'Сформировать файл',
				},
				'-',
				{
					text:'Записать файл на диск',
					tooltip:'Записать файл на диск',
				},
				'-',
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