Ext.define('Справочники.Номенклатура.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 345,width: 793,
	iconCls: 'bogus',
	title: 'Номенклатура',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:175px;top:57px;width:611px;height:130px;',
			height: 130,width: 611,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'Код',
				},
				{
					text:'Артикул',
				},
				{
					text:'Наименование',
				},
				{
					text:'НаименованиеПолное',
				},
				{
					text:'ВидНоменклатуры',
				},
				{
					text:'БазоваяЕдиницаИзмерения',
				},
				{
					text:'ЕдиницаХраненияОстатков',
				},
				{
					text:'НомерГТД',
				},
				{
					text:'СтранаПроисхождения',
				},
				{
					text:'СтавкаНДС',
				},
				{
					text:'НоменклатурнаяГруппа',
				},
				{
					text:'ЦеноваяГруппа',
				},
				{
					text:'Комментарий',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:57px;width:160px;height:130px;',
			height: 130,width: 160,
			columns:
			[
				{
					text:'Наименование',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:793px;height:25px;',
			items:
			[
				{
					text:'СинхронизацияСЮнискан',
				},
				{
					text:'ОткрытьПрайсЛист',
				},
				{
					text:'Права',
				},
				{
					text:'ПраваДоступаПользователейКоВсемуСправочнику',
				},
				{
					text:'Разделитель6',
				},
				{
					text:'ВаловаяПрибыль',
				},
				{
					text:'Изображение',
				},
				{
					text:'ШтрихкодыТранспортныхУпаковок',
				},
				{
					text:'ОбменСЮнискан',
				},
				{
					text:'ВедомостьНаСкладах',
				},
				{
					text:'ДействиеКатегории',
				},
				{
					text:'Подменю',
				},
				{
					text:'ПоискПоШтрихКоду',
				},
				{
					text:'Разделитель6',
				},
				{
					text:'Ценники',
				},
				{
					text:'Разделитель13',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Этикетка',
				},
				{
					text:'Разделитель7',
				},
				{
					text:'Печать',
				},
				{
					text:'РезервыНаСкладах',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'ПраваДоступаПользователейКТекущемуЭлементу',
				},
				{
					text:'Отчеты',
				},
				{
					text:'ОстаткиТоваровНаСкладах',
				},
				{
					text:'Комплектующие',
				},
				{
					text:'Файлы',
				},
				{
					text:'РазделительПрава',
				},
				{
					text:'Продажи',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'ДействиеСвойства',
				},
				{
					text:'РегистрацияВЮнискан',
				},
				{
					text:'АнализДоступностиНаСкладах',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:194px;width:160px;height:144px;',
			height: 144,width: 160,
			items:
			[
				{
					title:'Страница1',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:175px;top:194px;width:611px;height:144px;',
			height: 144,width: 611,
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
			name: 'ЗначениеОтбораСпискаНоменклатуры',
			style: 'position:absolute;left:234px;top:33px;width:552px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:357px;top:95px;width:157px;height:24px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'ПереместитьВверх',
				},
				{
					text:'ОтменитьВсе',
				},
				{
					text:'Обновить',
				},
				{
					text:'Действие',
				},
				{
					text:'ПереместитьВниз',
				},
			]
		},
	]
});