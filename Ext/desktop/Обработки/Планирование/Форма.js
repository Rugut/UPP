Ext.define('Обработки.Планирование.Форма',
	{
	extend: 'Ext.window.Window',
	height: 580,width: 1000,
	iconCls: 'bogus',
	title: 'Планирование',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:1000px;height:25px;',
			items:
			[
				{
					text:'ДействиеВосстановитьЗначения',
				},
				{
					text:'Действие',
				},
				{
					text:'РазделительСохранитьВосстановитьЗначения',
				},
				{
					text:'Подменю',
				},
				{
					text:'РазделительДействия',
				},
				{
					text:'Действие1',
				},
				{
					text:'ДействиеСохранитьЗначения',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаДатаНач',
			style: 'position:absolute;left:790px;top:2px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаДатаКон',
			style: 'position:absolute;left:890px;top:2px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:972px;top:2px;width:20px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:984px;height:539px;',
			height: 539,width: 984,
			items:
			[
				{
					title:'Планы',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:46px;width:230px;height:467px;',
			height: 467,width: 230,
			columns:
			[
				{
					text:'План',
				},
				{
					text:'Подразделение',
				},
				{
					text:'Представление',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:242px;top:46px;width:734px;height:189px;',
			height: 189,width: 734,
			columns:
			[
				{
					text:'Номенклатура',
				},
				{
					text:'ХарактеристикаНоменклатуры',
				},
				{
					text:'ИсточникОбеспечения',
				},
				{
					text:'Количество',
				},
				{
					text:'ЕдиницаИзмерения',
				},
				{
					text:'Коэффициент',
				},
				{
					text:'Заказ',
				},
				{
					text:'Контрагент',
				},
				{
					text:'Договор',
				},
				{
					text:'Спецификация',
				},
				{
					text:'ВариантРаспределения',
				},
				{
					text:'Источник',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:242px;top:22px;width:734px;height:24px;',
			items:
			[
				{
					text:'Настройка',
				},
				{
					text:'Разделитель',
				},
				{
					text:'РазделительДействия',
				},
				{
					text:'РазделительНастройка',
				},
				{
					text:'АвтоматическийРасчетПотребности',
				},
				{
					text:'РассчитатьИсточникиОбеспечения',
				},
				{
					text:'ПолныйСоставПлана',
				},
				{
					text:'РедактироватьСоставПлана',
				},
				{
					text:'Действия',
				},
				{
					text:'АвтоматическийРасчетИсточниковОбеспечения',
				},
				{
					text:'РассчитатьПотребности',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаПериодичность',
			style: 'position:absolute;left:882px;top:24px;width:92px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:242px;top:281px;width:734px;height:232px;',
			height: 232,width: 734,
			columns:
			[
				{
					text:'Период',
				},
				{
					text:'Номенклатура',
				},
				{
					text:'ХарактеристикаНоменклатуры',
				},
				{
					text:'Количество',
				},
				{
					text:'ЕдиницаИзмерения',
				},
				{
					text:'Коэффициент',
				},
				{
					text:'МинимальнаяПартия',
				},
				{
					text:'Кратность',
				},
				{
					text:'ВидВоспроизводства',
				},
				{
					text:'Спецификация',
				},
				{
					text:'Подразделение',
				},
				{
					text:'РабочийЦентр',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:242px;top:257px;width:734px;height:24px;',
			items:
			[
				{
					text:'Действие',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:22px;width:230px;height:24px;',
			items:
			[
				{
					text:'ПланПроизводства',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ПланЗакупок',
				},
				{
					text:'ДействиеОбновить',
				},
				{
					text:'ПланыЗакупок',
				},
				{
					text:'Настройка',
				},
				{
					text:'ДействиеИзменить',
				},
				{
					text:'ПланыПроизводства',
				},
				{
					text:'ПланПродаж',
				},
				{
					text:'ПланыПродаж',
				},
				{
					text:'РасширенноеПредставлениеДокументов',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ДействиеДобавить',
				},
			]
		},
					]
				},
				{
					title:'ПроизводственнаяПрограмма',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:6px;width:970px;height:507px;',
			height: 507,width: 970,
			items:
			[
				{
					title:'ПлановыеЗадания',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:956px;height:24px;',
			items:
			[
				{
					text:'ПланироватьНераспланированные',
				},
				{
					text:'РазделительСписок',
				},
				{
					text:'ВыполнитьПланирование',
				},
				{
					text:'ПланироватьВсе',
				},
				{
					text:'ДействиеОтборПоЗначениюВТекущейКолонке',
				},
				{
					text:'ДействиеНастройкаСписка',
				},
				{
					text:'РазделительВыполнитьПланирование',
				},
				{
					text:'Действие',
				},
				{
					text:'ДействиеУстановитьОтборИСортировкуСписка',
				},
				{
					text:'ДействиеИсторияОтборов',
				},
				{
					text:'ДействиеВывестиСписок',
				},
				{
					text:'ДействиеОтключитьОтбор',
				},
				{
					text:'ПланироватьВыбранные',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:956px;height:451px;',
			height: 451,width: 956,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'Период',
				},
				{
					text:'Подразделение',
				},
				{
					text:'РабочийЦентр',
				},
				{
					text:'Номенклатура',
				},
				{
					text:'ХарактеристикаНоменклатуры',
				},
				{
					text:'Заказ',
				},
				{
					text:'Количество',
				},
				{
					text:'Спецификация',
				},
				{
					text:'ТочкаМаршрута',
				},
				{
					text:'Источник',
				},
				{
					text:'ВидВоспроизводства',
				},
				{
					text:'ВариантРаспределения',
				},
			]
		},
					]
				},
				{
					title:'СтраницаДиаграммаГанта',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:956px;height:24px;',
			items:
			[
				{
					text:'ДействиеРазвернуть',
				},
				{
					text:'РазделительНастройка',
				},
				{
					text:'Настройка',
				},
				{
					text:'ДействиеСвернуть',
				},
				{
					text:'ДействиеОбновить',
				},
				{
					text:'ОтображатьГрафикРаботы',
				},
				{
					text:'РазделительОбновить',
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
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаСценарий',
			style: 'position:absolute;left:458px;top:2px;width:200px;height:19px;',
		},
	]
});