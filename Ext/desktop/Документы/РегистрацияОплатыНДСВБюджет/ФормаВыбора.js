Ext.define('Документы.РегистрацияОплатыНДСВБюджет.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 300,width: 621,
	iconCls: 'bogus',
	title: 'Регистрации оплаты НДС в бюджет',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:605px;height:259px;',
			height: 259,width: 605,
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
			style: 'position:absolute;left:0px;top:0px;width:621px;height:25px;',
			items:
			[
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'ДействияФормыВыбрать',
				},
				{
					text:'Подменю2',
				},
				{
					text:'Разделитель',
				},
			]
		},
	]
});