Ext.define('Справочники.НастройкиРегламентногоФормированияДокументовПоНДС.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 300,width: 718,
	iconCls: 'bogus',
	title: 'Настройки регламентного формирования документов по НДС',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:159px;top:33px;width:551px;height:259px;',
			height: 259,width: 551,
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
			style: 'position:absolute;left:0px;top:0px;width:718px;height:25px;',
			items:
			[
			]
		},
	]
});