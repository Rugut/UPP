Ext.define('Документы.АккредитивПереданный.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 260,width: 756,
	iconCls: 'bogus',
	title: 'Аккредитивы переданные',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:32px;width:740px;height:220px;',
			height: 220,width: 740,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'ОтраженоВОперУчете',
				},
				{
					text:'ОтражатьВБухгалтерскомУчете',
				},
				{
					text:'ОтражатьВНалоговомУчете',
				},
				{
					text:'Оплачено',
				},
				{
					text:'Дата',
				},
				{
					text:'ДатаОплаты',
				},
				{
					text:'Номер',
				},
				{
					text:'ВидОперации',
				},
				{
					text:'СуммаДокумента',
				},
				{
					text:'СчетОрганизации',
				},
				{
					text:'Контрагент',
				},
				{
					text:'Организация',
				},
				{
					text:'Подразделение',
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
			style: 'position:absolute;left:0px;top:0px;width:756px;height:25px;',
			items:
			[
				{
					text:'Разделитель12',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'Подменю3',
				},
				{
					text:'ПроводкиДтКтНУ',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель7',
				},
				{
					text:'ПроводкиДтКт',
				},
				{
					text:'ДействиеПечать',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
			]
		},
	]
});