Ext.require(['Данные.Справочники.УчетныеЗаписиЭлектроннойПочты'], function () 
{
	Ext.define('Справочники.УчетныеЗаписиЭлектроннойПочты.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:582px;height:450px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Настройки учетной записи',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'НадписьКод',
			text: 'Код:',
			style: 'position:absolute;left:476px;top:33px;width:37px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Код',
			width: 57,
			height: 19,
			style: 'position:absolute;left:517px;top:33px;width:57px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Представление:',
			style: 'position:absolute;left:8px;top:57px;width:85px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Наименование',
			width: 474,
			height: 19,
			style: 'position:absolute;left:100px;top:57px;width:474px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись12',
			text: 'E-mail:',
			style: 'position:absolute;left:8px;top:33px;width:87px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'АдресЭлектроннойПочты',
			width: 368,
			height: 19,
			style: 'position:absolute;left:100px;top:33px;width:368px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:582px;height:25px;',
			width: 582,
			height: 25,
			items:
			[
			]
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:105px;width:566px;height:312px;',
			height: 312,width: 566,
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'SMTP-сервер:',
			style: 'position:absolute;left:6px;top:26px;width:87px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'SMTPСервер',
			width: 350,
			height: 19,
			style: 'position:absolute;left:98px;top:26px;width:350px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'POP3-сервер:',
			style: 'position:absolute;left:6px;top:120px;width:87px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'POP3Сервер',
			width: 350,
			height: 19,
			style: 'position:absolute;left:98px;top:120px;width:350px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'Порт:',
			style: 'position:absolute;left:455px;top:26px;width:33px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПортSMTP',
			style: 'position:absolute;left:492px;top:26px;width:66px;height:19px;',
			width: 66,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'Надпись7',
			text: 'Порт:',
			style: 'position:absolute;left:455px;top:120px;width:33px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПортPOP3',
			style: 'position:absolute;left:492px;top:120px;width:66px;height:19px;',
			width: 66,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'Надпись8',
			text: 'Пользователь:',
			style: 'position:absolute;left:6px;top:144px;width:87px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Логин',
			width: 198,
			height: 19,
			style: 'position:absolute;left:98px;top:144px;width:198px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись9',
			text: 'Пароль:',
			style: 'position:absolute;left:302px;top:144px;width:47px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Пароль',
			width: 204,
			height: 19,
			style: 'position:absolute;left:354px;top:144px;width:204px;height:19px;',
		},
		{
			xtype: 'label',
			text: 'Отправка почты',
			style: 'position:absolute;left:6px;top:6px;width:552px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			text: 'Получение почты',
			style: 'position:absolute;left:6px;top:99px;width:552px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Требуется SMTP аутентификация',
			style: 'position:absolute;left:6px;top:50px;width:195px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись19',
			text: 'Пользователь:',
			style: 'position:absolute;left:15px;top:70px;width:79px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ЛогинSMTP',
			width: 198,
			height: 19,
			style: 'position:absolute;left:98px;top:70px;width:198px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись20',
			text: 'Пароль:',
			style: 'position:absolute;left:302px;top:70px;width:47px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПарольSMTP',
			width: 204,
			height: 19,
			style: 'position:absolute;left:354px;top:70px;width:204px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись10',
			text: 'Время ожидания сервера:',
			style: 'position:absolute;left:6px;top:178px;width:146px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ВремяОжиданияСервера',
			style: 'position:absolute;left:157px;top:178px;width:44px;height:19px;',
			width: 44,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'Надпись13',
			text: 'сек',
			style: 'position:absolute;left:206px;top:178px;width:20px;height:19px;text-align:left;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПроверитьНастройкиУчетнойЗаписи',
			text: 'Проверить настройки учетной записи',
			style: 'position:absolute;left:6px;top:208px;width:220px;height:20px;',
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Оставлять копии писем на сервере',
			style: 'position:absolute;left:6px;top:6px;width:203px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Удалять письма с сервера через',
			style: 'position:absolute;left:18px;top:25px;width:191px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДней',
			text: 'дней',
			style: 'position:absolute;left:262px;top:25px;width:28px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'КоличествоДнейУдаленияПисемССервера',
			style: 'position:absolute;left:212px;top:25px;width:44px;height:19px;',
			width: 44,
			height: 19,
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Авто получение/отправка писем',
			style: 'position:absolute;left:6px;top:52px;width:188px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИнтервалАвтоПолученияОтправкиСообщенийДо',
			text: 'каждые',
			style: 'position:absolute;left:18px;top:71px;width:42px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ИнтервалАвтоПолученияОтправкиСообщений',
			style: 'position:absolute;left:63px;top:71px;width:44px;height:19px;',
			width: 44,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственныйЗаАвтоПолучениеОтправкуСообщений',
			text: 'Ответственный:',
			style: 'position:absolute;left:341px;top:71px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'ОтветственныйЗаАвтоПолучениеОтправкуСообщений.Представление',
			width: 129,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:429px;top:71px;width:129px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.УчетныеЗаписиЭлектроннойПочты.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.УчетныеЗаписиЭлектроннойПочты.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.УчетныеЗаписиЭлектроннойПочты.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.УчетныеЗаписиЭлектроннойПочты.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьИнтервалАвтоПолученияОтправкиСообщенийПосле',
			text: 'минут',
			style: 'position:absolute;left:110px;top:71px;width:32px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьДействиеАвтополученияОтправкиСообщений',
			text: 'Действие:',
			style: 'position:absolute;left:154px;top:71px;width:55px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'ДействиеАвтополученияОтправкиСообщений.Представление',
			width: 114,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:212px;top:71px;width:114px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.УчетныеЗаписиЭлектроннойПочты.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.УчетныеЗаписиЭлектроннойПочты.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.УчетныеЗаписиЭлектроннойПочты.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.УчетныеЗаписиЭлектроннойПочты.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'checkbox',
			boxLabel: 'при открытии письма или в течение',
			style: 'position:absolute;left:6px;top:145px;width:203px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ИнтервалАвтоматическойУстановкиОтметкиРассмотрено',
			style: 'position:absolute;left:212px;top:145px;width:44px;height:19px;',
			width: 44,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'НадписьИнтервалАвтоматическойУстановкиОтметкиРассмотрено',
			text: 'сек. после активизации строки',
			style: 'position:absolute;left:260px;top:145px;width:169px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Автосохранение писем',
			style: 'position:absolute;left:6px;top:95px;width:141px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ИнтервалАвтосохраненияПисем',
			style: 'position:absolute;left:212px;top:95px;width:44px;height:19px;',
			width: 44,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'ИнтервалАвтосохраненияПисем_',
			text: 'сек.',
			style: 'position:absolute;left:260px;top:95px;width:26px;height:19px;',
		},
		{
			xtype: 'label',
			name: '_ИнтервалАвтосохраненияПисем',
			text: 'каждые',
			style: 'position:absolute;left:162px;top:95px;width:47px;height:19px;',
		},
		{
			xtype: 'label',
			text: 'Помечать письмо как "Рассмотрено":',
			style: 'position:absolute;left:6px;top:124px;width:552px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'checkbox',
			boxLabel: 'исходное письмо при ответе',
			style: 'position:absolute;left:6px;top:168px;width:169px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'исходное письмо при получении ответа (необходима классификация по предметам)',
			style: 'position:absolute;left:6px;top:188px;width:449px;height:15px;',
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			text: 'Классификация писем по предметам',
			style: 'position:absolute;left:6px;top:6px;width:552px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Использовать классификацию писем по предметам',
			style: 'position:absolute;left:6px;top:26px;width:288px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Заполнять пустой предмет для новых писем из темы письма',
			style: 'position:absolute;left:18px;top:46px;width:336px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Для входящих "ответов" и "переадресаций" заполнять предмет из писем-оснований',
			style: 'position:absolute;left:18px;top:66px;width:458px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Для входящих "ответов" и "переадресаций" искать и заполнять основание',
			style: 'position:absolute;left:18px;top:86px;width:408px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Для входящих "ответов" и "переадресаций" заполнять группу писем из письма-основания',
			style: 'position:absolute;left:18px;top:106px;width:488px;height:15px;',
		},
		{
			xtype: 'label',
			text: 'Классификация писем по объектам',
			style: 'position:absolute;left:6px;top:130px;width:552px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Заполнять объекты из полей "Отправитель", "Кому" и "Копии"  для первого письма',
			style: 'position:absolute;left:18px;top:151px;width:458px;height:15px;',
		},
					]
				},
				{
					items:
					[
		{
			id: 'ДоступКУчетнойЗаписи',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:552px;height:256px;',
			height: 256,width: 552,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Пользователь',
					width:'147',
					dataIndex:'Пользователь',
					flex:1,
				},
				{
					text:'Администрирование',
					width:'66',
					dataIndex:'Администрирование',
					flex:1,
				},
				{
					text:'Чтение',
					width:'66',
					dataIndex:'Чтение',
					flex:1,
				},
				{
					text:'Редактирование/Отправка',
					width:'66',
					dataIndex:'Запись',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.УчетныеЗаписиЭлектроннойПочты").data,
					fields: ['Ссылка','НомерСтроки','Пользователь','Администрирование','Чтение','Запись',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/УчетныеЗаписиЭлектроннойПочты/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'Пользователь',
					},
					{
						name:'Администрирование',
					},
					{
						name:'Чтение',
					},
					{
						name:'Запись',
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
						var грид = Ext.getCmp('ДоступКУчетнойЗаписи');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.УчетныеЗаписиЭлектроннойПочты.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.УчетныеЗаписиЭлектроннойПочты.ФормаЭлементаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:552px;height:24px;',
			width: 552,
			height: 24,
			items:
			[
			]
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Добавлять подпись к исходящим письмам',
			style: 'position:absolute;left:6px;top:6px;width:243px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Добавлять подпись к ответам и переадресациям',
			style: 'position:absolute;left:15px;top:26px;width:276px;height:15px;',
		},
					]
				},
				{
					items:
					[
		{
			id: 'ГруппыПисем',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:50px;width:552px;height:236px;',
			height: 236,width: 552,
			columns:
			[
				{
					text:'Наименование',
					width:'365',
					dataIndex:'Наименование',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.УчетныеЗаписиЭлектроннойПочты").data,
					fields: ['Ссылка','Наименование',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/УчетныеЗаписиЭлектроннойПочты/ВыбратьПоСсылке/100', timeout: 200},
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
						var грид = Ext.getCmp('ГруппыПисем');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.УчетныеЗаписиЭлектроннойПочты.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.УчетныеЗаписиЭлектроннойПочты.ФормаЭлементаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:26px;width:552px;height:24px;',
			width: 552,
			height: 24,
			items:
			[
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				'-',
				{
					text:'',
					tooltip:'',
				},
				{
					text:'',
					tooltip:'',
				},
					]
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
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Помещать новые письма с ответами и переадресациями в одну группу с исходными',
			style: 'position:absolute;left:6px;top:6px;width:455px;height:15px;',
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись14',
			text: 'Группа писем "Входящие":',
			style: 'position:absolute;left:6px;top:27px;width:146px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'ГруппаВходящие.Представление',
			width: 401,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:157px;top:27px;width:401px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.УчетныеЗаписиЭлектроннойПочты.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.УчетныеЗаписиЭлектроннойПочты.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.УчетныеЗаписиЭлектроннойПочты.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.УчетныеЗаписиЭлектроннойПочты.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'Надпись15',
			text: 'Группа писем "Исходящие":',
			style: 'position:absolute;left:6px;top:51px;width:146px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'ГруппаИсходящие.Представление',
			width: 401,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:157px;top:51px;width:401px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.УчетныеЗаписиЭлектроннойПочты.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.УчетныеЗаписиЭлектроннойПочты.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.УчетныеЗаписиЭлектроннойПочты.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.УчетныеЗаписиЭлектроннойПочты.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'Надпись17',
			text: 'Группа писем "Удаленные":',
			style: 'position:absolute;left:6px;top:75px;width:146px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'ГруппаУдаленные.Представление',
			width: 401,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:157px;top:75px;width:401px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.УчетныеЗаписиЭлектроннойПочты.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.УчетныеЗаписиЭлектроннойПочты.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.УчетныеЗаписиЭлектроннойПочты.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.УчетныеЗаписиЭлектроннойПочты.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:157px;top:175px;width:401px;height:19px;',
			width: 401,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'Надпись18',
			text: 'Формат текста письма:',
			style: 'position:absolute;left:6px;top:175px;width:146px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			text: 'Значения по умолчанию',
			style: 'position:absolute;left:6px;top:6px;width:552px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Формат текста письма для ответов и переадресаций брать из исходного',
			style: 'position:absolute;left:24px;top:199px;width:396px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись21',
			text: 'Группа писем "Черновики":',
			style: 'position:absolute;left:6px;top:99px;width:146px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'ГруппаЧерновики.Представление',
			width: 401,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:157px;top:99px;width:401px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.УчетныеЗаписиЭлектроннойПочты.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.УчетныеЗаписиЭлектроннойПочты.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.УчетныеЗаписиЭлектроннойПочты.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.УчетныеЗаписиЭлектроннойПочты.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьПомеченныеНаУдаление',
			text: 'Удалить помеченные на удаление письма',
			style: 'position:absolute;left:6px;top:224px;width:246px;height:20px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:157px;top:128px;width:401px;height:19px;',
			width: 401,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'Надпись22',
			text: 'Кодировка (для исходящих):',
			style: 'position:absolute;left:6px;top:128px;width:146px;height:19px;text-align:left;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Кодировку письма для ответов брать из исходного',
			style: 'position:absolute;left:24px;top:152px;width:285px;height:15px;',
		},
					]
				},
				{
					items:
					[
		{
			id: 'ФильтрыПисем',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:552px;height:256px;',
			height: 256,width: 552,
			columns:
			[
				{
					text:'',
					width:'24',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'',
					width:'18',
					dataIndex:'Использование',
					flex:1,
				},
				{
					text:'Код',
					width:'72',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Наименование',
					width:'312',
					dataIndex:'Наименование',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.УчетныеЗаписиЭлектроннойПочты").data,
					fields: ['Ссылка','Картинка','Использование','Код','Наименование',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/УчетныеЗаписиЭлектроннойПочты/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Картинка',
					},
					{
						name:'Использование',
					},
					{
						name:'Код',
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
						var грид = Ext.getCmp('ФильтрыПисем');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.УчетныеЗаписиЭлектроннойПочты.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.УчетныеЗаписиЭлектроннойПочты.ФормаЭлементаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:552px;height:24px;',
			width: 552,
			height: 24,
			items:
			[
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				'-',
				{
					text:'',
					tooltip:'',
				},
				{
					text:'',
					tooltip:'',
				},
					]
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
			]
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Использовать для отправки',
			style: 'position:absolute;left:6px;top:6px;width:196px;height:20px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Использовать для получения',
			style: 'position:absolute;left:6px;top:30px;width:196px;height:20px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьНазначениеУчетнойЗаписи',
			text: 'Назначение:',
			style: 'position:absolute;left:8px;top:81px;width:85px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'НазначениеУчетнойЗаписи.Представление',
			width: 474,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:100px;top:81px;width:474px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.УчетныеЗаписиЭлектроннойПочты.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.УчетныеЗаписиЭлектроннойПочты.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.УчетныеЗаписиЭлектроннойПочты.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.УчетныеЗаписиЭлектроннойПочты.ФормаЭлементаСобытия");
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
			style: 'position:absolute;left:0px;top:425px;width:582px;height:25px;',
			width: 582,
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
				},
				'-',
				{
					text:'Записать',
					tooltip:'Записать объект',
				},
				'-',
				{
					text:'Закрыть',
					tooltip:'Закрыть',
					handler: function () {this.up('window').close();},
				},
			]
		},
	]
	});
});