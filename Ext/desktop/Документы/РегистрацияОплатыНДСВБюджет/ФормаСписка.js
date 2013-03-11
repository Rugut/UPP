Ext.define('Документы.РегистрацияОплатыНДСВБюджет.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 337,width: 627,
	iconCls: 'bogus',
	title: 'Регистрации оплаты НДС в бюджет',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:611px;height:296px;',
			height: 296,width: 611,
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
			style: 'position:absolute;left:0px;top:0px;width:627px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'Подменю2',
				},
			]
		},
	]
});