Ext.define('Документы.РезервированиеПомещений.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 421,width: 781,
	iconCls: 'bogus',
	title: 'Резервирования помещений',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:765px;height:380px;',
			height: 380,width: 765,
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
					text:'Помещение',
				},
				{
					text:'Занятость',
				},
				{
					text:'ДатаНачала',
				},
				{
					text:'ДатаОкончания',
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
			style: 'position:absolute;left:0px;top:0px;width:781px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Подменю2',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'Действие',
				},
			]
		},
	]
});