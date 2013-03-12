Ext.define('Справочники.НастройкиВыполненияОбмена.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:715px;height:425px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Справочник Настройки выполнения обмена',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:699px;height:384px;',
			height: 384,width: 699,
			columns:
			[
				{
					text:'',
					width:'20',
				},
				{
					text:'Код',
					width:'70',
				},
				{
					text:'Наименование',
					width:'352',
				},
				{
					text:'Комментарий',
					width:'169',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:715px;height:25px;',
			items:
			[
				{
					text:'Выполнить обмен',
				},
				'-',
				'-',
				{
					text:'Выполнить обмен',
				},
				{
					text:'Настройка обновления конфигурации',
				},
			]
		},
	]
});