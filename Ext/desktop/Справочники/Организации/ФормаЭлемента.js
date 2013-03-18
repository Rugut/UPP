Ext.define('Справочники.Организации.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:579px;height:669px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Организации',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьКод',
			text: 'Код:',
			style: 'position:absolute;left:470px;top:33px;width:36px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:507px;top:33px;width:64px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:33px;width:124px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:134px;top:33px;width:332px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПрефикс',
			text: 'Префикс:',
			style: 'position:absolute;left:222px;top:57px;width:56px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Префикс',
			style: 'position:absolute;left:279px;top:57px;width:40px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:579px;height:25px;',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'Действия',
					menu: [
				{
					text:'Файлы',
				},
				'-',
				{
					text:'Найти в списке',
				},
				'-',
				{
					text:'Перечитать',
				},
				{
					text:'Скопировать',
				},
				{
					text:'Записать',
				},
				{
					text:'Записать и закрыть',
				},
				'-',
				{
					xtype: 'splitbutton',
					text:'На основании',
					menu: [
				{
					text:'(Ввести на основании)',
				},
					]
				},
				'-',
				{
					text:'Закрыть',
				},
					]
				},
				'-',
				{
					text:'Найти в списке',
				},
				'-',
				{
					text:'Перечитать',
				},
				{
					text:'Скопировать',
				},
				'-',
				{
					xtype: 'splitbutton',
					text:'На основании',
					menu: [
					]
				},
				{
					xtype: 'splitbutton',
					text:'Перейти',
					menu: [
				{
					text:'',
				},
				{
					text:'',
				},
				{
					text:'',
				},
					]
				},
				'-',
				{
					text:'Файлы',
				},
				'-',
				{
					text:'Справка',
				},
				'-',
				{
					text:'Настройка доступа',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:644px;width:579px;height:25px;',
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
			xtype: 'label',
			name: 'НадписьГоловнаяОрганизация',
			text: 'Головная организация:',
			style: 'position:absolute;left:8px;top:280px;width:124px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ГоловнаяОрганизация',
			style: 'position:absolute;left:134px;top:280px;width:437px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименованиеПолное',
			text: 'Полное наименование:',
			style: 'position:absolute;left:8px;top:81px;width:124px;height:66px;text-align:left;',
		},
		{
			xtype: 'textarea',
			hideLabel: true,
			name: 'НаименованиеПолное',
			style: 'position:absolute;left:134px;top:81px;width:437px;height:66px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОсновнойБанковскийСчет',
			text: 'Осн. банковский счет:',
			style: 'position:absolute;left:8px;top:304px;width:124px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОсновнойБанковскийСчет',
			style: 'position:absolute;left:134px;top:304px;width:437px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:331px;width:563px;height:305px;',
			height: 305,width: 563,
			items:
			[
				{
					title:'Основные',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьИНН',
			text: 'ИНН:',
			style: 'position:absolute;left:21px;top:25px;width:62px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИНН',
			style: 'position:absolute;left:107px;top:25px;width:98px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКПП',
			text: 'КПП:',
			style: 'position:absolute;left:244px;top:25px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КПП',
			style: 'position:absolute;left:350px;top:25px;width:100px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКодИМНС',
			text: 'Код ИФНС:',
			style: 'position:absolute;left:21px;top:92px;width:62px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КодИМНС',
			style: 'position:absolute;left:107px;top:92px;width:49px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Серия и №:',
			style: 'position:absolute;left:194px;top:139px;width:57px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СвидетельствоСерияНомер',
			style: 'position:absolute;left:255px;top:139px;width:300px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'Дата выдачи:',
			style: 'position:absolute;left:21px;top:139px;width:72px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СвидетельствоДатаВыдачи',
			style: 'position:absolute;left:107px;top:139px;width:75px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСвидетельствоНаименованиеОргана',
			text: 'Наименование:',
			style: 'position:absolute;left:104px;top:178px;width:79px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СвидетельствоНаименованиеОргана',
			style: 'position:absolute;left:188px;top:178px;width:367px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСвидетельствоКодОргана',
			text: 'Код:',
			style: 'position:absolute;left:22px;top:178px;width:25px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СвидетельствоКодОргана',
			style: 'position:absolute;left:57px;top:178px;width:34px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаРегистрации',
			text: 'Дата гос. регистрации:',
			style: 'position:absolute;left:242px;top:49px;width:127px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаРегистрации',
			style: 'position:absolute;left:373px;top:49px;width:77px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОГРН',
			text: 'ОГРН:',
			style: 'position:absolute;left:21px;top:49px;width:62px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОГРН',
			style: 'position:absolute;left:107px;top:49px;width:98px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись13',
			text: 'Наим. ИФНС:',
			style: 'position:absolute;left:178px;top:92px;width:74px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НаименованиеИМНС',
			style: 'position:absolute;left:255px;top:92px;width:300px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьЦифровойИндексОбособленногоПодразделения',
			text: 'Цифровой индекс обособленного подразделения:',
			style: 'position:absolute;left:21px;top:225px;width:260px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЦифровойИндексОбособленногоПодразделения',
			style: 'position:absolute;left:288px;top:225px;width:80px;height:19px;',
		},
					]
				},
				{
					title:'Контактная информация',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:31px;width:549px;height:246px;',
			height: 246,width: 549,
			columns:
			[
				{
					text:'',
					width:'32',
				},
				{
					text:'Тип',
					width:'120',
				},
				{
					text:'Вид',
					width:'120',
				},
				{
					text:'Представление',
					width:'120',
				},
				{
					text:'Комментарий',
					width:'220',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:7px;width:549px;height:24px;',
			items:
			[
				{
					text:'&Добавить',
				},
				{
					text:'&Скопировать',
				},
				{
					text:'&Изменить',
				},
				{
					text:'&Удалить',
				},
				'-',
				{
					text:'Установить отбор и сортировку списка...',
				},
				{
					text:'Отбор по значению в текущей колонке',
				},
				{
					xtype: 'splitbutton',
					text:'История отборов',
					menu: [
					]
				},
				{
					text:'Отключить отбор',
				},
				'-',
				{
					text:'Командная панель контактной информации редактировать в диалоге',
				},
				'-',
				{
					text:'Основная',
				},
			]
		},
					]
				},
				{
					title:'Коды',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьКодПоОКПО',
			text: 'ОКПО:',
			style: 'position:absolute;left:216px;top:25px;width:37px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КодПоОКПО',
			style: 'position:absolute;left:257px;top:25px;width:107px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКодПоОКАТО',
			text: 'ОКАТО:',
			style: 'position:absolute;left:17px;top:25px;width:46px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Код:',
			style: 'position:absolute;left:17px;top:72px;width:26px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КодОКОПФ',
			style: 'position:absolute;left:66px;top:72px;width:28px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Наименование:',
			style: 'position:absolute;left:147px;top:72px;width:81px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НаименованиеОКОПФ',
			style: 'position:absolute;left:231px;top:72px;width:324px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Код:',
			style: 'position:absolute;left:17px;top:118px;width:26px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КодОКОПФ1',
			style: 'position:absolute;left:66px;top:118px;width:28px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'Наименование:',
			style: 'position:absolute;left:147px;top:118px;width:81px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НаименованиеОКОПФ1',
			style: 'position:absolute;left:231px;top:118px;width:324px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись15',
			text: 'Код:',
			style: 'position:absolute;left:17px;top:164px;width:26px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КодОКОПФ2',
			style: 'position:absolute;left:66px;top:164px;width:73px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись16',
			text: 'Наименование:',
			style: 'position:absolute;left:148px;top:164px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НаименованиеОКОПФ2',
			style: 'position:absolute;left:231px;top:164px;width:324px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКодОКОНХ',
			text: 'ОКОНХ:',
			style: 'position:absolute;left:412px;top:25px;width:46px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КодОКОНХ',
			style: 'position:absolute;left:464px;top:25px;width:91px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КодПоОКАТО',
			style: 'position:absolute;left:66px;top:25px;width:100px;height:19px;',
		},
					]
				},
				{
					title:'Расчет зарплаты',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьРегистрационныйНомерПФР',
			text: '№ в ПФР:',
			style: 'position:absolute;left:12px;top:130px;width:60px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'РегистрационныйНомерПФР',
			style: 'position:absolute;left:88px;top:130px;width:110px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРайонныйКоэффициент',
			text: 'Районный коэффициент (местный):',
			style: 'position:absolute;left:6px;top:31px;width:185px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'РайонныйКоэффициент',
			style: 'position:absolute;left:216px;top:31px;width:82px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРайонныйКоэффициентРФ',
			text: 'Районный коэффициент (федеральный):',
			style: 'position:absolute;left:6px;top:56px;width:208px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'РайонныйКоэффициентРФ',
			style: 'position:absolute;left:216px;top:56px;width:82px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'РегистрационныйНомерФСС',
			style: 'position:absolute;left:88px;top:178px;width:110px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись14',
			text: '№ в ФСС:',
			style: 'position:absolute;left:12px;top:178px;width:60px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьТерриториальныеУсловияПФР',
			text: 'Территориальные условия ПФР:',
			style: 'position:absolute;left:6px;top:81px;width:181px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТерриториальныеУсловияПФР',
			style: 'position:absolute;left:216px;top:81px;width:82px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидСтавокЕСНиПФР',
			style: 'position:absolute;left:216px;top:6px;width:339px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись17',
			text: 'Шкала ставок ЕСН, взносов в ПФР:',
			style: 'position:absolute;left:6px;top:6px;width:208px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименованиеТерриториальногоОрганаПФР',
			text: 'Наименование территориального ПФР (краткое):',
			style: 'position:absolute;left:12px;top:154px;width:257px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НаименованиеТерриториальногоОрганаПФР',
			style: 'position:absolute;left:297px;top:154px;width:258px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКодОрганаПФР',
			text: 'Код органа ПФР:',
			style: 'position:absolute;left:205px;top:130px;width:89px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КодОрганаПФР',
			style: 'position:absolute;left:297px;top:130px;width:110px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДополнительныйКодФСС',
			text: 'Доп. код ФСС:',
			style: 'position:absolute;left:205px;top:178px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКодПодчиненностиФСС',
			text: 'Код подч-ти ФСС:',
			style: 'position:absolute;left:408px;top:178px;width:96px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДополнительныйКодФСС',
			style: 'position:absolute;left:297px;top:178px;width:104px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КодПодчиненностиФСС',
			style: 'position:absolute;left:505px;top:178px;width:50px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НаименованиеТерриториальногоОрганаФСС',
			style: 'position:absolute;left:297px;top:202px;width:258px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименованиеТерриториальногоОрганаФСС',
			text: 'Наименование территориального органа ФСС:',
			style: 'position:absolute;left:12px;top:202px;width:257px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись26',
			text: '№ в ТФОМС:',
			style: 'position:absolute;left:12px;top:225px;width:69px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'РегистрационныйНомерТФОМС',
			style: 'position:absolute;left:88px;top:221px;width:110px;height:19px;',
		},
					]
				},
				{
					title:'Индивидуальный предприниматель',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись30',
			text: 'Сведения о регистрации предпринимателя, как плательщика страховых взносов за самого себя (пп. 2 п. 1 ст. 5 Федерального закона от 24.07.2009 № 212-ФЗ).',
			style: 'position:absolute;left:6px;top:6px;width:549px;height:28px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:40px;width:555px;height:130px;',
			height: 130,width: 555,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьИПРегистрационныйНомерПФР',
			text: 'Регистрационный номер в ПФР:',
			style: 'position:absolute;left:0px;top:0px;width:169px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИПРегистрационныйНомерПФР',
			style: 'position:absolute;left:198px;top:0px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИПРегистрационныйНомерФСС',
			text: 'Регистрационный номер в ФСС:',
			style: 'position:absolute;left:0px;top:82px;width:167px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИПРегистрационныйНомерФСС',
			style: 'position:absolute;left:198px;top:82px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИПКодПодчиненностиФСС',
			text: 'Код подчиненности ФСС:',
			style: 'position:absolute;left:0px;top:108px;width:167px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИПКодПодчиненностиФСС',
			style: 'position:absolute;left:198px;top:108px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИПРегистрационныйНомерТФОМС',
			text: 'Регистрационный номер в ТФОМС:',
			style: 'position:absolute;left:0px;top:26px;width:184px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИПРегистрационныйНомерТФОМС',
			style: 'position:absolute;left:198px;top:26px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись31',
			text: 'Сведения о регистрации предпринимателя, добровольно вступившего в правоотношения по обязательному социальному страхованию (п. 5 ст. 14 Федерального закона от 24.07.2009 № 212-ФЗ).',
			style: 'position:absolute;left:0px;top:50px;width:555px;height:28px;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'Бухучет зарплаты',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьОтражениеВБухучете',
			text: '',
			style: 'position:absolute;left:33px;top:54px;width:477px;height:94px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтражениеВБухучетеИзменить',
			text: 'Задать бухучет зарплаты для организации',
			style: 'position:absolute;left:33px;top:150px;width:391px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИнформацияОтраженияВУчете',
			text: 'Бухучет зарплаты организации следует задавать в том случае, если зарплата всех сотрудников полностью относится к видам деятельности облагаемым ЕНВД, или в информационной базе ведется расчет зарплаты нескольких организаций.',
			style: 'position:absolute;left:33px;top:6px;width:477px;height:45px;',
		},
					]
				},
				{
					title:'Иностранная организация',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьСтранаРегистрации',
			text: 'Страна регистрации:',
			style: 'position:absolute;left:6px;top:6px;width:231px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтранаРегистрации',
			style: 'position:absolute;left:240px;top:7px;width:315px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКодВСтранеРегистрации',
			text: 'Код налогоплательщика в стране регистр.:',
			style: 'position:absolute;left:6px;top:56px;width:230px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КодВСтранеРегистрации',
			style: 'position:absolute;left:240px;top:57px;width:315px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтранаПостоянногоМестонахождения',
			text: 'Страна постоянного местонахождения:',
			style: 'position:absolute;left:6px;top:31px;width:232px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтранаПостоянногоМестонахождения',
			style: 'position:absolute;left:240px;top:32px;width:315px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись12',
			text: 'Полное наименование иностранной организации:',
			style: 'position:absolute;left:6px;top:81px;width:263px;height:16px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НаименованиеИнострОрганизации',
			style: 'position:absolute;left:6px;top:99px;width:549px;height:53px;',
		},
					]
				},
				{
					title:'Документооборот',
					items:
					[
		{
			xtype: 'radio',
			boxLabel: 'Возможность взаимодействия с ФНС, ПФР и Росстатом по электронным каналам связи отключена',
			style: 'position:absolute;left:6px;top:203px;width:549px;height:16px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Использовать возможность представления отчетности в ФНС посредством ПК "Спринтер"',
			style: 'position:absolute;left:6px;top:112px;width:549px;height:15px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Использовать встроенный механизм информационного взаимодействия по каналам связи',
			style: 'position:absolute;left:6px;top:58px;width:549px;height:15px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:85px;width:549px;height:19px;',
			height: 19,width: 549,
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
			name: 'УчетнаяЗаписьОбмена',
			style: 'position:absolute;left:125px;top:0px;width:424px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись21',
			text: 'Учетная запись:',
			style: 'position:absolute;left:15px;top:2px;width:90px;height:15px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:7px;top:178px;width:548px;height:18px;',
			height: 18,width: 548,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись22',
			text: 'Перед началом использования данной возможности необходимо настроить',
			style: 'position:absolute;left:13px;top:1px;width:390px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПараметрыИнтеграции',
			text: 'параметры интеграции.',
			style: 'position:absolute;left:404px;top:1px;width:124px;height:15px;',
		},
					]
				},
			]
		},
		{
			xtype: 'button',
			name: 'КнопкаНастроитьПараметрыОтправки',
			text: 'Настроить параметры отправки отчетности в ФСС...',
			style: 'position:absolute;left:21px;top:257px;width:279px;height:21px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСформироватьЗаявлениеНаПодключениеКЭлектронномуДокументообороту',
			text: 'Заявление на подключение к электронному документообороту',
			style: 'position:absolute;left:6px;top:10px;width:354px;height:21px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСписокЗаявлений',
			text: 'Список заявлений',
			style: 'position:absolute;left:430px;top:10px;width:98px;height:21px;',
		},
					]
				},
				{
					title:'Прочее',
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'отражать в регламентированном учете',
			style: 'position:absolute;left:6px;top:8px;width:224px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись24',
			text: 'Реквизит "Код налогового органа - получателя отчетности" заполняется только для тех налогоплательщиков, вся отчетность которых, согласно статье 80 НК РФ, должна представляться в налоговый орган по месту их регистрации в качестве крупнейших. 
Во всех остальных случаях реквизит не заполняется.
Данный код необходим для формирования файлов электронного представления отчетов в формате ФНС.',
			style: 'position:absolute;left:6px;top:93px;width:549px;height:69px;',
		},
		{
			xtype: 'label',
			name: 'Надпись23',
			text: 'Код налогового органа - получателя отчетности:',
			style: 'position:absolute;left:6px;top:72px;width:270px;height:18px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КодИФНСПолучателя',
			style: 'position:absolute;left:289px;top:71px;width:54px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись19',
			text: 'Данная возможность позволяет представлять отчетность в налоговые органы посредством вызова программного комплекса "Спринтер" компании "Такском", который и будет осуществлять предусмотренный регламентом документооборот.',
			style: 'position:absolute;left:21px;top:133px;width:534px;height:40px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКодОрганаФСГС',
			text: 'Код территориального органа Федеральной службы государственной статистики:',
			style: 'position:absolute;left:6px;top:41px;width:270px;height:28px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КодОрганаФСГС',
			style: 'position:absolute;left:289px;top:41px;width:54px;height:19px;',
		},
					]
				},
				{
					title:'Свойства',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:549px;height:249px;',
			height: 249,width: 549,
			columns:
			[
				{
					text:'',
					width:'20',
				},
				{
					text:'Свойство',
					width:'119',
				},
				{
					text:'Значение',
					width:'220',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:549px;height:24px;',
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
			style: 'position:absolute;left:6px;top:30px;width:549px;height:249px;',
			height: 249,width: 549,
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
			style: 'position:absolute;left:6px;top:6px;width:549px;height:24px;',
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
			]
		},
		{
			xtype: 'label',
			name: 'НадписьНаименованиеНалоги',
			text: 'Наименование плательщика в платежных поручениях на перечисление в бюджет:',
			style: 'position:absolute;left:8px;top:209px;width:124px;height:66px;text-align:left;',
		},
		{
			xtype: 'textarea',
			hideLabel: true,
			name: 'НаименованиеПлательщикаПриПеречисленииНалогов',
			style: 'position:absolute;left:134px;top:209px;width:437px;height:66px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'отделение иностранной организации (зависимый агент)',
			style: 'position:absolute;left:134px;top:191px;width:423px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьЮрФизЛицо',
			text: 'Юр. / физ. лицо:',
			style: 'position:absolute;left:8px;top:57px;width:120px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЮрФизЛицо',
			style: 'position:absolute;left:134px;top:57px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИндивидуальныйПредприниматель',
			text: 'Физическое лицо:',
			style: 'position:absolute;left:8px;top:280px;width:124px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИндивидуальныйПредприниматель',
			style: 'position:absolute;left:134px;top:280px;width:437px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименованиеСокращенное',
			text: 'Наименование сокращенное:',
			style: 'position:absolute;left:8px;top:152px;width:120px;height:34px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НаименованиеСокращенное',
			style: 'position:absolute;left:134px;top:152px;width:437px;height:34px;',
		},
	]
});