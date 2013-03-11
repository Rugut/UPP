Ext.define('Справочники.ОсновныеСредства.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 495,width: 764,
	iconCls: 'bogus',
	title: 'Основные средства',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:666px;top:33px;width:90px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:94px;top:33px;width:484px;height:19px;',
		},
		{
			xtype: 'textfield',
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
					text:'ДокументыКомплектацииОС',
				},
				{
					text:'Подменю2',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:470px;width:764px;height:25px;',
			items:
			[
				{
					text:'Разделитель1',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель',
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
					title:'ОсновныеСведения',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Родитель',
			style: 'position:absolute;left:148px;top:6px;width:592px;height:19px;',
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
			xtype: 'textfield',
			hideLabel: true,
			name: 'АдресМестонахождения',
			style: 'position:absolute;left:148px;top:289px;width:467px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КодРегиона',
			style: 'position:absolute;left:698px;top:289px;width:42px;height:19px;',
		},
					]
				},
				{
					title:'Страница1',
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
					title:'Страница2',
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
					]
				},
				{
					title:'Страница3',
					items:
					[
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
					]
				},
				{
					title:'Страница4',
					items:
					[
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
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВведеноВЭксплуатациюУСН',
			style: 'position:absolute;left:176px;top:54px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПервоначальнаяСтоимостьУСН',
			style: 'position:absolute;left:176px;top:102px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СрокИспользованияУСН',
			style: 'position:absolute;left:176px;top:126px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаПриобретения',
			style: 'position:absolute;left:176px;top:6px;width:80px;height:19px;',
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
					title:'СвойстваИЗначения',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:733px;height:259px;',
			height: 259,width: 733,
			columns:
			[
				{
					text:'ПометкаУдаления',
				},
				{
					text:'Свойство',
				},
				{
					text:'Значение',
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
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:733px;height:259px;',
			height: 259,width: 733,
			columns:
			[
				{
					text:'ПометкаУдаления',
				},
				{
					text:'Принадлежность',
				},
				{
					text:'Категория',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:733px;height:24px;',
			items:
			[
				{
					text:'Действие2',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие3',
				},
			]
		},
					]
				},
				{
					title:'СведенияОНедвижимости',
					items:
					[
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
			style: 'position:absolute;left:141px;top:30px;width:599px;height:59px;',
			height: 59,width: 599,
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
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаСведений',
			style: 'position:absolute;left:94px;top:81px;width:122px;height:19px;',
		},
	]
});