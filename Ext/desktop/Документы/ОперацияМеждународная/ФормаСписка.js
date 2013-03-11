Ext.define('Документы.ОперацияМеждународная.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 470,width: 780,
	iconCls: 'bogus',
	title: 'Журнал операций (международный учет)',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:57px;width:764px;height:159px;',
			height: 159,width: 764,
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
					text:'Организация',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:780px;height:25px;',
			items:
			[
				{
					text:'Разделитель1',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Подменю2',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:222px;width:764px;height:240px;',
			height: 240,width: 764,
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