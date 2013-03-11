Ext.define('Документы.НачислениеОтпускаРаботникамОрганизаций.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 580,width: 679,
	iconCls: 'bogus',
	title: 'Начисление отпуска сотрудникам организации',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:452px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:552px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:113px;top:33px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:452px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:679px;height:25px;',
			items:
			[
				{
					text:'Действие6',
				},
				{
					text:'РедактироватьКодНомер',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие4',
				},
				{
					text:'Подменю1',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие3',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие4',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ДействиеОткрытьСвойства1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие5',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Подменю1',
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
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие1',
				},
				{
					text:'ДействиеОткрытьКатегории1',
				},
				{
					text:'Разделитель4',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:555px;width:679px;height:25px;',
			items:
			[
				{
					text:'Разделитель1',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодРегистрации',
			style: 'position:absolute;left:113px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:104px;top:528px;width:568px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Сотрудник',
			style: 'position:absolute;left:113px;top:82px;width:220px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:106px;width:664px;height:380px;',
			height: 380,width: 664,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНачалаОсновногоОтпуска',
			style: 'position:absolute;left:141px;top:52px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОкончанияОсновногоОтпуска',
			style: 'position:absolute;left:248px;top:52px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОкончанияДополнительногоОтпуска',
			style: 'position:absolute;left:248px;top:151px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНачалаДополнительногоОтпуска',
			style: 'position:absolute;left:141px;top:151px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПорядокРасчетаОсновногоОтпуска',
			style: 'position:absolute;left:211px;top:100px;width:128px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидРасчетаДополнительногоОтпуска',
			style: 'position:absolute;left:141px;top:175px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПроцентОплаты',
			style: 'position:absolute;left:467px;top:175px;width:58px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДнейЧасовКомпенсацииОтпуска',
			style: 'position:absolute;left:141px;top:223px;width:41px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПорядокРасчетаКомпенсацииОтпуска',
			style: 'position:absolute;left:411px;top:223px;width:138px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'РабочийГодС',
			style: 'position:absolute;left:141px;top:76px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'РабочийГодПо',
			style: 'position:absolute;left:248px;top:76px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДнейДопОтпуска',
			style: 'position:absolute;left:355px;top:151px;width:27px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДнейОтпуска',
			style: 'position:absolute;left:355px;top:52px;width:27px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНачалаСобытия',
			style: 'position:absolute;left:131px;top:6px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаРассчитатьВсе',
			text: '',
			style: 'position:absolute;left:6px;top:282px;width:82px;height:71px;',
		},
					]
				},
				{
					title:'Начисления',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:649px;height:291px;',
			height: 291,width: 649,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'НомерСтроки',
				},
				{
					text:'ДатаНачала',
				},
				{
					text:'ДатаОкончания',
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
					text:'НаименованиеПоказатель2',
				},
				{
					text:'Показатель2',
				},
				{
					text:'НаименованиеПоказатель3',
				},
				{
					text:'Показатель3',
				},
				{
					text:'НаименованиеПоказатель4',
				},
				{
					text:'Показатель4',
				},
				{
					text:'НаименованиеПоказатель5',
				},
				{
					text:'Показатель5',
				},
				{
					text:'НаименованиеПоказатель6',
				},
				{
					text:'Показатель6',
				},
				{
					text:'Результат',
				},
				{
					text:'ОтработаноДней',
				},
				{
					text:'ОтработаноЧасов',
				},
				{
					text:'ОплаченоДнейЧасов',
				},
				{
					text:'ПодразделениеОрганизации',
				},
				{
					text:'Сторно',
				},
				{
					text:'НормаДней',
				},
				{
					text:'НормаЧасов',
				},
				{
					text:'НормаДнейПоПятидневке',
				},
				{
					text:'ОтработаноДнейПоПятидневке',
				},
				{
					text:'НормаЧасовПоПятидневке',
				},
				{
					text:'ОтработаноЧасовПоПятидневке',
				},
				{
					text:'ПериодРасчетаСреднегоЗаработкаНачало',
				},
				{
					text:'ПериодРасчетаСреднегоЗаработкаОкончание',
				},
				{
					text:'ДатаНачалаСобытия',
				},
				{
					text:'СторнируемыйДокумент',
				},
				{
					text:'ЧислоМесяцев',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:649px;height:24px;',
			items:
			[
				{
					text:'Действие2',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие5',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие8',
				},
				{
					text:'РассчитатьНачисления',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие1',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:68px;width:649px;height:24px;',
			items:
			[
				{
					text:'Действие4',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие10',
				},
				{
					text:'Действие14',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие8',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие13',
				},
				{
					text:'Действие12',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие',
				},
				{
					text:'Подменю',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие3',
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
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодРасчетаСреднегоЗаработкаНачало',
			style: 'position:absolute;left:42px;top:25px;width:90px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодРасчетаСреднегоЗаработкаОкончание',
			style: 'position:absolute;left:160px;top:25px;width:90px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаВыбораПериода',
			text: '...',
			style: 'position:absolute;left:252px;top:25px;width:20px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаРассчитатьНачисления',
			text: 'Рассчитать начисления',
			style: 'position:absolute;left:6px;top:320px;width:130px;height:34px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:50px;width:656px;height:267px;',
			height: 267,width: 656,
			items:
			[
				{
					title:'РасчетСреднегоПоКалендарным',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:21px;width:656px;height:24px;',
			items:
			[
				{
					text:'Действие9',
				},
				{
					text:'Действие11',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие14',
				},
				{
					text:'РассчитатьСреднийЗаработок',
				},
				{
					text:'Действие15',
				},
				{
					text:'Действие13',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие12',
				},
				{
					text:'Действие17',
				},
				{
					text:'Действие10',
				},
				{
					text:'Действие16',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:45px;width:656px;height:222px;',
			height: 222,width: 656,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'ВидРасчета',
				},
				{
					text:'Результат',
				},
				{
					text:'ОтработаноДней',
				},
				{
					text:'ОтработаноПоПятидневке',
				},
				{
					text:'НормаПоПятидневке',
				},
				{
					text:'БазовыйПериодНачало',
				},
				{
					text:'БазовыйПериодКонец',
				},
				{
					text:'КоэффициентИндексации',
				},
				{
					text:'ЧислоМесяцев',
				},
			]
		},
					]
				},
				{
					title:'РасчетСреднегоПоШестидневке',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:45px;width:656px;height:222px;',
			height: 222,width: 656,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'ВидРасчета',
				},
				{
					text:'Результат',
				},
				{
					text:'ОтработаноДней',
				},
				{
					text:'ОтработаноПоПятидневке',
				},
				{
					text:'НормаПоПятидневке',
				},
				{
					text:'БазовыйПериодНачало',
				},
				{
					text:'БазовыйПериодКонец',
				},
				{
					text:'КоэффициентИндексации',
				},
				{
					text:'ЧислоМесяцев',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:21px;width:656px;height:24px;',
			items:
			[
				{
					text:'Действие12',
				},
				{
					text:'Действие15',
				},
				{
					text:'Действие9',
				},
				{
					text:'РассчитатьСреднийЗаработок',
				},
				{
					text:'Действие10',
				},
				{
					text:'Действие14',
				},
				{
					text:'Действие16',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие17',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие13',
				},
				{
					text:'Действие11',
				},
			]
		},
					]
				},
				{
					title:'ОбаРасчетаСреднего',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:16px;width:656px;height:24px;',
			items:
			[
				{
					text:'Действие9',
				},
				{
					text:'Действие10',
				},
				{
					text:'Действие15',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие11',
				},
				{
					text:'Действие13',
				},
				{
					text:'РассчитатьСреднийЗаработок',
				},
				{
					text:'Действие16',
				},
				{
					text:'Действие17',
				},
				{
					text:'Действие14',
				},
				{
					text:'Действие12',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:40px;width:656px;height:97px;',
			height: 97,width: 656,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'ВидРасчета',
				},
				{
					text:'Результат',
				},
				{
					text:'ОтработаноДней',
				},
				{
					text:'ОтработаноПоПятидневке',
				},
				{
					text:'НормаПоПятидневке',
				},
				{
					text:'БазовыйПериодНачало',
				},
				{
					text:'БазовыйПериодКонец',
				},
				{
					text:'КоэффициентИндексации',
				},
				{
					text:'ЧислоМесяцев',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:183px;width:656px;height:84px;',
			height: 84,width: 656,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'ВидРасчета',
				},
				{
					text:'Результат',
				},
				{
					text:'ОтработаноДней',
				},
				{
					text:'ОтработаноПоПятидневке',
				},
				{
					text:'НормаПоПятидневке',
				},
				{
					text:'БазовыйПериодНачало',
				},
				{
					text:'БазовыйПериодКонец',
				},
				{
					text:'КоэффициентИндексации',
				},
				{
					text:'ЧислоМесяцев',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:159px;width:656px;height:24px;',
			items:
			[
				{
					text:'Действие10',
				},
				{
					text:'Действие9',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие11',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие17',
				},
				{
					text:'Действие14',
				},
				{
					text:'Действие16',
				},
				{
					text:'Действие12',
				},
				{
					text:'Действие15',
				},
				{
					text:'РассчитатьСреднийЗаработок',
				},
				{
					text:'Действие13',
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
					title:'ЗаявлениеНаВыплатуПособия',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Фамилия',
			style: 'position:absolute;left:65px;top:6px;width:160px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Имя',
			style: 'position:absolute;left:271px;top:6px;width:160px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Отчество',
			style: 'position:absolute;left:496px;top:6px;width:160px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидДокумента',
			style: 'position:absolute;left:103px;top:56px;width:276px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СерияДокумента',
			style: 'position:absolute;left:423px;top:56px;width:92px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерДокумента',
			style: 'position:absolute;left:564px;top:56px;width:92px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'АдресПочтовыйВФорме',
			style: 'position:absolute;left:203px;top:206px;width:453px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаВыдачиДокумента',
			style: 'position:absolute;left:57px;top:81px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаДействияДокумента',
			style: 'position:absolute;left:564px;top:81px;width:92px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Банк',
			style: 'position:absolute;left:203px;top:156px;width:236px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерЛицевогоСчета',
			style: 'position:absolute;left:500px;top:156px;width:156px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НаименованиеБанка',
			style: 'position:absolute;left:132px;top:181px;width:197px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'БИКБанка',
			style: 'position:absolute;left:564px;top:181px;width:92px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДолжностьУполномоченного',
			style: 'position:absolute;left:203px;top:281px;width:206px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Уполномоченный',
			style: 'position:absolute;left:203px;top:256px;width:206px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаОбновитьДанныеСотрудника',
			text: 'Обновить',
			style: 'position:absolute;left:535px;top:283px;width:121px;height:21px;',
		},
		{
			xtype: 'button',
			name: 'ПечатьЗаявление',
			text: 'Заявление',
			style: 'position:absolute;left:535px;top:308px;width:121px;height:21px;',
		},
		{
			xtype: 'button',
			name: 'ПечатьБланкЗаявления',
			text: 'Бланк заявления',
			style: 'position:absolute;left:535px;top:333px;width:121px;height:21px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КоррСчет',
			style: 'position:absolute;left:393px;top:181px;width:136px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КемВыданДокумент',
			style: 'position:absolute;left:213px;top:81px;width:267px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'АдресРегистрацииВФорме',
			style: 'position:absolute;left:139px;top:106px;width:341px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Телефон',
			style: 'position:absolute;left:564px;top:106px;width:92px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Телефон1',
			style: 'position:absolute;left:203px;top:306px;width:206px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:555px;width:262px;height:25px;',
			items:
			[
				{
					text:'ОтменитьИсправление',
				},
				{
					text:'Исправить',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:452px;top:490px;width:83px;height:33px;',
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
			style: 'position:absolute;left:543px;top:490px;width:129px;height:33px;',
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
	]
});