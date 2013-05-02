Ext.define('Документы.РеестрСведенийВФССОПособияхПриРожденииРебенка.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:900px;height:576px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Реестр сведений в ФСС о пособиях при рождении ребенка',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:327px;top:33px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:424px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от',
			style: 'position:absolute;left:512px;top:33px;width:26px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:544px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:33px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:96px;top:33px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:8px;top:57px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:96px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:524px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:524px;width:796px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:900px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:551px;width:900px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Показать файл',
				},
				'-',
				{
					text:'Записать файл на диск',
				},
				'-',
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
			style: 'position:absolute;left:8px;top:81px;width:884px;height:437px;',
			height: 437,width: 884,
			items:
			[
				{
					title:'Пособия',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:870px;height:24px;',
			items:
			[
				{
					text:'Заполнить детьми',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:35px;width:214px;height:376px;',
			height: 376,width: 214,
			columns:
			[
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Сотрудник',
					width:'108',
					dataIndex:'Сотрудник',
					flex:1,
				},
				{
					text:'Ребенок (ФИО)',
					width:'108',
					dataIndex:'Ребенок',
					flex:1,
				},
				{
					text:'Фамилия',
					width:'36',
					dataIndex:'ФамилияРебенка',
					flex:1,
				},
				{
					text:'Имя',
					width:'36',
					dataIndex:'ИмяРебенка',
					flex:1,
				},
				{
					text:'Отчество ребенка',
					width:'36',
					dataIndex:'ОтчествоРебенка',
					flex:1,
				},
				{
					text:'Статус',
					width:'73',
					dataIndex:'Статус',
					flex:1,
				},
				{
					text:'Д. рождения',
					width:'73',
					dataIndex:'ДатаРождения',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/РеестрСведенийВФССОПособияхПриРожденииРебенка/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'Сотрудник',
					},
					{
						name:'Ребенок',
					},
					{
						name:'ФамилияРебенка',
					},
					{
						name:'ИмяРебенка',
					},
					{
						name:'ОтчествоРебенка',
					},
					{
						name:'Статус',
					},
					{
						name:'ДатаРождения',
					},
				]
			},
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:225px;top:35px;width:651px;height:376px;',
			height: 376,width: 651,
			items:
			[
				{
					title:'Застрахованное лицо',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьФамилия',
			text: 'Фамилия:',
			style: 'position:absolute;left:6px;top:6px;width:55px;height:19px;text-align:left;',
		},
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
			style: 'position:absolute;left:261px;top:6px;width:160px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Отчество',
			style: 'position:absolute;left:483px;top:6px;width:160px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПаспортныеДанные',
			text: 'Паспортные данные',
			style: 'position:absolute;left:6px;top:106px;width:184px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВидДокументаУдостоверяющегоЛичность',
			text: 'Вид документа:',
			style: 'position:absolute;left:6px;top:130px;width:85px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидДокументаУдостоверяющегоЛичность',
			style: 'position:absolute;left:96px;top:130px;width:273px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСерияДокументаУдостоверяющегоЛичность',
			text: 'Серия:',
			style: 'position:absolute;left:372px;top:130px;width:39px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СерияДокументаУдостоверяющегоЛичность',
			style: 'position:absolute;left:416px;top:130px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомерДокументаУдостоверяющегоЛичность',
			text: 'Номер:',
			style: 'position:absolute;left:509px;top:130px;width:40px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерДокументаУдостоверяющегоЛичность',
			style: 'position:absolute;left:553px;top:130px;width:90px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаВыдачиДокументаУдостоверяющегоЛичность',
			text: 'Выдан:',
			style: 'position:absolute;left:6px;top:154px;width:40px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаВыдачиДокументаУдостоверяющегоЛичность',
			style: 'position:absolute;left:50px;top:154px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСрокДействияДокументаУдостоверяющегоЛичность',
			text: 'Действует до:',
			style: 'position:absolute;left:473px;top:154px;width:76px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СрокДействияДокументаУдостоверяющегоЛичность',
			style: 'position:absolute;left:555px;top:154px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьАдресРегистрации',
			text: 'Адрес по регистрации:',
			style: 'position:absolute;left:6px;top:178px;width:139px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'АдресРегистрацииВФорме',
			style: 'position:absolute;left:150px;top:178px;width:342px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПособиеВыплатить',
			text: 'Пособие выплатить',
			style: 'position:absolute;left:6px;top:232px;width:124px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Банк',
			style: 'position:absolute;left:194px;top:256px;width:255px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомерЛицевогоСчета',
			text: '№ счета:',
			style: 'position:absolute;left:455px;top:256px;width:49px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерЛицевогоСчета',
			style: 'position:absolute;left:507px;top:256px;width:136px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименованиеБанка',
			text: 'Наименование банка:',
			style: 'position:absolute;left:6px;top:280px;width:114px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НаименованиеБанка',
			style: 'position:absolute;left:124px;top:280px;width:187px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьБИК',
			text: 'БИК:',
			style: 'position:absolute;left:522px;top:280px;width:29px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'БИК',
			style: 'position:absolute;left:555px;top:280px;width:88px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Перечислением на счет в банке:',
			style: 'position:absolute;left:6px;top:256px;width:184px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Почтовым переводом по адресу:',
			style: 'position:absolute;left:6px;top:303px;width:184px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'АдресПочтовыйВФорме',
			style: 'position:absolute;left:194px;top:303px;width:227px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтраховойНомерПФР',
			text: 'СНИЛС:',
			style: 'position:absolute;left:6px;top:30px;width:55px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтраховойНомерПФР',
			style: 'position:absolute;left:65px;top:30px;width:160px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИННСотрудника',
			text: 'ИНН:',
			style: 'position:absolute;left:6px;top:54px;width:55px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИННСотрудника',
			style: 'position:absolute;left:65px;top:54px;width:160px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИмя',
			text: 'Имя:',
			style: 'position:absolute;left:229px;top:6px;width:28px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтчество',
			text: 'Отчество:',
			style: 'position:absolute;left:426px;top:6px;width:53px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаРождения',
			text: 'Дата рождения:',
			style: 'position:absolute;left:229px;top:30px;width:86px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаРождения',
			style: 'position:absolute;left:323px;top:30px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПол',
			text: 'Пол:',
			style: 'position:absolute;left:426px;top:30px;width:31px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Пол',
			style: 'position:absolute;left:483px;top:30px;width:160px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'ОбновитьДанныеСотрудника',
			text: 'Обновить',
			style: 'position:absolute;left:6px;top:328px;width:82px;height:21px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Основное место работы',
			style: 'position:absolute;left:96px;top:78px;width:142px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Совместительство',
			style: 'position:absolute;left:245px;top:78px;width:116px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВидЗанятости',
			text: 'Вид занятости:',
			style: 'position:absolute;left:6px;top:78px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтатусНалогоплательщика',
			text: 'Статус налогоплательщика:',
			style: 'position:absolute;left:229px;top:54px;width:143px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтатусНалогоплательщика',
			style: 'position:absolute;left:376px;top:54px;width:267px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКемВыданДокумент',
			text: 'Кем выдан:',
			style: 'position:absolute;left:144px;top:154px;width:60px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КемВыданДокумент',
			style: 'position:absolute;left:208px;top:154px;width:257px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКоррСчет',
			text: 'Корр. счет:',
			style: 'position:absolute;left:316px;top:280px;width:58px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КоррСчет',
			style: 'position:absolute;left:376px;top:280px;width:136px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВидДокумента1',
			text: 'Для иностранных граждан:',
			style: 'position:absolute;left:6px;top:202px;width:139px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОписаниеДокументаНаПроживание',
			style: 'position:absolute;left:150px;top:202px;width:493px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьТелефон1',
			text: 'Телефон:',
			style: 'position:absolute;left:497px;top:178px;width:52px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТелефонПолучателя',
			style: 'position:absolute;left:555px;top:178px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьАдресПочтовыйКодПоКЛАДР',
			text: 'Код по КЛАДР:',
			style: 'position:absolute;left:424px;top:303px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'АдресПочтовыйКодПоКЛАДР',
			style: 'position:absolute;left:507px;top:303px;width:136px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'РайонныйКоэффициент',
			style: 'position:absolute;left:472px;top:78px;width:40px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРК',
			text: 'Районный коэф-т:',
			style: 'position:absolute;left:375px;top:78px;width:94px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Район',
			style: 'position:absolute;left:553px;top:78px;width:90px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись43',
			text: 'Район:',
			style: 'position:absolute;left:515px;top:78px;width:37px;height:19px;',
		},
					]
				},
				{
					title:'Сведения о документах',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьДатСправки',
			text: 'Справка о рождении, ',
			style: 'position:absolute;left:6px;top:25px;width:111px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаСправки',
			style: 'position:absolute;left:381px;top:25px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаСвидетельстваОРождении',
			text: 'Или свидетельство о рождении, выданное консульским учр-м РФ, от:',
			style: 'position:absolute;left:14px;top:49px;width:365px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаСвидетельстваОРождении',
			style: 'position:absolute;left:381px;top:49px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаИногоПодтвержденияРождения',
			text: 'Или документ иностранного государства, подтв. рождение ребенка, от:',
			style: 'position:absolute;left:14px;top:73px;width:367px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаИногоПодтвержденияРождения',
			style: 'position:absolute;left:381px;top:73px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаСправкиОтДругогоРодителя',
			text: 'Справка от другого родителя о неполучении пособия от:',
			style: 'position:absolute;left:6px;top:116px;width:345px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаСправкиОтДругогоРодителя',
			style: 'position:absolute;left:381px;top:116px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаРешенияОбОпеке',
			text: 'Решение об установлении опеки от:',
			style: 'position:absolute;left:6px;top:140px;width:345px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаРешенияОбОпеке',
			style: 'position:absolute;left:381px;top:140px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаРешенияОбУсыновлении',
			text: 'Или решение об усыновлении от:',
			style: 'position:absolute;left:14px;top:164px;width:345px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаРешенияОбУсыновлении',
			style: 'position:absolute;left:381px;top:164px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаДоговораОПередачеНаВоспитание',
			text: 'Или договор о передаче ребенка на воспитание в приемную семью от:',
			style: 'position:absolute;left:14px;top:188px;width:365px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаДоговораОПередачеНаВоспитание',
			style: 'position:absolute;left:381px;top:188px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДокументыОснования',
			text: 'Наименование и реквизиты представленных документов:',
			style: 'position:absolute;left:6px;top:256px;width:316px;height:19px;text-align:left;',
		},
		{
			xtype: 'textarea',
			hideLabel: true,
			name: 'ДокументыОснования',
			style: 'position:absolute;left:6px;top:277px;width:316px;height:51px;',
		},
		{
			xtype: 'textarea',
			hideLabel: true,
			name: 'ИнаяПолезнаяИнформация',
			style: 'position:absolute;left:327px;top:277px;width:316px;height:73px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСведенияОРождении',
			text: 'Сведения о документах, подтверждающих рождение ребенка',
			style: 'position:absolute;left:6px;top:6px;width:437px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПрочиеДокументы',
			text: 'Прочие справки и документы',
			style: 'position:absolute;left:6px;top:97px;width:345px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Прочее',
			text: 'Общие сведения о прилагаемых документах',
			style: 'position:absolute;left:6px;top:212px;width:345px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКоличествоСтраниц',
			text: 'Количество страниц:',
			style: 'position:absolute;left:6px;top:231px;width:112px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КоличествоСтраниц',
			style: 'position:absolute;left:120px;top:231px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомерСправки',
			text: '№',
			style: 'position:absolute;left:465px;top:25px;width:13px;height:19px;text-align:right;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерСправки',
			style: 'position:absolute;left:484px;top:25px;width:159px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомерСвидетельстваОРождении',
			text: '№',
			style: 'position:absolute;left:561px;top:49px;width:13px;height:19px;text-align:right;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерСвидетельстваОРождении',
			style: 'position:absolute;left:575px;top:49px;width:68px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомерИногоПодтвержденияРождения',
			text: '№',
			style: 'position:absolute;left:561px;top:73px;width:13px;height:19px;text-align:right;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерИногоПодтвержденияРождения',
			style: 'position:absolute;left:575px;top:73px;width:68px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомерСправкиОтДругогоРодителя',
			text: '№',
			style: 'position:absolute;left:465px;top:116px;width:13px;height:19px;text-align:right;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерСправкиОтДругогоРодителя',
			style: 'position:absolute;left:484px;top:116px;width:159px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомерРешенияОбОпеке',
			text: '№',
			style: 'position:absolute;left:465px;top:140px;width:13px;height:19px;text-align:right;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерРешенияОбОпеке',
			style: 'position:absolute;left:484px;top:140px;width:159px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомерРешенияОбУсыновлении',
			text: '№',
			style: 'position:absolute;left:465px;top:164px;width:13px;height:19px;text-align:right;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерРешенияОбУсыновлении',
			style: 'position:absolute;left:484px;top:164px;width:159px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомерДоговораОПередачеНаВоспитание',
			text: '№',
			style: 'position:absolute;left:465px;top:188px;width:13px;height:19px;text-align:right;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерДоговораОПередачеНаВоспитание',
			style: 'position:absolute;left:484px;top:188px;width:159px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаЗаполнитьСписокПредставленныхДокументов',
			text: 'Заполнить по введенным сведениям о документах',
			style: 'position:absolute;left:6px;top:331px;width:316px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаПредставленияПакетаДокументов',
			text: 'Дата представления пакета документов:',
			style: 'position:absolute;left:215px;top:231px;width:213px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаПредставленияПакетаДокументов',
			style: 'position:absolute;left:432px;top:231px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСерияСвидетельстваОРождении',
			text: 'Серия:',
			style: 'position:absolute;left:465px;top:49px;width:34px;height:19px;text-align:right;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СерияСвидетельстваОРождении',
			style: 'position:absolute;left:499px;top:49px;width:60px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСерияИногоПодтвержденияРождения',
			text: 'Серия:',
			style: 'position:absolute;left:465px;top:73px;width:34px;height:19px;text-align:right;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СерияИногоПодтвержденияРождения',
			style: 'position:absolute;left:499px;top:73px;width:60px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатСправки1',
			text: ', от:',
			style: 'position:absolute;left:205px;top:25px;width:23px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидСправкиОРожденииРебенка',
			style: 'position:absolute;left:118px;top:25px;width:84px;height:19px;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'Данные страхователя',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьРуководитель',
			text: 'Руководитель:',
			style: 'position:absolute;left:14px;top:140px;width:106px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Руководитель',
			style: 'position:absolute;left:121px;top:140px;width:320px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДолжностьРуководителя',
			text: 'Должность:',
			style: 'position:absolute;left:445px;top:140px;width:106px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДолжностьРуководителя',
			style: 'position:absolute;left:555px;top:140px;width:320px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРегистрационныйНомерФСС',
			text: 'Регистрационный номер:',
			style: 'position:absolute;left:14px;top:96px;width:134px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'РегистрационныйНомерФСС',
			style: 'position:absolute;left:146px;top:96px;width:110px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДополнительныйКодФСС',
			text: 'Дополнительный код:',
			style: 'position:absolute;left:261px;top:96px;width:116px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДополнительныйКодФСС',
			style: 'position:absolute;left:379px;top:96px;width:110px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКодПодчиненностиФСС',
			text: 'Код подчиненности:',
			style: 'position:absolute;left:494px;top:96px;width:102px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КодПодчиненностиФСС',
			style: 'position:absolute;left:599px;top:96px;width:60px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименованиеТерриториальногоОрганаФСС',
			text: 'Наименование территориального органа ФСС:',
			style: 'position:absolute;left:15px;top:70px;width:241px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НаименованиеТерриториальногоОрганаФСС',
			style: 'position:absolute;left:258px;top:70px;width:617px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'ОбновитьДанныеСтрахователя',
			text: 'Обновить',
			style: 'position:absolute;left:6px;top:390px;width:82px;height:21px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИНН',
			text: 'ИНН:',
			style: 'position:absolute;left:14px;top:26px;width:44px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИНН',
			style: 'position:absolute;left:58px;top:26px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКПП',
			text: 'КПП:',
			style: 'position:absolute;left:182px;top:26px;width:32px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КПП',
			style: 'position:absolute;left:215px;top:26px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОГРН',
			style: 'position:absolute;left:384px;top:26px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОГРН',
			text: 'ОГРН:',
			style: 'position:absolute;left:344px;top:26px;width:35px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьГлавныйБухгалтер',
			text: 'Главный бухгалтер:',
			style: 'position:absolute;left:14px;top:166px;width:106px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ГлавныйБухгалтер',
			style: 'position:absolute;left:121px;top:166px;width:320px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Выводить подписи в реестр пособий',
			style: 'position:absolute;left:14px;top:198px;width:327px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьРеестрСоставил',
			text: 'Реестр составил:',
			style: 'position:absolute;left:327px;top:57px;width:94px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'РеестрСоставил',
			style: 'position:absolute;left:424px;top:57px;width:172px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьТелефон',
			text: 'Телефон:',
			style: 'position:absolute;left:603px;top:57px;width:52px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Телефон',
			style: 'position:absolute;left:657px;top:57px;width:84px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьАдресЭлектроннойПочтыСоставителя',
			text: 'Адрес э.п.:',
			style: 'position:absolute;left:744px;top:57px;width:59px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'АдресЭлектроннойПочтыСоставителя',
			style: 'position:absolute;left:808px;top:57px;width:84px;height:19px;',
		},
	]
});