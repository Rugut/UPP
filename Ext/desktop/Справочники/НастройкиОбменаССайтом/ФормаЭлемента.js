Ext.define('Справочники.НастройкиОбменаССайтом.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:690px;height:579px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Настройки обмена с WEB-сайтом',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:690px;height:25px;',
			items:
			[
				'-',
				{
					text:'Монитор обменов',
				},
				{
					text:'Выполнить обмен',
				},
				{
					text:'Выполнить обмен',
				},
				'-',
				'-',
				{
					text:'Монитор обменов',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:554px;width:690px;height:25px;',
			items:
			[
				{
					text:'Записать',
				},
				'-',
				{
					text:'Закрыть',
				},
				'-',
				{
					text:'OK',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:190px;top:58px;width:492px;height:464px;',
			height: 464,width: 492,
			items:
			[
				{
					title:'Основные',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:79px;width:478px;height:116px;',
			height: 116,width: 478,
			items:
			[
				{
					title:'Страница каталог',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КаталогВыгрузки',
			style: 'position:absolute;left:84px;top:0px;width:394px;height:20px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКаталогНаДиске',
			text: 'Каталог:',
			style: 'position:absolute;left:0px;top:1px;width:46px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПортПрокси',
			text: 'Порт:',
			style: 'position:absolute;left:263px;top:74px;width:44px;height:19px;',
		},
					]
				},
				{
					title:'Страница сайт',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьАдресСайта',
			text: 'Адрес сайта:',
			style: 'position:absolute;left:0px;top:0px;width:79px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'HTTPВыгрузкаПароль',
			style: 'position:absolute;left:311px;top:26px;width:167px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПароль',
			text: 'Пароль:',
			style: 'position:absolute;left:263px;top:26px;width:44px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИмяПользователя',
			text: 'Пользователь:',
			style: 'position:absolute;left:0px;top:26px;width:79px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'HTTPВыгрузкаИмяПользователя',
			style: 'position:absolute;left:84px;top:26px;width:176px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'HTTPОбменАдресСкрипта',
			style: 'position:absolute;left:84px;top:0px;width:394px;height:20px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Использовать прокси-сервер',
			style: 'position:absolute;left:0px;top:50px;width:172px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИмяПользователяПрокси',
			text: 'Пользователь:',
			style: 'position:absolute;left:0px;top:97px;width:79px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'HTTPОбменПроксиИмяПользователя',
			style: 'position:absolute;left:84px;top:97px;width:176px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'HTTPОбменПроксиПорт',
			style: 'position:absolute;left:311px;top:74px;width:167px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСерверПрокси',
			text: 'Сервер:',
			style: 'position:absolute;left:0px;top:74px;width:79px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'HTTPОбменПроксиСервер',
			style: 'position:absolute;left:84px;top:74px;width:176px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПарольПрокси',
			text: 'Пароль:',
			style: 'position:absolute;left:263px;top:97px;width:44px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'HTTPОбменПроксиПароль',
			style: 'position:absolute;left:311px;top:97px;width:167px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'Проверить',
			text: 'Проверить...',
			style: 'position:absolute;left:356px;top:50px;width:122px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьТипОбменаДанными',
			text: 'Тип обмена данными:',
			style: 'position:absolute;left:6px;top:54px;width:117px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРежимОбмена',
			text: 'Режим обмена:',
			style: 'position:absolute;left:6px;top:201px;width:117px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Использовать периодический обмен данными',
			style: 'position:absolute;left:6px;top:274px;width:260px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРасписаниеРегламентногоЗаданияНастройки',
			text: 'Расписание регламентного задания',
			style: 'position:absolute;left:21px;top:297px;width:463px;height:39px;',
		},
		{
			xtype: 'button',
			name: 'НастройкаРегламентногоЗадания',
			text: 'Дополнительные настройки расписания ...',
			style: 'position:absolute;left:255px;top:341px;width:229px;height:24px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Выгрузка товаров',
			style: 'position:absolute;left:6px;top:6px;width:117px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Обмен заказами',
			style: 'position:absolute;left:6px;top:30px;width:117px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:14px;top:225px;width:468px;height:24px;',
			height: 24,width: 468,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'УзелОбменаТоварами',
			style: 'position:absolute;left:135px;top:0px;width:268px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:14px;top:249px;width:468px;height:25px;',
			height: 25,width: 468,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'УзелОбменаЗаказами',
			style: 'position:absolute;left:135px;top:0px;width:268px;height:19px;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'Выгрузка товаров',
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Выгружать картинки',
			style: 'position:absolute;left:6px;top:6px;width:128px;height:15px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:52px;width:478px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:78px;width:478px;height:360px;',
			height: 360,width: 478,
			columns:
			[
				{
					text:'',
					width:'20',
				},
				{
					text:'Поле',
					width:'100',
				},
				{
					text:'Тип сравнения',
					width:'60',
				},
				{
					text:'Значение',
					width:'100',
				},
				{
					text:'С',
					width:'100',
				},
				{
					text:'По',
					width:'100',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьОтбор',
			text: 'Укажите отбор для выгрузки товаров на сайт:',
			style: 'position:absolute;left:6px;top:30px;width:245px;height:19px;',
		},
					]
				},
				{
					title:'Обмен заказами',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:6px;top:51px;width:83px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСпособИдентификацииКонтрагентов',
			text: 'Идентификация контрагентов:',
			style: 'position:absolute;left:6px;top:6px;width:171px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьГруппаДляНовыхКонтрагентов',
			text: 'Группа для новых контрагентов:',
			style: 'position:absolute;left:6px;top:144px;width:171px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьГруппаДляНовойНоменклатуры',
			text: 'Группа для новой номенклатуры:',
			style: 'position:absolute;left:6px;top:168px;width:171px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьЕдиницаИзмеренияНовойНоменклатуры',
			text: 'Единица новой номенклатуры:',
			style: 'position:absolute;left:6px;top:192px;width:171px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:6px;top:75px;width:83px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодразделение',
			text: 'Подразделение:',
			style: 'position:absolute;left:6px;top:99px;width:83px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:185px;top:51px;width:299px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:185px;top:75px;width:299px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Подразделение',
			style: 'position:absolute;left:185px;top:99px;width:299px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ГруппаДляНовыхКонтрагентов',
			style: 'position:absolute;left:185px;top:144px;width:299px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ГруппаДляНовойНоменклатуры',
			style: 'position:absolute;left:185px;top:168px;width:299px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЕдиницаИзмеренияНовойНоменклатуры',
			style: 'position:absolute;left:185px;top:192px;width:299px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьУстановкаДаты',
			text: 'Установка даты:',
			style: 'position:absolute;left:6px;top:237px;width:91px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПроведениеДокумента',
			text: 'Проведение документа:',
			style: 'position:absolute;left:6px;top:307px;width:124px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:190px;top:527px;width:73px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:269px;top:527px;width:413px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКод',
			text: 'Код:',
			style: 'position:absolute;left:600px;top:33px;width:40px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:642px;top:33px;width:40px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Наименование:',
			style: 'position:absolute;left:190px;top:33px;width:84px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:276px;top:33px;width:323px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСсылкаНаСайт1СБитрикс',
			text: 'http://www.1c-bitrix.ru/1c/',
			style: 'position:absolute;left:28px;top:506px;width:134px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСсылкаНаСайт1СБитриксТекст',
			text: 'Подробнее об обмене данными с сайтом "1С-Битрикс" и рекомендации по организации и управлению интернет-магазином вы можете прочитать на сайте «1С-Битрикс»:',
			style: 'position:absolute;left:8px;top:424px;width:174px;height:80px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Система управления интернет-проектами "1С-Битрикс" поддерживает обмен данными в типовой поставке продукта "1С-Битрикс: Управление сайтом" начиная с версии "1С-Битрикс" 6.5',
			style: 'position:absolute;left:8px;top:309px;width:174px;height:95px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Технология обмена данными с WEB-сайтом является универсальной и основана на стандарте обмена коммерческой информацией CommerceML 2',
			style: 'position:absolute;left:8px;top:58px;width:174px;height:66px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодробнееОСтандартеCML2',
			text: 'Подробнее о стандарте CML 2',
			style: 'position:absolute;left:8px;top:149px;width:174px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодробнееОТехнологииОбмена',
			text: 'Подробнее о технологии обмена',
			style: 'position:absolute;left:8px;top:129px;width:174px;height:15px;',
		},
	]
});