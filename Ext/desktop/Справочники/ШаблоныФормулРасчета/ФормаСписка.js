Ext.define('Справочники.ШаблоныФормулРасчета.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:500px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Шаблоны формул расчета',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:159px;top:33px;width:333px;height:259px;',
			height: 259,width: 333,
			columns:
			[
				{
					text:'',
					width:'33',
				},
				{
					text:'Код',
					width:'72',
				},
				{
					text:'Наименование',
					width:'145',
				},
				{
					text:'Формула',
					width:'145',
				},
				{
					text:'Комментарий',
					width:'100',
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
			style: 'position:absolute;left:0px;top:0px;width:500px;height:25px;',
			items:
			[
			]
		},
	]
});