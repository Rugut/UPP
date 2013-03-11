Ext.define('Справочники.НастройкиДопроведенияДокументов.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 300,width: 675,
	iconCls: 'bogus',
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
					text:'Картинка',
				},
				{
					text:'Наименование',
				},
				{
					text:'ЗапускатьАвтоматически',
				},
				{
					text:'Комментарий',
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