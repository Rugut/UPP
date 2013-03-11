Ext.define('Документы.ПравоНаДополнительныеДниОтпуска.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 421,width: 561,
	iconCls: 'bogus',
	title: 'Права на дополнительные дни отпуска',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:545px;height:380px;',
			height: 380,width: 545,
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
					text:'КраткийСоставДокумента',
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
			style: 'position:absolute;left:0px;top:0px;width:561px;height:25px;',
			items:
			[
				{
					text:'Разделитель1',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Подменю2',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
			]
		},
	]
});