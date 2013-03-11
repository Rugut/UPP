Ext.define('Документы.НачислениеПоБольничномуЛисту.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 580,width: 945,
	iconCls: 'bogus',
	title: 'Начисление по больничному листу',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:743px;top:33px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:851px;top:33px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:442px;top:56px;width:186px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:743px;top:56px;width:196px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:945px;height:25px;',
			items:
			[
				{
					text:'Действие4',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель6',
				},
				{
					text:'ДействиеОткрытьКатегории1',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие3',
				},
				{
					text:'Подменю2',
				},
				{
					text:'РедактироватьКодНомер',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие6',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Разделитель2',
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
					text:'Подменю',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Действие1',
				},
				{
					text:'Подменю1',
				},
				{
					text:'Действие7',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Подменю1',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Действие4',
				},
				{
					text:'ДействиеОткрытьСвойства1',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:555px;width:945px;height:25px;',
			items:
			[
				{
					text:'Действие1',
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
					text:'Разделитель1',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодРегистрации',
			style: 'position:absolute;left:442px;top:33px;width:186px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Сотрудник',
			style: 'position:absolute;left:139px;top:79px;width:186px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПервичныйБольничныйЛист',
			style: 'position:absolute;left:139px;top:33px;width:186px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерВходящего',
			style: 'position:absolute;left:237px;top:56px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СерияВходящего',
			style: 'position:absolute;left:139px;top:56px;width:55px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:98px;width:931px;height:373px;',
			height: 373,width: 931,
			items:
			[
				{
					title:'Условия',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:90px;top:346px;width:841px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПричинаНетрудоспособности',
			style: 'position:absolute;left:177px;top:13px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СлучайУходаЗаБольнымРебенком',
			style: 'position:absolute;left:552px;top:13px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНачала',
			style: 'position:absolute;left:177px;top:63px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОкончания',
			style: 'position:absolute;left:288px;top:63px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДнейОплаты',
			style: 'position:absolute;left:654px;top:63px;width:40px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНарушенияРежима',
			style: 'position:absolute;left:629px;top:113px;width:88px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаРассчитатьВсе',
			text: '',
			style: 'position:absolute;left:0px;top:270px;width:82px;height:71px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНачалаСобытия',
			style: 'position:absolute;left:177px;top:38px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНачалаОплаты',
			style: 'position:absolute;left:541px;top:63px;width:88px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:88px;width:772px;height:20px;',
			height: 20,width: 772,
			items:
			[
				{
					title:'СтраницаОбычныйРасчет',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПроцентОплаты',
			style: 'position:absolute;left:341px;top:0px;width:57px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОграничениеПособия',
			style: 'position:absolute;left:589px;top:0px;width:183px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтажЛет',
			style: 'position:absolute;left:53px;top:0px;width:32px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтажМесяцев',
			style: 'position:absolute;left:140px;top:0px;width:32px;height:19px;',
		},
					]
				},
				{
					title:'СтраницаОсобыйРасчет',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПроцентОплаты1',
			style: 'position:absolute;left:344px;top:0px;width:57px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОграничениеПособия1',
			style: 'position:absolute;left:589px;top:0px;width:183px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтажЛет1',
			style: 'position:absolute;left:53px;top:0px;width:32px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтажМесяцев1',
			style: 'position:absolute;left:140px;top:0px;width:32px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'УсловияИсчисленияКод1',
			style: 'position:absolute;left:129px;top:113px;width:40px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'УсловияИсчисленияКод2',
			style: 'position:absolute;left:177px;top:113px;width:40px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'УсловияИсчисленияКод3',
			style: 'position:absolute;left:225px;top:113px;width:40px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КодПричиныПерерасчета',
			style: 'position:absolute;left:552px;top:162px;width:40px;height:19px;',
		},
					]
				},
				{
					title:'ОборотБольничного',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:6px;width:931px;height:359px;',
			height: 359,width: 931,
			items:
			[
				{
					title:'Начисления',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:81px;width:917px;height:24px;',
			items:
			[
				{
					text:'Действие',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие7',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие2',
				},
				{
					text:'РассчитатьНачисления',
				},
				{
					text:'Действие5',
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
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:105px;width:917px;height:194px;',
			height: 194,width: 917,
			columns:
			[
				{
					text:'Картинка',
				},
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
					text:'ДополнительныйРезультат',
				},
				{
					text:'ОплаченоДнейЧасов',
				},
				{
					text:'НормаДней',
				},
				{
					text:'НормаЧасов',
				},
				{
					text:'ОтработаноДней',
				},
				{
					text:'ОтработаноЧасов',
				},
				{
					text:'ПодразделениеОрганизации',
				},
				{
					text:'ДатаНачалаСобытия',
				},
				{
					text:'Сторно',
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
					text:'СторнируемыйДокумент',
				},
				{
					text:'ЧислоМесяцев',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:119px;width:629px;height:24px;',
			items:
			[
				{
					text:'Действие8',
				},
				{
					text:'Действие10',
				},
				{
					text:'Подменю',
				},
				{
					text:'Действие12',
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
					text:'Действие9',
				},
				{
					text:'Действие2',
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
					text:'Действие13',
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
					text:'Действие3',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидРасчета',
			style: 'position:absolute;left:132px;top:28px;width:210px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:360px;top:28px;width:285px;height:19px;',
			height: 19,width: 285,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидРасчетаДоплаты',
			style: 'position:absolute;left:75px;top:0px;width:210px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:47px;width:917px;height:25px;',
			height: 25,width: 917,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидРасчетаЗаСчетРаботодателя',
			style: 'position:absolute;left:126px;top:6px;width:210px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДнейОплатыРаботодателем',
			style: 'position:absolute;left:467px;top:6px;width:36px;height:19px;',
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
			xtype: 'button',
			name: 'КнопкаРассчитатьНачисления',
			text: 'Рассчитать начисления',
			style: 'position:absolute;left:6px;top:295px;width:130px;height:39px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:0px;width:917px;height:289px;',
			height: 289,width: 917,
			items:
			[
				{
					title:'СтраницаДо2011Года',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:51px;width:917px;height:24px;',
			items:
			[
				{
					text:'Действие6',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие7',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие5',
				},
				{
					text:'РассчитатьСреднийЗаработок',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:75px;width:917px;height:214px;',
			height: 214,width: 917,
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
					text:'ОтработаноДней',
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
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодРасчетаСреднегоЗаработкаНачало',
			style: 'position:absolute;left:117px;top:8px;width:90px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодРасчетаСреднегоЗаработкаОкончание',
			style: 'position:absolute;left:233px;top:8px;width:90px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаВыбораПериода',
			text: '...',
			style: 'position:absolute;left:330px;top:8px;width:20px;height:19px;',
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
			style: 'position:absolute;left:93px;top:8px;width:64px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВторойГодРасчета',
			style: 'position:absolute;left:183px;top:8px;width:64px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:74px;width:917px;height:215px;',
			height: 215,width: 917,
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
			style: 'position:absolute;left:0px;top:50px;width:917px;height:24px;',
			items:
			[
				{
					text:'Действие3',
				},
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
					text:'Действие6',
				},
				{
					text:'Разделитель',
				},
				{
					text:'РассчитатьСреднийЗаработок',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие7',
				},
			]
		},
					]
				},
				{
					title:'СтраницаПереходногоПериода',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПервыйГодРасчета1',
			style: 'position:absolute;left:93px;top:165px;width:64px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВторойГодРасчета1',
			style: 'position:absolute;left:183px;top:165px;width:64px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:230px;width:917px;height:59px;',
			height: 59,width: 917,
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
					text:'Страхователь',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:205px;width:917px;height:24px;',
			items:
			[
				{
					text:'РассчитатьСреднийЗаработок',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие8',
				},
				{
					text:'Разделитель1',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:43px;width:917px;height:24px;',
			items:
			[
				{
					text:'Действие6',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие5',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие7',
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
					text:'РассчитатьСреднийЗаработок',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:67px;width:917px;height:87px;',
			height: 87,width: 917,
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
					text:'ОтработаноДней',
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
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодРасчетаСреднегоЗаработкаНачало1',
			style: 'position:absolute;left:117px;top:2px;width:90px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодРасчетаСреднегоЗаработкаОкончание1',
			style: 'position:absolute;left:233px;top:2px;width:90px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаВыбораПериода1',
			text: '...',
			style: 'position:absolute;left:330px;top:2px;width:20px;height:19px;',
		},
					]
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
					title:'ЗаявлениеВФСС',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:6px;width:931px;height:359px;',
			height: 359,width: 931,
			items:
			[
				{
					title:'Заявление',
					items:
					[
		{
			xtype: 'button',
			name: 'КнопкаОбновитьДанныеСотрудника',
			text: 'Обновить',
			style: 'position:absolute;left:762px;top:262px;width:161px;height:21px;',
		},
		{
			xtype: 'button',
			name: 'ПечатьЗаявление',
			text: 'Заявление',
			style: 'position:absolute;left:762px;top:287px;width:161px;height:21px;',
		},
		{
			xtype: 'button',
			name: 'ПечатьСправка',
			text: 'Справка к старому б/л',
			style: 'position:absolute;left:762px;top:312px;width:161px;height:21px;',
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
			style: 'position:absolute;left:268px;top:6px;width:160px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Отчество',
			style: 'position:absolute;left:485px;top:6px;width:160px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидДокумента',
			style: 'position:absolute;left:103px;top:50px;width:242px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СерияДокумента',
			style: 'position:absolute;left:390px;top:50px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерДокумента',
			style: 'position:absolute;left:528px;top:50px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'АдресПочтовыйВФорме',
			style: 'position:absolute;left:203px;top:180px;width:500px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаВыдачиДокумента',
			style: 'position:absolute;left:664px;top:50px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаДействияДокумента',
			style: 'position:absolute;left:835px;top:50px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодПростояС',
			style: 'position:absolute;left:74px;top:291px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодПростояПо',
			style: 'position:absolute;left:188px;top:291px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Банк',
			style: 'position:absolute;left:203px;top:136px;width:348px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерЛицевогоСчета',
			style: 'position:absolute;left:608px;top:136px;width:156px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НаименованиеБанка',
			style: 'position:absolute;left:132px;top:158px;width:458px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'БИКБанка',
			style: 'position:absolute;left:835px;top:158px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДолжностьУполномоченного',
			style: 'position:absolute;left:389px;top:314px;width:132px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Уполномоченный',
			style: 'position:absolute;left:182px;top:314px;width:132px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаСправкиБеременной',
			style: 'position:absolute;left:368px;top:268px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КемВыданДокумент',
			style: 'position:absolute;left:74px;top:72px;width:371px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерСправкиБеременной',
			style: 'position:absolute;left:502px;top:268px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КоррСчет',
			style: 'position:absolute;left:659px;top:158px;width:136px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОписаниеДокументаНаПроживание',
			style: 'position:absolute;left:594px;top:72px;width:329px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'АдресРегистрацииВФорме',
			style: 'position:absolute;left:132px;top:94px;width:401px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Телефон',
			style: 'position:absolute;left:811px;top:94px;width:112px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТарифнаяСтавкаОклад',
			style: 'position:absolute;left:221px;top:225px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СреднедневнойЗаработокНаПериодПростоя',
			style: 'position:absolute;left:518px;top:291px;width:84px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Телефон1',
			style: 'position:absolute;left:583px;top:314px;width:84px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'АдресПочтовыйКодПоКЛАДР',
			style: 'position:absolute;left:787px;top:180px;width:136px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'АдресРегистрацииКодПоКЛАДР',
			style: 'position:absolute;left:616px;top:94px;width:136px;height:19px;',
		},
					]
				},
				{
					title:'РеестрПособий',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаВыдачиБольничного',
			style: 'position:absolute;left:235px;top:6px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КодПричиныНетрудоспособности',
			style: 'position:absolute;left:188px;top:144px;width:40px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДополнительныйКодПричиныНетрудоспособности',
			style: 'position:absolute;left:283px;top:144px;width:40px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВторойКодПричиныНетрудоспособности',
			style: 'position:absolute;left:382px;top:144px;width:40px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаИзмененияКодаПричиныНетрудоспособности',
			style: 'position:absolute;left:50px;top:192px;width:88px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:242px;width:917px;height:91px;',
			height: 91,width: 917,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'КолонкаВозраст',
				},
				{
					text:'ВозрастЛет',
				},
				{
					text:'ВозрастМесяцев',
				},
				{
					text:'РодственнаяСвязь',
				},
				{
					text:'ФИО',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'АдресЛПУВФорме',
			style: 'position:absolute;left:351px;top:115px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НаименованиеЛПУ',
			style: 'position:absolute;left:89px;top:115px;width:215px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОГРН_ЛПУ',
			style: 'position:absolute;left:831px;top:115px;width:92px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерЛисткаПоОсновномуМестуРаботы',
			style: 'position:absolute;left:283px;top:168px;width:139px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОкончанияПутевки',
			style: 'position:absolute;left:188px;top:192px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерПутевки',
			style: 'position:absolute;left:368px;top:192px;width:79px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОГРН_Санатория',
			style: 'position:absolute;left:544px;top:192px;width:101px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'АдресЛПУКодПоКЛАДР',
			style: 'position:absolute;left:656px;top:115px;width:136px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЛПУ',
			style: 'position:absolute;left:250px;top:92px;width:220px;height:19px;',
		},
					]
				},
				{
					title:'РеестрПособий2',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодНахожденияВСтационареСРебенкомС',
			style: 'position:absolute;left:238px;top:62px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодНахожденияВСтационареСРебенкомПо',
			style: 'position:absolute;left:355px;top:62px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КодНарушенияРежима',
			style: 'position:absolute;left:188px;top:38px;width:40px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаРегистрацииДокументовМСЭ',
			style: 'position:absolute;left:453px;top:112px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаВыходаНаРаботу',
			style: 'position:absolute;left:133px;top:314px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерЛисткаПродолжения',
			style: 'position:absolute;left:578px;top:314px;width:170px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНаправленияВБюроМСЭ',
			style: 'position:absolute;left:182px;top:112px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОсвидетельствованияМСЭ',
			style: 'position:absolute;left:182px;top:136px;width:88px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:184px;width:917px;height:121px;',
			height: 121,width: 917,
			columns:
			[
				{
					text:'ДатаНачала',
				},
				{
					text:'ДатаОкончания',
				},
				{
					text:'ДолжностьВрача',
				},
				{
					text:'ФИОВрача',
				},
				{
					text:'ИдентификационныйНомерВрача',
				},
				{
					text:'ДолжностьВрачаПредседателяВК',
				},
				{
					text:'ФИОВрачаПредседателяВК',
				},
				{
					text:'ИдентификационныйНомерВрачаПредседателяВК',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НовыйСтатусНетрудопособного',
			style: 'position:absolute;left:288px;top:314px;width:40px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНовыйСтатусНетрудопособного',
			style: 'position:absolute;left:370px;top:314px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ГруппаИнвалидности',
			style: 'position:absolute;left:533px;top:136px;width:40px;height:19px;',
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
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:555px;width:511px;height:25px;',
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
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:726px;top:515px;width:83px;height:33px;',
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
			style: 'position:absolute;left:810px;top:515px;width:129px;height:33px;',
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