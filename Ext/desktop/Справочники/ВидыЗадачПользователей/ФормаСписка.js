Ext.define('Справочники.ВидыЗадачПользователей.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:424px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Виды задач пользователей',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:408px;height:259px;',
			height: 259,width: 408,
			columns:
			[
				{
					text:'',
					width:'20',
				},
				{
					text:'И',
					width:'21',
				},
				{
					text:'Наименование',
					width:'120',
				},
				{
					text:'Код',
					width:'80',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:424px;height:25px;',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				'-',
				{
					text:'',
				},
					]
				},
			]
		},
	]
});