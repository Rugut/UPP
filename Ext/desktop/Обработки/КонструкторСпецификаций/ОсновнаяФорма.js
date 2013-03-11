Ext.define('Обработки.КонструкторСпецификаций.ОсновнаяФорма',
	{
	extend: 'Ext.window.Window',
	height: 450,width: 780,
	iconCls: 'bogus',
	title: 'Конструктор спецификаций',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:780px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:764px;height:408px;',
			height: 408,width: 764,
			items:
			[
				{
					title:'Спецификации',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:46px;width:374px;height:336px;',
			height: 336,width: 374,
			columns:
			[
				{
					text:'ВидСтроки',
				},
				{
					text:'Номенклатура',
				},
				{
					text:'ХарактеристикаНоменклатуры',
				},
				{
					text:'ВидНоменклатуры',
				},
				{
					text:'Количество',
				},
				{
					text:'ЕдиницаИзмерения',
				},
				{
					text:'СтатьяЗатрат',
				},
				{
					text:'ВидВоспроизводства',
				},
				{
					text:'ОсновнаяСпецификация',
				},
				{
					text:'Формула',
				},
				{
					text:'УказаниеНорматива',
				},
				{
					text:'СписаниеКомплектующей',
				},
				{
					text:'СвойствоДляСписания',
				},
				{
					text:'НомерСтрокиСпецификации',
				},
				{
					text:'Спецификация',
				},
				{
					text:'ВидНорматива',
				},
				{
					text:'ЕстьСпецификации',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:22px;width:374px;height:24px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Обновить',
				},
				{
					text:'ПечатьПолуфабрикаты',
				},
				{
					text:'Печать',
				},
				{
					text:'ПечатьДеревоСпецификаций',
				},
				{
					text:'ПечатьПокупныеИзделия',
				},
				{
					text:'НайтиВСписке',
				},
				{
					text:'ОтчетПоДеревуСпецификаций',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие5',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:386px;top:207px;width:370px;height:175px;',
			height: 175,width: 370,
			items:
			[
				{
					title:'СпецификацииХарактеристики',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:98px;width:370px;height:77px;',
			height: 77,width: 370,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'Код',
				},
				{
					text:'КодВерсии',
				},
				{
					text:'Наименование',
				},
				{
					text:'Активная',
				},
				{
					text:'ВидСпецификации',
				},
				{
					text:'Состояние',
				},
				{
					text:'ДатаУтверждения',
				},
				{
					text:'Комментарий',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:0px;width:370px;height:66px;',
			height: 66,width: 370,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'Наименование',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:72px;width:369px;height:26px;',
			items:
			[
				{
					text:'ДействиеПечать',
				},
				{
					text:'УстановитьОсновнуюСпецификацию',
				},
				{
					text:'Подменю2',
				},
				{
					text:'СоздатьВерсию',
				},
				{
					text:'ВерсииСпецификации',
				},
				{
					text:'УстановитьОсновнуюСпецификациюНаРабочуюДату',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'УстановитьОсновнуюСпецификациюНаДату',
				},
			]
		},
					]
				},
				{
					title:'Спецификации',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:369px;height:24px;',
			items:
			[
				{
					text:'Подменю',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие2',
				},
				{
					text:'Подменю',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие',
				},
				{
					text:'ДействиеПечать',
				},
				{
					text:'Действие9',
				},
				{
					text:'УстановитьОсновнуюСпецификацию',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие15',
				},
				{
					text:'УстановитьОсновнуюСпецификациюНаРабочуюДату',
				},
				{
					text:'Действие11',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие10',
				},
				{
					text:'Действие8',
				},
				{
					text:'УстановитьОсновнуюСпецификациюНаДату',
				},
				{
					text:'ВерсииСпецификации',
				},
				{
					text:'Действие13',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Действие12',
				},
				{
					text:'Действие',
				},
				{
					text:'СоздатьВерсию',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Подменю1',
				},
				{
					text:'Подменю1',
				},
				{
					text:'Подменю2',
				},
				{
					text:'Действие7',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие14',
				},
				{
					text:'Действие6',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:24px;width:370px;height:151px;',
			height: 151,width: 370,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'Код',
				},
				{
					text:'КодВерсии',
				},
				{
					text:'Наименование',
				},
				{
					text:'Активная',
				},
				{
					text:'ВидСпецификации',
				},
				{
					text:'Состояние',
				},
				{
					text:'ДатаУтверждения',
				},
				{
					text:'Комментарий',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:386px;top:22px;width:370px;height:179px;',
			height: 179,width: 370,
			items:
			[
				{
					title:'ДеревоНоменклатуры',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:107px;width:370px;height:72px;',
			height: 72,width: 370,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'Код',
				},
				{
					text:'Наименование',
				},
				{
					text:'НаименованиеПолное',
				},
				{
					text:'Артикул',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:370px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:24px;width:370px;height:77px;',
			height: 77,width: 370,
			columns:
			[
				{
					text:'Картинка',
				},
			]
		},
					]
				},
				{
					title:'Номенклатура',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:370px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:25px;width:370px;height:154px;',
			height: 154,width: 370,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'Код',
				},
				{
					text:'Наименование',
				},
				{
					text:'НаименованиеПолное',
				},
				{
					text:'Артикул',
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
					title:'Настройка',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:190px;top:6px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВыводитьДляНоменклатуры',
			style: 'position:absolute;left:274px;top:120px;width:110px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КонечнаяПродукция',
			style: 'position:absolute;left:129px;top:303px;width:255px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КонечнаяХарактеристикаПродукции',
			style: 'position:absolute;left:129px;top:327px;width:255px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КоличествоУровней',
			style: 'position:absolute;left:274px;top:144px;width:110px;height:19px;',
		},
					]
				},
			]
		},
	]
});