Ext.define('Документы.УстановкаСоответствияСчетовБУиМСФО.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 300,width: 495,
	iconCls: 'bogus',
	title: 'Установить соответствие счетов БУ и МСФО',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:479px;height:259px;',
			height: 259,width: 479,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'Номер',
				},
				{
					text:'Дата',
				},
				{
					text:'Комментарий',
				},
				{
					text:'Ответственный',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:495px;height:25px;',
			items:
			[
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