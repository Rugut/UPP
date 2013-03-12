Ext.define('Справочники.НастройкиРегламентногоФормированияДокументовПоНДС.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:718px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
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
					text:'',
					width:'39',
				},
				{
					text:'Наименование',
					width:'120',
				},
				{
					text:'Организация',
					width:'120',
				},
				{
					text:'Автоматич.',
					width:'75',
				},
				{
					text:'Комментарий',
					width:'120',
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
					width:'120',
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