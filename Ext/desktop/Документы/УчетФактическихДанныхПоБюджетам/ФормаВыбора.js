Ext.define('Документы.УчетФактическихДанныхПоБюджетам.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 421,width: 660,
	iconCls: 'bogus',
	title: 'Учет фактических данных по бюджетам',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:644px;height:380px;',
			height: 380,width: 644,
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
					text:'ДатаНачала',
				},
				{
					text:'ДатаКонца',
				},
				{
					text:'ЦФО',
				},
				{
					text:'СтатьиОборотов',
				},
				{
					text:'Комментарий',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:660px;height:25px;',
			items:
			[
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Подменю2',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
			]
		},
	]
});