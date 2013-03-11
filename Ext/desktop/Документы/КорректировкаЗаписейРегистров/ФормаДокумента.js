Ext.define('Документы.КорректировкаЗаписейРегистров.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 363,width: 650,
	iconCls: 'bogus',
	title: 'Корректировка записей регистров',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:57px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:157px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:650px;height:25px;',
			items:
			[
				{
					text:'Разделитель4',
				},
				{
					text:'Подменю1',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'Настройка',
				},
				{
					text:'ДействиеОткрытьСвойства1',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'ДействиеОткрытьКатегории1',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:338px;width:650px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие',
				},
				{
					text:'Печать',
				},
				{
					text:'Разделитель2',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:94px;top:311px;width:548px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:94px;top:287px;width:548px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:57px;width:634px;height:225px;',
			height: 225,width: 634,
			items:
			[
				{
					title:'ЗаполнениеДвижений',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:27px;width:620px;height:168px;',
			height: 168,width: 620,
			items:
			[
				{
					title:'ПодсказкаЗаполнениеДвижений',
					items:
					[
					]
				},
				{
					title:'ТаблицаЗаполнениеДвижений',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:24px;width:620px;height:144px;',
			height: 144,width: 620,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'Действие',
				},
				{
					text:'Документ',
				},
				{
					text:'Примечание',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:620px;height:24px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'ЗаполнитьДвижения',
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
					title:'РегистрыБухгалтерии',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:6px;width:620px;height:189px;',
			height: 189,width: 620,
			items:
			[
				{
					title:'Хозрасчетный',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:606px;height:133px;',
			height: 133,width: 606,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'НомерСтроки',
				},
				{
					text:'Организация',
				},
				{
					text:'СчетДт',
				},
				{
					text:'СубконтоДт1',
				},
				{
					text:'СубконтоДт2',
				},
				{
					text:'СубконтоДт3',
				},
				{
					text:'КоличествоДт',
				},
				{
					text:'ВалютаДт',
				},
				{
					text:'ВалютнаяСуммаДт',
				},
				{
					text:'СчетКт',
				},
				{
					text:'СубконтоКт1',
				},
				{
					text:'СубконтоКт2',
				},
				{
					text:'СубконтоКт3',
				},
				{
					text:'КоличествоКт',
				},
				{
					text:'ВалютаКт',
				},
				{
					text:'ВалютнаяСуммаКт',
				},
				{
					text:'Сумма',
				},
				{
					text:'Содержание',
				},
				{
					text:'НомерЖурнала',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:606px;height:24px;',
			items:
			[
				{
					text:'ТабличноеПолеДвиженияБУСортироватьПоВозрастанию',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'УстановитьОтборИСортировкуСписка___',
				},
				{
					text:'ЗаполнитьНУ',
				},
				{
					text:'ПереключитьАктивность',
				},
				{
					text:'ТабличноеПолеДвиженияБУСортироватьПоУбыванию',
				},
				{
					text:'ВывестиСписок',
				},
				{
					text:'Разделитель2',
				},
			]
		},
					]
				},
				{
					title:'Налоговый',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:606px;height:133px;',
			height: 133,width: 606,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'НомерСтроки',
				},
				{
					text:'Организация',
				},
				{
					text:'СчетДт',
				},
				{
					text:'КоличествоДт',
				},
				{
					text:'ВидУчетаДт',
				},
				{
					text:'СубконтоДт1',
				},
				{
					text:'СубконтоДт2',
				},
				{
					text:'СубконтоДт3',
				},
				{
					text:'СчетКт',
				},
				{
					text:'КоличествоКт',
				},
				{
					text:'ВидУчетаКт',
				},
				{
					text:'СубконтоКт1',
				},
				{
					text:'СубконтоКт2',
				},
				{
					text:'СубконтоКт3',
				},
				{
					text:'Сумма',
				},
				{
					text:'Содержание',
				},
				{
					text:'НомерЖурнала',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:606px;height:24px;',
			items:
			[
				{
					text:'ТабличноеПолеДвиженияНУСортироватьПоВозрастанию',
				},
				{
					text:'ТабличноеПолеДвиженияНУСортироватьПоУбыванию',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'ПереключитьАктивность',
				},
				{
					text:'УстановитьОтборИСортировкуСписка___',
				},
				{
					text:'ВывестиСписок',
				},
				{
					text:'Разделитель2',
				},
			]
		},
					]
				},
				{
					title:'Международный',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:606px;height:133px;',
			height: 133,width: 606,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'Организация',
				},
				{
					text:'СчетДт',
				},
				{
					text:'СубконтоДт1',
				},
				{
					text:'СубконтоДт2',
				},
				{
					text:'СубконтоДт3',
				},
				{
					text:'ВалютаДт',
				},
				{
					text:'ВалютнаяСуммаДт',
				},
				{
					text:'КоличествоДт',
				},
				{
					text:'СчетКт',
				},
				{
					text:'СубконтоКт1',
				},
				{
					text:'СубконтоКт2',
				},
				{
					text:'СубконтоКт3',
				},
				{
					text:'ВалютаКт',
				},
				{
					text:'ВалютнаяСуммаКт',
				},
				{
					text:'КоличествоКт',
				},
				{
					text:'Сумма',
				},
				{
					text:'Содержание',
				},
				{
					text:'НомерЖурнала',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:606px;height:24px;',
			items:
			[
				{
					text:'ТабличноеПолеДвиженияМУСортироватьПоВозрастанию',
				},
				{
					text:'ТабличноеПолеДвиженияМУСортироватьПоУбыванию',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'ВывестиСписок',
				},
				{
					text:'УстановитьОтборИСортировкуСписка___',
				},
				{
					text:'ПереключитьАктивность',
				},
			]
		},
					]
				},
				{
					title:'Бюджетирование',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:31px;width:606px;height:132px;',
			height: 132,width: 606,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'Сценарий',
				},
				{
					text:'СчетДт',
				},
				{
					text:'ВалютаДт',
				},
				{
					text:'ВалютнаяСуммаДт',
				},
				{
					text:'СубконтоДт1',
				},
				{
					text:'СубконтоДт2',
				},
				{
					text:'СубконтоДт3',
				},
				{
					text:'СчетКт',
				},
				{
					text:'ВалютаКт',
				},
				{
					text:'ВалютнаяСуммаКт',
				},
				{
					text:'СубконтоКт1',
				},
				{
					text:'СубконтоКт2',
				},
				{
					text:'СубконтоКт3',
				},
				{
					text:'СуммаУпр',
				},
				{
					text:'СуммаСценария',
				},
				{
					text:'КоличествоДт',
				},
				{
					text:'КоличествоКт',
				},
				{
					text:'СтатьяОборотов',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:606px;height:24px;',
			items:
			[
				{
					text:'Разделитель3',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие10',
				},
				{
					text:'ТабличноеПолеДвиженияБюджетированиеСортироватьПоВозрастанию',
				},
				{
					text:'ТабличноеПолеДвиженияБюджетированиеСортироватьПоУбыванию',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие8',
				},
			]
		},
					]
				},
				{
					title:'Подсказка',
					items:
					[
					]
				},
			]
		},
					]
				},
				{
					title:'РегистрыНакопления',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:6px;width:620px;height:189px;',
			height: 189,width: 620,
			items:
			[
				{
					title:'Подсказка',
					items:
					[
					]
				},
			]
		},
					]
				},
				{
					title:'РегистрыСведений',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:6px;width:620px;height:189px;',
			height: 189,width: 620,
			items:
			[
				{
					title:'Подсказка',
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