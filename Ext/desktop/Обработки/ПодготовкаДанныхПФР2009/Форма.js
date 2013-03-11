Ext.define('Обработки.ПодготовкаДанныхПФР2009.Форма',
	{
	extend: 'Ext.window.Window',
	height: 548,width: 970,
	iconCls: 'bogus',
	title: 'Подготовка данных СЗВ-4',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:93px;top:8px;width:249px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'РасчетныйПериод',
			style: 'position:absolute;left:393px;top:8px;width:72px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:81px;width:275px;height:24px;',
			items:
			[
				{
					text:'ПометитьНаУдаление',
				},
				{
					text:'Разделитель',
				},
				{
					text:'АДВ11',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'ПеренестиСЗВ4',
				},
				{
					text:'ДействиеОбновить',
				},
				{
					text:'ПринятоВПФР',
				},
				{
					text:'СЗВ4',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель1',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:105px;width:275px;height:130px;',
			height: 130,width: 275,
			columns:
			[
				{
					text:'Пачка',
				},
				{
					text:'НомерПачки',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:300px;top:81px;width:662px;height:154px;',
			height: 154,width: 662,
			items:
			[
				{
					title:'АДВ11',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаСоставления',
			style: 'position:absolute;left:96px;top:0px;width:136px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерПачки',
			style: 'position:absolute;left:320px;top:0px;width:92px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаДействия',
			style: 'position:absolute;left:546px;top:24px;width:92px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Исполнитель1',
			style: 'position:absolute;left:96px;top:24px;width:316px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:69px;width:662px;height:85px;',
			height: 85,width: 662,
			items:
			[
				{
					title:'ТаблицаВзносов',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:24px;width:662px;height:59px;',
			height: 59,width: 662,
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
					text:'НакопительнаяЧасть1',
				},
				{
					text:'ДополнительныйТариф',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:662px;height:24px;',
			items:
			[
				{
					text:'Действие1',
				},
				{
					text:'ЗадолженностьПередПФР',
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
					text:'ДобавитьСтроку',
				},
				{
					text:'Разделитель1',
				},
			]
		},
					]
				},
				{
					title:'ПустаяСтраница',
					items:
					[
					]
				},
			]
		},
					]
				},
				{
					title:'СЗВ4',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТерриториальныеУсловия',
			style: 'position:absolute;left:167px;top:120px;width:66px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаСоставления1',
			style: 'position:absolute;left:98px;top:0px;width:117px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерПачки1',
			style: 'position:absolute;left:306px;top:0px;width:92px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Исполнитель',
			style: 'position:absolute;left:98px;top:24px;width:300px;height:19px;',
		},
					]
				},
				{
					title:'ПустаяСтраница',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ФорматФайла',
			style: 'position:absolute;left:576px;top:8px;width:123px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'Печать',
			text: '&Печать',
			style: 'position:absolute;left:622px;top:519px;width:76px;height:21px;',
		},
		{
			xtype: 'button',
			name: 'ПоказатьФайл',
			text: 'Показать &файл',
			style: 'position:absolute;left:699px;top:519px;width:118px;height:21px;',
		},
		{
			xtype: 'button',
			name: 'НаДиск',
			text: 'На &диск',
			style: 'position:absolute;left:818px;top:519px;width:81px;height:21px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:266px;width:954px;height:243px;',
			height: 243,width: 954,
			items:
			[
				{
					title:'СЗВ4',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:24px;width:275px;height:219px;',
			height: 219,width: 275,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'ФизЛицо',
				},
				{
					text:'АдресДляИнформирования',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:275px;height:24px;',
			items:
			[
				{
					text:'Действие3',
				},
				{
					text:'Перенести',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие1',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:290px;top:131px;width:664px;height:112px;',
			height: 112,width: 664,
			items:
			[
				{
					title:'СтраницаСЗВ41',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:664px;height:24px;',
			items:
			[
				{
					text:'Действие12',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие16',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие11',
				},
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
					text:'Действие10',
				},
				{
					text:'Действие3',
				},
				{
					text:'Подменю',
				},
				{
					text:'Действие17',
				},
				{
					text:'Действие13',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие14',
				},
				{
					text:'Действие15',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:24px;width:664px;height:88px;',
			height: 88,width: 664,
			columns:
			[
				{
					text:'НевидимаяКолонка1',
				},
				{
					text:'ДатаНачалаПериода',
				},
				{
					text:'ДатаОкончанияПериода',
				},
				{
					text:'НевидимаяКолонка2',
				},
				{
					text:'ТерриториальныеУсловия',
				},
				{
					text:'НевидимаяКолонка3',
				},
				{
					text:'ОсобыеУсловияТруда',
				},
				{
					text:'КодПозицииСписка',
				},
				{
					text:'НевидимаяКолонка4',
				},
				{
					text:'ОснованиеИсчисляемогоСтажа',
				},
				{
					text:'ПервыйПараметрИсчисляемогоСтажа',
				},
				{
					text:'ВторойПараметрИсчисляемогоСтажа',
				},
				{
					text:'ТретийПараметрИсчисляемогоСтажа',
				},
				{
					text:'НевидимаяКолонка5',
				},
				{
					text:'ОснованиеВыслугиЛет',
				},
				{
					text:'ПервыйПараметрВыслугиЛет',
				},
				{
					text:'ВторойПараметрВыслугиЛет',
				},
				{
					text:'ТретийПараметрВыслугиЛет',
				},
			]
		},
					]
				},
				{
					title:'СтраницаСЗВ42',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтажРаботыНачалоПериода',
			style: 'position:absolute;left:106px;top:13px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтажРаботыОкончаниеПериода',
			style: 'position:absolute;left:106px;top:37px;width:80px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:290px;top:0px;width:664px;height:108px;',
			height: 108,width: 664,
			items:
			[
				{
					title:'СтраницаСоВсемиВзносами',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'МесяцыБолезни',
			style: 'position:absolute;left:225px;top:66px;width:45px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'МесяцыОтпускаЗаСвойСчет',
			style: 'position:absolute;left:225px;top:89px;width:45px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДниОтпускаЗаСвойСчет',
			style: 'position:absolute;left:324px;top:89px;width:45px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДниБолезни',
			style: 'position:absolute;left:324px;top:66px;width:45px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'АдресДляИнформирования',
			style: 'position:absolute;left:476px;top:89px;width:188px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:21px;width:467px;height:19px;',
			height: 19,width: 467,
			items:
			[
				{
					title:'ВзносыПоСотруднику',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НачисленоНаСтраховуюЧастьПФР',
			style: 'position:absolute;left:59px;top:0px;width:75px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НачисленоНаНакопительнуюЧастьПФР',
			style: 'position:absolute;left:224px;top:0px;width:75px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:304px;top:0px;width:163px;height:19px;',
			height: 19,width: 163,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НачисленоПоДополнительномуТарифу',
			style: 'position:absolute;left:90px;top:0px;width:73px;height:19px;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'ПустаяСтраница',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:476px;top:0px;width:188px;height:64px;',
			height: 64,width: 188,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НачисленоПоВсейОрганизацииНаСтраховуюЧастьПФР',
			style: 'position:absolute;left:115px;top:21px;width:71px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НачисленоПоВсейОрганизацииНаНакопительнуюЧастьПФР',
			style: 'position:absolute;left:115px;top:45px;width:71px;height:19px;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'СтраницаБезВсехВзносов',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'МесяцыБолезни1',
			style: 'position:absolute;left:225px;top:66px;width:45px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'МесяцыОтпускаЗаСвойСчет1',
			style: 'position:absolute;left:225px;top:89px;width:45px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДниОтпускаЗаСвойСчет1',
			style: 'position:absolute;left:324px;top:89px;width:45px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДниБолезни1',
			style: 'position:absolute;left:324px;top:66px;width:45px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'АдресДляИнформирования1',
			style: 'position:absolute;left:439px;top:65px;width:225px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:21px;width:664px;height:19px;',
			height: 19,width: 664,
			items:
			[
				{
					title:'ВзносыПоСотруднику',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НачисленоНаСтраховуюЧастьПФР1',
			style: 'position:absolute;left:60px;top:0px;width:110px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НачисленоНаНакопительнуюЧастьПФР1',
			style: 'position:absolute;left:304px;top:0px;width:110px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:425px;top:0px;width:239px;height:19px;',
			height: 19,width: 239,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НачисленоПоДополнительномуТарифу1',
			style: 'position:absolute;left:129px;top:0px;width:110px;height:19px;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'ПустаяСтраница',
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
				},
				{
					title:'ПустаяСтраница',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:0px;width:940px;height:226px;',
			height: 226,width: 940,
			columns:
			[
				{
					text:'',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'button',
			name: 'Проверить',
			text: 'Проверить',
			style: 'position:absolute;left:526px;top:519px;width:95px;height:21px;',
		},
		{
			xtype: 'button',
			name: 'Сформировать',
			text: 'Заполнить',
			style: 'position:absolute;left:8px;top:32px;width:80px;height:21px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаОК',
			text: 'ОК',
			style: 'position:absolute;left:901px;top:519px;width:36px;height:21px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВвода1',
			style: 'position:absolute;left:43px;top:148px;width:45px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'Справка',
			text: '',
			style: 'position:absolute;left:939px;top:519px;width:23px;height:21px;',
		},
	]
});