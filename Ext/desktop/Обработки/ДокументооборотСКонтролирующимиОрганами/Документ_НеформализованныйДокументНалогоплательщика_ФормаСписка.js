Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.Документ_НеформализованныйДокументНалогоплательщика_ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:700px;height:445px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Неформализованные документы налогоплательщиков',
	
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
					width:'20',
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
					text:'Организация',
					width:'120',
				},
				{
					text:'Имя файла',
					width:'120',
				},
				{
					text:'Тип файла',
					width:'120',
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
					text:'Показать циклы обмена, связанные с документом',
				},
					]
				},
			]
		},
	]
});