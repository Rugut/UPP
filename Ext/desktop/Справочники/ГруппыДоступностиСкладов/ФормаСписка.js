Ext.define('Справочники.ГруппыДоступностиСкладов.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 321,width: 396,
	iconCls: 'bogus',
	title: 'Справочник Группы доступности складов',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:380px;height:280px;',
			height: 280,width: 380,
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
			style: 'position:absolute;left:0px;top:0px;width:396px;height:25px;',
			items:
			[
			]
		},
	]
});