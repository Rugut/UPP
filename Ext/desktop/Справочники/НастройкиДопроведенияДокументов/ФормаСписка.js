Ext.define('Справочники.НастройкиДопроведенияДокументов.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:675px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Настройки допроведения документов',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:659px;height:259px;',
			height: 259,width: 659,
			columns:
			[
				{
					text:'',
					width:'33',
				},
				{
					text:'Наименование',
					width:'284',
				},
				{
					text:'Автоматич.',
					width:'65',
				},
				{
					text:'Комментарий',
					width:'237',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:675px;height:25px;',
			items:
			[
			]
		},
	]
});