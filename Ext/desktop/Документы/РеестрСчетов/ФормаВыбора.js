Ext.define('Документы.РеестрСчетов.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 300,width: 600,
	iconCls: 'bogus',
	title: 'Реестры счетов',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:584px;height:259px;',
			height: 259,width: 584,
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
					text:'НомерАккредитива',
				},
				{
					text:'ДатаАккредитива',
				},
				{
					text:'СчетОрганизации',
				},
				{
					text:'ЮрФизЛицоКонтрагента',
				},
				{
					text:'СуммаАккредитива',
				},
				{
					text:'ДатаЗакрытия',
				},
				{
					text:'Комментарий',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:600px;height:25px;',
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