Ext.define('Документы.ВводРаспределенияОсновногоЗаработкаРаботниковОрганизации.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 475,width: 608,
	iconCls: 'bogus',
	title: 'Ввод распределения основного заработка сотрудников',
	
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
			name: 'Организация',
			style: 'position:absolute;left:94px;top:58px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:94px;top:423px;width:506px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:94px;top:83px;width:220px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:245px;width:592px;height:24px;',
			items:
			[
				{
					text:'Действие15',
				},
				{
					text:'Действие12',
				},
				{
					text:'ВсеРаботники',
				},
				{
					text:'Действие16',
				},
				{
					text:'Действие13',
				},
				{
					text:'Действие9',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие14',
				},
				{
					text:'Действие11',
				},
				{
					text:'Действие17',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие10',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:269px;width:592px;height:149px;',
			height: 149,width: 592,
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
					text:'СпособОтраженияВБухучете',
				},
				{
					text:'ДоляСпособаОтражения',
				},
				{
					text:'ПодпадаетПодЕНВД',
				},
				{
					text:'СчетДт',
				},
				{
					text:'Субконто1',
				},
				{
					text:'Субконто2',
				},
				{
					text:'Субконто3',
				},
				{
					text:'СпособРаспределенияЗатрат',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:608px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'РедактироватьКодНомер',
				},
				{
					text:'Подменю',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'ДействиеОткрытьКатегории',
				},
				{
					text:'Подменю1',
				},
				{
					text:'ДействиеОткрытьСвойства',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:450px;width:608px;height:25px;',
			items:
			[
				{
					text:'ОсновныеДействияФормыОК',
				},
				{
					text:'ОсновныеДействияФормыСохранить',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
				{
					text:'Разделитель1',
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
			style: 'position:absolute;left:8px;top:145px;width:592px;height:78px;',
			height: 78,width: 592,
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
			style: 'position:absolute;left:8px;top:121px;width:592px;height:24px;',
			items:
			[
				{
					text:'Разделитель4',
				},
				{
					text:'Действие10',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие17',
				},
				{
					text:'Действие13',
				},
				{
					text:'Действие15',
				},
				{
					text:'Действие12',
				},
				{
					text:'СписокРаботников',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ПодменюЗаполнить',
				},
				{
					text:'Подбор',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие14',
				},
				{
					text:'Действие11',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'Действие16',
				},
			]
		},
	]
});