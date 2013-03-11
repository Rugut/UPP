Ext.define('Обработки.КадровоеПланирование.Форма',
	{
	extend: 'Ext.window.Window',
	height: 580,width: 1000,
	iconCls: 'bogus',
	title: 'Кадровое планирование',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:944px;height:25px;',
			items:
			[
				{
					text:'Подменю',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ОткрытьШтатноеРасписание',
				},
				{
					text:'ПодменюОтчеты',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ОткрытьШтатноеРасписание',
				},
				{
					text:'ОтчетСостояниеКадровогоПлана',
				},
				{
					text:'Действие',
				},
				{
					text:'Обновить',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ОтчетСостояниеКадровогоПлана',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'ОтчетКоэффициентТекучестиКадров',
				},
				{
					text:'ПодменюОтчеты',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'ОткрытьНаборПерсонала',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ОтчетКоэффициентТекучестиКадров',
				},
				{
					text:'ОтчетИсполнениеКадровогоПлана',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'ОткрытьНаборПерсонала',
				},
				{
					text:'ОтчетИсполнениеКадровогоПлана',
				},
				{
					text:'ОтчетОценкаЭффективностиРаботыОУП',
				},
				{
					text:'Разделитель1',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:764px;height:539px;',
			height: 539,width: 764,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:255px;width:200px;height:284px;',
			height: 284,width: 200,
			items:
			[
				{
					title:'ПодразделенияОрганизаций',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:32px;width:200px;height:252px;',
			height: 252,width: 200,
			columns:
			[
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:0px;width:200px;height:31px;',
			height: 31,width: 200,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:79px;top:6px;width:115px;height:19px;',
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
			xtype: 'grid',
			style: 'position:absolute;left:206px;top:255px;width:558px;height:147px;',
			height: 147,width: 558,
			columns:
			[
				{
					text:'Период',
				},
				{
					text:'Подразделение',
				},
				{
					text:'Должность',
				},
				{
					text:'КоличествоСтавок',
				},
				{
					text:'ЗанятоСтавок',
				},
				{
					text:'Вакантно',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:224px;width:764px;height:24px;',
			items:
			[
				{
					text:'ОтобразитьТекущееСостояниеКП',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ОтобразитьИсториюВсехИзмененийКП',
				},
				{
					text:'НоваяВакансия',
				},
				{
					text:'ИзменитьКадровыйПлан',
				},
				{
					text:'ПодменюВид',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:24px;width:764px;height:169px;',
			height: 169,width: 764,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:30px;width:764px;height:137px;',
			height: 137,width: 764,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'Наименование',
				},
				{
					text:'Подразделение',
				},
				{
					text:'Должность',
				},
				{
					text:'Заявитель',
				},
				{
					text:'ОтветственныйЗаВакансию',
				},
				{
					text:'ПлановаяДатаЗакрытия',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:764px;height:24px;',
			items:
			[
				{
					text:'Действие6',
				},
				{
					text:'Закрыть',
				},
				{
					text:'Должность',
				},
				{
					text:'Действие5',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Наименование',
				},
				{
					text:'ПоказыватьОткрытые',
				},
				{
					text:'Подразделение',
				},
				{
					text:'ПодменюВакансии',
				},
				{
					text:'Действие4',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Удалить',
				},
				{
					text:'Действие2',
				},
				{
					text:'Подменю',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ПоказыватьВсе',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие7',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие2',
				},
				{
					text:'ПодменюУпорядочить',
				},
				{
					text:'ПлановаяДатаЗакрытия',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие10',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие9',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие1',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:558px;top:224px;width:206px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:206px;top:437px;width:558px;height:102px;',
			height: 102,width: 558,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'Номер',
				},
				{
					text:'ДатаИзменений',
				},
				{
					text:'Ответственный',
				},
				{
					text:'Комментарий',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:571px;top:408px;width:193px;height:24px;',
			items:
			[
				{
					text:'НовыйДокумент',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:854px;top:0px;width:146px;height:25px;',
			items:
			[
				{
					text:'ПереключениеСправкиФормы',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:778px;top:33px;width:214px;height:539px;',
			height: 539,width: 214,
			items:
			[
				{
					title:'Страница1',
				},
			]
		},
	]
});