Ext.define('Документы.УчетОсновногоЗаработкаРаботниковОрганизацииВРегламентированномУчете.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 401,width: 643,
	iconCls: 'bogus',
	title: 'Учет основного заработка сотрудников организации в регламентированном учете',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:96px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:197px;top:33px;width:119px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:643px;height:25px;',
			items:
			[
				{
					text:'ОткрытьСвойства',
				},
				{
					text:'ОткрытьКатегории',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Разделитель8',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ПодменюЗаполнить',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'Разделитель6',
				},
				{
					text:'Разделитель',
				},
				{
					text:'СписокРаботников',
				},
				{
					text:'Подменю2',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Подменю1',
				},
				{
					text:'РедактироватьКодНомер',
				},
				{
					text:'Очистить',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:96px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:349px;width:539px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:376px;width:643px;height:25px;',
			items:
			[
				{
					text:'Записать',
				},
				{
					text:'Закрыть',
				},
				{
					text:'РазделительОК',
				},
				{
					text:'РазделительЗакрыть',
				},
				{
					text:'ОК',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:121px;width:627px;height:220px;',
			height: 220,width: 627,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'ТабельныйНомерСтрока',
				},
				{
					text:'Сотрудник',
				},
				{
					text:'ДатаИзменения',
				},
				{
					text:'СпособОтраженияВБухучете',
				},
				{
					text:'ПодпадаетПодЕНВД',
				},
				{
					text:'СпособОтраженияВБухучетеБольничногоЗаСчетРаботодателя',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:97px;width:627px;height:24px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Подбор',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие10',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие12',
				},
				{
					text:'Действие15',
				},
				{
					text:'Действие17',
				},
				{
					text:'Действие14',
				},
				{
					text:'Действие16',
				},
				{
					text:'Действие11',
				},
				{
					text:'Действие13',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтветственныйЗаДокумент',
			style: 'position:absolute;left:415px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтражаемыйДокумент',
			style: 'position:absolute;left:415px;top:33px;width:220px;height:19px;',
		},
	]
});