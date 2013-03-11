Ext.define('Справочники.НастройкиФормированияДокументовОтработанногоВремени.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 385,width: 754,
	iconCls: 'bogus',
	title: 'Настройки формирования документов отработанного времени',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:258px;top:33px;width:488px;height:344px;',
			height: 344,width: 488,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'Наименование',
				},
				{
					text:'ГраницаФормирования',
				},
				{
					text:'ФормироватьДокументыАвтоматически',
				},
				{
					text:'РегламентноеЗадание',
				},
				{
					text:'Комментарий',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:244px;height:344px;',
			height: 344,width: 244,
			columns:
			[
				{
					text:'Наименование',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:754px;height:25px;',
			items:
			[
			]
		},
	]
});