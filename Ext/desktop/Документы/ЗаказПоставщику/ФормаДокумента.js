Ext.define('Документы.ЗаказПоставщику.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:821px;height:490px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Документ Заказ поставщику',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:5px;top:33px;width:95px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:202px;top:33px;width:16px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:441px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:113px;top:33px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:223px;top:33px;width:138px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:441px;width:719px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:821px;height:25px;',
			items:
			[
				'-',
				{
					text:'Заполнить и провести',
				},
				{
					text:'Открыть актуальный электронный документ',
				},
				{
					text:'Сформировать, подписать и отправить',
				},
				'-',
				{
					text:'Файлы',
				},
				{
					text:'Отправить по эл. почте',
				},
				'-',
				'-',
				{
					text:'Сформировать новый электронный документ',
				},
				'-',
				'-',
				{
					text:'Отправить по эл. почте',
				},
				'-',
				'-',
				{
					text:'',
				},
				{
					text:'Анализ',
				},
				{
					text:'Выгрузить в файл',
				},
				{
					text:'Цены и валюта...',
				},
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'Перезаполнить данными из электронного документа',
				},
				'-',
				'-',
				'-',
				{
					text:'Структура подчиненности документа',
				},
				'-',
				{
					text:'',
				},
				{
					text:'Список электронных документов',
				},
				{
					text:'В файл',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:153px;width:807px;height:243px;',
			height: 243,width: 807,
			items:
			[
				{
					title:'Оборудование',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:793px;height:24px;',
			items:
			[
				{
					text:'Подбор',
				},
				'-',
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:793px;height:187px;',
			height: 187,width: 793,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'Номенклатура',
					width:'200',
				},
				{
					text:'Характеристика номенклатуры',
					width:'250',
				},
				{
					text:'Ед. мест',
					width:'50',
				},
				{
					text:'К. мест',
					width:'45',
				},
				{
					text:'Мест',
					width:'69',
				},
				{
					text:'Количество',
					width:'68',
				},
				{
					text:'Ед.',
					width:'50',
				},
				{
					text:'К.',
					width:'40',
				},
				{
					text:'Цена',
					width:'80',
				},
				{
					text:'Сумма',
					width:'122',
				},
				{
					text:'% НДС',
					width:'58',
				},
				{
					text:'Сумма НДС',
					width:'88',
				},
				{
					text:'Всего',
					width:'93',
				},
			]
		},
		{
			xtype: 'label',
			name: 'ТекстСостоянияЭД',
			text: '',
			style: 'position:absolute;left:116px;top:174px;width:267px;height:19px;',
		},
					]
				},
				{
					title:'Товары',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:793px;height:187px;',
			height: 187,width: 793,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'Код',
					width:'60',
				},
				{
					text:'Артикул',
					width:'120',
				},
				{
					text:'Номенклатура',
					width:'250',
				},
				{
					text:'Характеристика номенклатуры',
					width:'250',
				},
				{
					text:'Ед. мест',
					width:'50',
				},
				{
					text:'К. мест',
					width:'45',
				},
				{
					text:'Мест',
					width:'61',
				},
				{
					text:'Количество',
					width:'65',
				},
				{
					text:'Ед.',
					width:'50',
				},
				{
					text:'К.',
					width:'45',
				},
				{
					text:'Цена',
					width:'80',
				},
				{
					text:'Сумма',
					width:'80',
				},
				{
					text:'% НДС',
					width:'40',
				},
				{
					text:'Сумма НДС',
					width:'80',
				},
				{
					text:'Всего',
					width:'80',
				},
				{
					text:'Спецификация',
					width:'160',
				},
				{
					text:'Заказ',
					width:'250',
				},
				{
					text:'Себестоимость',
					width:'80',
				},
				{
					text:'Сумма себестоимости',
					width:'80',
				},
				{
					text:'Отклонение',
					width:'80',
				},
				{
					text:'% отклонения',
					width:'80',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:793px;height:24px;',
			items:
			[
				{
					text:'Заполнить по заказу покупателя',
				},
				{
					text:'Добавить по внутреннему заказу',
				},
				{
					text:'Заполнить по заказу на производство',
				},
				'-',
				{
					text:'Заполнить по внутреннему заказу',
				},
				'-',
				{
					text:'Заполнить по внутреннему заказу комплектующие для комплектов',
				},
				{
					text:'Заполнить потребностями',
				},
				'-',
				'-',
				{
					text:'Изменить',
				},
				{
					text:'Заполнить по заказу покупателя комплектующие для комплектов',
				},
				'-',
				'-',
				{
					text:'Добавить по заказу на производство',
				},
				{
					text:'Добавить по заказу покупателя',
				},
				{
					text:'Подбор',
				},
				{
					text:'Добавить по внутреннему заказу комплектующие для комплектов',
				},
				{
					text:'Поиск по штрихкоду',
				},
				'-',
				{
					text:'Добавить по заказу покупателя комплектующие для комплектов',
				},
				{
					text:'Добавить потребности',
				},
				'-',
			]
		},
					]
				},
				{
					title:'Материалы',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьСуммаВзаиморасчетов',
			text: 'Сумма <нет валюты>:',
			style: 'position:absolute;left:6px;top:24px;width:103px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:793px;height:187px;',
			height: 187,width: 793,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'Код',
					width:'60',
				},
				{
					text:'Артикул',
					width:'120',
				},
				{
					text:'Номенклатура',
					width:'220',
				},
				{
					text:'Характеристика номенклатуры',
					width:'125',
				},
				{
					text:'Ед. мест',
					width:'50',
				},
				{
					text:'К.мест',
					width:'45',
				},
				{
					text:'Мест',
					width:'67',
				},
				{
					text:'Количество',
					width:'67',
				},
				{
					text:'Ед.',
					width:'50',
				},
				{
					text:'К.',
					width:'45',
				},
				{
					text:'Цена',
					width:'55',
				},
				{
					text:'Сумма',
					width:'61',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:793px;height:24px;',
			items:
			[
				'-',
				{
					text:'Подбор',
				},
				'-',
				{
					text:'Заполнить по спецификации',
				},
			]
		},
					]
				},
				{
					title:'Услуги',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:394px;top:64px;width:128px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:793px;height:187px;',
			height: 187,width: 793,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'Номенклатура',
					width:'220',
				},
				{
					text:'Содержание услуги, доп. сведения',
					width:'199',
				},
				{
					text:'Количество',
					width:'60',
				},
				{
					text:'Цена',
					width:'57',
				},
				{
					text:'Сумма',
					width:'61',
				},
				{
					text:'% НДС',
					width:'58',
				},
				{
					text:'Сумма НДС',
					width:'76',
				},
				{
					text:'Всего',
					width:'80',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:793px;height:24px;',
			items:
			[
				'-',
				{
					text:'Подбор',
				},
			]
		},
					]
				},
				{
					title:'Возвратная тара',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:793px;height:24px;',
			items:
			[
				'-',
				{
					text:'Добавить по внутреннему заказу',
				},
				{
					text:'Заполнить по заказу покупателя',
				},
				'-',
				{
					text:'Заполнить по внутреннему заказу',
				},
				{
					text:'Добавить по заказу покупателя',
				},
				{
					text:'Заполнить потребностями',
				},
				'-',
				{
					text:'Добавить потребности',
				},
				{
					text:'Подбор',
				},
				'-',
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:793px;height:187px;',
			height: 187,width: 793,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'Код',
					width:'60',
				},
				{
					text:'Артикул',
					width:'120',
				},
				{
					text:'Номенклатура',
					width:'220',
				},
				{
					text:'Ед. хранения',
					width:'52',
				},
				{
					text:'Количество',
					width:'65',
				},
				{
					text:'Цена',
					width:'80',
				},
				{
					text:'Сумма',
					width:'80',
				},
				{
					text:'Заказ',
					width:'250',
				},
			]
		},
		{
			xtype: 'label',
			name: 'ИнфНадписьКурса',
			text: '(10000 TRL = 6500 руб.)',
			style: 'position:absolute;left:208px;top:24px;width:591px;height:19px;',
		},
					]
				},
				{
					title:'Дополнительно',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПодразделениеКомпании',
			style: 'position:absolute;left:116px;top:64px;width:267px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:522px;top:64px;width:277px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммаВзаиморасчетов',
			style: 'position:absolute;left:116px;top:24px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КонтактноеЛицо',
			style: 'position:absolute;left:116px;top:107px;width:267px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'напомнить',
			style: 'position:absolute;left:394px;top:107px;width:128px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВремяНапоминания',
			style: 'position:absolute;left:522px;top:107px;width:140px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДокументОснование',
			style: 'position:absolute;left:116px;top:131px;width:267px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерПоДаннымПоставщика',
			style: 'position:absolute;left:522px;top:174px;width:140px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаПоДаннымПоставщика',
			style: 'position:absolute;left:522px;top:198px;width:140px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьДоговор',
			text: 'Договор:',
			style: 'position:absolute;left:431px;top:81px;width:96px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКонтрагент',
			text: 'Контрагент:',
			style: 'position:absolute;left:5px;top:81px;width:95px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДоговорКонтрагента',
			style: 'position:absolute;left:530px;top:81px;width:285px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Контрагент',
			style: 'position:absolute;left:113px;top:81px;width:303px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:5px;top:57px;width:95px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:113px;top:57px;width:303px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСклад',
			text: 'Склад:',
			style: 'position:absolute;left:5px;top:129px;width:95px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Склад',
			style: 'position:absolute;left:113px;top:129px;width:303px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ИнфНадписьТоварыИтоги',
			text: 'Оптовые цены, Скидка 20%',
			style: 'position:absolute;left:8px;top:399px;width:636px;height:17px;',
		},
		{
			xtype: 'label',
			name: 'ИнфНадписьДолга',
			text: 'По договору 250 USD, 1 USD = 30 руб.',
			style: 'position:absolute;left:431px;top:105px;width:363px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПерерассчитатьДолг',
			text: '',
			style: 'position:absolute;left:800px;top:105px;width:15px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВсего',
			text: 'Всего,USD:',
			style: 'position:absolute;left:652px;top:399px;width:72px;height:17px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Всего',
			style: 'position:absolute;left:730px;top:399px;width:80px;height:17px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВсегоНДС',
			text: 'НДС ( в т. ч.):',
			style: 'position:absolute;left:652px;top:420px;width:72px;height:17px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВсегоНДС',
			style: 'position:absolute;left:730px;top:420px;width:80px;height:17px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтруктурнаяЕдиница',
			style: 'position:absolute;left:530px;top:129px;width:285px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтруктурнойЕдиницы',
			text: 'Б/счет, касса:',
			style: 'position:absolute;left:431px;top:129px;width:96px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОплаты',
			style: 'position:absolute;left:266px;top:105px;width:95px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаПоступления',
			style: 'position:absolute;left:113px;top:105px;width:95px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатыОплаты',
			text: 'Оплата:',
			style: 'position:absolute;left:214px;top:105px;width:49px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатыОтгрузки',
			text: 'Поступление:',
			style: 'position:absolute;left:5px;top:105px;width:95px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:465px;width:821px;height:25px;',
			items:
			[
				'-',
				'-',
				'-',
				{
					text:'Печать',
				},
				{
					text:'ОК',
				},
				{
					text:'Записать',
				},
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:465px;width:821px;height:25px;',
			items:
			[
				{
					text:'Зарегистрировать и закрыть',
				},
				'-',
				{
					text:'Закрыть',
				},
				'-',
				{
					text:'Зарегистрировать',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:821px;height:25px;',
			items:
			[
				'-',
				{
					text:'Перечитать',
				},
				'-',
				{
					text:'Закрыть',
				},
				'-',
				{
					text:'Перечитать',
				},
				'-',
				{
					text:'Цены и валюта...',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Движения документа по регистрам',
				},
				'-',
				{
					text:'Анализ',
				},
				{
					text:'',
				},
				'-',
				'-',
				{
					text:'Справка',
				},
				'-',
				{
					text:'',
				},
				'-',
			]
		},
		{
			xtype: 'label',
			name: 'ИнфНадписьИтоговоеОтклонениеОтПлановойСебестоимости',
			text: 'Отклонение от плановой себестоимости',
			style: 'position:absolute;left:8px;top:420px;width:636px;height:17px;',
		},
	]
});