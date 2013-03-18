Ext.define('Справочники.ОсновныеСредства.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:764px;height:495px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Основные средства',
	
	items:
	[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Инв. №:',
			style: 'position:absolute;left:591px;top:33px;width:73px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:666px;top:33px;width:90px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:33px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:94px;top:33px;width:484px;height:19px;',
		},
		{
			xtype: 'textarea',
			hideLabel: true,
			name: 'ПрочиеСведения',
			style: 'position:absolute;left:94px;top:443px;width:662px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:764px;height:25px;',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'Перейти',
					menu: [
				{
					text:'Зарегистрированные оплаты основных средств (УСН)',
				},
				'-',
				{
					text:'Документы комплектации ОС',
				},
				'-',
					]
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:470px;width:764px;height:25px;',
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
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:105px;width:748px;height:334px;',
			height: 334,width: 748,
			items:
			[
				{
					title:'Основные сведения',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Группа ОС:',
			style: 'position:absolute;left:6px;top:6px;width:140px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Родитель',
			style: 'position:absolute;left:148px;top:6px;width:592px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Полное наименование:',
			style: 'position:absolute;left:6px;top:30px;width:140px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НаименованиеПолное',
			style: 'position:absolute;left:148px;top:30px;width:592px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Изготовитель',
			style: 'position:absolute;left:148px;top:75px;width:592px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерПаспорта',
			style: 'position:absolute;left:148px;top:123px;width:592px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЗаводскойНомер',
			style: 'position:absolute;left:148px;top:99px;width:592px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаВыпуска',
			style: 'position:absolute;left:148px;top:147px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидОС',
			style: 'position:absolute;left:148px;top:216px;width:592px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КодПоОКОФ',
			style: 'position:absolute;left:148px;top:192px;width:592px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'АмортизационнаяГруппа',
			style: 'position:absolute;left:148px;top:240px;width:592px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Автотранспорт',
			style: 'position:absolute;left:6px;top:266px;width:101px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьАдресМестонахождения',
			text: 'Адрес местонахождения:',
			style: 'position:absolute;left:6px;top:289px;width:140px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'АдресМестонахождения',
			style: 'position:absolute;left:148px;top:289px;width:467px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКодРегиона',
			text: 'Код региона:',
			style: 'position:absolute;left:625px;top:289px;width:69px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КодРегиона',
			style: 'position:absolute;left:698px;top:289px;width:42px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись118',
			text: 'Сведения о недвижимости заполняются для группы "Здания", "Сооружения"',
			style: 'position:absolute;left:6px;top:6px;width:734px;height:20px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНазначениеПомещения',
			text: 'Назначение помещения:',
			style: 'position:absolute;left:14px;top:118px;width:126px;height:20px;text-align:left;',
		},
					]
				},
				{
					title:'Управленческий учет',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПодразделениеУУ',
			style: 'position:absolute;left:102px;top:144px;width:222px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'МОЛУУ',
			style: 'position:absolute;left:102px;top:168px;width:222px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВСоставе',
			style: 'position:absolute;left:102px;top:192px;width:222px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номенклатура',
			style: 'position:absolute;left:102px;top:240px;width:222px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Характеристика',
			style: 'position:absolute;left:102px;top:264px;width:222px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СпособАмортизацииУУ',
			style: 'position:absolute;left:492px;top:192px;width:248px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НаправленияАмортизацииУУ',
			style: 'position:absolute;left:492px;top:144px;width:248px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ГодовойГрафикУУ',
			style: 'position:absolute;left:620px;top:216px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТекущаяСтоимостьУУ',
			style: 'position:absolute;left:182px;top:51px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПервоначальнаяСтоимостьУУ',
			style: 'position:absolute;left:182px;top:27px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОбъемРаботУУ',
			style: 'position:absolute;left:182px;top:99px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СрокИспользованияУУ',
			style: 'position:absolute;left:182px;top:75px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПринятоКУчетуУУ',
			style: 'position:absolute;left:492px;top:27px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВведеноВЭксплуатациюУУ',
			style: 'position:absolute;left:492px;top:51px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СнятоСУчетаУУ',
			style: 'position:absolute;left:492px;top:75px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТекАмортизацияУУ',
			style: 'position:absolute;left:492px;top:168px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПроцентГодовойАмортизацииУУ',
			style: 'position:absolute;left:492px;top:216px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КоэфУскоренияУУ',
			style: 'position:absolute;left:492px;top:240px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПараметрВыработкиУУ',
			style: 'position:absolute;left:492px;top:264px;width:248px;height:19px;',
		},
					]
				},
				{
					title:'Бухгалтерский учет',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетУчетаСтоимостиБУ',
			style: 'position:absolute;left:142px;top:240px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СпособПоступленияБУ',
			style: 'position:absolute;left:142px;top:216px;width:182px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетУчетаАмортизацииБУ',
			style: 'position:absolute;left:142px;top:264px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТекущаяСтоимостьБУ',
			style: 'position:absolute;left:182px;top:51px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПервоначальнаяСтоимостьБУ',
			style: 'position:absolute;left:182px;top:27px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОбъемРаботБУ',
			style: 'position:absolute;left:182px;top:99px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СрокИспользованияБУ',
			style: 'position:absolute;left:182px;top:75px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СпособАмортизацииБУ',
			style: 'position:absolute;left:492px;top:192px;width:248px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НаправленияАмортизацииБУ',
			style: 'position:absolute;left:492px;top:144px;width:248px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ГодовойГрафикБУ',
			style: 'position:absolute;left:620px;top:216px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПринятоКУчетуБУ',
			style: 'position:absolute;left:492px;top:27px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВведеноВЭксплуатациюБУ',
			style: 'position:absolute;left:492px;top:51px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СнятоСУчетаБУ',
			style: 'position:absolute;left:492px;top:75px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТекАмортизацияБУ',
			style: 'position:absolute;left:492px;top:168px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПроцентГодовойАмортизацииБУ',
			style: 'position:absolute;left:492px;top:216px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КоэфУскоренияБУ',
			style: 'position:absolute;left:492px;top:240px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПодразделениеБУ',
			style: 'position:absolute;left:102px;top:144px;width:222px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'МОЛБУ',
			style: 'position:absolute;left:102px;top:168px;width:222px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПараметрВыработкиБУ',
			style: 'position:absolute;left:492px;top:264px;width:248px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПомещение',
			text: 'Помещение',
			style: 'position:absolute;left:14px;top:92px;width:125px;height:20px;',
		},
					]
				},
				{
					title:'Налоговый учет',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись20',
			text: 'Первоначальная стоимость:',
			style: 'position:absolute;left:12px;top:27px;width:168px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись75',
			text: 'Первоначальная стоимость:',
			style: 'position:absolute;left:12px;top:27px;width:168px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТекущаяСтоимостьНУ',
			style: 'position:absolute;left:182px;top:51px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПервоначальнаяСтоимостьНУ',
			style: 'position:absolute;left:182px;top:27px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СрокИспользованияНУ',
			style: 'position:absolute;left:182px;top:75px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СпособАмортизацииНУ',
			style: 'position:absolute;left:500px;top:169px;width:240px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НаправленияАмортизацииНУ',
			style: 'position:absolute;left:500px;top:121px;width:240px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТекАмортизацияНУ',
			style: 'position:absolute;left:500px;top:145px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетУчетаСтоимостиНУ',
			style: 'position:absolute;left:146px;top:240px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетУчетаАмортизацииНУ',
			style: 'position:absolute;left:146px;top:264px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПринятоКУчетуНУ',
			style: 'position:absolute;left:492px;top:27px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВведеноВЭксплуатациюНУ',
			style: 'position:absolute;left:492px;top:51px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СнятоСУчетаНУ',
			style: 'position:absolute;left:492px;top:75px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СпецКоэффициентНУ',
			style: 'position:absolute;left:500px;top:193px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПорядокВключенияСтоимостиВСоставРасходовНУ',
			style: 'position:absolute;left:69px;top:121px;width:255px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись117',
			text: 'Порядок:',
			style: 'position:absolute;left:12px;top:121px;width:54px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НалогНаИмущество',
			text: 'Ставки налога на имущество',
			style: 'position:absolute;left:350px;top:240px;width:192px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ТранспортныйНалог',
			text: 'Регистрация транспортных средств',
			style: 'position:absolute;left:350px;top:264px;width:192px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ЗемельныйНалог',
			text: 'Регистрация земельных участков',
			style: 'position:absolute;left:350px;top:288px;width:192px;height:19px;',
		},
					]
				},
				{
					title:'Налоговый учет (УСН)',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись95',
			text: 'Принято к учету:',
			style: 'position:absolute;left:6px;top:30px;width:152px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись96',
			text: 'Снято с учета:',
			style: 'position:absolute;left:6px;top:78px;width:152px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПринятоКУчетуУСН',
			style: 'position:absolute;left:176px;top:30px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СнятоСУчетаУСН',
			style: 'position:absolute;left:176px;top:78px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ГиперссылкаДокументПринятияКУчетуУСН',
			text: 'Документ принятия к учету',
			style: 'position:absolute;left:262px;top:30px;width:476px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ГиперссылкаДокументСнятияСУчетаУСН',
			text: 'Документ снятия с учета',
			style: 'position:absolute;left:262px;top:78px;width:476px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись97',
			text: 'Введено в эксплуатацию:',
			style: 'position:absolute;left:6px;top:54px;width:152px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВведеноВЭксплуатациюУСН',
			style: 'position:absolute;left:176px;top:54px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ГиперссылкаДокументВводаВЭксплуатациюУСН',
			text: 'Документ ввода в эксплуатацию',
			style: 'position:absolute;left:262px;top:54px;width:476px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись98',
			text: 'Первоначальная стоимость:',
			style: 'position:absolute;left:6px;top:102px;width:152px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПервоначальнаяСтоимостьУСН',
			style: 'position:absolute;left:176px;top:102px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'РеглВалюта6',
			text: 'РеглВалюта',
			style: 'position:absolute;left:262px;top:102px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись99',
			text: 'Срок полез. использования:',
			style: 'position:absolute;left:6px;top:126px;width:152px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СрокИспользованияУСН',
			style: 'position:absolute;left:176px;top:126px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'мес2',
			text: 'мес.',
			style: 'position:absolute;left:262px;top:126px;width:28px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись100',
			text: 'Дата приобретения:',
			style: 'position:absolute;left:6px;top:6px;width:152px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаПриобретения',
			style: 'position:absolute;left:176px;top:6px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПорядокВключенияСтоимостиВСоставРасходовУСН',
			text: 'Порядок включения стоимости в состав расходов (УСН):',
			style: 'position:absolute;left:6px;top:151px;width:162px;height:27px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПорядокВключенияСтоимостиВСоставРасходовУСН',
			style: 'position:absolute;left:176px;top:151px;width:562px;height:19px;',
		},
					]
				},
				{
					title:'Свойства',
					items:
					[
		{
			xtype: 'label',
			name: 'УпрВалюта',
			text: 'УпрВалюта',
			style: 'position:absolute;left:264px;top:27px;width:60px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'РеглВалюта',
			text: 'РеглВалюта',
			style: 'position:absolute;left:264px;top:27px;width:60px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'РеглВалюта3',
			text: 'РеглВалюта',
			style: 'position:absolute;left:264px;top:27px;width:60px;height:19px;text-align:left;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:733px;height:259px;',
			height: 259,width: 733,
			columns:
			[
				{
					text:'',
					width:'22',
				},
				{
					text:'Свойство',
					width:'139',
				},
				{
					text:'Значение',
					width:'239',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:733px;height:24px;',
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
			xtype: 'label',
			name: 'Надпись5',
			text: 'Изготовитель:',
			style: 'position:absolute;left:6px;top:75px;width:140px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись24',
			text: 'Принято к учету:',
			style: 'position:absolute;left:350px;top:27px;width:140px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись35',
			text: 'Счет учета стоимости:',
			style: 'position:absolute;left:12px;top:240px;width:128px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись63',
			text: 'Принято к учету:',
			style: 'position:absolute;left:350px;top:27px;width:140px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись89',
			text: 'Принято к учету:',
			style: 'position:absolute;left:350px;top:27px;width:140px;height:19px;text-align:left;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:733px;height:259px;',
			height: 259,width: 733,
			columns:
			[
				{
					text:'',
					width:'20',
				},
				{
					text:'',
					width:'20',
				},
				{
					text:'Категория',
					width:'220',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:733px;height:24px;',
			items:
			[
				{
					text:'&Добавить',
				},
				{
					text:'&Изменить',
				},
				{
					text:'&Удалить',
				},
				{
					text:'Закончить редактирование',
				},
			]
		},
					]
				},
				{
					title:'Сведения о недвижимости',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись39',
			text: 'Первоначальная стоимость:',
			style: 'position:absolute;left:12px;top:27px;width:168px;height:19px;text-align:left;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Является помещением или составной частью здания (сооружения)',
			style: 'position:absolute;left:145px;top:92px;width:595px;height:20px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НазначениеПомещения',
			style: 'position:absolute;left:145px;top:118px;width:150px;height:20px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:30px;width:134px;height:59px;',
			height: 59,width: 134,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'radio',
			boxLabel: 'Кадастровый номер',
			style: 'position:absolute;left:8px;top:6px;width:120px;height:20px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Условный номер',
			style: 'position:absolute;left:8px;top:33px;width:120px;height:20px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:141px;top:30px;width:599px;height:59px;',
			height: 59,width: 599,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'УсловныйНомер',
			style: 'position:absolute;left:3px;top:33px;width:590px;height:20px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КадастровыйНомер',
			style: 'position:absolute;left:3px;top:6px;width:590px;height:20px;',
		},
					]
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись13',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:443px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись14',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:57px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:94px;top:57px;width:484px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИнвентарныйНомер',
			style: 'position:absolute;left:666px;top:57px;width:90px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись15',
			text: 'Инв. № (Орг):',
			style: 'position:absolute;left:591px;top:57px;width:73px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаСведений',
			style: 'position:absolute;left:94px;top:81px;width:122px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ДатаВыводаСведений',
			text: 'Дата сведений:',
			style: 'position:absolute;left:8px;top:81px;width:84px;height:19px;',
		},
	]
});