Ext.define('Документы.ПланПроизводстваПоСменам.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 420,width: 670,
	iconCls: 'bogus',
	title: 'План производства по сменам',
	
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
			style: 'position:absolute;left:94px;top:368px;width:568px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:670px;height:25px;',
			items:
			[
				{
					text:'Подменю2',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'ДействиеОткрытьКатегории',
				},
				{
					text:'ДействиеОткрытьСвойства',
				},
				{
					text:'ВыполнитьПланирование',
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
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:395px;width:670px;height:25px;',
			items:
			[
				{
					text:'Печать',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Закрыть',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Записать',
				},
				{
					text:'Разделитель2',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:58px;width:654px;height:303px;',
			height: 303,width: 654,
			items:
			[
				{
					title:'ПланыПроизводства',
				},
				{
					title:'Заказы',
				},
				{
					title:'Товары',
				},
				{
					title:'ИсходныеДанныеДляПланирования',
				},
				{
					title:'ЗанятостьРабочихЦентров',
				},
				{
					title:'ПотребностиПроизводства',
				},
				{
					title:'Дополнительно',
				},
			]
		},
	]
});