Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.Документ_НеформализованныйДокументНалоговогоОргана_ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:700px;height:445px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Неформализованные документы налоговых органов',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:684px;height:404px;',
			height: 404,width: 684,
			columns:
			[
				{
					text:'',
					width:'21',
				},
				{
					text:'Номер',
					width:'132',
				},
				{
					text:'Дата',
					width:'124',
				},
				{
					text:'Налоговый орган',
					width:'128',
				},
				{
					text:'Организация',
					width:'128',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:700px;height:25px;',
			items:
			[
				{
					text:'Выбрать',
				},
				'-',
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				'-',
				{
					text:'Показать цикл обмена, связанный с документом',
				},
					]
				},
			]
		},
	]
});