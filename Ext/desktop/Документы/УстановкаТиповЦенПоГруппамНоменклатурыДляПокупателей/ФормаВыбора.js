Ext.define('Документы.УстановкаТиповЦенПоГруппамНоменклатурыДляПокупателей.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 421,width: 564,
	iconCls: 'bogus',
	title: 'Установка типов цен по группам номенклатуры для покупателей',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:548px;height:380px;',
			height: 380,width: 548,
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
					text:'ВидОперации',
				},
				{
					text:'Контрагент',
				},
				{
					text:'Комментарий',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:564px;height:25px;',
			items:
			[
				{
					text:'Подменю2',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'Разделитель',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель1',
				},
			]
		},
	]
});