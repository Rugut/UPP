Ext.define('Документы.ПередачаСЗВ4вПФР.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 554,width: 891,
	iconCls: 'bogus',
	title: 'Опись сведений, передаваемых страхователем в ПФР',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:502px;width:670px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:891px;height:25px;',
			items:
			[
				{
					text:'СтруктураПодчиненностиДокумента1',
				},
				{
					text:'Разделитель8',
				},
				{
					text:'Подменю3',
				},
				{
					text:'Подменю3',
				},
				{
					text:'РедактироватьКодНомер',
				},
				{
					text:'Действие11',
				},
				{
					text:'Разделитель8',
				},
				{
					text:'Действие10',
				},
				{
					text:'Действие1',
				},
				{
					text:'Подменю',
				},
				{
					text:'Действие14',
				},
				{
					text:'Разделитель9',
				},
				{
					text:'Действие10',
				},
				{
					text:'Разделитель7',
				},
				{
					text:'Действие8',
				},
				{
					text:'ДвиженияДокументаПоРегистрам1',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие13',
				},
				{
					text:'Разделитель6',
				},
				{
					text:'Разделитель9',
				},
				{
					text:'ДействиеОткрытьСвойства',
				},
				{
					text:'Действие9',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие12',
				},
				{
					text:'Разделитель7',
				},
				{
					text:'Действие15',
				},
				{
					text:'Подменю2',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'ДействиеОткрытьКатегории1',
				},
				{
					text:'Разделитель10',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие12',
				},
				{
					text:'Действие11',
				},
				{
					text:'Разделитель6',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель11',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:529px;width:891px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ВсеФайлы',
				},
				{
					text:'Файл',
				},
				{
					text:'Закрыть',
				},
				{
					text:'АДВ11',
				},
				{
					text:'ВсеФайлы',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'СЗВ4',
				},
				{
					text:'ПроверитьВCheckXML',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'АДВ11',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'НаДискетку',
				},
				{
					text:'ОК',
				},
				{
					text:'СЗВ4',
				},
				{
					text:'Записать',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:149px;width:875px;height:347px;',
			height: 347,width: 875,
			items:
			[
				{
					title:'АДВ11',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:27px;width:875px;height:24px;',
			items:
			[
				{
					text:'Действие8',
				},
				{
					text:'Действие1',
				},
				{
					text:'ПодменюЗаполнить',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие',
				},
				{
					text:'ЗадолженностьПередПФР',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие5',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие7',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:55px;width:875px;height:292px;',
			height: 292,width: 875,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'ТипСтроки',
				},
				{
					text:'Год',
				},
				{
					text:'СтраховаяЧасть',
				},
				{
					text:'НакопительнаяЧасть',
				},
				{
					text:'ДополнительныйТариф',
				},
			]
		},
					]
				},
				{
					title:'Страница2010',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:84px;width:514px;height:24px;',
			items:
			[
				{
					text:'ЗаполнитьВзносы',
				},
				{
					text:'Действие3',
				},
				{
					text:'Провести',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ОтменитьПроведение',
				},
				{
					text:'ПровестиПачки',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'ПодменюЗаполнить',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие6',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:108px;width:514px;height:239px;',
			height: 239,width: 514,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'ДокументПачка',
				},
				{
					text:'НомерПачки',
				},
				{
					text:'ТипФормДокументов',
				},
				{
					text:'КатегорияЗастрахованныхЛиц',
				},
				{
					text:'ТипСведенийСЗВ',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:523px;top:108px;width:352px;height:239px;',
			height: 239,width: 352,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'ФизЛицо',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:523px;top:84px;width:352px;height:24px;',
			items:
			[
				{
					text:'Действие1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие3',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие',
				},
				{
					text:'Перенести',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие8',
				},
				{
					text:'ДействиеРедактироватьСЗВ_',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие5',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Действие9',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:0px;width:875px;height:68px;',
			height: 68,width: 875,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'РасчетСтраховыхВзносов',
			style: 'position:absolute;left:200px;top:0px;width:212px;height:19px;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'Страница2009',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:33px;width:875px;height:314px;',
			height: 314,width: 875,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:22px;width:503px;height:24px;',
			items:
			[
				{
					text:'Разделитель3',
				},
				{
					text:'Провести',
				},
				{
					text:'Заполнить',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие5',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'ПодменюЗаполнить',
				},
				{
					text:'Сформировать',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'ПровестиПачки',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ОтменитьПроведение',
				},
				{
					text:'Разделитель1',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:46px;width:503px;height:242px;',
			height: 242,width: 503,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'НомерПачки',
				},
				{
					text:'ДокументПачка',
				},
				{
					text:'ТипФормДокументов',
				},
				{
					text:'ТерриториальныеУсловия',
				},
				{
					text:'ВидКорректировки',
				},
				{
					text:'КомментарийПачки',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:515px;top:46px;width:352px;height:242px;',
			height: 242,width: 352,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'ФизЛицо',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:515px;top:22px;width:352px;height:24px;',
			items:
			[
				{
					text:'Действие1',
				},
				{
					text:'Перенести',
				},
				{
					text:'Действие9',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие3',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'ДействиеРедактироватьСЗВ_',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие6',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие',
				},
			]
		},
					]
				},
				{
					title:'Расчеты',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:861px;height:24px;',
			items:
			[
				{
					text:'Действие1',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие3',
				},
				{
					text:'ПодменюЗаполнить',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие5',
				},
				{
					text:'ЗадолженностьПередПФР',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие8',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие2',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:861px;height:264px;',
			height: 264,width: 861,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'ТипСтроки',
				},
				{
					text:'Год',
				},
				{
					text:'СтраховаяЧасть',
				},
				{
					text:'НакопительнаяЧасть',
				},
				{
					text:'ДополнительныйТариф',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:0px;width:875px;height:25px;',
			height: 25,width: 875,
			items:
			[
				{
					title:'СтраницаОбычная',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаДействия',
			style: 'position:absolute;left:288px;top:0px;width:80px;height:19px;',
		},
					]
				},
				{
					title:'СтраницаСпециальная',
					items:
					[
					]
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:875px;height:41px;',
			height: 41,width: 875,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:0px;width:875px;height:35px;',
			height: 35,width: 875,
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
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:74px;width:875px;height:75px;',
			height: 75,width: 875,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:529px;top:0px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:629px;top:0px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:94px;top:0px;width:318px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Исполнитель',
			style: 'position:absolute;left:529px;top:24px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Руководитель',
			style: 'position:absolute;left:94px;top:48px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДолжностьРуководителя',
			style: 'position:absolute;left:286px;top:48px;width:126px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтчетныйПериод',
			style: 'position:absolute;left:94px;top:24px;width:318px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерПачки',
			style: 'position:absolute;left:529px;top:48px;width:80px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:611px;top:48px;width:243px;height:19px;',
			height: 19,width: 243,
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
				},
			]
		},
	]
});