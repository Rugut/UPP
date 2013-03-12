Ext.define('Справочники.ГруппыДоступаКонтрагентов.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:623px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
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
					text:'',
					width:'33',
				},
				{
					text:'Код',
					width:'42',
				},
				{
					text:'Наименование',
					width:'340',
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
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:623px;height:25px;',
			items:
			[
				'-',
				{
					text:'Доступ к справочнику в целом',
				},
				{
					text:'Доступ к текущему элементу',
				},
			]
		},
	]
});