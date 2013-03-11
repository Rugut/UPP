Ext.define('Документы.РеестрСведенийВФССОЕжемесячныхПособияхПоУходу.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 580,width: 991,
	iconCls: 'bogus',
	title: 'Реестр сведений в ФСС о ежемесячных пособиях по уходу',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:413px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:520px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:96px;top:33px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:96px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:528px;width:887px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:991px;height:25px;',
			items:
			[
				{
					text:'Разделитель1',
				},
				{
					text:'ОткрытьСвойства',
				},
				{
					text:'Подменю',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'ОткрытьКатегории',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'РедактироватьКодНомер',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие7',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Действие3',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие3',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие5',
				},
				{
					text:'Подменю',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:555px;width:991px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'РазделительПечать',
				},
				{
					text:'ОсновныеДействияФормыСохранить',
				},
				{
					text:'НаДискетку',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
				{
					text:'ОсновныеДействияФормыОК',
				},
				{
					text:'Файл',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:81px;width:975px;height:441px;',
			height: 441,width: 975,
			items:
			[
				{
					title:'Пособия',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:961px;height:24px;',
			items:
			[
				{
					text:'Действие3',
				},
				{
					text:'ПоПриказамНаОтпуск',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие5',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Подбор',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие4',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'ПодменюЗаполнить',
				},
				{
					text:'Действие8',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:33px;width:376px;height:380px;',
			height: 380,width: 376,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'Сотрудник',
				},
				{
					text:'ПриказНаОтпускПоУходуЗаРебенком',
				},
				{
					text:'ДатаНачала',
				},
				{
					text:'ДатаОкончания',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:388px;top:33px;width:579px;height:380px;',
			height: 380,width: 579,
			items:
			[
				{
					title:'ДанныеЗастрахованногоЛица',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Фамилия',
			style: 'position:absolute;left:61px;top:6px;width:150px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Имя',
			style: 'position:absolute;left:245px;top:6px;width:150px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Отчество',
			style: 'position:absolute;left:456px;top:6px;width:115px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтраховойНомерПФР',
			style: 'position:absolute;left:61px;top:30px;width:150px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'АдресРегистрацииВФорме',
			style: 'position:absolute;left:146px;top:210px;width:425px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'ОбновитьДанныеЗЛ',
			text: 'Обновить',
			style: 'position:absolute;left:6px;top:333px;width:82px;height:21px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИНН',
			style: 'position:absolute;left:61px;top:78px;width:150px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаРождения',
			style: 'position:absolute;left:307px;top:30px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Пол',
			style: 'position:absolute;left:456px;top:30px;width:115px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтатусНалогоплательщика',
			style: 'position:absolute;left:365px;top:78px;width:206px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СерияДокумента',
			style: 'position:absolute;left:338px;top:162px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерДокумента',
			style: 'position:absolute;left:483px;top:162px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаВыдачиДокумента',
			style: 'position:absolute;left:47px;top:186px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидДокумента',
			style: 'position:absolute;left:90px;top:162px;width:197px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КемВыданДокумент',
			style: 'position:absolute;left:200px;top:186px;width:371px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Статус',
			style: 'position:absolute;left:245px;top:54px;width:150px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОписаниеДокументаНаПроживание',
			style: 'position:absolute;left:146px;top:234px;width:425px;height:19px;',
		},
					]
				},
				{
					title:'ВыплатаПособия',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'АдресПочтовыйВФорме',
			style: 'position:absolute;left:197px;top:112px;width:155px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Банк',
			style: 'position:absolute;left:197px;top:64px;width:185px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерЛицевогоСчета',
			style: 'position:absolute;left:435px;top:64px;width:136px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НаименованиеБанка',
			style: 'position:absolute;left:129px;top:88px;width:114px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'БИКБанка',
			style: 'position:absolute;left:483px;top:88px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидДокументаНаЛьготы',
			style: 'position:absolute;left:90px;top:244px;width:215px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерДокументаНаЛьготы',
			style: 'position:absolute;left:483px;top:244px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаДокументаНаЛьготы',
			style: 'position:absolute;left:348px;top:244px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаПредставленияПакетаДокументов',
			style: 'position:absolute;left:220px;top:6px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КоррСчет',
			style: 'position:absolute;left:311px;top:88px;width:136px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'АдресПочтовыйКодПоКЛАДР',
			style: 'position:absolute;left:435px;top:112px;width:136px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВыплатаЗаСчетФедеральногоБюджета',
			style: 'position:absolute;left:422px;top:172px;width:149px;height:19px;',
		},
					]
				},
				{
					title:'Документы',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаСправкиОНеполученииПособияОтОтца',
			style: 'position:absolute;left:175px;top:285px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерСправкиОНеполученииПособияОтОтца',
			style: 'position:absolute;left:292px;top:285px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаСправкиОНеполученииПособияОтМатери',
			style: 'position:absolute;left:175px;top:310px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерСправкиОНеполученииПособияОтМатери',
			style: 'position:absolute;left:292px;top:310px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаСправкиПоДругимМестамРаботы',
			style: 'position:absolute;left:175px;top:335px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерСправкиПоДругимМестамРаботы',
			style: 'position:absolute;left:292px;top:335px;width:80px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:124px;width:565px;height:133px;',
			height: 133,width: 565,
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
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:98px;width:565px;height:24px;',
			items:
			[
				{
					text:'Действие1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие3',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерПриказаНаОтпускПоУходуЗаРебенком',
			style: 'position:absolute;left:452px;top:29px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаПриказаНаОтпускПоУходуЗаРебенком',
			style: 'position:absolute;left:308px;top:29px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерПриказаОЗаменеПослеродовогоОтпуска',
			style: 'position:absolute;left:452px;top:53px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаПриказаОЗаменеПослеродовогоОтпуска',
			style: 'position:absolute;left:308px;top:53px;width:88px;height:19px;',
		},
					]
				},
				{
					title:'РасчетПособия',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодРасчетаСреднегоЗаработкаНачало',
			style: 'position:absolute;left:340px;top:125px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодРасчетаСреднегоЗаработкаОкончание',
			style: 'position:absolute;left:455px;top:125px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПервыйГодРасчета',
			style: 'position:absolute;left:32px;top:54px;width:40px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВторойГодРасчета',
			style: 'position:absolute;left:32px;top:77px;width:40px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТарифнаяСтавкаОклад',
			style: 'position:absolute;left:340px;top:173px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЗаработокЗаПериодРасчета',
			style: 'position:absolute;left:162px;top:149px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КалендарныхДнейРасчетногоПериода',
			style: 'position:absolute;left:407px;top:149px;width:40px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаЗаявленияОЗаменеРасчетногоГода',
			style: 'position:absolute;left:246px;top:101px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЗаработокПервыйГодРасчета',
			style: 'position:absolute;left:246px;top:54px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СреднийМесячныйЗаработок',
			style: 'position:absolute;left:171px;top:234px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЗамененныйПервыйГодРасчета',
			style: 'position:absolute;left:132px;top:54px;width:40px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЗамененныйВторойГодРасчета',
			style: 'position:absolute;left:132px;top:77px;width:40px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЗаработокПервыйГодРасчета',
			style: 'position:absolute;left:246px;top:77px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'МРОТ1',
			style: 'position:absolute;left:340px;top:197px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДоляВремени',
			style: 'position:absolute;left:258px;top:272px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'РайонныйКоэффициент',
			style: 'position:absolute;left:103px;top:296px;width:40px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерЗаявленияОЗаменеРасчетногоГода',
			style: 'position:absolute;left:360px;top:101px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Район',
			style: 'position:absolute;left:188px;top:296px;width:194px;height:19px;',
		},
					]
				},
				{
					title:'Прочее',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИнаяПолезнаяИнформация',
			style: 'position:absolute;left:6px;top:199px;width:565px;height:130px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КоличествоСтраниц',
			style: 'position:absolute;left:264px;top:6px;width:45px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДокументыОснования',
			style: 'position:absolute;left:6px;top:64px;width:565px;height:106px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаЗаполнитьСписокПредставленныхДокументов',
			text: 'Заполнить по введенным сведениям о документах',
			style: 'position:absolute;left:6px;top:335px;width:316px;height:19px;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'ДанныеСтрахователя',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Руководитель',
			style: 'position:absolute;left:121px;top:162px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДолжностьРуководителя',
			style: 'position:absolute;left:439px;top:162px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'РегистрационныйНомерФСС',
			style: 'position:absolute;left:149px;top:108px;width:110px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДополнительныйКодФСС',
			style: 'position:absolute;left:382px;top:108px;width:110px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КодПодчиненностиФСС',
			style: 'position:absolute;left:602px;top:108px;width:60px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НаименованиеТерриториальногоОрганаФСС',
			style: 'position:absolute;left:258px;top:84px;width:709px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'ОбновитьДанныеСтрахователя',
			text: 'Обновить',
			style: 'position:absolute;left:6px;top:394px;width:82px;height:21px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИНН1',
			style: 'position:absolute;left:58px;top:30px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КПП',
			style: 'position:absolute;left:224px;top:30px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОГРН',
			style: 'position:absolute;left:391px;top:30px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ГлавныйБухгалтер',
			style: 'position:absolute;left:121px;top:186px;width:220px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Телефон',
			style: 'position:absolute;left:704px;top:57px;width:84px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'АдресЭлектроннойПочтыСоставителя',
			style: 'position:absolute;left:864px;top:57px;width:84px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'РеестрСоставил',
			style: 'position:absolute;left:464px;top:57px;width:176px;height:19px;',
		},
	]
});