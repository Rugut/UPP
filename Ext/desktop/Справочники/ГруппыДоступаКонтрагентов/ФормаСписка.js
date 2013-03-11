Ext.define('Справочники.ГруппыДоступаКонтрагентов.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 300,width: 623,
	iconCls: 'bogus',
	title: 'Группы доступа контрагентов',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:161px;top:33px;width:454px;height:259px;',
			height: 259,width: 454,
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
			style: 'position:absolute;left:0px;top:0px;width:623px;height:25px;',
			items:
			[
				{
					text:'Подменю',
				},
				{
					text:'Права',
				},
				{
					text:'РазделительПрава',
				},
				{
					text:'ПраваДоступаПользователейКоВсемуСправочнику',
				},
				{
					text:'ПраваДоступаПользователейКТекущемуЭлементу',
				},
			]
		},
	]
});