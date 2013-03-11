Ext.define('Документы.ИзменениеЗаказаПокупателя.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 421,width: 520,
	iconCls: 'bogus',
	title: 'Изменение заказов покупателей',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:504px;height:380px;',
			height: 380,width: 504,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'Дата',
				},
				{
					text:'Номер',
				},
				{
					text:'СуммаДокумента',
				},
				{
					text:'ЗаказПокупателя',
				},
				{
					text:'Комментарий',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:520px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Подменю2',
				},
				{
					text:'Действие',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
			]
		},
	]
});