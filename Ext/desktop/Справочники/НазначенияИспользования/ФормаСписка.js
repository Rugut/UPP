Ext.define('Справочники.НазначенияИспользования.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 300,width: 500,
	iconCls: 'bogus',
	title: 'Назначения использования',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:484px;height:259px;',
			height: 259,width: 484,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'Код',
				},
				{
					text:'Владелец',
				},
				{
					text:'Наименование',
				},
				{
					text:'СпособПогашенияСтоимости',
				},
				{
					text:'СрокПолезногоИспользования',
				},
				{
					text:'Количество',
				},
				{
					text:'ЕдиницаИзмерения',
				},
				{
					text:'СпособОтраженияРасходов',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:500px;height:25px;',
			items:
			[
			]
		},
	]
});