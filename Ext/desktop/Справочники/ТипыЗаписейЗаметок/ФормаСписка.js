Ext.define('Справочники.ТипыЗаписейЗаметок.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 300,width: 534,
	iconCls: 'bogus',
	title: 'Справочник Типы записей заметок',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:518px;height:259px;',
			height: 259,width: 518,
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
			style: 'position:absolute;left:0px;top:0px;width:534px;height:25px;',
			items:
			[
				{
					text:'РазделительПрава',
				},
				{
					text:'Права',
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