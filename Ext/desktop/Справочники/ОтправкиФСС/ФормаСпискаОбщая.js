Ext.define('Справочники.ОтправкиФСС.ФормаСпискаОбщая',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:400px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Справочник Отправки в ФСС',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:384px;height:259px;',
			height: 259,width: 384,
			columns:
			[
				{
					text:'',
					width:'24',
				},
				{
					text:'Дата отправки',
					width:'115',
				},
				{
					text:'Статус отправки',
					width:'95',
				},
				{
					text:'Организация',
					width:'126',
				},
				{
					text:'Отчет',
					width:'100',
				},
				{
					text:'Идентификатор',
					width:'99',
				},
				{
					text:'Дата получения результата',
					width:'148',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:400px;height:25px;',
			items:
			[
				{
					text:'Выбрать',
				},
				'-',
			]
		},
	]
});