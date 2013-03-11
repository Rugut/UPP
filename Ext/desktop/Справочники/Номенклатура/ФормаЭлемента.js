Ext.define('Справочники.Номенклатура.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 475,width: 616,
	iconCls: 'bogus',
	title: 'Элемент Номенклатура',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:553px;top:56px;width:55px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:226px;top:56px;width:297px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НаименованиеПолное',
			style: 'position:absolute;left:139px;top:196px;width:469px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Артикул',
			style: 'position:absolute;left:226px;top:79px;width:115px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:90px;top:424px;width:518px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:616px;height:25px;',
			items:
			[
				{
					text:'Действие2',
				},
				{
					text:'Изображение',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие1',
				},
				{
					text:'ОткрытьПрайсЛист',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель6',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие3',
				},
				{
					text:'Подменю',
				},
				{
					text:'Подменю1',
				},
				{
					text:'Подменю',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Файлы',
				},
				{
					text:'ШтрихкодыТранспортныхУпаковок',
				},
				{
					text:'Настройка',
				},
				{
					text:'Файлы',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Комплектующие',
				},
				{
					text:'Разделитель7',
				},
				{
					text:'Этикетка',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Ценник',
				},
				{
					text:'Действие3',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Печать',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Родитель',
			style: 'position:absolute;left:226px;top:33px;width:382px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'БазоваяЕдиницаИзмерения',
			style: 'position:absolute;left:226px;top:102px;width:73px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:450px;width:616px;height:25px;',
			items:
			[
				{
					text:'Назад',
				},
				{
					text:'РазделительЗакрыть',
				},
				{
					text:'Записать',
				},
				{
					text:'Закрыть1',
				},
				{
					text:'ОсновныеДействияФормыДалее',
				},
				{
					text:'РазделительОК',
				},
				{
					text:'ОК',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:218px;width:600px;height:201px;',
			height: 201,width: 600,
			items:
			[
				{
					title:'ПоУмолчанию',
				},
				{
					title:'Дополнительные',
				},
				{
					title:'НастройкаУчета',
				},
				{
					title:'Единицы',
				},
				{
					title:'Характеристики',
				},
				{
					title:'Серии',
				},
				{
					title:'Проекты',
				},
				{
					title:'Свойства',
				},
				{
					title:'Категории',
				},
				{
					title:'Комплектующие',
				},
				{
					title:'Штрихкоды',
				},
				{
					title:'КодыВесовогоТовара',
				},
				{
					title:'МестаХранения',
				},
				{
					title:'Спецификации',
				},
				{
					title:'ПлановаяСебестоимость',
				},
				{
					title:'НоменклатураПоставщика',
				},
				{
					title:'ЦеныНоменклатуры',
				},
				{
					title:'ДополнительноеОписаниеНоменклатуры',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидНоменклатуры',
			style: 'position:absolute;left:451px;top:79px;width:157px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:131px;height:131px;',
			height: 131,width: 131,
			items:
			[
				{
					title:'Страница1',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЕдиницаХраненияОстатков',
			style: 'position:absolute;left:226px;top:125px;width:73px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЕдиницаДляОтчетов',
			style: 'position:absolute;left:226px;top:148px;width:73px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЕдиницаИзмеренияМест',
			style: 'position:absolute;left:226px;top:172px;width:73px;height:19px;',
		},
	]
});