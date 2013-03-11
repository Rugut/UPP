Ext.define('Обработки.ФормированиеСпискаРаботников.ФормаНастройки',
	{
	extend: 'Ext.window.Window',
	height: 404,width: 429,
	iconCls: 'bogus',
	title: 'Формирование списка сотрудников',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:379px;width:429px;height:25px;',
			items:
			[
				{
					text:'ОсновныеДействияФормыВыполнить',
				},
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаАктуальности',
			style: 'position:absolute;left:173px;top:8px;width:120px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:96px;width:413px;height:108px;',
			height: 108,width: 413,
			columns:
			[
				{
					text:'Использование',
				},
				{
					text:'Имя',
				},
				{
					text:'ВидСравнения',
				},
				{
					text:'Значение',
				},
				{
					text:'ЗначениеС',
				},
				{
					text:'ЗначениеПо',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:72px;width:413px;height:24px;',
			items:
			[
				{
					text:'УстановитьФлажки',
				},
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
					text:'СнятьФлажки',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:204px;width:413px;height:167px;',
			height: 167,width: 413,
			items:
			[
				{
					title:'ПремииРаботниковОрганизаций',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:46px;width:413px;height:121px;',
			height: 121,width: 413,
			columns:
			[
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
			]
		},
					]
				},
				{
					title:'РазовыеРасчеты',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОсновнойВидРасчета',
			style: 'position:absolute;left:90px;top:25px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОкончания',
			style: 'position:absolute;left:200px;top:49px;width:85px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНачала',
			style: 'position:absolute;left:90px;top:49px;width:85px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаВыбораПериода',
			text: '...',
			style: 'position:absolute;left:290px;top:49px;width:20px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:93px;width:413px;height:74px;',
			height: 74,width: 413,
			columns:
			[
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
			]
		},
					]
				},
				{
					title:'РазовыеРасчетыДляЧастиСмены',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНачала4',
			style: 'position:absolute;left:90px;top:49px;width:85px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОплачиватьЧасовНачисления',
			style: 'position:absolute;left:90px;top:73px;width:85px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидРасчетаВнутрисменный',
			style: 'position:absolute;left:90px;top:25px;width:220px;height:19px;',
		},
					]
				},
				{
					title:'РазовыеДополнительныеНачисления',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДополнительныйВидРасчета',
			style: 'position:absolute;left:90px;top:25px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОкончания1',
			style: 'position:absolute;left:199px;top:49px;width:85px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНачала1',
			style: 'position:absolute;left:90px;top:49px;width:85px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КодВычета',
			style: 'position:absolute;left:90px;top:74px;width:85px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаВыбораПериода1',
			text: '...',
			style: 'position:absolute;left:290px;top:49px;width:20px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:120px;width:413px;height:47px;',
			height: 47,width: 413,
			columns:
			[
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
			]
		},
					]
				},
				{
					title:'ВводПроцентаДеятельностиЕНВД',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПодпадаетПодЕНВД',
			style: 'position:absolute;left:139px;top:25px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетДт',
			style: 'position:absolute;left:139px;top:49px;width:80px;height:19px;',
		},
					]
				},
				{
					title:'НевыходыВОрганизацияхДляЦелойСмены',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНачала2',
			style: 'position:absolute;left:90px;top:49px;width:85px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОкончания2',
			style: 'position:absolute;left:200px;top:49px;width:85px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидРасчетаЦелосменныйНевыход',
			style: 'position:absolute;left:90px;top:25px;width:220px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаВыбораПериода2',
			text: '...',
			style: 'position:absolute;left:290px;top:49px;width:20px;height:19px;',
		},
					]
				},
				{
					title:'НевыходыВОрганизацияхДляЧастиСмены',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНачала3',
			style: 'position:absolute;left:90px;top:49px;width:85px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОплачиватьЧасовНевыхода',
			style: 'position:absolute;left:90px;top:73px;width:85px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидРасчетаВнутрисменныйНевыход',
			style: 'position:absolute;left:90px;top:25px;width:220px;height:19px;',
		},
					]
				},
				{
					title:'ОплатаСверхурочныхЧасов',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаВыхода',
			style: 'position:absolute;left:147px;top:25px;width:90px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЧасовПолуторных',
			style: 'position:absolute;left:147px;top:49px;width:90px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЧасовДвойных',
			style: 'position:absolute;left:147px;top:73px;width:90px;height:19px;',
		},
					]
				},
				{
					title:'ОплатаПраздничныхИВыходныхДнейОрганизаций',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаПраздника',
			style: 'position:absolute;left:166px;top:25px;width:90px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтработаноЧасов',
			style: 'position:absolute;left:166px;top:49px;width:90px;height:19px;',
		},
					]
				},
				{
					title:'ВводСпособаОтраженияВРеглУчете',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СпособОтраженияВБухучете',
			style: 'position:absolute;left:109px;top:51px;width:304px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаИзменения',
			style: 'position:absolute;left:109px;top:25px;width:95px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СпособОтраженияВБухучетеБольничногоЗаСчетРаботодателя',
			style: 'position:absolute;left:109px;top:77px;width:304px;height:19px;',
		},
					]
				},
				{
					title:'ВводРаспределенияОсновногоЗаработка',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:49px;width:413px;height:118px;',
			height: 118,width: 413,
			columns:
			[
				{
					text:'СпособОтраженияВБухучете',
				},
				{
					text:'ДоляСпособаОтражения',
				},
				{
					text:'ПодпадаетПодЕНВД',
				},
				{
					text:'СчетДт',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:25px;width:413px;height:24px;',
			items:
			[
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
					title:'ПереносЗадолженности',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаПериодВозникновения',
			style: 'position:absolute;left:207px;top:25px;width:206px;height:19px;',
		},
					]
				},
				{
					title:'РазовыеУдержания',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОсновнойВидРасчета1',
			style: 'position:absolute;left:90px;top:25px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОкончания3',
			style: 'position:absolute;left:200px;top:49px;width:85px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНачала5',
			style: 'position:absolute;left:90px;top:49px;width:85px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаВыбораПериода3',
			text: '...',
			style: 'position:absolute;left:290px;top:49px;width:20px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:94px;width:413px;height:67px;',
			height: 67,width: 413,
			columns:
			[
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
			]
		},
					]
				},
				{
					title:'ВводРаспределенияЗаработка',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:46px;width:413px;height:121px;',
			height: 121,width: 413,
			columns:
			[
				{
					text:'СпособОтраженияВУпручете',
				},
				{
					text:'ДоляСпособаОтражения',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:22px;width:413px;height:24px;',
			items:
			[
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
					title:'РеестрДСВ3',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'РазмерВзносов',
			style: 'position:absolute;left:124px;top:36px;width:80px;height:19px;',
		},
					]
				},
				{
					title:'ПостоянныеНачисления',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:29px;width:401px;height:132px;',
			height: 132,width: 401,
			columns:
			[
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
			]
		},
					]
				},
				{
					title:'КадровоеПеремещениеОрганизаций',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНачала6',
			style: 'position:absolute;left:102px;top:30px;width:85px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОкончания4',
			style: 'position:absolute;left:212px;top:30px;width:85px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаВыбораПериода4',
			text: '...',
			style: 'position:absolute;left:302px;top:30px;width:20px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПодразделениеОрганизации',
			style: 'position:absolute;left:102px;top:55px;width:195px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Должность',
			style: 'position:absolute;left:102px;top:80px;width:195px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ГрафикРаботы',
			style: 'position:absolute;left:102px;top:105px;width:195px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:32px;width:413px;height:19px;',
			height: 19,width: 413,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаУволенных',
			style: 'position:absolute;left:165px;top:0px;width:120px;height:19px;',
		},
					]
				},
			]
		},
	]
});