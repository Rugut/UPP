Ext.define('Обработки.ПомощникНастройкиОбменаДаннымиССайтом.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:740px;height:424px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Настройка обмена данными с WEB - сайтом',
	
	items:
	[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:183px;top:0px;width:557px;height:399px;',
			height: 399,width: 557,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Главная',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьВыборДействия',
			text: 'Настройка обмена данными с WEB сайтом',
			style: 'position:absolute;left:6px;top:6px;width:546px;height:39px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьВыборДействия1',
			text: 'Настройка обмена данными с WEB-сайтом',
			style: 'position:absolute;left:6px;top:6px;width:545px;height:39px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьТипНастройки2',
			text: 'Настройки выгрузки товаров на WEB - сайт',
			style: 'position:absolute;left:6px;top:6px;width:545px;height:39px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьТипНастройки3',
			text: 'Настройки обмена заказами с WEB - сайта',
			style: 'position:absolute;left:6px;top:6px;width:545px;height:39px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьТипНастройки4',
			text: 'Действия с поступившими с WEB-сайта документами',
			style: 'position:absolute;left:6px;top:6px;width:545px;height:39px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьТипНастройки5',
			text: 'Режим обмена данными с WEB - сайтом',
			style: 'position:absolute;left:6px;top:6px;width:545px;height:39px;text-align:center;',
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Создать новую настройку обмена с WEB-сайтом',
			style: 'position:absolute;left:6px;top:53px;width:272px;height:19px;',
		},
			]
		},
					]
				},
				{
					title:'Настройка обмена с WEB - сайтом',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьРасписаниеРегламентногоЗаданияНастройки',
			text: 'Расписание регламентного задания',
			style: 'position:absolute;left:112px;top:222px;width:440px;height:39px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Выгрузка в каталог',
			style: 'position:absolute;left:160px;top:145px;width:124px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:170px;width:545px;height:116px;',
			height: 116,width: 545,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница каталог',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'КаталогВыгрузки',
			width: 461,
			height: 20,
			style: 'position:absolute;left:84px;top:0px;width:461px;height:20px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКаталогНаДиске',
			text: 'Каталог:',
			style: 'position:absolute;left:0px;top:1px;width:46px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьАдресСайта',
			text: 'Адрес сайта:',
			style: 'position:absolute;left:0px;top:0px;width:79px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПароль',
			text: 'Пароль:',
			style: 'position:absolute;left:330px;top:26px;width:44px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИмяПользователя',
			text: 'Пользователь:',
			style: 'position:absolute;left:0px;top:26px;width:79px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИмяПользователяПрокси',
			text: 'Пользователь:',
			style: 'position:absolute;left:0px;top:97px;width:79px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьПортПрокси',
			text: 'Порт:',
			style: 'position:absolute;left:330px;top:74px;width:44px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьСерверПрокси',
			text: 'Сервер:',
			style: 'position:absolute;left:0px;top:74px;width:79px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьПарольПрокси',
			text: 'Пароль:',
			style: 'position:absolute;left:330px;top:97px;width:44px;height:19px;text-align:left;',
		},
					]
				},
				{
					title:'Страница сайт',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'HTTPВыгрузкаПароль',
			width: 167,
			height: 19,
			style: 'position:absolute;left:378px;top:26px;width:167px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'HTTPВыгрузкаИмяПользователя',
			width: 237,
			height: 19,
			style: 'position:absolute;left:84px;top:26px;width:237px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'HTTPОбменАдресСкрипта',
			width: 461,
			height: 20,
			style: 'position:absolute;left:84px;top:0px;width:461px;height:20px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Использовать прокси-сервер',
			style: 'position:absolute;left:0px;top:50px;width:172px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'HTTPОбменПроксиИмяПользователя',
			width: 237,
			height: 19,
			style: 'position:absolute;left:84px;top:97px;width:237px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'HTTPОбменПроксиПорт',
			style: 'position:absolute;left:378px;top:74px;width:167px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'HTTPОбменПроксиСервер',
			width: 237,
			height: 19,
			style: 'position:absolute;left:84px;top:74px;width:237px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'HTTPОбменПроксиПароль',
			width: 167,
			height: 19,
			style: 'position:absolute;left:378px;top:97px;width:167px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'Проверить',
			text: 'Проверить...',
			style: 'position:absolute;left:423px;top:50px;width:122px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьТипОбменаДанными',
			text: 'Укажите тип обмена данными:',
			style: 'position:absolute;left:6px;top:121px;width:162px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Выгрузка товаров',
			style: 'position:absolute;left:16px;top:74px;width:117px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Обмен заказами',
			style: 'position:absolute;left:16px;top:98px;width:117px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Укажите данные, которыми вы хотите организовать обмен:',
			style: 'position:absolute;left:6px;top:50px;width:311px;height:19px;',
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Выгрузка на сайт',
			style: 'position:absolute;left:16px;top:145px;width:112px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Изменить существующую настройку обмена с WEB-сайтом',
			style: 'position:absolute;left:6px;top:77px;width:326px;height:19px;',
		},
			]
		},
					]
				},
				{
					title:'Настройки товары',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьТипНастройки1',
			text: 'Периодический обмен данными',
			style: 'position:absolute;left:6px;top:6px;width:546px;height:39px;text-align:center;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Выгружать картинки',
			style: 'position:absolute;left:6px;top:50px;width:128px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтбор',
			text: 'Укажите отбор для выгрузки товаров на сайт:',
			style: 'position:absolute;left:6px;top:73px;width:245px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:125px;width:545px;height:268px;',
			height: 268,width: 545,
			columns:
			[
				{
					text:'',
					width:'22',
					dataIndex:'Использование',
					flex:1,
				},
				{
					text:'Поле',
					width:'100',
					dataIndex:'Имя',
					flex:1,
				},
				{
					text:'Тип сравнения',
					width:'60',
					dataIndex:'ВидСравнения',
					flex:1,
				},
				{
					text:'Значение',
					width:'100',
					dataIndex:'Значение',
					flex:1,
				},
				{
					text:'С',
					width:'100',
					dataIndex:'ЗначениеС',
					flex:1,
				},
				{
					text:'По',
					width:'100',
					dataIndex:'ЗначениеПо',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПомощникНастройкиОбменаДаннымиССайтом/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Использование',
					},
					{
						name:'Имя',
					},
					{
						name:'ВидСравнения',
					},
					{
						name:'Значение',
					},
					{
						name:'ЗначениеС',
					},
					{
						name:'ЗначениеПо',
					},
				]
			},
		},
					]
				},
				{
					title:'Настройки заказы',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьТипНастройки2',
			text: 'Настройка обмена данными успешно завершена',
			style: 'position:absolute;left:6px;top:6px;width:546px;height:39px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьСпособИдентификацииКонтрагентов',
			text: 'Способ идентификации контрагентов:',
			style: 'position:absolute;left:6px;top:50px;width:199px;height:19px;text-align:left;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:212px;top:50px;width:178px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:6px;top:95px;width:83px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьГруппаДляНовыхКонтрагентов',
			text: 'Группа для новых контрагентов:',
			style: 'position:absolute;left:6px;top:188px;width:171px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьГруппаДляНовойНоменклатуры',
			text: 'Группа для новой номенклатуры:',
			style: 'position:absolute;left:6px;top:212px;width:171px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьЕдиницаИзмеренияНовойНоменклатуры',
			text: 'Единица новой номенклатуры:',
			style: 'position:absolute;left:6px;top:236px;width:171px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:6px;top:119px;width:83px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодразделение',
			text: 'Подразделение:',
			style: 'position:absolute;left:6px;top:143px;width:83px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'Организация',
			width: 339,
			height: 19,
			style: 'position:absolute;left:212px;top:95px;width:339px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'Ответственный',
			width: 339,
			height: 19,
			style: 'position:absolute;left:212px;top:119px;width:339px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'Подразделение',
			width: 339,
			height: 19,
			style: 'position:absolute;left:212px;top:143px;width:339px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'ГруппаДляНовыхКонтрагентов',
			width: 339,
			height: 19,
			style: 'position:absolute;left:212px;top:188px;width:339px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'ГруппаДляНовойНоменклатуры',
			width: 339,
			height: 19,
			style: 'position:absolute;left:212px;top:212px;width:339px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'ЕдиницаИзмеренияНовойНоменклатуры',
			width: 339,
			height: 19,
			style: 'position:absolute;left:212px;top:236px;width:339px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Параметры для подстановки в заказы с WEB-сайта',
			style: 'position:absolute;left:6px;top:74px;width:545px;height:16px;',
		},
		{
			xtype: 'fieldset',
			title: 'Параметры для создания новых элементов',
			style: 'position:absolute;left:6px;top:167px;width:545px;height:16px;',
		},
					]
				},
				{
					title:'Действия с заказами',
					items:
					[
		{
			xtype: 'radio',
			boxLabel: 'По информации документа с сайта',
			style: 'position:absolute;left:16px;top:73px;width:199px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Устанавливать у документов текущую дату',
			style: 'position:absolute;left:16px;top:97px;width:246px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьУстановкаДаты',
			text: 'Установка даты:',
			style: 'position:absolute;left:6px;top:50px;width:91px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПроведениеДокумента',
			text: 'Проведение документа:',
			style: 'position:absolute;left:6px;top:120px;width:124px;height:19px;',
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Только записывать документы',
			style: 'position:absolute;left:16px;top:143px;width:181px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Записывать и проводить документы',
			style: 'position:absolute;left:16px;top:166px;width:207px;height:19px;',
		},
			]
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Проводить оперативно',
			style: 'position:absolute;left:38px;top:190px;width:159px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Проводить НЕ оперативно',
			style: 'position:absolute;left:40px;top:215px;width:157px;height:19px;',
		},
			]
		},
					]
				},
				{
					title:'Настройки типа выполнения обмена данными',
					items:
					[
		{
			xtype: 'radio',
			boxLabel: 'Полная выгрузка данных',
			style: 'position:absolute;left:16px;top:74px;width:150px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Выгружать только измененные объекты с момента последнего обмена',
			style: 'position:absolute;left:16px;top:98px;width:393px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРежимОбмена',
			text: 'Укажите режим обмена данными:',
			style: 'position:absolute;left:8px;top:50px;width:181px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьУзелОбменаЗаказами',
			text: 'Узел для обмена заказами:',
			style: 'position:absolute;left:6px;top:187px;width:147px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'УзелОбменаЗаказами',
			width: 271,
			height: 19,
			style: 'position:absolute;left:26px;top:211px;width:271px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПояснение',
			text: 'При первом обмене данными будут выгружены все объекты',
			style: 'position:absolute;left:26px;top:118px;width:316px;height:16px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:139px;width:545px;height:43px;',
			height: 43,width: 545,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Главная',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьУзелОбменаТоварами',
			text: 'Узел для обмена товарами:',
			style: 'position:absolute;left:0px;top:0px;width:147px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'УзелОбменаТоварами',
			width: 271,
			height: 19,
			style: 'position:absolute;left:20px;top:24px;width:271px;height:19px;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'Настройки автоматического обмена данными',
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Выполнять обмен данными периодически:',
			style: 'position:absolute;left:6px;top:55px;width:279px;height:19px;',
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Каждые 30 минут',
			style: 'position:absolute;left:95px;top:81px;width:110px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Каждый час',
			style: 'position:absolute;left:95px;top:104px;width:90px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Каждый два часа',
			style: 'position:absolute;left:95px;top:128px;width:110px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Каждые восемь часов',
			style: 'position:absolute;left:95px;top:151px;width:140px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Произвольная настройка периода:',
			style: 'position:absolute;left:95px;top:199px;width:197px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Каждый день',
			style: 'position:absolute;left:95px;top:175px;width:90px;height:19px;',
		},
			]
		},
					]
				},
				{
					title:'Итоговая страница завершения обмена',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьСозданнаяНастройкаCOM',
			text: 'Настройка для обмена данными:',
			style: 'position:absolute;left:6px;top:50px;width:173px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'СозданнаяНастройкаОбмена',
			width: 385,
			height: 19,
			style: 'position:absolute;left:39px;top:73px;width:385px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'Выполнить',
			text: 'Выполнить обмен',
			style: 'position:absolute;left:430px;top:73px;width:122px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:0px;width:181px;height:399px;',
			height: 399,width: 181,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница настройки',
				},
			]
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:399px;width:740px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Назад',
				},
				'-',
				{
					text:'Далее',
				},
			]
		},
	]
});