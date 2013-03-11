Ext.define('Документы.ОтпускПоУходуЗаРебенком.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 580,width: 784,
	iconCls: 'bogus',
	title: 'Отпуск по уходу за ребенком',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:106px;top:33px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:531px;width:680px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:784px;height:25px;',
			items:
			[
				{
					text:'Разделитель2',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Заполнить',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие4',
				},
				{
					text:'Разделитель7',
				},
				{
					text:'ДействиеОткрытьКатегории',
				},
				{
					text:'ОткрытьСвойства',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'Действие',
				},
				{
					text:'Подменю2',
				},
				{
					text:'Подменю2',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие6',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие1',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'Подменю',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'РедактироватьКодНомер',
				},
				{
					text:'Действие',
				},
				{
					text:'ЗаполнитьПлановые',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие3',
				},
				{
					text:'Подменю1',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие7',
				},
				{
					text:'Подменю1',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'ДанныеДляРасчета',
				},
				{
					text:'Действие',
				},
				{
					text:'Подменю',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель6',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие4',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:251px;top:555px;width:533px;height:25px;',
			items:
			[
				{
					text:'Разделитель1',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие1',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Сотрудник',
			style: 'position:absolute;left:106px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:105px;width:768px;height:386px;',
			height: 386,width: 768,
			items:
			[
				{
					title:'Пособия',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОкончанияПособияДоПолутораЛет',
			style: 'position:absolute;left:152px;top:26px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СреднедневнойЗаработок',
			style: 'position:absolute;left:152px;top:50px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КоличествоДетей',
			style: 'position:absolute;left:152px;top:91px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОкончанияПособияДоТрехЛет',
			style: 'position:absolute;left:152px;top:233px;width:88px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:252px;top:43px;width:420px;height:44px;',
			height: 44,width: 420,
			items:
			[
				{
					title:'СтраницаОбычныйРасчет',
					items:
					[
		{
			xtype: 'button',
			name: 'Рассчитать',
			text: 'Рассчитать',
			style: 'position:absolute;left:306px;top:4px;width:88px;height:19px;',
		},
					]
				},
				{
					title:'СтраницаПереходныйПериод',
					items:
					[
		{
			xtype: 'button',
			name: 'РассчитатьПереходногоПериода',
			text: 'Рассчитать',
			style: 'position:absolute;left:270px;top:7px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СреднедневнойЗаработокПереходногоПериода2010',
			style: 'position:absolute;left:176px;top:7px;width:88px;height:19px;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'РасчетСреднего',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:0px;width:754px;height:360px;',
			height: 360,width: 754,
			items:
			[
				{
					title:'СтраницаДо2011Года',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:75px;width:754px;height:285px;',
			height: 285,width: 754,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'Сотрудник',
				},
				{
					text:'Подразделение',
				},
				{
					text:'Должность',
				},
				{
					text:'ВидРасчета',
				},
				{
					text:'Результат',
				},
				{
					text:'ДнейРасчетногоПериода',
				},
				{
					text:'СкидкаПоСтраховымВзносам',
				},
				{
					text:'БазовыйПериодНачало',
				},
				{
					text:'БазовыйПериодКонец',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:50px;width:754px;height:24px;',
			items:
			[
				{
					text:'Действие3',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие5',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодРасчетаСреднегоЗаработкаНачало',
			style: 'position:absolute;left:111px;top:8px;width:90px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодРасчетаСреднегоЗаработкаОкончание',
			style: 'position:absolute;left:227px;top:8px;width:90px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаВыбораПериода',
			text: '...',
			style: 'position:absolute;left:324px;top:8px;width:20px;height:19px;',
		},
					]
				},
				{
					title:'СтраницаС2011Года',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПервыйГодРасчета',
			style: 'position:absolute;left:88px;top:8px;width:64px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВторойГодРасчета',
			style: 'position:absolute;left:178px;top:8px;width:64px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:75px;width:754px;height:285px;',
			height: 285,width: 754,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'РасчетныйГод',
				},
				{
					text:'Заработок',
				},
				{
					text:'ДнейБолезниУходаЗаДетьми',
				},
				{
					text:'Страхователь',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:50px;width:754px;height:24px;',
			items:
			[
				{
					text:'Действие',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие5',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие6',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие1',
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
					]
				},
				{
					title:'ПлановыеНачисления',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:25px;width:754px;height:336px;',
			height: 336,width: 754,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'Сотрудник',
				},
				{
					text:'Подразделение',
				},
				{
					text:'Должность',
				},
				{
					text:'ВидРасчета',
				},
				{
					text:'Действие',
				},
				{
					text:'Показатели',
				},
				{
					text:'НаименованиеПоказатель1',
				},
				{
					text:'Показатель1',
				},
				{
					text:'Валюта1',
				},
				{
					text:'НаименованиеПоказательТР1',
				},
				{
					text:'ТарифныйРазряд1',
				},
				{
					text:'НаименованиеПоказатель2',
				},
				{
					text:'Показатель2',
				},
				{
					text:'Валюта2',
				},
				{
					text:'НаименованиеПоказательТР2',
				},
				{
					text:'ТарифныйРазряд2',
				},
				{
					text:'НаименованиеПоказатель3',
				},
				{
					text:'Показатель3',
				},
				{
					text:'Валюта3',
				},
				{
					text:'НаименованиеПоказательТР3',
				},
				{
					text:'ТарифныйРазряд3',
				},
				{
					text:'НаименованиеПоказатель4',
				},
				{
					text:'Показатель4',
				},
				{
					text:'Валюта4',
				},
				{
					text:'НаименованиеПоказательТР4',
				},
				{
					text:'ТарифныйРазряд4',
				},
				{
					text:'НаименованиеПоказатель5',
				},
				{
					text:'Показатель5',
				},
				{
					text:'Валюта5',
				},
				{
					text:'НаименованиеПоказательТР5',
				},
				{
					text:'ТарифныйРазряд5',
				},
				{
					text:'НаименованиеПоказатель6',
				},
				{
					text:'Показатель6',
				},
				{
					text:'Валюта6',
				},
				{
					text:'НаименованиеПоказательТР6',
				},
				{
					text:'ТарифныйРазряд6',
				},
				{
					text:'Сторно',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:754px;height:24px;',
			items:
			[
				{
					text:'Действие5',
				},
				{
					text:'Действие8',
				},
				{
					text:'Скопировать',
				},
				{
					text:'Изменить',
				},
				{
					text:'Удалить',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие7',
				},
				{
					text:'Добавить',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие4',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:57px;width:389px;height:24px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Действие13',
				},
				{
					text:'Действие14',
				},
				{
					text:'Удалить',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие6',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Скопировать',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие5',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие',
				},
				{
					text:'Изменить',
				},
				{
					text:'Подменю',
				},
				{
					text:'Действие10',
				},
				{
					text:'Добавить',
				},
				{
					text:'Действие12',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие8',
				},
			]
		},
					]
				},
				{
					title:'ПлановыеУдержания',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:25px;width:754px;height:336px;',
			height: 336,width: 754,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'Действие',
				},
				{
					text:'ВидРасчета',
				},
				{
					text:'Показатели',
				},
				{
					text:'НаименованиеПоказатель1',
				},
				{
					text:'Показатель1',
				},
				{
					text:'Валюта1',
				},
				{
					text:'НаименованиеПоказатель2',
				},
				{
					text:'Показатель2',
				},
				{
					text:'Валюта2',
				},
				{
					text:'НаименованиеПоказатель3',
				},
				{
					text:'Показатель3',
				},
				{
					text:'Валюта3',
				},
				{
					text:'НаименованиеПоказатель4',
				},
				{
					text:'Показатель4',
				},
				{
					text:'Валюта4',
				},
				{
					text:'НаименованиеПоказатель5',
				},
				{
					text:'Показатель5',
				},
				{
					text:'Валюта5',
				},
				{
					text:'НаименованиеПоказатель6',
				},
				{
					text:'Показатель6',
				},
				{
					text:'Валюта6',
				},
				{
					text:'ДокументОснование',
				},
				{
					text:'Сторно',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:754px;height:24px;',
			items:
			[
				{
					text:'Разделитель2',
				},
				{
					text:'Действие5',
				},
				{
					text:'Скопировать',
				},
				{
					text:'Действие8',
				},
				{
					text:'Изменить',
				},
				{
					text:'Действие4',
				},
				{
					text:'Удалить',
				},
				{
					text:'Действие6',
				},
				{
					text:'Добавить',
				},
				{
					text:'Действие7',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:85px;top:167px;width:389px;height:24px;',
			items:
			[
				{
					text:'Действие4',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Удалить',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие10',
				},
				{
					text:'Действие12',
				},
				{
					text:'Скопировать',
				},
				{
					text:'Действие5',
				},
				{
					text:'Подменю',
				},
				{
					text:'Действие13',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие14',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие7',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Добавить',
				},
				{
					text:'Действие8',
				},
				{
					text:'Изменить',
				},
				{
					text:'Действие6',
				},
			]
		},
					]
				},
				{
					title:'ЗаявлениеНаВыплатуПособия',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Фамилия',
			style: 'position:absolute;left:65px;top:6px;width:190px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Имя',
			style: 'position:absolute;left:309px;top:6px;width:190px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Отчество',
			style: 'position:absolute;left:570px;top:6px;width:190px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидДокумента',
			style: 'position:absolute;left:103px;top:54px;width:244px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СерияДокумента',
			style: 'position:absolute;left:400px;top:54px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерДокумента',
			style: 'position:absolute;left:536px;top:54px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'АдресПочтовыйВФорме',
			style: 'position:absolute;left:203px;top:203px;width:337px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаВыдачиДокумента',
			style: 'position:absolute;left:672px;top:54px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаДействияДокумента',
			style: 'position:absolute;left:341px;top:79px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Банк',
			style: 'position:absolute;left:203px;top:153px;width:366px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерЛицевогоСчета',
			style: 'position:absolute;left:624px;top:153px;width:136px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НаименованиеБанка',
			style: 'position:absolute;left:132px;top:178px;width:290px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'БИКБанка',
			style: 'position:absolute;left:672px;top:178px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДолжностьУполномоченного',
			style: 'position:absolute;left:358px;top:341px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Уполномоченный',
			style: 'position:absolute;left:181px;top:341px;width:110px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаОбновитьДанныеСотрудника',
			text: 'Обновить',
			style: 'position:absolute;left:627px;top:289px;width:133px;height:21px;',
		},
		{
			xtype: 'button',
			name: 'ПечатьЗаявление',
			text: 'Заявление',
			style: 'position:absolute;left:627px;top:314px;width:133px;height:21px;',
		},
		{
			xtype: 'button',
			name: 'ПечатьБланкЗаявления',
			text: 'Бланк заявления',
			style: 'position:absolute;left:627px;top:339px;width:133px;height:21px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:227px;width:618px;height:48px;',
			height: 48,width: 618,
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
			xtype: 'textfield',
			hideLabel: true,
			name: 'КемВыданДокумент',
			style: 'position:absolute;left:77px;top:79px;width:178px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КоррСчет',
			style: 'position:absolute;left:496px;top:178px;width:136px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОписаниеДокументаНаПроживание',
			style: 'position:absolute;left:580px;top:79px;width:180px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'АдресРегистрацииВФорме',
			style: 'position:absolute;left:138px;top:104px;width:474px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Телефон',
			style: 'position:absolute;left:672px;top:104px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТарифнаяСтавкаОклад',
			style: 'position:absolute;left:221px;top:297px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Телефон1',
			style: 'position:absolute;left:535px;top:341px;width:84px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'АдресПочтовыйКодПоКЛАДР',
			style: 'position:absolute;left:624px;top:203px;width:136px;height:19px;',
		},
					]
				},
				{
					title:'Документы',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:56px;width:754px;height:203px;',
			height: 203,width: 754,
			columns:
			[
				{
					text:'Очередность',
				},
				{
					text:'Фамилия',
				},
				{
					text:'Имя',
				},
				{
					text:'Отчество',
				},
				{
					text:'ДатаРожденияРебенка',
				},
				{
					text:'НаРебенкаВыплачиваетсяПособие',
				},
				{
					text:'КолонкаПодтверждающийДокумент',
				},
				{
					text:'ВидПодтверждающегоДокумента',
				},
				{
					text:'ДатаДокумента',
				},
				{
					text:'СерияДокумента',
				},
				{
					text:'НомерДокумента',
				},
				{
					text:'НаименованиеПодтверждающегоДокумента',
				},
				{
					text:'НаличиеРешенияСудаОЛишенииПрав',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаСправкиОНеполученииПособияОтОтца',
			style: 'position:absolute;left:175px;top:291px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерСправкиОНеполученииПособияОтОтца',
			style: 'position:absolute;left:292px;top:291px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаСправкиОНеполученииПособияОтМатери',
			style: 'position:absolute;left:175px;top:316px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерСправкиОНеполученииПособияОтМатери',
			style: 'position:absolute;left:292px;top:316px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаСправкиПоДругимМестамРаботы',
			style: 'position:absolute;left:175px;top:341px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерСправкиПоДругимМестамРаботы',
			style: 'position:absolute;left:292px;top:341px;width:80px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:30px;width:754px;height:24px;',
			items:
			[
				{
					text:'Действие3',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие5',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие1',
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
			name: 'ДатаНачала',
			style: 'position:absolute;left:106px;top:81px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОкончания',
			style: 'position:absolute;left:206px;top:81px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:478px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:578px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:478px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:564px;top:494px;width:83px;height:33px;',
			height: 33,width: 83,
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
			xtype: 'tabpanel',
			style: 'position:absolute;left:647px;top:494px;width:129px;height:33px;',
			height: 33,width: 129,
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
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:555px;width:371px;height:25px;',
			items:
			[
				{
					text:'Исправить',
				},
				{
					text:'ОтменитьИсправление',
				},
			]
		},
	]
});