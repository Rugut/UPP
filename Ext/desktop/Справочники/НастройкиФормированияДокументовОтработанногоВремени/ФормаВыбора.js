Ext.define('Справочники.НастройкиФормированияДокументовОтработанногоВремени.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 300,width: 645,
	iconCls: 'bogus',
	title: 'Справочник Настройки формирования документов отработанного времени',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:159px;top:33px;width:478px;height:259px;',
			height: 259,width: 478,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'Код',
				},
				{
					text:'Наименование',
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
			style: 'position:absolute;left:0px;top:0px;width:645px;height:25px;',
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