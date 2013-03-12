Ext.define('Справочники.ЦеновыеГруппы.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:592px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Справочник Ценовые группы',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:159px;top:33px;width:425px;height:259px;',
			height: 259,width: 425,
			columns:
			[
				{
					text:'',
					width:'33',
				},
				{
					text:'Код',
					width:'35',
				},
				{
					text:'Наименование',
					width:'175',
				},
				{
					text:'Порядок',
					width:'81',
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
			style: 'position:absolute;left:0px;top:0px;width:592px;height:25px;',
			items:
			[
				'-',
				{
					text:'Действия формы выбрать',
				},
			]
		},
	]
});