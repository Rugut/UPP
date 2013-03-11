Ext.define('Документы.РеестрСчетов.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 260,width: 616,
	iconCls: 'bogus',
	title: 'Реестры счетов',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:32px;width:600px;height:220px;',
			height: 220,width: 600,
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
					text:'СчетОрганизации',
				},
				{
					text:'СуммаАккредитива',
				},
				{
					text:'ЮрФизЛицоКонтрагента',
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
			style: 'position:absolute;left:0px;top:0px;width:616px;height:25px;',
			items:
			[
				{
					text:'ДействиеПечать',
				},
				{
					text:'Разделитель10',
				},
			]
		},
	]
});