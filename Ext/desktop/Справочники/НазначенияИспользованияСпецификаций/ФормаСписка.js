Ext.define('Справочники.НазначенияИспользованияСпецификаций.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 300,width: 517,
	iconCls: 'bogus',
	title: 'Назначения использования спецификаций',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:501px;height:259px;',
			height: 259,width: 501,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'Наименование',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:517px;height:25px;',
			items:
			[
				{
					text:'ПраваДоступаПользователейКТекущемуЭлементу',
				},
				{
					text:'РазделительПрава',
				},
				{
					text:'Права',
				},
				{
					text:'ПраваДоступаПользователейКоВсемуСправочнику',
				},
			]
		},
	]
});