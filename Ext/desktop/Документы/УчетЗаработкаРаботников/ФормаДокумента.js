Ext.define('Документы.УчетЗаработкаРаботников.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 428,width: 477,
	iconCls: 'bogus',
	title: 'Учет заработка сотрудников',
	
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
			style: 'position:absolute;left:196px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:477px;height:25px;',
			items:
			[
				{
					text:'ДействиеОткрытьСвойства1',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Подменю1',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Подменю2',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'СписокРаботников',
				},
				{
					text:'РедактироватьКодНомер',
				},
				{
					text:'Разделитель7',
				},
				{
					text:'ДействиеОткрытьКатегории1',
				},
				{
					text:'ПодменюЗаполнить',
				},
				{
					text:'Очистить',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:376px;width:373px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:403px;width:477px;height:25px;',
			items:
			[
				{
					text:'Записать',
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
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:148px;width:461px;height:220px;',
			height: 220,width: 461,
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
					text:'СпособОтраженияВУпрУчете',
				},
				{
					text:'УчетНачисленийПоОрганизации',
				},
				{
					text:'Подразделение',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:124px;width:461px;height:24px;',
			items:
			[
				{
					text:'Действие14',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие13',
				},
				{
					text:'Действие11',
				},
				{
					text:'Действие15',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие17',
				},
				{
					text:'Подбор',
				},
				{
					text:'Действие10',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие12',
				},
				{
					text:'Действие16',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтветственныйЗаДокумент',
			style: 'position:absolute;left:96px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДокументОснование',
			style: 'position:absolute;left:96px;top:81px;width:220px;height:19px;',
		},
	]
});