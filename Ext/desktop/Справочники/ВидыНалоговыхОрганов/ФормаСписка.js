Ext.define('Справочники.ВидыНалоговыхОрганов.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 300,width: 554,
	iconCls: 'bogus',
	title: 'Справочник Виды налоговых органов',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:538px;height:259px;',
			height: 259,width: 538,
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
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:554px;height:25px;',
			items:
			[
				{
					text:'Действие10',
				},
				{
					text:'Разделитель4',
				},
			]
		},
	]
});