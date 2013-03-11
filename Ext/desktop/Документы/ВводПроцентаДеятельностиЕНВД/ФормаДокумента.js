Ext.define('Документы.ВводПроцентаДеятельностиЕНВД.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 462,width: 650,
	iconCls: 'bogus',
	title: 'Ввод процента деятельности ЕНВД',
	
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
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:96px;top:58px;width:220px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:161px;width:634px;height:24px;',
			items:
			[
				{
					text:'Действие13',
				},
				{
					text:'Действие16',
				},
				{
					text:'Действие11',
				},
				{
					text:'Действие12',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Подбор',
				},
				{
					text:'Действие14',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие15',
				},
				{
					text:'Действие10',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие17',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:650px;height:25px;',
			items:
			[
				{
					text:'Разделитель1',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'ДействиеОткрытьСвойства1',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'СписокРаботников',
				},
				{
					text:'Разделитель6',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'ПодменюЗаполнить',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'Подменю1',
				},
				{
					text:'Подменю2',
				},
				{
					text:'РедактироватьКодНомер',
				},
				{
					text:'ДействиеОткрытьКатегории1',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:437px;width:650px;height:25px;',
			items:
			[
				{
					text:'Действие',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Печать',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:92px;top:410px;width:550px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Период',
			style: 'position:absolute;left:126px;top:101px;width:120px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:185px;width:634px;height:220px;',
			height: 220,width: 634,
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
					text:'МесяцРегистрации',
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
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:422px;top:58px;width:220px;height:19px;',
		},
	]
});