Ext.define('Документы.ИнвентаризацияТоваровНаСкладе.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 421,width: 488,
	iconCls: 'bogus',
	title: 'Инвентаризации товаров на складах',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:472px;height:380px;',
			height: 380,width: 472,
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
					text:'СкладКомпании',
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
			style: 'position:absolute;left:0px;top:0px;width:488px;height:25px;',
			items:
			[
				{
					text:'Действие',
				},
				{
					text:'Разделитель',
				},
			]
		},
	]
});