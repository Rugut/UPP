Ext.define('Документы.АктуализацияБюджетов.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 421,width: 640,
	iconCls: 'bogus',
	title: 'Актуализации бюджетов',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:624px;height:380px;',
			height: 380,width: 624,
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
					text:'Сценарий',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:640px;height:25px;',
			items:
			[
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Подменю2',
				},
				{
					text:'Разделитель1',
				},
			]
		},
	]
});