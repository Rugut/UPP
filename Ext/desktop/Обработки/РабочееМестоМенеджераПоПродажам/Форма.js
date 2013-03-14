Ext.define('Обработки.РабочееМестоМенеджераПоПродажам.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:780px;height:405px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Рабочее место менеджера по продажам',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:780px;height:25px;',
			items:
			[
				'-',
				{
					text:'Оформить новый заказ (F11)',
				},
				'-',
				{
					text:'Оформить счет на оплату (F12)',
				},
				'-',
				{
					text:'Оформить реализацию (Ctrl+F12)',
				},
				'-',
				{
					text:'Изображение',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:80px;width:328px;height:181px;',
			height: 181,width: 328,
			columns:
			[
				{
					text:'',
					width:'39',
				},
				{
					text:'Код',
					width:'35',
				},
				{
					text:'Артикул ',
					width:'105',
				},
				{
					text:'Наименование',
					width:'405',
				},
				{
					text:'Полное наименование',
					width:'365',
				},
				{
					text:'Ед.хран.ост.',
					width:'68',
				},
				{
					text:'Баз.ед.измер.',
					width:'80',
				},
				{
					text:'Ставка НДС',
					width:'72',
				},
				{
					text:'Номенклатурная группа',
					width:'132',
				},
				{
					text:'Ответственный за покупки',
					width:'152',
				},
				{
					text:'Основной поставщик',
					width:'157',
				},
				{
					text:'Страна происхождения',
					width:'144',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЗначениеОтбораСпискаНоменклатуры',
			style: 'position:absolute;left:208px;top:56px;width:128px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:341px;top:56px;width:431px;height:341px;',
			height: 341,width: 431,
			items:
			[
				{
					title:'Дерево',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:6px;width:417px;height:309px;',
			height: 309,width: 417,
			columns:
			[
				{
					text:'Группа номенклатуры',
					width:'350',
				},
			]
		},
					]
				},
				{
					title:'Параметры',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Полное наименование:',
			style: 'position:absolute;left:6px;top:6px;width:144px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НаименованиеПолное',
			text: 'Полное наименование',
			style: 'position:absolute;left:155px;top:6px;width:268px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'АртикулНадпись',
			text: 'Артикул:',
			style: 'position:absolute;left:6px;top:26px;width:144px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Артикул',
			text: 'Артикул',
			style: 'position:absolute;left:155px;top:26px;width:268px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'ВидНадпись',
			text: 'Вид:',
			style: 'position:absolute;left:6px;top:46px;width:144px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Вид',
			text: 'Вид',
			style: 'position:absolute;left:155px;top:46px;width:268px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'ВидНадпись1',
			text: 'Единицы измерения:',
			style: 'position:absolute;left:6px;top:66px;width:144px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'ВидНадпись2',
			text: 'Базовая:',
			style: 'position:absolute;left:99px;top:87px;width:51px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'ВидНадпись3',
			text: 'Остатков:',
			style: 'position:absolute;left:232px;top:87px;width:57px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'ЕдиницаБазовая',
			text: 'Единица базовая',
			style: 'position:absolute;left:155px;top:87px;width:49px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'ЕдиницаОстатков',
			text: 'Единица остатков',
			style: 'position:absolute;left:295px;top:87px;width:49px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'ВидНадпись4',
			text: 'Ответственный за закупки:',
			style: 'position:absolute;left:6px;top:107px;width:144px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'ОтветственныйЗаЗакупки',
			text: 'Ответственный менеджер за закупки',
			style: 'position:absolute;left:155px;top:107px;width:268px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'ВидНадпись5',
			text: 'Основной поставщик:',
			style: 'position:absolute;left:6px;top:127px;width:144px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'ОсновнойПоставщик',
			text: 'Основной поставщик',
			style: 'position:absolute;left:155px;top:127px;width:268px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'ВидНадпись6',
			text: 'Номенклатурная группа:',
			style: 'position:absolute;left:6px;top:147px;width:144px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НоменклатурнаяГруппа',
			text: 'Номенклатурная группа',
			style: 'position:absolute;left:155px;top:147px;width:268px;height:15px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:167px;width:229px;height:148px;',
			height: 148,width: 229,
			columns:
			[
				{
					text:'',
					width:'21',
				},
				{
					text:'Свойство',
					width:'89',
				},
				{
					text:'Значение',
					width:'115',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:240px;top:167px;width:183px;height:148px;',
			height: 148,width: 183,
			columns:
			[
				{
					text:'',
					width:'21',
				},
				{
					text:'',
					width:'21',
				},
				{
					text:'Категория',
					width:'136',
				},
			]
		},
					]
				},
				{
					title:'Остатки, цены',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:6px;width:417px;height:204px;',
			height: 204,width: 417,
			columns:
			[
				{
					text:'Характеристика/Склад',
					width:'125',
				},
				{
					text:'Общий',
					width:'53',
				},
				{
					text:'Свободный',
					width:'63',
				},
				{
					text:'Своб.ожид.',
					width:'64',
				},
				{
					text:'В резерве',
					width:'62',
				},
				{
					text:'Ячейка склада',
					width:'86',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:417px;height:27px;',
			items:
			[
				{
					text:'Отображать склады',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьВалютаЦены',
			text: 'Валюта:',
			style: 'position:absolute;left:212px;top:296px;width:46px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьТипРасчета',
			text: 'Валюта цены:',
			style: 'position:absolute;left:6px;top:296px;width:73px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВалютаЦены',
			style: 'position:absolute;left:259px;top:296px;width:164px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:215px;width:417px;height:76px;',
			height: 76,width: 417,
			columns:
			[
				{
					text:'Типы цен',
					width:'133',
				},
				{
					text:'Ссылка',
					width:'82',
				},
				{
					text:'БазовыйТипЦен',
					width:'100',
				},
				{
					text:'Рассчитывается',
					width:'100',
				},
				{
					text:'ОкруглятьВБольшуюСторону',
					width:'100',
				},
				{
					text:'ПроцентСкидкиНаценки',
					width:'100',
				},
				{
					text:'Префикс',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:66px;top:54px;width:157px;height:24px;',
			items:
			[
				{
					text:'Пометить все типы цен',
				},
				{
					text:'Отменить пометку всех типов цен',
				},
				{
					text:'Обновить',
				},
				'-',
				{
					text:'Переместить вверх',
				},
				{
					text:'Переместить вниз',
				},
			]
		},
					]
				},
				{
					title:'Заказы',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:27px;width:417px;height:129px;',
			height: 129,width: 417,
			columns:
			[
				{
					text:'',
					width:'21',
				},
				{
					text:'Заказ покупателя',
					width:'166',
				},
				{
					text:'Дата отгрузки',
					width:'84',
				},
				{
					text:'В заказе',
					width:'61',
				},
				{
					text:'В резерве',
					width:'61',
				},
				{
					text:'Проведен',
					width:'51',
				},
				{
					text:'Пометка удаления',
					width:'55',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:182px;width:417px;height:133px;',
			height: 133,width: 417,
			columns:
			[
				{
					text:'Заказ покупателя',
					width:'105',
				},
				{
					text:'Дата отгрузки',
					width:'83',
				},
				{
					text:'Заказ поставщику',
					width:'105',
				},
				{
					text:'Дата поступления',
					width:'102',
				},
				{
					text:'Количество',
					width:'57',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Контрагент',
			style: 'position:absolute;left:412px;top:33px;width:360px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Покупатель:',
			style: 'position:absolute;left:341px;top:33px;width:66px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:266px;width:328px;height:131px;',
			height: 131,width: 328,
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
			name: 'Надпись5',
			text: 'содержит:',
			style: 'position:absolute;left:151px;top:56px;width:54px;height:19px;',
		},
	]
});