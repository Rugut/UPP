Ext.define('Документы.РегламентныеОперацииНалоговогоУчетаПоНалогуНаПрибыль.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 421,width: 549,
	iconCls: 'bogus',
	title: 'Регламентные операции налогового учета (по налогу на прибыль)',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:533px;height:380px;',
			height: 380,width: 533,
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
					text:'ПериодРегистрации',
				},
				{
					text:'Организация',
				},
				{
					text:'Комментарий',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:549px;height:25px;',
			items:
			[
				{
					text:'ПроводкиДтКтНУ',
				},
				{
					text:'Подменю2',
				},
				{
					text:'Разделитель7',
				},
				{
					text:'Действие',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель',
				},
			]
		},
	]
});