Ext.define('Документы.РеестрСведенийВФССОПособияхПоНетрудоспособности.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 600,width: 1000,
	iconCls: 'bogus',
	title: 'Реестр сведений в ФСС о пособиях по нетрудоспособности',
	
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
			style: 'position:absolute;left:96px;top:548px;width:896px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:1000px;height:25px;',
			items:
			[
				{
					text:'Разделитель3',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие7',
				},
				{
					text:'Разделитель',
				},
				{
					text:'РедактироватьКодНомер',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие4',
				},
				{
					text:'ОткрытьКатегории',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие1',
				},
				{
					text:'Подменю',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие3',
				},
				{
					text:'ОткрытьСвойства',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие6',
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
					text:'Действие4',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:575px;width:1000px;height:25px;',
			items:
			[
				{
					text:'ОсновныеДействияФормыСохранить',
				},
				{
					text:'Файл',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'НаДискетку',
				},
				{
					text:'ОсновныеДействияФормыОК',
				},
				{
					text:'РазделительПечать',
				},
				{
					text:'Разделитель1',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:81px;width:984px;height:463px;',
			height: 463,width: 984,
			items:
			[
				{
					title:'Пособия',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:970px;height:24px;',
			items:
			[
				{
					text:'Действие3',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ПоЛисткамНетрудоспособности',
				},
				{
					text:'Действие2',
				},
				{
					text:'ПодменюЗаполнить',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Подбор',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие4',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:33px;width:292px;height:404px;',
			height: 404,width: 292,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'Сотрудник',
				},
				{
					text:'ЛистокНетрудоспособности',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:303px;top:33px;width:673px;height:404px;',
			height: 404,width: 673,
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
			style: 'position:absolute;left:61px;top:6px;width:170px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Имя',
			style: 'position:absolute;left:272px;top:6px;width:170px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Отчество',
			style: 'position:absolute;left:505px;top:6px;width:160px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СерияДокумента',
			style: 'position:absolute;left:438px;top:99px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерДокумента',
			style: 'position:absolute;left:577px;top:99px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'АдресПочтовыйВФорме',
			style: 'position:absolute;left:197px;top:330px;width:245px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаВыдачиДокумента',
			style: 'position:absolute;left:61px;top:122px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Банк',
			style: 'position:absolute;left:197px;top:284px;width:277px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерЛицевогоСчета',
			style: 'position:absolute;left:529px;top:284px;width:136px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НаименованиеБанка',
			style: 'position:absolute;left:129px;top:307px;width:205px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'БИКБанка',
			style: 'position:absolute;left:577px;top:307px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтраховойНомерПФР',
			style: 'position:absolute;left:61px;top:52px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИНН',
			style: 'position:absolute;left:61px;top:29px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'АдресРегистрацииВФорме',
			style: 'position:absolute;left:153px;top:145px;width:289px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидДокумента',
			style: 'position:absolute;left:94px;top:99px;width:296px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КемВыданДокумент',
			style: 'position:absolute;left:215px;top:122px;width:450px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаРождения',
			style: 'position:absolute;left:453px;top:29px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Пол',
			style: 'position:absolute;left:577px;top:29px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаПредставленияПакетаДокументов',
			style: 'position:absolute;left:577px;top:214px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидПособия',
			style: 'position:absolute;left:94px;top:214px;width:262px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'ОбновитьДанныеЗЛ',
			text: 'Обновить',
			style: 'position:absolute;left:6px;top:357px;width:82px;height:21px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтатусНалогоплательщика',
			style: 'position:absolute;left:211px;top:29px;width:150px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КоррСчет',
			style: 'position:absolute;left:401px;top:307px;width:136px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОписаниеДокументаНаПроживание',
			style: 'position:absolute;left:153px;top:168px;width:512px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'АдресПочтовыйКодПоКЛАДР',
			style: 'position:absolute;left:529px;top:330px;width:136px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'АдресРегистрацииКодПоКЛАДР',
			style: 'position:absolute;left:529px;top:145px;width:136px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КодПричиныПерерасчета',
			style: 'position:absolute;left:398px;top:237px;width:40px;height:19px;',
		},
					]
				},
				{
					title:'ЛистокНетрудоспособности',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаСправкиБеременной',
			style: 'position:absolute;left:360px;top:328px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаВыдачиБольничного',
			style: 'position:absolute;left:194px;top:30px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КодПричиныНетрудоспособности',
			style: 'position:absolute;left:188px;top:138px;width:40px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДополнительныйКодПричиныНетрудоспособности',
			style: 'position:absolute;left:286px;top:138px;width:40px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВторойКодПричиныНетрудоспособности',
			style: 'position:absolute;left:385px;top:138px;width:40px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаИзмененияКодаПричиныНетрудоспособности',
			style: 'position:absolute;left:49px;top:186px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерВходящего',
			style: 'position:absolute;left:194px;top:6px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерПервичногоБольничного',
			style: 'position:absolute;left:458px;top:6px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'АдресЛПУВФорме',
			style: 'position:absolute;left:57px;top:108px;width:387px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НаименованиеЛПУ',
			style: 'position:absolute;left:101px;top:84px;width:427px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОГРН_ЛПУ',
			style: 'position:absolute;left:577px;top:84px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерЛисткаПоОсновномуМестуРаботы',
			style: 'position:absolute;left:286px;top:162px;width:139px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОкончанияПутевки',
			style: 'position:absolute;left:187px;top:186px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерПутевки',
			style: 'position:absolute;left:369px;top:186px;width:79px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОГРН_Санатория',
			style: 'position:absolute;left:544px;top:186px;width:101px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'УходЗаРодственникомМесяцев1',
			style: 'position:absolute;left:115px;top:240px;width:24px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'УходЗаРодственникомЛет1',
			style: 'position:absolute;left:65px;top:240px;width:24px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'УходЗаРодственникомРодственнаяСвязь1',
			style: 'position:absolute;left:268px;top:240px;width:40px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'УходЗаРодственникомФИО1',
			style: 'position:absolute;left:341px;top:240px;width:186px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'УходЗаРодственникомМесяцев2',
			style: 'position:absolute;left:115px;top:294px;width:24px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'УходЗаРодственникомЛет2',
			style: 'position:absolute;left:65px;top:294px;width:24px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'УходЗаРодственникомРодственнаяСвязь2',
			style: 'position:absolute;left:268px;top:294px;width:40px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'УходЗаРодственникомФИО2',
			style: 'position:absolute;left:341px;top:294px;width:186px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'УходЗаРодственникомИспользованоДней1',
			style: 'position:absolute;left:641px;top:240px;width:24px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'УходЗаРодственникомИспользованоДней2',
			style: 'position:absolute;left:641px;top:294px;width:24px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерСправкиБеременной',
			style: 'position:absolute;left:503px;top:328px;width:101px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'АдресЛПУКодПоКЛАДР',
			style: 'position:absolute;left:529px;top:108px;width:136px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЛПУ',
			style: 'position:absolute;left:250px;top:60px;width:220px;height:19px;',
		},
					]
				},
				{
					title:'ЛистокНетрудоспособностиПродолжение',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодНахожденияВСтационареСРебенкомС',
			style: 'position:absolute;left:235px;top:54px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодНахожденияВСтационареСРебенкомПо',
			style: 'position:absolute;left:360px;top:54px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КодНарушенияРежима',
			style: 'position:absolute;left:188px;top:6px;width:40px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаРегистрацииДокументовМСЭ',
			style: 'position:absolute;left:438px;top:108px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаВыходаНаРаботу',
			style: 'position:absolute;left:129px;top:335px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНарушенияРежима',
			style: 'position:absolute;left:283px;top:6px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'УважительнаяПричинаНарушенияРежима',
			style: 'position:absolute;left:235px;top:30px;width:430px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНаправленияВБюроМСЭ',
			style: 'position:absolute;left:180px;top:108px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОсвидетельствованияМСЭ',
			style: 'position:absolute;left:180px;top:132px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерЛисткаПродолжения',
			style: 'position:absolute;left:557px;top:335px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НовыйСтатусНетрудопособного',
			style: 'position:absolute;left:277px;top:335px;width:40px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНовыйСтатусНетрудопособного',
			style: 'position:absolute;left:355px;top:335px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОсвобождениеС1',
			style: 'position:absolute;left:26px;top:186px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОсвобождениеПо1',
			style: 'position:absolute;left:138px;top:186px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДолжностьВрача1',
			style: 'position:absolute;left:317px;top:186px;width:82px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ФИОВрача1',
			style: 'position:absolute;left:435px;top:186px;width:112px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОсвобождениеС2',
			style: 'position:absolute;left:26px;top:234px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОсвобождениеПо2',
			style: 'position:absolute;left:138px;top:234px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДолжностьВрача2',
			style: 'position:absolute;left:317px;top:234px;width:82px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ФИОВрача2',
			style: 'position:absolute;left:435px;top:234px;width:112px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОсвобождениеС3',
			style: 'position:absolute;left:26px;top:282px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОсвобождениеПо3',
			style: 'position:absolute;left:138px;top:282px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДолжностьВрача3',
			style: 'position:absolute;left:317px;top:282px;width:82px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ФИОВрача3',
			style: 'position:absolute;left:435px;top:282px;width:112px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ГруппаИнвалидности',
			style: 'position:absolute;left:532px;top:132px;width:40px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИдентификационныйНомерВрача1',
			style: 'position:absolute;left:605px;top:186px;width:60px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ФИОВрачаПредседателяВК1',
			style: 'position:absolute;left:354px;top:210px;width:150px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИдентификационныйНомерВрача2',
			style: 'position:absolute;left:605px;top:234px;width:60px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ФИОВрачаПредседателяВК2',
			style: 'position:absolute;left:354px;top:258px;width:150px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИдентификационныйНомерВрача3',
			style: 'position:absolute;left:605px;top:282px;width:60px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ФИОВрачаПредседателяВК3',
			style: 'position:absolute;left:354px;top:306px;width:150px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДолжностьВрача4',
			style: 'position:absolute;left:197px;top:210px;width:119px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИдентификационныйНомерВрача4',
			style: 'position:absolute;left:568px;top:210px;width:60px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДолжностьВрача5',
			style: 'position:absolute;left:197px;top:258px;width:119px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДолжностьВрача6',
			style: 'position:absolute;left:197px;top:306px;width:119px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИдентификационныйНомерВрача5',
			style: 'position:absolute;left:569px;top:258px;width:60px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИдентификационныйНомерВрача6',
			style: 'position:absolute;left:568px;top:306px;width:60px;height:19px;',
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
			name: 'ПериодПростояС',
			style: 'position:absolute;left:108px;top:6px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодПростояПо',
			style: 'position:absolute;left:226px;top:6px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтажМесяцев',
			style: 'position:absolute;left:171px;top:60px;width:24px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтажЛет',
			style: 'position:absolute;left:121px;top:60px;width:24px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтажБезНестраховыхПериодовЛет',
			style: 'position:absolute;left:451px;top:60px;width:24px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтажБезНестраховыхПериодовСтажМесяцев',
			style: 'position:absolute;left:503px;top:60px;width:24px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'УсловияИсчисленияКод1',
			style: 'position:absolute;left:121px;top:84px;width:40px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'УсловияИсчисленияКод2',
			style: 'position:absolute;left:171px;top:84px;width:40px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'УсловияИсчисленияКод3',
			style: 'position:absolute;left:218px;top:84px;width:40px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНачалаОплаты',
			style: 'position:absolute;left:256px;top:30px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОкончанияОплаты',
			style: 'position:absolute;left:376px;top:30px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодРасчетаСреднегоЗаработкаНачало',
			style: 'position:absolute;left:154px;top:258px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодРасчетаСреднегоЗаработкаОкончание',
			style: 'position:absolute;left:268px;top:258px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПервыйГодРасчета',
			style: 'position:absolute;left:24px;top:186px;width:40px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВторойГодРасчета',
			style: 'position:absolute;left:351px;top:186px;width:40px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТарифнаяСтавкаОклад',
			style: 'position:absolute;left:451px;top:359px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЗаработокЗаПериодРасчета',
			style: 'position:absolute;left:154px;top:282px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'РайонныйКоэффициент',
			style: 'position:absolute;left:103px;top:108px;width:40px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КалендарныхДнейРасчетногоПериода',
			style: 'position:absolute;left:398px;top:282px;width:40px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаЗаявленияОЗаменеРасчетногоГода',
			style: 'position:absolute;left:250px;top:210px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Район',
			style: 'position:absolute;left:189px;top:108px;width:194px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЗаработокПервыйГодРасчета',
			style: 'position:absolute;left:233px;top:186px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СреднийДневнойЗаработок',
			style: 'position:absolute;left:154px;top:359px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЗамененныйПервыйГодРасчета',
			style: 'position:absolute;left:124px;top:186px;width:40px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЗамененныйВторойГодРасчета',
			style: 'position:absolute;left:450px;top:186px;width:40px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЗаработокПервыйГодРасчета',
			style: 'position:absolute;left:557px;top:186px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'МРОТ1',
			style: 'position:absolute;left:373px;top:330px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СреднийЗаработокНаПериодПростоя',
			style: 'position:absolute;left:451px;top:6px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВыплатаЗаСчетФедеральногоБюджета',
			style: 'position:absolute;left:465px;top:84px;width:200px;height:19px;',
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
			name: 'МРОТ',
			style: 'position:absolute;left:255px;top:78px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДоляВремени',
			style: 'position:absolute;left:255px;top:6px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СрочныйДоговорС',
			style: 'position:absolute;left:319px;top:30px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СрочныйДоговорПо',
			style: 'position:absolute;left:434px;top:30px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИнаяПолезнаяИнформация',
			style: 'position:absolute;left:6px;top:128px;width:659px;height:90px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КоличествоСтраниц',
			style: 'position:absolute;left:264px;top:226px;width:24px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаЗаполнитьИнаяПолезнаяИнформацияВозможно',
			text: 'Заполнить по введенным сведениям',
			style: 'position:absolute;left:349px;top:107px;width:316px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНачалаСобытия',
			style: 'position:absolute;left:255px;top:54px;width:88px;height:19px;',
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
			style: 'position:absolute;left:258px;top:84px;width:404px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'ОбновитьДанныеСтрахователя',
			text: 'Обновить',
			style: 'position:absolute;left:6px;top:416px;width:82px;height:21px;',
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