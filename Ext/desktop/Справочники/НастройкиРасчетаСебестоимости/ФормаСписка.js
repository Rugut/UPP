Ext.define('Справочники.НастройкиРасчетаСебестоимости.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 300,width: 726,
	iconCls: 'bogus',
	title: 'Настройки расчета себестоимости',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:174px;top:33px;width:544px;height:259px;',
			height: 259,width: 544,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'Наименование',
				},
				{
					text:'Организация',
				},
				{
					text:'НастройкаЗакрытияМесяца',
				},
				{
					text:'ФормироватьДокументыАвтоматически',
				},
				{
					text:'ОтражатьВУправленческомУчете',
				},
				{
					text:'ОтражатьВРегламентированномУчете',
				},
				{
					text:'Комментарий',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:726px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:160px;height:259px;',
			height: 259,width: 160,
			columns:
			[
				{
					text:'Наименование',
				},
			]
		},
	]
});