Ext.define('Справочники.НастройкиДопроведенияДокументов.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 300,width: 677,
	iconCls: 'bogus',
	title: 'Настройки допроведения документов',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:661px;height:259px;',
			height: 259,width: 661,
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
			style: 'position:absolute;left:0px;top:0px;width:677px;height:25px;',
			items:
			[
				{
					text:'ДействияФормыВыбрать',
				},
				{
					text:'Разделитель',
				},
			]
		},
	]
});