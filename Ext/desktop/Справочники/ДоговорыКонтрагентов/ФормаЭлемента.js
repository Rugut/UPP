Ext.define('Справочники.ДоговорыКонтрагентов.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:511px;height:579px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Договор контрагента',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:106px;top:105px;width:284px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:511px;height:25px;',
			items:
			[
				{
					text:'Файлы',
				},
				'-',
				'-',
				{
					text:'Файлы',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:423px;top:105px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Наименование :',
			style: 'position:absolute;left:8px;top:105px;width:96px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКод',
			text: 'Код:',
			style: 'position:absolute;left:393px;top:105px;width:30px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:526px;width:96px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:106px;top:526px;width:397px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРодитель',
			text: 'Группа договоров:',
			style: 'position:absolute;left:8px;top:81px;width:96px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Родитель',
			style: 'position:absolute;left:106px;top:81px;width:397px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:554px;width:511px;height:25px;',
			items:
			[
				{
					text:'ОК',
				},
				'-',
				{
					text:'Записать',
				},
				{
					text:'Закрыть',
				},
				'-',
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:175px;width:495px;height:346px;',
			height: 346,width: 495,
			items:
			[
				{
					title:'Общие',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьВалютаВзаиморасчетов',
			text: 'Валюта :',
			style: 'position:absolute;left:341px;top:25px;width:62px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВалютаВзаиморасчетов',
			style: 'position:absolute;left:405px;top:25px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПроцентПредоплаты',
			text: 'Размер предоплаты по заказу покупателя, процентов, не менее:',
			style: 'position:absolute;left:14px;top:185px;width:356px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПроцентПредоплаты',
			style: 'position:absolute;left:405px;top:185px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДопустимоеЧислоДнейЗадолженности',
			style: 'position:absolute;left:405px;top:210px;width:80px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Флажок',
			style: 'position:absolute;left:14px;top:210px;width:370px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДопустимаяСуммаЗадолженности',
			style: 'position:absolute;left:405px;top:161px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВидВзаиморасчетов',
			text: 'Вид взаиморасчетов:',
			style: 'position:absolute;left:14px;top:88px;width:132px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидВзаиморасчетов',
			style: 'position:absolute;left:150px;top:88px;width:335px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Контролировать сумму задолженности,  сумма (руб.), не более:',
			style: 'position:absolute;left:14px;top:161px;width:352px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВедениеВзаиморасчетов',
			text: 'Взаиморасчеты ведутся:',
			style: 'position:absolute;left:14px;top:25px;width:132px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Расчеты в условных единицах',
			style: 'position:absolute;left:14px;top:68px;width:178px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'По документам расчетов с контрагентами',
			style: 'position:absolute;left:14px;top:47px;width:271px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Реализация на экспорт',
			style: 'position:absolute;left:197px;top:68px;width:178px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Установлен срок оплаты для резервов по сомнительным долгам, дней:',
			style: 'position:absolute;left:14px;top:112px;width:389px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СрокОплатыДляРезервовПоСомнительнымДолгам',
			style: 'position:absolute;left:405px;top:112px;width:80px;height:19px;',
		},
					]
				},
				{
					title:'Учет товаров',
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Флажок',
			style: 'position:absolute;left:14px;top:27px;width:370px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЧислоДнейРезерваБезОплаты',
			style: 'position:absolute;left:407px;top:27px;width:80px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Флажок',
			style: 'position:absolute;left:14px;top:76px;width:370px;height:19px;',
		},
					]
				},
				{
					title:'Дополнительно',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьТипЦенПокупки',
			text: 'Тип цен :',
			style: 'position:absolute;left:12px;top:26px;width:108px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТипЦенПокупки',
			style: 'position:absolute;left:122px;top:26px;width:363px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПроцентКомиссионногоВознаграждения',
			text: 'Процент:',
			style: 'position:absolute;left:371px;top:98px;width:52px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПроцентКомиссионногоВознаграждения',
			style: 'position:absolute;left:425px;top:98px;width:60px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСпособРасчетаКомиссионногоВознаграждения',
			text: 'Способ расчета:',
			style: 'position:absolute;left:12px;top:98px;width:108px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СпособРасчетаКомиссионногоВознаграждения',
			style: 'position:absolute;left:122px;top:98px;width:228px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Контролировать денежные средства комитента',
			style: 'position:absolute;left:12px;top:128px;width:441px;height:15px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОсновнойПроект',
			style: 'position:absolute;left:143px;top:301px;width:342px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПроект',
			text: 'Основной проект:',
			style: 'position:absolute;left:12px;top:301px;width:108px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОсновнаяСтатьяДвиженияДенежныхСредств',
			text: 'Основная статья:',
			style: 'position:absolute;left:12px;top:50px;width:108px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОсновнаяСтатьяДвиженияДенежныхСредств',
			style: 'position:absolute;left:122px;top:50px;width:363px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:149px;width:485px;height:127px;',
			height: 127,width: 485,
			items:
			[
				{
					title:'НДС с авансов',
					items:
					[
		{
			xtype: 'label',
			name: 'ТекстВидАгентскогоДоговора',
			text: 'Вид агентского договора:',
			style: 'position:absolute;left:7px;top:41px;width:136px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименованиеДляСчетаФактурыНаАванс',
			text: 'Обобщенное наименование товаров для счета-фактуры на аванс:',
			style: 'position:absolute;left:7px;top:89px;width:478px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НаименованиеДляСчетаФактурыНаАванс',
			style: 'position:absolute;left:7px;top:108px;width:478px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:7px;top:41px;width:478px;height:43px;',
			height: 43,width: 478,
			items:
			[
				{
					title:'Не регистрировать',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьПорядокРегистрацииСчетовФактурНаАвансПоДоговору',
			text: 'Порядок регистрации счетов-фактур на аванс по договору:',
			style: 'position:absolute;left:0px;top:0px;width:478px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПорядокРегистрацииСчетовФактурНаАвансПоДоговору',
			style: 'position:absolute;left:0px;top:24px;width:478px;height:19px;',
		},
					]
				},
				{
					title:'Информация',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Для указания особого порядка регистрации счетов-фактур на аванс по договору снимите установленный флажок.',
			style: 'position:absolute;left:0px;top:0px;width:478px;height:43px;',
		},
					]
				},
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Регистрировать счета-фактуры на аванс в порядке, соответствующем учетной политике',
			style: 'position:absolute;left:7px;top:20px;width:478px;height:16px;',
		},
					]
				},
				{
					title:'НДС налоговый агент',
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Организация выступает в качестве налогового агента по уплате НДС',
			style: 'position:absolute;left:7px;top:21px;width:478px;height:15px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидАгентскогоДоговора',
			style: 'position:absolute;left:146px;top:41px;width:339px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименованиеДляСчетаФактурыНаАванс1',
			text: 'Обобщенное наименование товаров для счета-фактуры на аванс:',
			style: 'position:absolute;left:7px;top:65px;width:478px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НаименованиеДляСчетаФактурыНаАванс1',
			style: 'position:absolute;left:7px;top:84px;width:478px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НалоговыйАгентПоОплате',
			style: 'position:absolute;left:260px;top:108px;width:225px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНалоговыйАгентПоОплате',
			text: 'НДС в качестве налогового агента начисляется:',
			style: 'position:absolute;left:7px;top:108px;width:251px;height:19px;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'Условия договора',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:54px;width:481px;height:256px;',
			height: 256,width: 481,
			columns:
			[
				{
					text:'',
					width:'32',
				},
				{
					text:'Дата',
					width:'132',
				},
				{
					text:'№',
					width:'80',
				},
				{
					text:'Дата начала',
					width:'80',
				},
				{
					text:'Периодичность',
					width:'80',
				},
				{
					text:'Сумма условий договора',
					width:'80',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:30px;width:481px;height:24px;',
			items:
			[
				{
					text:'Анализ',
				},
				'-',
			]
		},
		{
			xtype: 'label',
			name: 'НадписьВидУсловийДоговора',
			text: 'Условия договора:',
			style: 'position:absolute;left:6px;top:6px;width:132px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидУсловийДоговора',
			style: 'position:absolute;left:142px;top:6px;width:345px;height:19px;',
		},
					]
				},
				{
					title:'Скидки',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:481px;height:222px;',
			height: 222,width: 481,
			columns:
			[
				{
					text:'Получатель скидки',
					width:'100',
				},
				{
					text:'Номенклатура',
					width:'100',
				},
				{
					text:'Характеристика',
					width:'100',
				},
				{
					text:'Качество',
					width:'100',
				},
				{
					text:'Условие',
					width:'253',
				},
				{
					text:'Значение условия',
					width:'253',
				},
				{
					text:'Процент',
					width:'48',
				},
				{
					text:'Валюта',
					width:'50',
				},
				{
					text:'День недели',
					width:'88',
				},
				{
					text:'Время начала',
					width:'97',
				},
				{
					text:'Время окончания',
					width:'97',
				},
				{
					text:'Начало',
					width:'103',
				},
				{
					text:'Окончание',
					width:'103',
				},
				{
					text:'Установка скидок',
					width:'276',
				},
				{
					text:'Отмена скидок',
					width:'276',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНачалаПериода',
			style: 'position:absolute;left:101px;top:6px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНачалоПериода',
			text: 'Начало периода:',
			style: 'position:absolute;left:6px;top:6px;width:90px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОкончанияПериода',
			style: 'position:absolute;left:306px;top:6px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОкончаниеПериода',
			text: 'Окончание периода:',
			style: 'position:absolute;left:196px;top:6px;width:106px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПоказать',
			text: 'Показать',
			style: 'position:absolute;left:399px;top:6px;width:88px;height:19px;',
		},
					]
				},
				{
					title:'Свойства',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:481px;height:222px;',
			height: 222,width: 481,
			columns:
			[
				{
					text:'',
					width:'32',
				},
				{
					text:'Свойство',
					width:'186',
				},
				{
					text:'Значение',
					width:'302',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:481px;height:24px;',
			items:
			[
			]
		},
					]
				},
				{
					title:'Категории',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:481px;height:222px;',
			height: 222,width: 481,
			columns:
			[
				{
					text:'',
					width:'32',
				},
				{
					text:'',
					width:'32',
				},
				{
					text:'Категория',
					width:'465',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:481px;height:24px;',
			items:
			[
				{
					text:'Действие4',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие3',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьВидДоговора',
			text: 'Вид договора:',
			style: 'position:absolute;left:8px;top:129px;width:96px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВладелец',
			text: 'Контрагент:',
			style: 'position:absolute;left:8px;top:57px;width:96px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Владелец',
			style: 'position:absolute;left:106px;top:57px;width:397px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:33px;width:96px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:106px;top:33px;width:397px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:106px;top:153px;width:92px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:229px;top:153px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:208px;top:153px;width:20px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:153px;width:40px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСрокДействия',
			text: 'Срок действия:',
			style: 'position:absolute;left:338px;top:153px;width:83px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СрокДействия',
			style: 'position:absolute;left:423px;top:153px;width:80px;height:19px;',
		},
	]
});