Ext.define('Документы.ПереносПроводокМеждународный.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 470,width: 776,
	iconCls: 'bogus',
	title: 'Перенос проводок (международный)',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:57px;width:760px;height:120px;',
			height: 120,width: 760,
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
					text:'Период',
				},
				{
					text:'Организация',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:776px;height:25px;',
			items:
			[
				{
					text:'ОткрытьСоответствияСчетов',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Разделитель6',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'Подменю2',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:183px;width:760px;height:279px;',
			height: 279,width: 760,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'СчетДт',
				},
				{
					text:'СубконтоДт1',
				},
				{
					text:'СубконтоДт2',
				},
				{
					text:'СубконтоДт3',
				},
				{
					text:'КоличествоДт',
				},
				{
					text:'ВалютаДт',
				},
				{
					text:'ВалютнаяСуммаДт',
				},
				{
					text:'СчетКт',
				},
				{
					text:'СубконтоКт1',
				},
				{
					text:'СубконтоКт2',
				},
				{
					text:'СубконтоКт3',
				},
				{
					text:'КоличествоКт',
				},
				{
					text:'ВалютаКт',
				},
				{
					text:'ВалютнаяСуммаКт',
				},
				{
					text:'Сумма',
				},
				{
					text:'Содержание',
				},
				{
					text:'ПервичныйДокумент',
				},
				{
					text:'НомерЖурнала',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаОрганизация',
			style: 'position:absolute;left:102px;top:33px;width:220px;height:19px;',
		},
	]
});