Ext.define('Обработки.НастройкаПараметровУчета.НастройкаПараметровУчета',
	{
	extend: 'Ext.window.Window',
	height: 547,width: 704,
	iconCls: 'bogus',
	title: 'Настройка учета зарплаты и управления персоналом',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:387px;top:522px;width:317px;height:25px;',
			items:
			[
				{
					text:'ДействиеЗакрыть',
				},
				{
					text:'Применить',
				},
				{
					text:'Разделитель1',
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
			xtype: 'tabpanel',
			style: 'position:absolute;left:7px;top:8px;width:689px;height:506px;',
			height: 506,width: 689,
			items:
			[
				{
					title:'АлгоритмыРасчетов',
					items:
					[
					]
				},
				{
					title:'КадровыйУчет',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация3',
			style: 'position:absolute;left:91px;top:52px;width:415px;height:19px;',
		},
					]
				},
				{
					title:'РасчетЗарплаты',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация2',
			style: 'position:absolute;left:91px;top:52px;width:415px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПроцентДоплатыЗаРаботуВНочноеВремя',
			style: 'position:absolute;left:200px;top:383px;width:49px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПроцентДоплатыЗаРаботуВВечернееВремя',
			style: 'position:absolute;left:457px;top:383px;width:49px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТарифПочтовогоСбора',
			style: 'position:absolute;left:179px;top:427px;width:327px;height:19px;',
		},
					]
				},
				{
					title:'ВыплатаЗарплаты',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаРасчетаПлановогоАванса',
			style: 'position:absolute;left:222px;top:342px;width:55px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация6',
			style: 'position:absolute;left:91px;top:52px;width:415px;height:19px;',
		},
					]
				},
				{
					title:'БухучетЗарплаты',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация8',
			style: 'position:absolute;left:91px;top:52px;width:415px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодРБП',
			style: 'position:absolute;left:123px;top:263px;width:60px;height:19px;',
		},
					]
				},
				{
					title:'ОценочныеОбязательства',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОценочноеОбязательствоДляОтпуска',
			style: 'position:absolute;left:46px;top:158px;width:460px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация9',
			style: 'position:absolute;left:91px;top:52px;width:415px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодОО',
			style: 'position:absolute;left:112px;top:300px;width:60px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:10px;top:380px;width:496px;height:118px;',
			height: 118,width: 496,
			columns:
			[
				{
					text:'Резерв',
				},
				{
					text:'Размер',
				},
				{
					text:'РасчетнаяБаза',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ГодРазмерыОО',
			style: 'position:absolute;left:402px;top:337px;width:62px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:10px;top:356px;width:496px;height:24px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:351px;top:430px;width:133px;height:24px;',
			items:
			[
				{
					text:'Действие1',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие',
				},
			]
		},
					]
				},
				{
					title:'СтраховыеВзносы',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодПредельнаяВеличинаБазыСтраховыхВзносов',
			style: 'position:absolute;left:109px;top:284px;width:90px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПредельнаяВеличинаБазыСтраховыхВзносов',
			style: 'position:absolute;left:109px;top:260px;width:90px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:10px;top:82px;width:496px;height:155px;',
			height: 155,width: 496,
			columns:
			[
				{
					text:'Период',
				},
				{
					text:'ПФР',
				},
				{
					text:'ПФРНакопительная',
				},
				{
					text:'ФСС',
				},
				{
					text:'ФФОМС',
				},
				{
					text:'ТФОМС',
				},
				{
					text:'ВидТарифа',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидТарифаСтраховыхВзносов',
			style: 'position:absolute;left:10px;top:58px;width:496px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:281px;top:193px;width:192px;height:27px;',
			items:
			[
				{
					text:'Разделитель1',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие2',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:10px;top:394px;width:496px;height:104px;',
			height: 104,width: 496,
			columns:
			[
				{
					text:'Организация',
				},
				{
					text:'Период',
				},
				{
					text:'Ставка',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:326px;top:405px;width:133px;height:24px;',
			items:
			[
				{
					text:'Действие3',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:10px;top:371px;width:496px;height:24px;',
			items:
			[
				{
					text:'Разделитель1',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация4',
			style: 'position:absolute;left:104px;top:347px;width:402px;height:19px;',
		},
					]
				},
				{
					title:'РасчетСтраховыхВзносов',
					items:
					[
					]
				},
				{
					title:'РасчетНДФЛ',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация5',
			style: 'position:absolute;left:91px;top:52px;width:415px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодНДФЛ',
			style: 'position:absolute;left:109px;top:231px;width:60px;height:19px;',
		},
					]
				},
				{
					title:'РазмерыПособий',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:10px;top:148px;width:496px;height:160px;',
			height: 160,width: 496,
			columns:
			[
				{
					text:'ВидПособия',
				},
				{
					text:'Размер',
				},
				{
					text:'Период',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:323px;top:215px;width:122px;height:24px;',
			items:
			[
				{
					text:'Действие',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОбособленноеПодразделение',
			style: 'position:absolute;left:91px;top:52px;width:415px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаПередачиФССВыплатыПособий',
			style: 'position:absolute;left:208px;top:76px;width:100px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:10px;top:362px;width:496px;height:105px;',
			height: 105,width: 496,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПособиеПоВременнойНетрудоспособности',
			style: 'position:absolute;left:204px;top:27px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПособиеПоБеременности',
			style: 'position:absolute;left:204px;top:52px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаРазмеровОграниченияПособий',
			style: 'position:absolute;left:105px;top:74px;width:80px;height:19px;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'ПрочиеСтавки',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтавкаРефинансированияЦБ',
			style: 'position:absolute;left:110px;top:74px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтавкаРефинансированияЦБДата',
			style: 'position:absolute;left:110px;top:98px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'МинимальнаяОплатаТрудаРФ',
			style: 'position:absolute;left:110px;top:157px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'МинимальнаяОплатаТрудаРФДата',
			style: 'position:absolute;left:110px;top:181px;width:80px;height:19px;',
		},
					]
				},
				{
					title:'РасчетЕСН',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:87px;top:52px;width:419px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодЛьготаЕСН',
			style: 'position:absolute;left:109px;top:133px;width:120px;height:19px;',
		},
					]
				},
				{
					title:'УправленческийУчет',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'МетодПланированияУчетаЗатратНаПерсонал',
			style: 'position:absolute;left:190px;top:43px;width:316px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КоличествоДнейОтпускаВГод',
			style: 'position:absolute;left:278px;top:277px;width:43px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:522px;width:421px;height:25px;',
			height: 25,width: 421,
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