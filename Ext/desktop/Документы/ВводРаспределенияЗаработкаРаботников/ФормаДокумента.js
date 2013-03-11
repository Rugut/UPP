Ext.define('Документы.ВводРаспределенияЗаработкаРаботников.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 450,width: 608,
	iconCls: 'bogus',
	title: 'Ввод распределения заработка сотрудников',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:94px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:194px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:94px;top:398px;width:506px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:94px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:241px;width:592px;height:24px;',
			items:
			[
				{
					text:'Действие11',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие13',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие16',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие15',
				},
				{
					text:'Действие14',
				},
				{
					text:'Действие10',
				},
				{
					text:'Действие17',
				},
				{
					text:'Действие12',
				},
				{
					text:'ВсеРаботники',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:265px;width:592px;height:128px;',
			height: 128,width: 592,
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
					text:'СпособОтраженияВУпрУчете',
				},
				{
					text:'ДоляСпособаОтражения',
				},
				{
					text:'Подразделение',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:608px;height:25px;',
			items:
			[
				{
					text:'ДействиеОткрытьКатегории',
				},
				{
					text:'Подменю1',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'Подменю',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'ДействиеОткрытьСвойства',
				},
				{
					text:'РедактироватьКодНомер',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:425px;width:608px;height:25px;',
			items:
			[
				{
					text:'ОсновныеДействияФормыОК',
				},
				{
					text:'ОсновныеДействияФормыСохранить',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Период',
			style: 'position:absolute;left:480px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:119px;width:592px;height:97px;',
			height: 97,width: 592,
			columns:
			[
				{
					text:'ТабельныйНомерСтрока',
				},
				{
					text:'Сотрудник',
				},
				{
					text:'Физлицо',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:95px;width:592px;height:24px;',
			items:
			[
				{
					text:'Разделитель5',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Подбор',
				},
				{
					text:'Действие15',
				},
				{
					text:'Действие12',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие11',
				},
				{
					text:'Действие16',
				},
				{
					text:'Действие10',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'СписокРаботников',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'ПодменюЗаполнить',
				},
				{
					text:'Действие14',
				},
				{
					text:'Действие13',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие17',
				},
			]
		},
	]
});