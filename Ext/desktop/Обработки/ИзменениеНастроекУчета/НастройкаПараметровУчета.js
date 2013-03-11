Ext.define('Обработки.ИзменениеНастроекУчета.НастройкаПараметровУчета',
	{
	extend: 'Ext.window.Window',
	height: 468,width: 765,
	iconCls: 'bogus',
	title: 'Настройка параметров учета',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:443px;width:765px;height:25px;',
			items:
			[
				{
					text:'Разделитель2',
				},
				{
					text:'Закрыть',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ОК',
				},
				{
					text:'ДействиеЗаписать',
				},
				{
					text:'РазделительЗакрыть',
				},
				{
					text:'Печать',
				},
				{
					text:'Действие',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:8px;width:195px;height:427px;',
			height: 427,width: 195,
			columns:
			[
				{
					text:'Представление',
				},
				{
					text:'ИмяРаздела',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:209px;top:8px;width:548px;height:427px;',
			height: 427,width: 548,
			items:
			[
				{
					title:'Производство',
					items:
					[
					]
				},
				{
					title:'Заказы',
					items:
					[
					]
				},
				{
					title:'ЗаказыНаПроизводство',
					items:
					[
					]
				},
				{
					title:'Планирование',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодичностьДоступностиКлючевыхРесурсовПредприятия',
			style: 'position:absolute;left:343px;top:48px;width:190px;height:19px;',
		},
					]
				},
				{
					title:'Валюты',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВалютаУправленческогоУчета',
			style: 'position:absolute;left:212px;top:111px;width:83px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВалютаРегламентированногоУчета',
			style: 'position:absolute;left:212px;top:48px;width:83px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВалютаМеждународногоУчета',
			style: 'position:absolute;left:212px;top:144px;width:83px;height:19px;',
		},
					]
				},
				{
					title:'УчетТоваров',
					items:
					[
					]
				},
				{
					title:'Печать',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДополнительнаяКолонкаПечатныхФормДокументов',
			style: 'position:absolute;left:300px;top:48px;width:104px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЕдиницаИзмеренияВеса',
			style: 'position:absolute;left:300px;top:112px;width:104px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЕдиницаИзмеренияОбъема',
			style: 'position:absolute;left:300px;top:176px;width:104px;height:19px;',
		},
					]
				},
				{
					title:'РежимУчетаЗатрат',
					items:
					[
		{
			xtype: 'button',
			name: 'КнопкаНастройкаВеденияУПУПоОрганизациям',
			text: 'Детализация учета ...',
			style: 'position:absolute;left:344px;top:272px;width:178px;height:22px;',
		},
		{
			xtype: 'button',
			name: 'ДетализацияРасширеннойАналитикиУчетаНоменклатурыИЗатрат',
			text: 'Детализация учета ...',
			style: 'position:absolute;left:344px;top:72px;width:178px;height:22px;',
		},
					]
				},
				{
					title:'Проекты',
					items:
					[
					]
				},
				{
					title:'Взаиморасчеты',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СпособКонтроляДнейЗадолженности',
			style: 'position:absolute;left:224px;top:48px;width:190px;height:19px;',
		},
					]
				},
				{
					title:'РасчетыСПерсоналом',
					items:
					[
					]
				},
				{
					title:'НДС',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНачалаУказанияСокращенногоНаименованияПродавцаВСчетеФактуре',
			style: 'position:absolute;left:128px;top:215px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НачалоПримененияИсправленныхСчетовФактур',
			style: 'position:absolute;left:128px;top:297px;width:80px;height:19px;',
		},
					]
				},
				{
					title:'НДСВвалюте',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНачалаПересчетаСуммыНДСвРубляхПоДокументамВИностраннойВалютеПоСтавкеНДС',
			style: 'position:absolute;left:131px;top:148px;width:80px;height:19px;',
		},
					]
				},
				{
					title:'НалогНаПрибыль',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НачалоОценкиДоходовИРасходовВНУПоКурсуАвансов',
			style: 'position:absolute;left:132px;top:123px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНачалаУчетаПостоянныхРазницВКурсовыхРазницахПоРасчетамВУЕ',
			style: 'position:absolute;left:142px;top:273px;width:80px;height:19px;',
		},
					]
				},
				{
					title:'РозничныеПродажи',
					items:
					[
					]
				},
				{
					title:'Себестоимость',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТипЦенПлановойСебестоимостиНоменклатуры',
			style: 'position:absolute;left:270px;top:48px;width:196px;height:19px;',
		},
					]
				},
				{
					title:'СпособыРаспределенияЗатрат',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:12px;top:48px;width:528px;height:371px;',
			height: 371,width: 528,
			items:
			[
				{
					title:'РасширеннаяАналитика',
					items:
					[
					]
				},
				{
					title:'ТрадиционныйРежим',
				},
			]
		},
					]
				},
			]
		},
	]
});