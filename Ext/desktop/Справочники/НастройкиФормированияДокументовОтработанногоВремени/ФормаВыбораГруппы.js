Ext.define('Справочники.НастройкиФормированияДокументовОтработанногоВремени.ФормаВыбораГруппы',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:400px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Группы настроек формирования документов отработанного времени',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:384px;height:259px;',
			height: 259,width: 384,
			columns:
			[
				{
					text:'Наименование',
					width:'120',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:400px;height:25px;',
			items:
			[
				{
					text:'Действие6',
				},
				{
					text:'Действие10',
				},
				{
					text:'Действия формы выбрать',
				},
				{
					text:'',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие9',
				},
				'-',
			]
		},
	]
});