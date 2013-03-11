Ext.define('Справочники.НастройкиФормированияДокументовПоОрдерам.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 300,width: 828,
	iconCls: 'bogus',
	title: 'Настройки формирования документов по ордерам',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:159px;top:33px;width:661px;height:259px;',
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
					text:'ГраницаОбработки',
				},
				{
					text:'ПериодДетализации',
				},
				{
					text:'ОтражатьВУправленческомУчете',
				},
				{
					text:'ОтражатьВБухгалтерскомУчете',
				},
				{
					text:'ОтражатьВНалоговомУчете',
				},
				{
					text:'ФормироватьДокументыАвтоматически',
				},
				{
					text:'Комментарий',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:145px;height:259px;',
			height: 259,width: 145,
			columns:
			[
				{
					text:'Наименование',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:828px;height:25px;',
			items:
			[
			]
		},
	]
});