Ext.define('Документы.СчетНаОплатуПокупателю.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 421,width: 640,
	iconCls: 'bogus',
	title: 'Счет на оплату покупателю',
	
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
					text:'СуммаДокумента',
				},
				{
					text:'ВалютаДокумента',
				},
				{
					text:'Контрагент',
				},
				{
					text:'ДоговорКонтрагента',
				},
				{
					text:'Организация',
				},
				{
					text:'Комментарий',
				},
				{
					text:'ДатаОплаты',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:640px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Подменю3',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Действие',
				},
			]
		},
	]
});