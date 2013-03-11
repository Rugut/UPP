Ext.define('Справочники.НастройкиЗакрытияМесяца.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 300,width: 868,
	iconCls: 'bogus',
	title: 'Справочник Настройки закрытия месяца',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:159px;top:33px;width:701px;height:259px;',
			height: 259,width: 701,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'Наименование',
				},
				{
					text:'ДатаНачалаДействияНастройки',
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
			style: 'position:absolute;left:0px;top:0px;width:868px;height:25px;',
			items:
			[
			]
		},
	]
});